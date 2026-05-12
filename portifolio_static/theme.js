(() => {
  const STORAGE_KEY = 'theme';

  const getPreferredTheme = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'dark' || stored === 'light') return stored;

    const prefersDark =
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  };

  const applyTheme = (theme) => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const setButtonState = (button) => {
    const isDark = document.documentElement.classList.contains('dark');
    button.setAttribute('aria-pressed', String(isDark));
    button.textContent = isDark ? 'Tema: Escuro' : 'Tema: Claro';
  };

  const init = () => {
    applyTheme(getPreferredTheme());

    const button = document.getElementById('theme-toggle');
    if (!button) return;

    setButtonState(button);

    button.addEventListener('click', () => {
      const isDark = document.documentElement.classList.contains('dark');
      const next = isDark ? 'light' : 'dark';
      localStorage.setItem(STORAGE_KEY, next);
      applyTheme(next);
      setButtonState(button);
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
