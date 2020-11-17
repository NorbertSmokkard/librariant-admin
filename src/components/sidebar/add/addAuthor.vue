<template>
<div>
  <v-form 
  ref="addAuthorForm"
  class="elevation-1 "
  v-model="valid">

  <v-container>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
        <h1>Добавление автора</h1>
          <v-text-field
            v-model="authorname"
            :rules="nameRules"
            :counter="50"
            label="Имя автора"
            required
          ></v-text-field>
        <v-text-field
            v-model="pseudo"
            :rules="nameRules"
            :counter="50"
            label="Псевдоним"
            
          ></v-text-field>

            <v-text-field
            v-model="country"
            :rules="nameRules"
            label="Страна рождения"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
         
  
        </v-col>

      </v-row>

<v-row>
    <v-col
      cols="12"
      sm="6"
      md="4"
    >
      <v-menu
        ref="menu"
        v-model="menu"
       
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
             :rules="menuRules"
            label="Дата рождения"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          no-title
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="menu = false"
          >
            Отмена
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.menu.save(date)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>

<div class="d-inline-flex">
<v-btn
      :disabled="!valid"
      color="success"
      class="ma-4"
      @click="showAlert()"
    >
      Добавить запись
    </v-btn>

    <v-btn
     
      color="blue"
      class="ma-4"
      @click="()=>(  this.$refs.addAuthorForm.reset())"
    >
      Очистить форму
    </v-btn>
</div>
    </v-col>
  </v-row>
    </v-container>


  </v-form>
  <v-alert
      class="mt-16"
      :value="alert"
      color="green"
      dark
      border="top"
      icon="mdi-home"
      transition="scale-transition"
    >
    Запись успешно добавлена
    </v-alert>


</div>
    
</template>

<script>
//Имя автора
//Псевдоним (optional)
//Страна рождения
//дата рождения
export default {
    methods:{
        showAlert(){
    this.authorname='';
      this.pseudo='';
        this.country='';
     
            this.alert=true;
            this.$refs.addAuthorForm.reset();
         //   console.log(this.alert);
            setTimeout(()=>this.alert=!alert ,3000);
// console.log(this.alert);
        }

    },
     data () {
    
      return {
     valid: false,
     alert:false,
      authorname: '',
      pseudo: '',
      country:'',
      date:new Date().toISOString().substr(0, 10),
      menu:'',
      menuRules:[
        v => !!v || 'Необходимо выбрать дату',
      ],
      nameRules: [
        v => !!v || 'Необходимо ввести текст',
        v => v.length <= 50 || 'Текст должен быть не больше 50',
        v => /^[a-zA-Zа-яА-Я\\ \\.]+$/ui.test(v) || 'В тексте не должно быть спец. символов',
      ],
  
    
      }
    },
}
</script>