import { useMemo } from 'preact/hooks';

interface Post {
  title: string;
  date: string;
  category: string;
  content: string;
}

const posts: Record<string, Post> = {
  'clean-code': {
    title: 'Writing Clean Code',
    date: '2023-08-18',
    category: 'Clean Code',
    content: `
      <p>Este é um post de exemplo em HTML estático. A ideia é você escrever seu conteúdo aqui.</p>
      <p>Estrutura sugerida: contexto → problema → solução → exemplos → conclusão.</p>
      <h2 class="pt-4 text-xl font-extrabold text-neutral-900">Exemplo de código</h2>
      <pre class="mt-3 rounded-xl border border-neutral-200 bg-neutral-900 text-neutral-100 p-4 text-sm"><code>// Exemplo simples
function soma(a, b) {
  return a + b;
}
      </code></pre>
    `,
  },
  'dark-mode-with-nextjs': {
    title: 'Dark Mode',
    date: '2023-04-19',
    category: 'Tailwind/CSS',
    content: `
      <p>Em um site estático, você pode implementar tema claro/escuro com um pouco de JavaScript e classes CSS.</p>
      <h2 class="pt-4 text-xl font-extrabold text-neutral-900 dark:text-neutral-100">Ideia simples</h2>
      <pre class="mt-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-900 text-neutral-100 p-4 text-sm"><code>// 1) Alternar uma classe no &lt;html&gt;
document.documentElement.classList.toggle('dark');
      </code></pre>
      <p>No Tailwind, o modo escuro normalmente usa a variante <code>dark:</code>.</p>
    `,
  },
  'how-to-win-clients': {
    title: 'Como ganhar clientes',
    date: 'Post de exemplo',
    category: '',
    content: `
      <p>Use este espaço para escrever um post mais "de negócio".</p>
      <ul class="list-disc pl-5 space-y-2">
        <li>Mostre 2–3 projetos com resultados</li>
        <li>Explique seu papel e seu impacto</li>
        <li>Facilite contato (e-mail, LinkedIn)</li>
      </ul>
    `,
  },
  'tailwindcss-tips-and-tricks': {
    title: 'Tailwind tips',
    date: 'Post de exemplo',
    category: '',
    content: `
      <p>Tailwind fica mais fácil quando você mantém um padrão:</p>
      <ul class="list-disc pl-5 space-y-2">
        <li>Defina espaçamentos consistentes</li>
        <li>Evite classes demais no mesmo elemento</li>
        <li>Extraia "blocos" repetidos</li>
      </ul>
    `,
  },
};

export function BlogPost(props: { path?: string; slug?: string }) {
  const slug = props.slug || '';
  const post = useMemo(() => posts[slug], [slug]);

  if (!post) {
    return (
      <div class="max-w-4xl mx-auto px-4 md:px-10 py-12 md:py-20">
        <h1 class="text-3xl font-extrabold">Post não encontrado</h1>
      </div>
    );
  }

  return (
    <article class="max-w-4xl mx-auto px-4 md:px-10 py-12 md:py-20">
      <a
        href="/blog"
        class="inline-flex items-center text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white"
      >
        ← Voltar
      </a>

      <h1 class="mt-6 text-3xl md:text-4xl font-extrabold">{post.title}</h1>
      <p class="mt-2 text-sm text-neutral-500">
        {post.date} {post.category && `• ${post.category}`}
      </p>

      <div
        class="mt-10 text-neutral-700 dark:text-neutral-200 space-y-4"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
