<template>
  <v-app>
    <v-app-bar
      absolute
      color="#6A76AB"
      dark
      shrink-on-scroll
      height="56"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-4"
    >
        <v-btn icon :href="this.$route.name === null ? '../docs/guide/index.html' : SupportRoute(this.$route.name)"> 
    <!--  <v-btn icon :href="SupportRoute(this.$route.name)">-->
        <v-icon>mdi-help-circle-outline</v-icon>
      </v-btn>
      <v-spacer></v-spacer>

      <v-btn class="align-self-center" elevation="2" @click="LogIn()">
        {{ loginText }}
      </v-btn>

      <v-menu bottom left> </v-menu>
    </v-app-bar>

    <v-main>
      <v-col :cols="2">
        <sidebar />
      </v-col>
      <div class="mt-16 mr-8" style="margin-left: 300px">
        <router-view></router-view>
      </div>
    </v-main>
  </v-app>
</template>
<script>
import sidebar from "./sidebar";
export default {
  name: "App",
  number: 256 + 300,
  components: {
    sidebar,
  },
  methods: {
    LogIn() {
      this.loginText === "Log in"
        ? (this.loginText = "Log out")
        : (this.loginText = "Log in");
      console.log(this.routeHelpMap[this.$route.name]);
    },
    SupportRoute(item) {
      return this.baseDocs + this.routeHelpMap[item];
    },
  },
  data: () => ({
    loginText: "Log in",
    baseDocs: "../docs/guide/manual.html",

    routeHelpMap: {
      database: "#просмотр-элементов-базы-данных",
      addAuthor: "#добавление-автора",
      addBook: "#добавление-книги",
      stat: "#просмотр-статистики",
    },
  }),
};
</script>
