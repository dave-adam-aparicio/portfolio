/* The navigation and all content work without JavaScript. */
(() => {
  const button = document.querySelector('.theme-toggle');
  if (!button) return;
  const preference = window.matchMedia('(prefers-color-scheme: dark)');
  let savedTheme;
  try { savedTheme = localStorage.getItem('portfolio-theme'); } catch { /* Storage may be blocked. */ }
  if (savedTheme === 'light' || savedTheme === 'dark') {
    document.documentElement.dataset.theme = savedTheme;
  }
  const isDark = () => document.documentElement.dataset.theme
    ? document.documentElement.dataset.theme === 'dark' : preference.matches;
  const updateLabel = () => {
    const label = `Switch to ${isDark() ? 'light' : 'dark'} theme`;
    button.textContent = isDark() ? 'Light theme' : 'Dark theme';
    button.setAttribute('aria-label', label);
  };
  button.hidden = false;
  updateLabel();
  button.addEventListener('click', () => {
    const theme = isDark() ? 'light' : 'dark';
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('portfolio-theme', theme); } catch { /* Theme still works for this visit. */ }
    updateLabel();
  });
  preference.addEventListener('change', updateLabel);
})();
