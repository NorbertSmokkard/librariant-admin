<template>
<div>
  <v-form 
  ref="addBookForm"
  class="elevation-1"
  v-model="valid"
  >

  <v-container>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
        <h1>Добавление книги</h1>
          <v-text-field
            v-model="bookname"
            :rules="nameRules"
            :counter="50"
            label="Название книги"
            required
          ></v-text-field>


          <v-select class="ma-0" 
          style="width: 100%;" 
          :rules="genreRules"
          :items="genresList"
           v-model="inputGenre"
           label="Выберите жанр"
            multiple 
            chips 
            hint="Жанры" 
            persistent-hint>
            </v-select>

     <v-container
     class="my-5 mx-0 pa-0">
      <v-select
       v-model="selectedAuthor"
        :items="authorsList"
        attach 
        :rules="genreRules"
        label="Выберите автора" 
        >
        <template v-slot:prepend-item>
          <v-list-item>
            <v-list-item-content>
              <v-text-field 
              v-model="searchTerm" 
              placeholder="Пошук"
               @input="searchAuthors">
               </v-text-field>
            </v-list-item-content>
          </v-list-item>
          <v-divider class="mt-2"></v-divider>
        </template>
      </v-select>
    </v-container>


          <v-text-field
           class="my-2"
            v-model="totalAmount"
            :rules="digitRules"
            :counter="5"
            label="Общее кол-во книг"
            
          ></v-text-field>

          
          <v-text-field
          class="my-2"
            v-model="amount"
            :rules="digitRules"
            :counter="5"
            label="Кол-во книг на складе"
            
          ></v-text-field>

         <v-textarea
          outlined
          name="input-7-4"
          label="Аннотация"
          value=""
        ></v-textarea>

<!--
         <v-select class="ma-0" 
          style="width: 100%;" 
          :rules="genreRules"
          :items="statusList"
          item-text="title"
           v-model="selectedStatus"
           label="Выберите статус"

            hint="Статус" 
            persistent-hint>
            </v-select>
-->
<p class="text--secondary">Выберите статус</p>
<v-radio-group
      v-model="row"
      row
      mandatory
    >
      <v-radio
      class="ma-2"
       v-for="(item,i) in statusList"
        :key = "i"
        :label = item.title
        :value= item.value
      ></v-radio>
  
    </v-radio-group>

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
      @click="()=>(  this.$refs.addBookForm.reset())"
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
//Название книги
//Аннотация
//Жанр (список)
//Автор (список)
//статус (список)
export default {
    mounted() {
    this.fruitsCopy = [...this.authorsList];
    },

    methods:{
        showAlert(){
            this.alert=true;
            this.$refs.addBookForm.resetValidation();
            this.$refs.addBookForm.reset();
            this.valid=false;
            setTimeout(()=>this.alert=!alert ,2000);

        },
            
       
       searchAuthors() {
         console.log(this.selectedAuthor);
           if (!this.searchTerm) {
               this.authorsList = this.fruitsCopy;
            }

           this.authorsList = this.fruitsCopy.filter((fruit) => {
             return fruit.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
             });
      }


    },
     data () {
    
      return {
      valid: false,
      alert:false,
      bookname: '',
      pseudo: '',
      country:'',
      totalAmount:'',
      amount:'',


      nameRules: [
        v => !!v || 'Необходимо ввести текст',
        v => v.length <= 50 || 'Текст должен быть не больше 50',
        v => /^[a-zA-Zа-яА-Я\\ \\.]+$/ui.test(v) || 'В тексте не должно быть спец. символов',
      ],  
      
      digitRules: [
        v => v.length <= 5 || 'Число слишком большое',
        v => (Number.isInteger(parseFloat(v)) ||(v=="")) || 'Число должно быть целым',
        v => (/^\d+/ui.test(v)||(v=="")) || 'Это должно быть число',
      ], 
      genreRules: [
        v => v.length!=0 || "Пусто",
      ],
      genresList:["Приключения", "Фэнтези","Детектив"],
      inputGenre:[],

      authorsList:["Адольф Гитлер","Джоан Роулинг","Лесь Подеревенский"],
      searchTerm:'',
      fruitsCopy: [],
      selectedAuthor:"",

       statusList:[
          {
          title:"Не поставляется", 
          value:0
          },
          {
          title:"Временно отсутствует", 
          value:1
          },
          {
          title:"В наличии", 
          value:2
          },
           {
          title:"Архивная", 
          value:3
          }
          
          ],
   
      selectedStatus:"",
    
      }
    },
}
</script>