![Cover (2)](https://github.com/micheleambrosio/dio-spiderverse/assets/55519539/2247f062-26e9-4881-a9c8-0fcb17206daa)

# Projeto Spider-Verse

O projeto consiste em uma aplicação interativa inspirada no universo do Homem-Aranha, usando as principais stacks front-end: React, Next.js 13, a biblioteca Framer Motion, Sass e TypeScript para criar um projeto visual incrível e de alta performance.

<video width="640%" controls>
  <source src="./public/doc/demo.webm" type="video/mp4">
</video>

## 💻 Tecnologias utilizadas no projeto

- [React.js](https://reactjs.org) (v18)
- [Next.js](https://nextjs.org) (v13)
- [TypeScript](https://www.typescriptlang.org) (v5)
- [ESLint](https://eslint.org)
- [Framer Motion](https://www.framer.com/api/motion)
- [SASS](https://sass-lang.com)

## 📚 Materiais

- [Link da live no Youtube](https://www.youtube.com/watch?v=d5HVw12uOpk)
- [Material de apoio com tutorial completo](https://micheleambrosio.notion.site/Live-Criando-um-carrossel-parallax-do-Aranhaverso-com-React-Next-js-13-e-Framer-Motion-67a818e32c2049d39d28ce4a185555c4?pvs=4)
- [Assets](https://drive.google.com/drive/folders/150O6eEhs8oGaHMMss7_CYG2jnI7yMugO?usp=sharing) (arquivos de imagens e efeitos sonoros)
- [Protótipo no Figma](https://www.figma.com/file/rgHS7o5MyTAxk9vCRH5YhL/Landpage-%2B-Mobile---SpiderVerse?type=design&node-id=0%3A1&mode=design&t=5SFRyEJyIbhD90Sl-1)

## 🎨 Protótipo do projeto

[Clique aqui](https://www.figma.com/file/rgHS7o5MyTAxk9vCRH5YhL/Landpage-%2B-Mobile---SpiderVerse?type=design&node-id=0%3A1&mode=design&t=5SFRyEJyIbhD90Sl-1) para ir ao protótipo do projeto no Figma.

## 🗄️ Estrutura de pastas

O projeto está estruturado da seguinte forma:

```sh
.spiderverse
├── next.config.js
├── next-env.d.ts
├── package.json
├── package-lock.json
├── public
│   ├── home-background.png
│   ├── icons
│   │   ├── menu.svg
│   │   └── user.svg
│   ├── songs
│   │   ├── mulher-aranha-65.mp3
│   │   ├── sp-dr-14512.mp3
│   │   ├── spider-ham-8311.mp3
│   │   ├── spider-man-1610.mp3
│   │   ├── spider-man-616.mp3
│   │   ├── spider-man-90214.mp3
│   │   ├── spider-man-928.mp3
│   │   └── transition.mp3
│   ├── spider-logo.svg
│   └── spiders
│       ├── mulher-aranha-65-background.png
│       ├── mulher-aranha-65-comic-book.png
│       ├── mulher-aranha-65.png
│       ├── sp-dr-14512-background.png
│       ├── sp-dr-14512-comic-book.png
│       ├── sp-dr-14512.png
│       ├── spider-ham-8311-background.png
│       ├── spider-ham-8311-comic-book.png
│       ├── spider-ham-8311.png
│       ├── spider-man-1610-background.png
│       ├── spider-man-1610-comic-book.png
│       ├── spider-man-1610.png
│       ├── spider-man-616-background.png
│       ├── spider-man-616-comic-book.png
│       ├── spider-man-616.png
│       ├── spider-man-90214-background.png
│       ├── spider-man-90214-comic-book.png
│       ├── spider-man-90214.png
│       ├── spider-man-928-background.png
│       ├── spider-man-928-comic-book.png
│       └── spider-man-928.png
├── README.md
├── src
│   ├── app
│   │   ├── api
│   │   │   └── heroes
│   │   │       ├── heroes.json
│   │   │       └── route.ts
│   │   ├── favicon.ico
│   │   ├── fonts
│   │   │   ├── index.ts
│   │   │   └── spider-man.otf
│   │   ├── globals.scss
│   │   ├── hero
│   │   │   └── [id]
│   │   │       └── page.tsx
│   │   ├── layout.tsx
│   │   ├── page.module.scss
│   │   ├── page.tsx
│   │   └── variables.scss
│   ├── components
│   │   ├── Carousel
│   │   │   ├── carousel.module.scss
│   │   │   └── index.tsx
│   │   ├── HeroeDetails
│   │   │   ├── heroDetails.module.scss
│   │   │   └── index.tsx
│   │   ├── HeroePicture
│   │   │   └── index.tsx
│   │   └── HeroesList
│   │       ├── heroesList.module.scss
│   │       └── index.tsx
│   └── interfaces
│       └── heroes.ts
└── tsconfig.json

```

## 🛠️ Instruções de execução

Siga as instruções abaixo para rodar o projeto em seu ambiente local:

1. Certifique-se de ter o Node.js instalado em seu computador. Você pode baixar a versão mais recente do Node.js em https://nodejs.org.

2. Clone este repositório em seu computador ou faça o download do código fonte.

3. Abra o terminal e navegue até o diretório raiz do projeto.

4. Instale as dependências do projeto executando o seguinte comando:

```bash
  npm install
```

5. Após a conclusão da instalação das dependências, inicie o servidor de desenvolvimento local com o comando:

```bash
  npm dev
```

6. O servidor local será iniciado e você poderá acessar o projeto no seu navegador através do seguinte endereço:

```bash
  http://localhost:3000
```

Caso a porta 3000 estiver em uso, automaticamente o Next.js irá subir na próxima porta livre da máquina.

Se deseja alterar a porta padrão na qual a aplicação tentará subir, você pode modificar a porta no arquivo `next.config.js`.

Agora você está pronto para explorar o projeto em seu ambiente local!

## 📚 Tutorial do projeto
[Live Criando um carrossel parallax do Aranhaverso.pdf](./public/doc/material_de_apoio.pdf)