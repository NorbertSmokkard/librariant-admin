
  export default {
    data: () => ({
      dialog: false,
      headers: [
           {
            text: 'Название книги',
            align: 'start',
            sortable: false,
            value: 'title',
          },
          { text: 'Автор', value: 'author' },
          { text: 'Жанр', value: 'genre' },
          { text: 'Статус', value: 'status' },
          { text: 'Общее кол-во', value: 'totalamount' },
          { text: 'Кол-во в библиотеке', value: 'amount' },
        { text: 'Действие', value: 'actions' },
      ],
         authorsCopy: [],
        searchTerm:'',
       genresList:["Автобиография", "Фэнтези","Детектив","PHP","Исторический роман","Научная фантастика"],
       authorsList:["Адольф Гитлер","Джоан Роулинг","Лесь Подеревенский"],
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
          }],
     desserts: [],
      editedIndex: -1,
      editedItem: {
         title: "",
        author: "",
        genre: [],
        totalamount:0,
        amount:0,
        status: 0,
      },
      defaultItem: {
        title: "",
        author: "",
        genre: [],
        totalamount:0,
        amount:0,
        status: 0,
      },
    }),

  
   

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created () {
      this.initialize()
    },
      mounted() {
    this.authorsCopy = [...this.authorsList];
    },

    methods: {

        searchAuthors() {
        
           if (!this.searchTerm) {
               this.authorsList = this.authorsCopy;
            }

           this.authorsList = this.authorsCopy.filter((fruit) => {
             return fruit.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
             });
      },

      initialize () {
        
        this.desserts = [
          {
            title: 'Гарри Поттер и Тайная комната',
            author: "Джоан Роулинг",
            genre: ["Фэнтези"],
            totalamount:120,
            amount:34,
            status: this.statusList.find(item=>item.value==1).title
          },
           {
            title: 'Майн кампф',
            author: "Адольф Гитлер",
            genre: ["Автобиография"],
            totalamount:120,
            amount:34,
            status: this.statusList.find(item=>item.value == 1).title,
          },
           {
            title: 'ПрогИнт Цікава книга',
            author: "Мащенко",
            genre: ["PHP"],
            totalamount:120,
            amount:34,
            status:  this.statusList.find(item=>item.value == 0).title,
          },
           {
            title: 'Война и Мир',
            author: "Лев Толстой",
            genre: ["Исторический роман"],
            totalamount:120,
            amount:34,
            status:  this.statusList.find(item=>item.value == 1).title,
          },
           {
            title: 'Человек-амфибия',
            author: "Беляев",
            genre: ["Научная фантастика"],
            totalamount:120,
            amount:34,
            status:  this.statusList.find(item=>item.value == 2).title,
          },
       
        ]
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.desserts.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },
  };
