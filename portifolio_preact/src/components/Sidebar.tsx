import { useState, useCallback } from 'preact/hooks';
import { useLocation } from 'preact-iso';
import { useTheme } from '../hooks/useTheme';

const navItems = [
  { path: '/', label: 'Início' },
  { path: '/about', label: 'Sobre' },
  { path: '/projects', label: 'Projetos' },
  { path: '/blog', label: 'Artigos' },
  { path: '/contact', label: 'Contato' },
  { path: '/tools', label: 'Utilidades' },
  { path: '/resume', label: 'Currículo' },
];

export function Sidebar() {
  const { toggleTheme, theme } = useTheme();
  const { path: currentPath } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const isActive = (path: string) => {
    if (path === '/') return currentPath === '/';
    return currentPath.startsWith(path);
  };

  return (
    <>
      <button
        id="menuBtn"
        onClick={handleToggle}
        class="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-neutral-200 dark:bg-neutral-800"
      >
        ☰
      </button>

      <div
        id="overlay"
        onClick={handleClose}
        class={[
          'fixed inset-0 bg-black/50 z-40 lg:hidden',
          isOpen ? 'block' : 'hidden',
        ].join(' ')}
      />

      <aside
        id="sidebar"
        class={[
          'fixed inset-y-0 left-0 z-50 w-56 bg-neutral-50 dark:bg-neutral-950 border-r border-neutral-200 dark:border-neutral-800 h-screen overflow-y-auto transition-transform duration-200',
          isOpen ? 'translate-x-0' : '-translate-x-full',
          'lg:translate-x-0',
        ].join(' ')}
      >
        <div class="p-6">
          <div class="flex items-center gap-3">
            <img
              src="/images/profile.jpg"
              alt="Avatar"
              class="h-10 w-10 rounded-full object-cover"
            />
            <div class="text-sm">
              <div class="font-semibold">Julian Carreiro</div>
              <div class="text-neutral-500 dark:text-neutral-400">
                Desenvolvimento de Software
              </div>
            </div>
          </div>

          <nav class="mt-6 space-y-1 text-sm">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                onClick={handleClose}
                class={[
                  'block rounded-md px-2 py-2 transition-colors',
                  isActive(item.path)
                    ? 'bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-50 font-semibold shadow-sm'
                    : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200/50 dark:hover:bg-neutral-800/40',
                ].join(' ')}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div class="mt-4">
            <button
              id="theme-toggle"
              onClick={toggleTheme}
              class="w-full rounded-md px-2 py-2 text-sm font-semibold bg-neutral-200 text-neutral-900 border border-neutral-300/60 dark:bg-neutral-800/60 dark:text-neutral-50 dark:border-neutral-700/60 hover:bg-neutral-300/70 dark:hover:bg-neutral-700/60 hover:-translate-y-px active:translate-y-0 transition-all duration-200"
            >
              Tema: {theme === 'dark' ? 'Escuro' : 'Claro'}
            </button>
          </div>

          <div class="mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-800">
            <div class="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wide">
              Redes Sociais
            </div>
            <div class="mt-2 space-y-1 text-sm">
              <a
                href="https://github.com/julianvitor"
                target="_blank"
                rel="noreferrer"
                class="block rounded-md px-2 py-2 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200/50 dark:hover:bg-neutral-800/40"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/julian-carreiro/"
                target="_blank"
                rel="noreferrer"
                class="block rounded-md px-2 py-2 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200/50 dark:hover:bg-neutral-800/40"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
