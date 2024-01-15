<template >
  <div class="d-flex align-center justify-center">
    <v-card class="d-flex align-center justify-center bg-blue-grey-lighten-5 mb-10 height-set" style="width: 95%">
        <canvas id="myChart" ref="myChart" ></canvas> <!-- ref="myChart" -->
      </v-card>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(ChartDataLabels);

export default {
  name: 'chartComponent',
  props: {
    msg: String
  },
  mounted() {
    const ctx = this.$refs.myChart;
    // const ctx = this.$refs.myChart; const ctx = document.getElementById('myChart');
    // console.log("This value is ", this);
    
    const data = {
      labels: ['基本技能', 'Vue&React', '開發工具和技術', '前端效能優化', 'API 設計和通信', 'RWD與跨平台開發'],
      datasets: [{
        label: 'for Points',
        data: [10, 9.5, 9, 8.5, 8.5, 9.5],
        backgroundColor: [
          'rgba(31, 36, 33, 0.7)',
          'rgba(33, 104, 105, 0.7)',
          'rgba(73, 160, 120, 0.7)',
          'rgba(139, 195, 74, 0.7)',
          'rgba(156, 197, 161, 0.7)',
          'rgba(220, 225, 222, 0.7)',
        ],
        borderColor: [
          'rgba(31, 36, 33, 1)',
          'rgba(33, 104, 105, 1)',
          'rgba(73, 160, 120, 1)',
          'rgba(139, 195, 74, 1)',
          'rgba(156, 197, 161, 1)',
          'rgba(220, 225, 222, 1)',
        ],
        borderWidth: 2.5
      }]
    };

    const myChart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: {
        elements: {
          line: {
            borderWidth: 2
          }
        },
        plugins: {
          datalabels: {
            color: '#E91E63',
            display: true,
            anchor: 'end',
            align: 'top',
            font: {
              size: 20
            }
          },
          legend: {
            labels: {
              color: '#E91E63', // 標籤的顏色
              font: {
                size: 20, // 標籤的字體大小
              }
            }
          },
          tooltip: {
            callbacks: {
              title: function (context) {
                return 'Value: ' + context[0].parsed.y;
              }
            }
          }, 
        },
        scales: {
          x: {
            ticks: {
              color: '#283593', // 尺規的顏色
              font: {
                size: 20, // 尺規的字體大小
              }
            }
          },
          y: {
            ticks: {
              color: '#283593', // 尺規的顏色
              font: {
                size: 20, // 尺規的字體大小
              }
            }
          }
        },
        responsive: true, // 讓圖表在窗口大小改變時自動調整大小
        maintainAspectRatio: false, // 不保持寬高比，這將允許你自由改變圖表的大小
      },
    });

    myChart;
  }
}
</script>

<style>
  .height-set {
    height: 60vh;
  }

  @media (min-width: 768px) {
    .height-set {
    height: 80vh;
  }
  }
</style>

<!--
  1. 在Vue組件中，this指的是組件實例本身。你可以通過this來訪問組件的數據（data）、方法（methods）、計算屬性（computed）、生命週期鉤子（如mounted）等。
  2. $refs是Vue組件實例的一個屬性，它是一個對象，用於存儲所有被ref屬性標記的DOM元素和子組件。$是Vue.js用來區分用戶自定義屬性和Vue內置屬性的一種方式。
  3. .myChart是訪問$refs對象中名為myChart的屬性的方式。在你的模板中，你在canvas元素上使用了ref="myChart"，這意味著你可以通過this.$refs.myChart來獲取這個canvas元素。

  總的來說，this.$refs.myChart是獲取被ref="myChart"標記的DOM元素的一種方式。

  
  responsive: true, // 讓圖表在窗口大小改變時自動調整大小
  maintainAspectRatio: false, // 不保持寬高比，這將允許你自由改變圖表的大小
-->