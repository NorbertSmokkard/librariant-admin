<template>
    <div>
        <v-container class="elevation-1 flex-wrap d-flex ">
 <v-card
    class="mx-auto text-center mt-4"
    color="white"
    max-width="600"
  >
    <v-card-text>
      <v-sheet color="">
        <h1>Какие категории берут книги напрокат?</h1>
      </v-sheet>
    </v-card-text>
        <apexchart type="pie" width="500" :options="firstChart.chartOptions" :series="firstChart.series"></apexchart>
    <v-divider></v-divider>
  </v-card>

 <v-card
    class="mx-auto text-center mt-4"
    color="white"
    max-width="800"
  >
    <v-card-text>
      <v-sheet color="">
        <h1>Статус книг в базе данных</h1>
      </v-sheet>
    </v-card-text>
        <apexchart type="pie" width="500" :options="secondChart.chartOptions" :series="secondChart.series"></apexchart>
  </v-card>




 <v-card
    class="mx-auto text-center mt-4"
    color="white"
    max-width="800"
  >
    <v-card-text>
      <v-sheet color="" width="800">
        <h1>Популярные жанры за последние месяцы</h1>
      </v-sheet>
    </v-card-text>
        <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
  </v-card>





        </v-container>
    </div>
</template>

<script>
  export default {
    data: () => ({

        firstChart:{
            series: [44, 55, 13, 43, 22],
             chartOptions: {
            labels: ['до 20 лет', '20 - 30 лет', '30 - 40 лет', '40 - 50 лет', 'Старше 50 лет'],
          },
        },
       secondChart:{
              series: [3456, 10000, 25000],
             chartOptions: {
            labels: ['Временно отсутствуют', 'Нет в наличии', 'Присутствует'],
          },
        },
        
          
          series: [{
            name: 'Фантастика',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
          }, {
            name: 'Детектив',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
          }, {
            name: 'Автобиография',
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
          }],
          chartOptions: {
            chart: {
              type: 'bar',
              height: 350,
              
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '65%',
                endingShape: 'rounded'
              },
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              show: true,
              width: 2,
              colors: ['transparent']
            },
            xaxis: {
              categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            },
            yaxis: {
              title: {
                text: 'Кол-во взятых копий'
              }
            },
            fill: {
              opacity: 1
            },
            tooltip: {
              y: {
                formatter: function (val) {
                  return  val + " копий"
                }
              }
            }
          },
          



    }),
  }
</script>
