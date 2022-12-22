<template>
  <div class="flex items-center justify-center">
    <div class="md:w-96 w-80 rounded shadow-lg dark:bg-gray-800 bg-white p-4">
      <p class="text-lg font-bold leading-3 dark:text-gray-100 text-gray-800">
        Runtime Comparison
      </p>
      <input type="date" class="mt-3 w-full text-xs leading-3 text-gray-600 py-2 dark:bg-gray-700 dark:text-gray-100 bg-gray-100 px-2 focus:ouline-none">
      <div class="w-full pt-7 flex items-center justify-center">
        <div class="w-full h-full">
          <canvas id="barComparison" width="250px" height="181px" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Chart from 'chart.js/auto'

function createChart () {
  new Chart(document.getElementById('barComparison'), {
    type: 'bar',
    indexAxis: 'y',
    data: {
      labels: ['PCI', 'JBOD', 'IB', 'SMS ', 'XML', 'AGP', 'SDD', 'SMTP'],

      datasets: [
        {
          data: [290, 289, 288, 280, 276, 274, 270, 269],
          borderColor: ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
          backgroundColor: ['#312E81', '#3730a8', '#4338ca', '#4f46ef', '#6366F1', '#818cf8', '#A5B4FC', '#C7D2FE'],
          borderWidth: 1,
          pointBackgroundColor: '#6366F1',
          strokeColor: '#6366F1',
          barThickness: ['16px']
        }
      ]
    },
    options: {
      elements: {
        rectangle: {
          borderWidth: 2
        }
      },
      responsive: true,
      generateLabels: {
        hidden: true
      },
      legend: {
        display: false
      },
      scales: {
        y:
        {
          gridLines: {
            display: false
          },
          categoryPercentage: 1.0,
          barPercentage: 1.0,
          display: false
        },
        x:
        {
          gridLines: {
            display: false
          },
          display: false
        }
      }
    }
  })
}

onMounted(() => {
  createChart()
})

</script>

<style scoped>
@import url("https://cdn.tuk.dev/dist/css/tailwind-v2.2.11.min.css");

::-webkit-calendar-picker-indicator {
  filter: invert(0);
}
</style>
