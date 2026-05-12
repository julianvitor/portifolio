# Portifólio (monorepo)

Este repositório tem **dois projetos separados**:

- `portifolio_static/` — versão HTML estática (Tailwind via CDN)
- `portifolio_preact/` — versão reescrita em Preact + Vite

## Rodar o site estático

```bash
cd portifolio_static
python3 -m http.server 4173
```
Abra: `http://localhost:4173/`

### Build/minify (opcional)

```bash
cd portifolio_static
python3 minify.py --src . --dst ./dist
```

### Docker (estático)

```bash
cd portifolio_static
docker compose up --build
```
Abra: `http://localhost:8005/`

## Rodar o Preact

Recomendado via Bun (o projeto já tem `bun.lock`):

```bash
cd portifolio_preact
export PATH=$HOME/.bun/bin:$PATH
bun install
bun run dev
```

Build:

```bash
cd portifolio_preact
export PATH=$HOME/.bun/bin:$PATH
bun run build
```
