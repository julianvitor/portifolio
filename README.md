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
├── index.html                  # Página principal unificada (Início, Sobre, Destaques, Stack, Contato)
├── 404.html                    # Página de erro 404
├── favicon.ico                 # Favicon padrão na raiz
├── assets/                     # Todos os recursos estáticos organizados
│   ├── css/
│   │   └── styles.css          # Estilos complementares e rolagem suave
│   ├── js/
│   │   ├── theme.js            # Alternador de tema claro/escuro
│   │   ├── qrcode.min.js       # Biblioteca offline para o Gerador de QR Code
│   │   ├── oneko.js            # Script do mascote
│   │   └── oneko.gif           # Sprite do mascote
│   ├── images/                 # Fotos de perfil, previews de projetos e logos
│   │   ├── profile.jpg
│   │   ├── llama_go.jpg
│   │   ├── where_i_went.png
│   │   └── logos/
│   └── icons/                  # Favicons e ícones SVG/ICO
│       ├── favicon.svg
│       └── favicon.ico
└── pages/                      # Todas as páginas secundárias organizadas
    ├── projects.html           # Portfólio completo com todos os projetos
    ├── blog.html               # Artigos e notas técnicas
    ├── tools.html              # Central de utilidades interativas (QR Code, UUID, Base64)
    └── projects/               # Páginas individuais dos projetos
        ├── apruma.html
        ├── boardcapture.html
        ├── llama3-go.html
        ├── pontinho-ufabc.html
        └── where-i-went.html
```

---

## 🎨 Tema Claro / Escuro

O tema respeita a preferência do sistema operacional (`prefers-color-scheme`) e pode ser alternado pelo usuário através do botão de tema presente nas páginas. A escolha fica salva no `localStorage`.

---

## 🌿 Desenvolvimento

O desenvolvimento ativo é mantido na branch **`dev`**.
