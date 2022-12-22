<template>
<div class="ticker-container">
  <div class="container">
      <div class="box"></div>
      <div class="box red"></div>
      <div class="box green"></div>
      <div class="box purple"></div>
      <div class="box white"></div>
      <div class="box brown"></div>
  </div> 
</div>
</template>

<script setup lang="ts">

onMounted(() => {
  document.querySelector('.box:nth-child(1)').animate({'left':'-400px'}, 6000)
  document.querySelector('.box:nth-child(2)').animate({'left':'-800px'}, 12000)
  document.querySelector('.box:nth-child(3)').animate({'left':'-1000px'}, 16000)
  document.querySelector('.box:nth-child(4)').animate({'left':'-1200px'}, 20000)
  document.querySelector('.box:nth-child(5)').animate({'left':'-1400px'}, 24000)
  document.querySelector('.box:nth-child(6)').animate({'left':'-1600px'}, 28000)
  // $('.box:nth-child(2)')
  // $('.box:nth-child(3)')
  // $('.box:nth-child(4)')
  // $('.box:nth-child(5)')
  // $('.box:nth-child(6)')
  
  setInterval(function(){
    const box =  document.querySelector('.box:nth-child(1)')!
    console.log('sss', box)
    box.stop(true, true)
    box.style.left ='1000px'
    box.animate({'left':'-200px'}, 12000)
     document.querySelector('.container')!.append(box)
  }, 2000)
})

</script>

<style scoped>
* {box-sizing:border-box;}

body {background-color:#212121;}
h1, h2 {color:white;font-family:sans-serif;text-align:center;font-weight:lighter;padding:30px;}
h2 {font-size:20px;padding:10px;}
.ticker-container{
  margin:0px auto;
  position:relative;
  height:200px;
  width:1000px;
  overflow:hidden;
  -webkit-mask-image: linear-gradient(to right, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 10%,rgba(255,255,255,1) 48%,rgba(255,255,255,1) 90%,rgba(255,255,255,0) 100%);
}

.container {
  margin-top:65px;
  position:absolute;
  width:2000px;
  left:0px;
}

.box {
  position:absolute;
  margin:0px 0px;
  height:60px;
  width:200px;
  background-color:lightblue;
  transition:background-color 1s ease;
}
.box:nth-child(1) {left:0px;}
.box:nth-child(2) {left:200px;}
.box:nth-child(3) {left:400px;}
.box:nth-child(4) {left:600px;}
.box:nth-child(5) {left:800px;}
.box:nth-child(6) {left:1000px;}

.box:hover {background-color:#FF9B3B;}
.red {background-color: #B27397;}
.green{background-color: #FFBEE3;}
.purple{background-color: #FFE63C;}
.white{background-color: #2BBECC;}
.brown{background-color: #7CAEB2;}
</style>
