# Portifolio (HTML estático)

Este site é **100% estático**: só HTML + Tailwind (CDN) + dois arquivos auxiliares:

- `styles.css` (bem pequeno)
- `theme.js` (botão de tema claro/escuro)


## Rodar local

Dentro da pasta `portifolio_static/`:

```bash
python3 -m http.server 4173
```

Aí abra: `http://localhost:4173/`

## Onde editar (bem direto)


1. Abra o arquivo da página
2. Use **Ctrl+F** e procure pelos textos abaixo
3. Troque pelos seus

Textos comuns para procurar:

- `Seu Nome`
- `Seu cargo / área`
- `seu-usuario` (GitHub/LinkedIn)
- `seuemail@exemplo.com`

Páginas principais:

- Home: `index.html`
- About: `about/index.html`
- Projects: `projects/index.html` + detalhes em `projects/projeto-*/index.html`
- Articles: `blog/index.html` + posts em `blog/*/index.html`
- Contact: `contact/index.html`
- Tools: `tools/index.html`

## Currículo (Resume) está “guardado”

A página existe (não foi apagada): `resume/index.html`.

Mas os links/botões para ela foram **comentados** para não aparecer no site.

Para reativar:

- Abra qualquer página
- Procure por `Resume desativado`
- Remova o bloco de comentário `<!-- ... -->` daquele trecho

Dica: você pode dar Ctrl+Shift+F no VS Code e buscar por `Resume desativado`.

## Tema claro/escuro

O botão de tema usa `theme.js` e salva a preferência no `localStorage`.
Se algo não mudar visualmente em alguma página, é porque ela ainda não recebeu as classes `dark:` (posso padronizar isso em todas). 

## Minify (opcional)

Se você quiser gerar uma pasta final minificada, o script usa `htmlmin2` (compatível com Python recente):

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install htmlmin2

python3 minify.py --src . --dst ./dist
```
