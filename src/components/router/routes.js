const routes = [
  { path: "/db",
    component: () => import("../sidebar/database/database.vue"),
    name: "database",
    props: true,
    meta:{
      title:"База данных",
      icon:"mdi-view-dashboard"
    }
  
  },
   { path: "/add/author",
    component: () => import("../sidebar/add/addAuthor"),
    name: "addAuthor",
    props: true,
    meta:{
      title:"Добавить автора",
      icon:"mdi-image"
    }
  
  },
   { path: "/add/book",
   component: () => import("../sidebar/add/addBook"),
    name: "addBook",
    props: true,
    meta:{
      title:"Добавить книгу",
      icon:"mdi-help-box"
    } 
  },
  { path: "/stat",
   component: () => import("../sidebar/statistics/statistics"),
    name: "stat",
    props: true,
    meta:{
      title:"Статистика",
      icon:"mdi-finance"
    } 
  },
];

export default routes;