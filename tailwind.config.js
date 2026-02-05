/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        sidebar: {
            bg: 'var(--sidebar-bg)',
            hover: 'var(--sidebar-hover)',
            active: 'var(--sidebar-active)',
        },
        vscode: {
            blue: 'var(--vscode-blue)',
            border: 'var(--vscode-border)',
        },
        bg: {
            primary: 'var(--bg-primary)',
            secondary: 'var(--bg-secondary)',
        },
        text: {
            primary: 'var(--text-primary)',
            secondary: 'var(--text-secondary)',
        },
        border: 'var(--border-color)',
        accent: {
            primary: 'var(--accent-primary)',
            secondary: 'var(--accent-secondary)',
        },
        success: 'var(--success)',
        error: 'var(--error)',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      spacing: {
          'sidebar': 'var(--sidebar-width)',
      }
    },
  },
  plugins: [],
}
