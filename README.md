# Cartas & Mapas — blog de geografia, ensaios e crônicas

Blog estático feito com [Jekyll](https://jekyllrb.com/), pronto para o **GitHub Pages**. Você escreve em Markdown; o GitHub cuida do resto.

## Visual

Papel creme, azul-cobalto e ilustrações em gravura, com linhas de grade finas:

- Página inicial com título centralizado, grade de cartões e caixa de assinatura
- Bloco numerado de seções (01 // Geografia…) com rosa dos ventos
- Rodapé azul com paisagem gravada
- Modo claro/escuro (segue o sistema e tem botão para alternar)
- Layout responsivo, bom para ler no celular

## Atualizando um blog que já está no ar

Envie os arquivos novos para o repositório (*Add file → Upload files*), **sobrescrevendo** os de mesmo nome.
**Não sobrescreva o seu `_config.yml`** se você já o editou: apenas acrescente estas linhas a ele (são opcionais, mas ativam a paginação):

```yaml
paginate: 8
paginate_path: "/pagina:num/"
newsletter_action: ""

plugins:
  - jekyll-feed
  - jekyll-seo-tag
  - jekyll-sitemap
  - jekyll-paginate
```

Se o `_config.yml` já tiver uma lista `plugins:`, basta incluir `- jekyll-paginate` nela.

## Publicando no GitHub Pages (primeira vez)

1. Crie um repositório **público** no GitHub (no plano gratuito, o Pages só funciona com repositório público).
   - Para o endereço `https://SEU-USUARIO.github.io`, o repositório deve se chamar exatamente **`SEU-USUARIO.github.io`**.
2. Envie para a **raiz** do repositório o conteúdo desta pasta (não a pasta nem o `.zip`).
3. Edite o **`_config.yml`**: `url`, `baseurl`, `title`, `author.name`, `author.bio`, `author.email`.
4. Em **Settings → Pages**, em *Source* escolha **Deploy from a branch**, branch `main`, pasta `/ (root)`, e clique em **Save**.
5. Espere um ou dois minutos. O endereço aparece no topo da mesma tela.

## Como escrever um texto novo

Crie um arquivo em `_posts/` com o nome **`AAAA-MM-DD-titulo-do-texto.md`** e comece assim:

```markdown
---
layout: post
title: "A cidade vista do alto"
date: 2026-12-05
categories: [geografia]
description: "Uma frase curta que aparece nos cartões e nas redes."
---

Aqui começa o seu texto, em Markdown.
```

`categories` define a seção: `geografia`, `ensaios` ou `cronicas`.

### Foto de capa (opcional)

Sem foto, o cartão mostra a ilustração da seção. Para usar uma foto, coloque o arquivo em `assets/img/` e acrescente ao cabeçalho do texto:

```yaml
image: /assets/img/minha-foto.jpg
image_alt: "Descrição da foto"
image_credit: "Foto: Seu Nome"   # opcional
```

### Dicas de Markdown

```markdown
## Subtítulo
**negrito**   *itálico*
> citação
- item de lista
[texto do link](https://exemplo.com)
![descrição da imagem](/assets/img/foto.jpg)
---   (linha separadora com ✦)
```

Rascunhos podem ficar em uma pasta `_drafts/` (não são publicados).

## Newsletter por e-mail (opcional)

Por padrão, a caixa "Seja o primeiro a ler" leva ao feed RSS. Para coletar e-mails, crie uma conta em um serviço de newsletter (por exemplo, Buttondown) e cole o endereço do formulário em `newsletter_action` no `_config.yml`. O campo de e-mail passa a aparecer na caixa e no rodapé.

## Personalizando

- **Cores**: variáveis no início de `assets/css/style.css` (`--tinta` é o azul; `--fundo` é o creme)
- **Seções**: nomes e descrições em `_data/categorias.yml`
- **Textos de exemplo**: apague os três arquivos de `_posts/` quando publicar os seus
- **Domínio próprio**: *Settings → Pages → Custom domain*

## Testando no seu computador (opcional)

Precisa de [Ruby](https://www.ruby-lang.org/pt/) instalado.

```bash
bundle install
bundle exec jekyll serve
```

Abra `http://localhost:4000`.

## Estrutura

```
.
├── _config.yml           # configurações do site
├── _data/categorias.yml  # nomes e descrições das seções
├── _includes/            # cartão de post, logo, newsletter, data
├── _layouts/             # modelos de página (default, post, categoria)
├── _posts/               # seus textos
├── assets/css, js, img   # estilo, script do tema e ilustrações
├── index.html            # página inicial
├── geografia.md · ensaios.md · cronicas.md
└── sobre.md · 404.md
```
