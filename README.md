# Cartas & Mapas — blog de geografia, ensaios e crônicas

Blog estático feito com [Jekyll](https://jekyllrb.com/), pronto para publicar de graça no **GitHub Pages**. Você escreve em Markdown; o GitHub cuida do resto.

## O que já vem pronto

- Três seções: **Geografia**, **Ensaios** e **Crônicas**
- Página inicial com os textos mais recentes
- Página **Sobre** e página 404
- Modo claro/escuro (segue o sistema e tem botão para alternar)
- Datas em português, tempo de leitura, navegação entre textos
- Feed RSS e sitemap automáticos
- Layout responsivo, bom para ler no celular

## Publicando no GitHub Pages (passo a passo)

1. No GitHub, crie um repositório novo.
   - Para o endereço `https://SEU-USUARIO.github.io`, o repositório deve se chamar exatamente **`SEU-USUARIO.github.io`**.
   - Com outro nome (ex.: `meu-blog`), o endereço será `https://SEU-USUARIO.github.io/meu-blog`.
2. Envie todos os arquivos desta pasta para o repositório (pelo site: *Add file → Upload files*; ou pelo Git).
3. Edite o **`_config.yml`**:
   - `url`: `https://SEU-USUARIO.github.io`
   - `baseurl`: `""` (repositório `SEU-USUARIO.github.io`) ou `"/meu-blog"` (outro nome)
   - `title`, `author.name`, `author.bio`, `author.email`
4. No repositório, vá em **Settings → Pages**. Em *Build and deployment*, escolha **Deploy from a branch**, selecione a branch `main` e a pasta `/ (root)`, e salve.
5. Espere um ou dois minutos. O endereço do blog aparece na mesma tela.

## Como escrever um texto novo

Crie um arquivo na pasta `_posts/` com o nome no formato **`AAAA-MM-DD-titulo-do-texto.md`**, por exemplo:

```
_posts/2026-12-05-a-cidade-vista-do-alto.md
```

E comece o arquivo assim:

```markdown
---
layout: post
title: "A cidade vista do alto"
date: 2026-12-05
categories: [geografia]
description: "Uma frase curta que aparece na listagem e nas redes."
---

Aqui começa o seu texto, em Markdown.
```

O campo `categories` define a seção e aceita só um destes valores:

| Valor        | Seção      |
|--------------|------------|
| `geografia`  | Geografia  |
| `ensaios`    | Ensaios    |
| `cronicas`   | Crônicas   |

> Para criar uma seção nova, adicione-a em `_data/categorias.yml` e crie um arquivo na raiz (copie o `geografia.md` e troque os valores).

### Dicas de Markdown

```markdown
## Subtítulo
**negrito**   *itálico*
> citação
- item de lista
[texto do link](https://exemplo.com)
![descrição da imagem](/assets/img/foto.jpg)
```

Coloque as imagens em `assets/img/`. Rascunhos podem ficar em uma pasta `_drafts/` (não são publicados).

## Testando no seu computador (opcional)

Precisa de [Ruby](https://www.ruby-lang.org/pt/) instalado.

```bash
bundle install
bundle exec jekyll serve
```

Abra `http://localhost:4000`.

## Personalizando

- **Cores e fontes**: variáveis no início de `assets/css/style.css`
- **Menu e rodapé**: `_layouts/default.html`
- **Textos de exemplo**: apague os três arquivos em `_posts/` quando publicar os seus
- **Domínio próprio**: *Settings → Pages → Custom domain*

## Estrutura

```
.
├── _config.yml          # configurações do site
├── _data/categorias.yml # nomes e descrições das seções
├── _includes/           # pedaços reutilizáveis (cartão de post, data)
├── _layouts/            # modelos de página (default, post, categoria)
├── _posts/              # seus textos
├── assets/css, js       # estilo e script do tema
├── index.html           # página inicial
├── geografia.md · ensaios.md · cronicas.md
└── sobre.md · 404.md
```
