export function NotFound(_props: { path?: string; default?: boolean }) {
  return (
    <div class="max-w-4xl mx-auto px-4 md:px-10 py-12 md:py-20">
      <h1 class="text-3xl md:text-4xl font-extrabold">404 — Página não encontrada</h1>
      <p class="mt-4 text-neutral-800 dark:text-neutral-200">
        A página que você procura não existe.
      </p>
      <a
        href="/"
        class="inline-flex items-center gap-2 mt-6 rounded-full bg-neutral-900 text-white text-sm font-semibold px-4 py-2 hover:bg-neutral-800"
      >
        Voltar para o início
      </a>
    </div>
  );
}
