export function About(_props: { path?: string }) {
  return (
    <div class="max-w-4xl mx-auto px-4 md:px-10 py-12 md:py-20">
      <span class="text-4xl">💬</span>
      <h1 class="mt-4 text-3xl md:text-4xl font-extrabold">Sobre</h1>

      <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        <div class="md:col-span-1">
          <img
            src="/images/profile.jpg"
            alt="Foto"
            class="w-full rounded-xl border border-neutral-200 dark:border-neutral-800 object-cover"
          />
        </div>
        <div class="md:col-span-2 text-neutral-700 dark:text-neutral-200">
          <p>Desenvolvedor de software e hardware embarcado.</p>
          <p class="mt-4">
            Experiência com Python, C, Node.js, PostgreSQL, Redis, Docker, Nginx e mais.
          </p>
          <p class="mt-4">
            Foco em backend, APIs, softwares microprocessados e aplicações desktop.
          </p>
          <ul class="mt-3 list-disc pl-5 space-y-1">
            <li>Construção de interfaces (UI) com foco em clareza</li>
            <li>APIs e integrações</li>
            <li>Performance e boas práticas</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
