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
         
     <v-btn icon>
          <v-icon>mdi-help-circle-outline</v-icon>
        </v-btn>
   <v-spacer></v-spacer>

     <v-btn 
     class="align-self-center"
     elevation="2"
     @click="LogIn()"
        >
        {{loginText}}
        
        </v-btn>
        
        <v-menu
          bottom
          left
        >
        
        </v-menu>

    </v-app-bar>

    <v-main>
 
  <v-col
        :cols="2"
      >
          <sidebar/>

</v-col>
            <div class="mt-16 mr-8"
            style="margin-left: 300px"
            >



 <router-view></router-view>
            </div>
       

    </v-main>
</v-app>
    
</template>
<script>

import sidebar from "./sidebar"
export default {
  name: 'App',
  number:256 + 300,
  components: {
      sidebar,
  },
  methods:{
    

    LogIn(){
      this.loginText==="Log in" ? (this.loginText = "Log out") : this.loginText = "Log in"
    }
  },
  data: () => ({
    
  loginText: "Log in",

  }),
};
</script>
