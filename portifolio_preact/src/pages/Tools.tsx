const tools = [
  { name: 'Editor', value: 'VS Code' },
  { name: 'Stack', value: 'Node / TypeScript / Tailwind' },
  { name: 'Deploy', value: 'Nginx / PM2' },
  { name: 'Banco', value: 'Postgres / SQLite' },
];

export function Tools(_props: { path?: string }) {
  return (
    <div class="max-w-4xl mx-auto px-4 md:px-10 py-12 md:py-20">
      <h1 class="text-3xl md:text-4xl font-extrabold">Utilidades</h1>
      <p class="mt-3 text-neutral-600 dark:text-neutral-300">
        Lista curta de ferramentas que uso no dia a dia.
      </p>

      <div class="mt-10 grid gap-4 sm:grid-cols-2">
        {tools.map((tool) => (
          <div
            key={tool.name}
            class="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5"
          >
            <div class="font-semibold">{tool.name}</div>
            <div class="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
              {tool.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
