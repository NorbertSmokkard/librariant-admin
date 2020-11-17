<template>
      <v-navigation-drawer permanent
            class="mt-14"
        :color="color"
        :right="right"         
        absolute
        dark
         height="100%"
      >
        <v-list
          dense
          nav
          class="py-0"
        >
          <v-list-item two-line :class="'px-0'">
            <v-list-item-avatar>
              <img src="https://randomuser.me/api/portraits/men/81.jpg">
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>Валерий Альбертович</v-list-item-title>
              <v-list-item-subtitle>Заместитель менеджера</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item
            v-for="(item,i) in routes"
            :key = "i"
            link
            @click="routeTo(i)"
          >
            <v-list-item-icon>
              <v-icon>{{ item.meta.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.meta.title }}</v-list-item-title>
            </v-list-item-content>
            
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
</template>
<script>
import IMProutes from "./router/routes"
export default {
    methods:{
    routeTo(i){//, params: { carddata: data.carddata, genres: data.genresList}
              this.$router.push({name: IMProutes[i].name})
              //console.log(RoutesInfo[i].path);
          },
    },
    data: () => ({
    
  loginText: "Log in",
  routes: IMProutes,



        color: 'primary',
        colors: [
          'primary',
          'blue',
          'success',
          'red',
          'teal',
        ],
        right: false,

       
   



  }),
};

</script>