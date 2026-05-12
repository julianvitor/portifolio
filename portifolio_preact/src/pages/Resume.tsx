export function Resume(_props: { path?: string }) {
  return (
    <div class="max-w-4xl mx-auto px-4 md:px-10 py-12 md:py-20">
      <h1 class="text-3xl md:text-4xl font-extrabold">Currículo</h1>
      <p class="mt-3 text-neutral-600 dark:text-neutral-300">
        Página simples para listar experiências e formação.
      </p>

      <div class="mt-10 space-y-4">
        <div class="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5">
          <div class="text-sm text-neutral-500">2024 — Atual</div>
          <div class="mt-1 font-semibold">Desenvolvedor de Software</div>
          <div class="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
            Desenvolvimento de aplicações web, APIs e softwares embarcados.
          </div>
        </div>

        <div class="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5">
          <div class="text-sm text-neutral-500">2022 — 2024</div>
          <div class="mt-1 font-semibold">Outra experiência</div>
          <div class="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
            Contribuições em projetos de código aberto e freelancer.
          </div>
        </div>
      </div>

      <div class="mt-10 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5">
        <div class="font-semibold">Download</div>
        <p class="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
          Em breve disponível para download.
        </p>
      </div>
    </div>
  );
}
