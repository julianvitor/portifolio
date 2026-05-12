const posts = [
  {
    slug: 'clean-code',
    title: 'Writing Clean Code (exemplo)',
    description: 'Dicas práticas para escrever código mais legível e sustentável.',
    tags: ['Clean Code'],
  },
  {
    slug: 'dark-mode-with-nextjs',
    title: 'Dark Mode (exemplo)',
    description: 'Um guia simples para implementar tema claro/escuro.',
    tags: ['CSS', 'Tailwind'],
  },
  {
    slug: 'how-to-win-clients',
    title: 'Como ganhar clientes (exemplo)',
    description: 'Ideias de comunicação e portfólio para freelancers.',
    tags: [],
  },
  {
    slug: 'tailwindcss-tips-and-tricks',
    title: 'Tailwind tips (exemplo)',
    description: 'Pequenas técnicas para escrever Tailwind com clareza.',
    tags: [],
  },
];

export function Blog(_props: { path?: string }) {
  return (
    <div class="max-w-4xl mx-auto px-4 md:px-10 py-12 md:py-20">
      <span class="text-4xl">📝</span>
      <h1 class="mt-4 text-3xl md:text-4xl font-extrabold">Artigos</h1>
      <p class="mt-4 text-neutral-800 dark:text-neutral-200 max-w-xl leading-relaxed">
        Lista de posts em HTML estático. Você pode substituir por seus textos.
      </p>

      <div class="mt-10 space-y-6">
        {posts.map((post) => (
          <a
            key={post.slug}
            href={`/blog/${post.slug}`}
            class="block rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4 hover:bg-neutral-50 dark:hover:bg-neutral-800/40 transition-colors"
          >
            <div class="font-extrabold text-neutral-900 dark:text-neutral-100">
              {post.title}
            </div>
            <div class="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
              {post.description}
            </div>
            {post.tags.length > 0 && (
              <div class="mt-3 flex gap-2 flex-wrap">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    class="text-xs bg-neutral-200 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 px-2 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}
