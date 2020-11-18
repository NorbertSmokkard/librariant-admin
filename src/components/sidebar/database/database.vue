<template>
  <v-data-table :headers="headers" :items="desserts" class="elevation-1">
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>База книг</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="800px">
          <v-card>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" md="6">
                    <h1 class="ma-3">Редактирование книги</h1>
                    <v-text-field
                      v-model="editedItem.title"
                      :counter="50"
                      label="Название книги"
                      required
                    ></v-text-field>

                    <v-select
                      class="ma-0"
                      style="width: 100%"
                      :items="genresList"
                      v-model="editedItem.genre"
                      label="Выберите жанр"
                      multiple
                      chips
                      hint="Жанры"
                      persistent-hint
                    >
                    </v-select>

                    <v-container class="my-5 mx-0 pa-0">
                      <v-select
                        v-model="editedItem.author"
                        :items="authorsList"
                        attach
                        label="Выберите автора"
                      >
                        <template v-slot:prepend-item>
                          <v-list-item>
                            <v-list-item-content>
                              <v-text-field
                                v-model="searchTerm"
                                placeholder="Пошук"
                                @input="searchAuthors"
                              >
                              </v-text-field>
                            </v-list-item-content>
                          </v-list-item>
                          <v-divider class="mt-2"></v-divider>
                        </template>
                      </v-select>
                    </v-container>

                    <v-textarea
                      outlined
                      name="input-7-4"
                      label="Аннотация"
                      value=""
                    ></v-textarea>

                    <!--
                                        <v-select class="ma-0" style="width: 100%;" :items="statusList"
                                            item-text="title" v-model="editedItem.status" label="Выберите статус"
                                            hint="Статус" persistent-hint>
                                        </v-select>
                                        -->
                  </v-col>

                  <v-col cols="12" md="6">

                    <p class="text--secondary">Выберите статус</p>
                    <v-radio-group mandatory>
                      <v-radio
                        class="ma-2"
                        v-for="(item, i) in statusList"
                        :key="i"
                        :label="item.title"
                        :value="item.value"
                      ></v-radio>
                    </v-radio-group>

                    <v-text-field
                      class="my-2"
                      v-model="editedItem.totalamount"
                      
                      :counter="5"
                      label="Общее кол-во книг"
                    ></v-text-field>

                    <v-text-field
                      class="my-2"
                      v-model="editedItem.amount"
                    
                      :counter="5"
                      label="Кол-во книг на складе"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>

    <template v-slot:item.actions="{ item }">
      <v-icon class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
      <v-icon @click="deleteItem(item)"> mdi-delete </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>
  </v-data-table>
</template>

<script src="./database.js" />