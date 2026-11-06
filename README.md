# Portfólio (Site Estático)

Site de portfólio pessoal construído **100% com tecnologias estáticas**: HTML5 semântico, Tailwind CSS (via CDN) e JavaScript puro para interações (tema claro/escuro, menu responsivo, mascote oneko).

Não há bundlers (Vite/Webpack), nem Docker, nem gerenciadores de pacotes (Node/Bun/npm). Os arquivos são servidos diretamente, ideais para hospedagem em plataformas estáticas (GitHub Pages, Cloudflare Pages, Vercel, Netlify, etc.).

---

## 🚀 Como testar localmente

Como o projeto é estático, você pode usar qualquer servidor HTTP local simples:

### Opção 1: Python
```bash
python3 -m http.server 8000
```
Depois acesse: `http://localhost:8000`

### Opção 2: Node / npx (se instalado)
```bash
npx serve .
```

### Opção 3: Extensão VS Code
Abra com a extensão **Live Server** diretamente pelo editor.

---

## 📁 Estrutura de Arquivos

```text
.
├── 404.html                # Página de erro 404 personalizada
├── about/                  # Página "Sobre" (about/index.html)
├── blog/                   # Artigos e publicações
│   ├── clean-code/
│   ├── dark-mode-with-nextjs/
│   ├── how-to-win-clients/
│   └── tailwindcss-tips-and-tricks/
├── contact/                # Página de contato (contact/index.html)
├── favicon.ico             # Favicon clássico
├── favicon.svg             # Favicon moderno em SVG
├── images/                 # Imagens de perfil, projetos e logos de tecnologias
├── index.html              # Página inicial / Home
├── oneko.gif               # Sprite do mascote
├── oneko.js                # Script de interação do mascote
├── projects/               # Listagem e detalhes de projetos
│   ├── projeto-1/
│   └── projeto-2/
├── resume/                 # Página de currículo
├── styles.css              # Estilos complementares ao Tailwind
├── theme.js                # Alternador de tema claro/escuro com persistência (localStorage)
└── tools/                  # Ferramentas e utilidades
```

---

## 🎨 Tema Claro / Escuro

O tema respeita a preferência do sistema operacional (`prefers-color-scheme`) e pode ser alternado pelo usuário através do botão de tema presente nas páginas. A escolha fica salva no `localStorage`.

---

## 🌿 Desenvolvimento

O desenvolvimento ativo é mantido na branch **`dev`**.
