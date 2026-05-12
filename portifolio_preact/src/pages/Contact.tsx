export function Contact(_props: { path?: string }) {
  return (
    <div class="max-w-4xl mx-auto px-4 md:px-10 py-12 md:py-20">
      <h1 class="text-3xl md:text-4xl font-extrabold">Contato</h1>
      <p class="mt-2 text-sm text-neutral-700 dark:text-neutral-300 max-w-xl">
        Um jeito simples de contato.
      </p>

      <div class="mt-10 grid gap-4 sm:grid-cols-2">
        <div class="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5">
          <div class="text-sm font-semibold">Email</div>
          <a
            href="mailto:julianvitor@gmail.com"
            class="mt-2 block text-neutral-700 dark:text-neutral-200 hover:text-neutral-900"
          >
            julianvitor@gmail.com
          </a>
        </div>
        <div class="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5">
          <div class="text-sm font-semibold">LinkedIn</div>
          <a
            href="https://www.linkedin.com/in/julian-carreiro/"
            target="_blank"
            rel="noreferrer"
            class="mt-2 block text-neutral-700 dark:text-neutral-200 hover:text-neutral-900"
          >
            /in/julian-carreiro
          </a>
        </div>
      </div>

      <div class="mt-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5">
        <div class="text-sm font-semibold">Mensagem</div>
        <p class="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
          Disponível para oportunidades de desenvolvimento de software e hardware embarcado.
        </p>
      </div>
    </div>
  );
}
