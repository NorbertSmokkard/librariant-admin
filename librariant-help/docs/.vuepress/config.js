module.exports = {
  title: "Главная страница",
  base: "/docs/",
  description: "",
  themeConfig: {
    nav: [
      { text: "Домой", link: "/" },
      { text: "Справка", link: "/guide/" },
      { text: "Глоссарий", link: "/guide/glossary.md" },
      { text: "Инструкция", link: "/guide/manual.md" },
      {
        text: "Сайт",
        link: "https://norbertsmokkard.github.io/librariant-admin-pages/#/",
      },
    ],
    sidebar: {
      sidebarDepth: 3,
      "/guide/": ["glossary", "manual", "about"],
    },
  },
};
