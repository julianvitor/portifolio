const projects = [
  {
    slug: 'projeto-1',
    title: 'Where-I-Went Library',
    description:
      'Biblioteca Python que permite extrair informações de geolocalização de imagens JPEG (ou JPG) e criar mapas interativos com base nesses dados.',
    image: '/images/where_i_went.png',
    tags: ['Python', 'C', 'HTML'],
  },
  {
    slug: 'projeto-2',
    title: 'Projeto 2',
    description: 'Descrição do projeto 2.',
    image: '/images/about.webp',
    tags: ['Node', 'Postgres'],
  },
];

export function Projects(_props: { path?: string }) {
  return (
    <div class="max-w-4xl mx-auto px-4 md:px-10 py-12 md:py-20">
      <span class="text-4xl">⚡</span>
      <h1 class="mt-4 text-3xl md:text-4xl font-extrabold">Projetos</h1>
      <p class="mt-4 text-neutral-800 dark:text-neutral-200 max-w-xl leading-relaxed">
        Uma lista simples dos projetos em que trabalhei.
      </p>

      <div class="mt-10 grid grid-cols-1 gap-6">
        {projects.map((project) => (
          <a
            key={project.slug}
            href={`/projects/${project.slug}`}
            class="group rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4 hover:bg-neutral-50 dark:hover:bg-neutral-800/40 transition-colors"
          >
            <div class="flex flex-col md:flex-row gap-4">
              <img
                src={project.image}
                alt={project.title}
                class="h-36 w-full md:w-44 rounded-md object-cover border border-neutral-200 dark:border-neutral-800"
              />
              <div class="flex-1">
                <div class="text-lg font-extrabold text-neutral-900 dark:text-neutral-100">
                  {project.title}
                </div>
                <p class="mt-2 text-sm text-neutral-700 dark:text-neutral-300 max-w-xl">
                  {project.description}
                </p>
                <div class="mt-3 flex gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      class="text-xs bg-neutral-200 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
