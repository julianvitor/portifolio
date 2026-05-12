const techStack = [
  { name: 'Python', src: '/images/logos/python.webp', href: 'https://www.python.org/' },
  { name: 'AWS', src: '/images/logos/aws.webp', href: 'https://aws.amazon.com/' },
  { name: 'ESP', src: '/images/logos/esp.webp', href: 'https://www.espressif.com/' },
  { name: 'PostgreSQL', src: '/images/logos/postgresql.webp', href: 'https://www.postgresql.org/' },
  { name: 'Node.js', src: '/images/logos/node.webp', href: 'https://nodejs.org/' },
  { name: 'Redis', src: '/images/logos/redis.webp', href: 'https://redis.io/' },
  { name: 'GitHub', src: '/images/logos/github.webp', href: 'https://github.com/' },
  { name: 'Nginx', src: '/images/logos/nginx.webp', href: 'https://nginx.org/' },
  { name: 'Docker', src: '/images/logos/docker.webp', href: 'https://www.docker.com/' },
  { name: 'RabbitMQ', src: '/images/logos/rabbitmq.webp', href: 'https://www.rabbitmq.com/' },
];

const techTools = [
  { name: 'VS Code', src: '/images/logos/vscode.webp', href: 'https://code.visualstudio.com/' },
  { name: 'Linux', src: '/images/logos/linux.webp', href: 'https://www.linux.org/' },
  { name: 'Git', src: '/images/logos/git.webp', href: 'https://git-scm.com/' },
  { name: 'Postman', src: '/images/logos/postman.webp', href: 'https://www.postman.com/' },
  { name: 'Draw.io', src: '/images/logos/drawio.webp', href: 'https://www.diagrams.net/' },
  { name: 'KiCad', src: '/images/logos/kicad.webp', href: 'https://www.kicad.org/' },
  { name: 'Arduino IDE', src: '/images/logos/arduino_ide.webp', href: 'https://www.arduino.cc/en/software' },
];

const featuredProjects = [
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

export function Home(_props: { path?: string }) {
  return (
    <div class="max-w-4xl mx-auto px-4 md:px-10 py-12 md:py-20">
      <span class="text-4xl">👋</span>
      <h1 class="mt-4 text-3xl md:text-4xl font-extrabold">
        Olá! Bem vindo ao meu espaço.
      </h1>
      <p class="mt-4 text-neutral-800 dark:text-neutral-200 max-w-xl leading-relaxed">
        Meu nome é Julian, sou desenvolvedor de software e hardware embarcado.
        Eventualmente escrevo artigos sobre tecnologia, ciência e outros
        assuntos relacionados.
      </p>
      <p class="mt-4 text-neutral-800 dark:text-neutral-200 max-w-xl leading-relaxed">
        Tenho experiência com backend, softwares microprocessados e aplicações
        desktop.
      </p>

      <h2 class="mt-16 mb-4 text-lg font-extrabold">O que eu tenho feito</h2>
      <div class="grid grid-cols-1 gap-6">
        {featuredProjects.map((project) => (
          <a
            key={project.slug}
            href={`/projects/${project.slug}`}
            class="group rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4 hover:bg-neutral-50 dark:hover:bg-neutral-800/40 transition-colors"
          >
            <div class="flex flex-col md:flex-row gap-4">
              <img
                src={project.image}
                alt={project.title}
                class="h-36 w-full md:w-44 rounded-md object-cover"
              />
              <div class="flex-1">
                <div class="text-lg font-extrabold">{project.title}</div>
                <p class="mt-2 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
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

      <h2 class="mt-16 mb-4 text-lg font-extrabold">Tech Stack</h2>
      <div class="flex flex-wrap items-center gap-4">
        {techStack.map((tech) => (
          <a key={tech.name} href={tech.href} target="_blank" rel="noreferrer">
            <img
              src={tech.src}
              alt={tech.name}
              class="h-10 w-10 object-contain"
            />
          </a>
        ))}
      </div>

      <h2 class="mt-10 mb-4 text-lg font-extrabold">Tech Tools</h2>
      <div class="flex flex-wrap items-center gap-4">
        {techTools.map((tool) => (
          <a key={tool.name} href={tool.href} target="_blank" rel="noreferrer">
            <img
              src={tool.src}
              alt={tool.name}
              class="h-10 w-10 object-contain"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
