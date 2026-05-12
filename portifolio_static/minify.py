from __future__ import annotations

import argparse
import os
from pathlib import Path

try:
	import htmlmin2 as htmlmin  # type: ignore
except ModuleNotFoundError:  # pragma: no cover
	import htmlmin  # type: ignore


IGNORE_DIR_NAMES = {
	"dist",
	"node_modules",
	"__pycache__",
	".git",
	".venv",
}

IGNORE_FILE_NAMES = {
	"minify.py",
	"Dockerfile",
	"dockerfile",
	"compose.yaml",
	"compose.yml",
	"README.md",
	"LICENSE",
	".gitignore",
}

IGNORE_FILE_SUFFIXES = {
	".py",
	".md",
	".yml",
	".yaml",
}


def _minify_html(text: str) -> str:
	return htmlmin.minify(
		text,
		remove_comments=True,
		remove_empty_space=True,
		reduce_boolean_attributes=True,
		keep_pre=True,
	)


def minify_tree(src_dir: Path, dst_dir: Path) -> tuple[int, int]:
	if not src_dir.exists() or not src_dir.is_dir():
		raise SystemExit(f"Source directory not found: {src_dir}")

	dst_dir.mkdir(parents=True, exist_ok=True)

	processed = 0
	copied = 0

	for path in src_dir.rglob("*"):
		# Avoid copying the output directory into itself when dst is inside src.
		if path == dst_dir or dst_dir in path.parents:
			continue

		rel = path.relative_to(src_dir)

		# Skip ignored folders anywhere in the tree.
		if any(part in IGNORE_DIR_NAMES for part in rel.parts):
			continue

		# Skip known non-site files.
		if path.is_file():
			if path.name in IGNORE_FILE_NAMES:
				continue
			if path.suffix.lower() in IGNORE_FILE_SUFFIXES:
				continue
		out_path = dst_dir / rel

		if path.is_dir():
			out_path.mkdir(parents=True, exist_ok=True)
			continue

		out_path.parent.mkdir(parents=True, exist_ok=True)

		if path.suffix.lower() == ".html":
			original = path.read_text(encoding="utf-8")
			out_path.write_text(_minify_html(original), encoding="utf-8")
			processed += 1
		else:
			out_path.write_bytes(path.read_bytes())
			copied += 1

	return processed, copied


def main() -> None:
	parser = argparse.ArgumentParser(
		description="Minify HTML files and copy other assets (static site)."
	)
	parser.add_argument(
		"--src",
		default=os.environ.get("MINIFY_SRC", "."),
		help="Source directory (default: . or $MINIFY_SRC)",
	)
	parser.add_argument(
		"--dst",
		default=os.environ.get("MINIFY_DST", "./dist"),
		help="Output directory (default: ./dist or $MINIFY_DST)",
	)
	args = parser.parse_args()

	src_dir = Path(args.src).resolve()
	dst_dir = Path(args.dst).resolve()
	processed, copied = minify_tree(src_dir, dst_dir)
	print(f"Minified {processed} HTML file(s); copied {copied} other file(s).")


if __name__ == "__main__":
	main()

