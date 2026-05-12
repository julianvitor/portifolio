import { useMemo } from 'preact/hooks';

interface ProjectData {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const projects: Record<string, ProjectData> = {
  'projeto-1': {
    title: 'Where-I-Went Library',
    description:
      'Biblioteca Python que permite extrair informações de geolocalização de imagens JPEG (ou JPG) e criar mapas interativos com base nesses dados.',
    image: '/images/where_i_went.png',
    tags: ['Python', 'C', 'HTML'],
  },
  'projeto-2': {
    title: 'Projeto 2',
    description: 'Descrição do projeto 2.',
    image: '/images/about.webp',
    tags: ['Node', 'Postgres'],
  },
};

export function ProjectDetail(props: { path?: string; slug?: string }) {
  const slug = props.slug || '';
  const project = useMemo(() => projects[slug], [slug]);

  if (!project) {
    return (
      <div class="max-w-4xl mx-auto px-4 md:px-10 py-12 md:py-20">
        <h1 class="text-3xl font-extrabold">Projeto não encontrado</h1>
      </div>
    );
  }

  return (
    <div class="max-w-4xl mx-auto px-4 md:px-10 py-12 md:py-20">
      <a
        href="/projects"
        class="inline-flex items-center text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white"
      >
        ← Voltar para Projetos
      </a>

      <div class="mt-6">
        <img
          src={project.image}
          alt={project.title}
          class="w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 object-cover"
        />
      </div>

      <div class="mt-10 flex flex-col gap-3">
        <h1 class="text-3xl md:text-4xl font-extrabold">{project.title}</h1>
        <div class="flex gap-2 flex-wrap">
          {project.tags.map((tag) => (
            <span
              key={tag}
              class="text-xs bg-neutral-100 dark:bg-neutral-900 px-2 py-1 rounded text-neutral-600 dark:text-neutral-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <p class="text-neutral-700 dark:text-neutral-200 max-w-2xl">
          {project.description}
        </p>
      </div>

      <div class="mt-8 text-neutral-700 dark:text-neutral-200 space-y-4">
        <p>
          O que é esse projeto? Qual problema ele resolve? Qual foi seu papel?
        </p>
        <p>
          Destaque resultados: performance, usuários, stack, métricas, links.
        </p>
      </div>

      <a
        href="https://github.com/julianvitor"
        target="_blank"
        rel="noreferrer"
        class="inline-flex items-center gap-2 mt-10 rounded-full bg-neutral-900 text-white text-sm font-semibold px-4 py-2 hover:bg-neutral-800"
      >
        Abrir projeto
        <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}
