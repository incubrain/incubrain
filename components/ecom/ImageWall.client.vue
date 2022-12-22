<template>
  <ul
    ref="productList"
    @pointermove="updateValues($event)"
  >
    <li class="bigger1">
      <img
        class="boost"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/w18.png"
      >
      <h2>¾-sleeved cotton top</h2>
      <span class="price">€19</span>
    </li>
    <li class="bigger2">
      <img
        class="boost"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/w14.png"
      >
      <h2>Printed long-sleeved t-shirt</h2>
      <span class="price">€45</span>
    </li>
    <li class="bigger1">
      <img
        class="boost"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/w03.png"
      >
      <h2>Kimono-shape sleeve V-neck top</h2>
      <span class="price">€49</span>
    </li>
    <li>
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/w32.png">
      <h2>Thick-soled leather sneakers</h2>
      <span class="price">€89</span>
    </li>
    <li class="bigger2">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/w29.png">
      <h2>Contrast-panelled jersey dress</h2>
      <span class="price">€59</span>
    </li>
    <li class="bigger1">
      <img
        class="shrink"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/w01.png"
      >
      <h2>Merino sleeveless top</h2>
      <span class="price">€69</span>
    </li>
    <li>
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/w12.png">
      <h2>Slim-fit mercerised cotton t-shirt</h2>
      <span class="price">€29</span>
    </li>
    <li class="bigger4">
      <img
        class="boost"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/w30.png"
      >
      <h2>Woven-jersey belted shirt dress</h2>
      <span class="price">€69</span>
    </li>
    <li class="bigger1">
      <img
        class="boost"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/w13.png"
      >
      <h2>¾-sleeved cotton top</h2>
      <span class="price">€19</span>
    </li>
    <li>
      <img
        class="boost"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/w02.png"
      >
      <h2>Folded-collar draped blouse</h2>
      <span class="price">€59</span>
    </li>
    <li class="bigger1">
      <img
        class="boost"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/w04.png"
      >
      <h2>Short-sleeved wool t-shirt</h2>
      <span class="price">€49</span>
    </li>
    <li>
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/w36.png">
      <h2>Small soft-leather shoulder bag</h2>
      <span class="price">€89</span>
    </li>
    <li class="bigger2">
      <img
        class="boost"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/w25.png"
      >
      <h2>Lapel neck dress</h2>
      <span class="price">€79</span>
    </li>
    <li class="bigger1">
      <img
        class="boost"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/w05.png"
      >
      <h2>Cupro open-back top</h2>
      <span class="price">€69</span>
    </li>
    <li class="bigger2">
      <img
        class="boost"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/w27.png"
      >
      <h2>A-line dress with front pleat</h2>
      <span class="price">€79</span>
    </li>
    <li class="bigger1">
      <img
        class="boost"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/w06.png"
      >
      <h2>Smooth tunic top</h2>
      <span class="price">€79</span>
    </li>
    <li>
      <img
        class="boost"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/w16.png"
      >
      <h2>Pleated-back cotton top</h2>
      <span class="price">€49</span>
    </li>
    <li class="bigger1">
      <img
        class="boost"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/w07.png"
      >
      <h2>Asymmetric wrap top</h2>
      <span class="price">€69</span>
    </li>
    <li>
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/w34.png">
      <h2>Zipped ankle boots</h2>
      <span class="price">€175</span>
    </li>
    <li class="bigger1">
      <img
        class="boost"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/w08.png"
      >
      <h2>Short-sleeved merino top</h2>
      <span class="price">€69</span>
    </li>
    <li class="bigger2">
      <img
        class="boost"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/w09.png"
      >
      <h2>Kimono wrap top</h2>
      <span class="price">€59</span>
    </li>
    <li class="bigger1">
      <img
        class="boost"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/w10.png"
      >
      <h2>Wide boxy fit top</h2>
      <span class="price">€49</span>
    </li>
    <li>
      <img
        class="boost"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/w11.png"
      >
      <h2>Sweatshirt with shirt hem</h2>
      <span class="price">€49</span>
    </li>
    <li class="bigger2">
      <img
        class="boost"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/w21.png"
      >
      <h2>Lapel neck dress</h2>
      <span class="price">€79</span>
    </li>
    <li class="bigger2">
      <img
        class="boost"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/w28.png"
      >
      <h2>Belted a-line dress</h2>
      <span class="price">€89</span>
    </li>
    <li>
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/w37.png">
      <h2>Small leather crossbody bag</h2>
      <span class="price">€79</span>
    </li>
    <li class="bigger1">
      <img
        class="boost"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/w22.png"
      >
      <h2>Printed long-sleeved a-line dress</h2>
      <span class="price">€79</span>
    </li>
    <li>
      <img
        class="boost"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/w17.png"
      >
      <h2>Statement-collar cotton shirt</h2>
      <span class="price">€69</span>
    </li>
    <li class="bigger1">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/w20.png">
      <h2>Long-sleeved wool t-shirt</h2>
      <span class="price">€49</span>
    </li>
    <li class="bigger2">
      <img
        class="boost"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/w24.png"
      >
      <h2>Long-sleeved folded collar dress</h2>
      <span class="price">€79</span>
    </li>
    <li class="bigger1">
      <img
        class="boost"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/w18.png"
      >
      <h2>¾-sleeved cotton top</h2>
      <span class="price">€19</span>
    </li>
    <li class="bigger2">
      <img
        class="boost"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/w14.png"
      >
      <h2>Printed long-sleeved t-shirt</h2>
      <span class="price">€45</span>
    </li>
    <li class="bigger1">
      <img
        class="boost"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/w03.png"
      >
      <h2>Kimono-shape sleeve V-neck top</h2>
      <span class="price">€49</span>
    </li>
    <li>
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/w32.png">
      <h2>Thick-soled leather sneakers</h2>
      <span class="price">€89</span>
    </li>
    <li class="bigger2">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/w29.png">
      <h2>Contrast-panelled jersey dress</h2>
      <span class="price">€59</span>
    </li>
    <li class="bigger1">
      <img
        class="shrink"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/w01.png"
      >
      <h2>Merino sleeveless top</h2>
      <span class="price">€69</span>
    </li>
    <li>
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/w12.png">
      <h2>Slim-fit mercerised cotton t-shirt</h2>
      <span class="price">€29</span>
    </li>
    <li class="bigger4">
      <img
        class="boost"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/w30.png"
      >
      <h2>Woven-jersey belted shirt dress</h2>
      <span class="price">€69</span>
    </li>
    <li class="bigger1">
      <img
        class="boost"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/w13.png"
      >
      <h2>¾-sleeved cotton top</h2>
      <span class="price">€19</span>
    </li>
    <li>
      <img
        class="boost"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/w02.png"
      >
      <h2>Folded-collar draped blouse</h2>
      <span class="price">€59</span>
    </li>
    <li class="bigger1">
      <img
        class="boost"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/w04.png"
      >
      <h2>Short-sleeved wool t-shirt</h2>
      <span class="price">€49</span>
    </li>
    <li>
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/w36.png">
      <h2>Small soft-leather shoulder bag</h2>
      <span class="price">€89</span>
    </li>
    <li class="bigger2">
      <img
        class="boost"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/w25.png"
      >
      <h2>Lapel neck dress</h2>
      <span class="price">€79</span>
    </li>
    <li class="bigger1">
      <img
        class="boost"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/w05.png"
      >
      <h2>Cupro open-back top</h2>
      <span class="price">€69</span>
    </li>
    <li class="bigger2">
      <img
        class="boost"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/w27.png"
      >
      <h2>A-line dress with front pleat</h2>
      <span class="price">€79</span>
    </li>
    <li class="bigger1">
      <img
        class="boost"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/w06.png"
      >
      <h2>Smooth tunic top</h2>
      <span class="price">€79</span>
    </li>
    <li>
      <img
        class="boost"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/w16.png"
      >
      <h2>Pleated-back cotton top</h2>
      <span class="price">€49</span>
    </li>
    <li class="bigger1">
      <img
        class="boost"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/w07.png"
      >
      <h2>Asymmetric wrap top</h2>
      <span class="price">€69</span>
    </li>
    <li>
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/w34.png">
      <h2>Zipped ankle boots</h2>
      <span class="price">€175</span>
    </li>
    <li class="bigger1">
      <img
        class="boost"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/w08.png"
      >
      <h2>Short-sleeved merino top</h2>
      <span class="price">€69</span>
    </li>
    <li class="bigger2">
      <img
        class="boost"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/w09.png"
      >
      <h2>Kimono wrap top</h2>
      <span class="price">€59</span>
    </li>
    <li class="bigger1">
      <img
        class="boost"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/w10.png"
      >
      <h2>Wide boxy fit top</h2>
      <span class="price">€49</span>
    </li>
    <li>
      <img
        class="boost"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/w11.png"
      >
      <h2>Sweatshirt with shirt hem</h2>
      <span class="price">€49</span>
    </li>
    <li class="bigger2">
      <img
        class="boost"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/w21.png"
      >
      <h2>Lapel neck dress</h2>
      <span class="price">€79</span>
    </li>
    <li class="bigger2">
      <img
        class="boost"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/w28.png"
      >
      <h2>Belted a-line dress</h2>
      <span class="price">€89</span>
    </li>
    <li>
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/w37.png">
      <h2>Small leather crossbody bag</h2>
      <span class="price">€79</span>
    </li>
    <li class="bigger1">
      <img
        class="boost"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/w22.png"
      >
      <h2>Printed long-sleeved a-line dress</h2>
      <span class="price">€79</span>
    </li>
    <li>
      <img
        class="boost"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/w17.png"
      >
      <h2>Statement-collar cotton shirt</h2>
      <span class="price">€69</span>
    </li>
    <li class="bigger1">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/w20.png">
      <h2>Long-sleeved wool t-shirt</h2>
      <span class="price">€49</span>
    </li>
    <li class="bigger2">
      <img
        class="boost"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/w24.png"
      >
      <h2>Long-sleeved folded collar dress</h2>
      <span class="price">€79</span>
    </li>
  </ul>
</template>

<script setup>

let mouseX = 0
let mouseY = 0
let sizeX = 0
let sizeY = 0
let docSizeY = 0
let scrollTop = 0
let scrollBottom = 0

const productList = ref()

const updateValues = (e) => {
  const { x, y, movementY, pageY, clientY, clientX } = e

  console.log('size')
  sizeX = clientX
  sizeY = clientY
  docSizeY = pageY
  changePerspective()

  if (movementY) {
    scrollTop = clientY
    scrollBottom = pageY - clientY
    changePerspective()
  }

  if (x || y) {
    mouseX = x
    mouseY = y
    changePerspective()
  }
}

function changePerspective () {
  let mousePerc
  let centreYperc
  if (mouseX === 0 && mouseY === 0) {
    centreYperc = 100 * ((scrollTop + (sizeY / 2)) / docSizeY)
    mousePerc = 50
  } else {
    centreYperc = 100 * ((scrollTop + mouseY) / docSizeY)
    mousePerc = 100 * (mouseX / sizeX)
  }

  console.log('ffffff', mouseX, sizeX, scrollTop, docSizeY)
  productList.value.style.perspectiveOrigin = mousePerc + '% ' + centreYperc + '%'
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz:300&display=swap');

:root {
  --depth: 30px;
  --perspective: 1000px;
}

body {
  margin: 50px;
  color: #444545;
  background-color: #F1FAEE;
  font-family: 'Yanone Kaffeesatz', sans-serif;
  font-size: 1em;
}

ul {
  display: grid;
  grid-auto-flow: dense;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: 8vw;
  perspective: const(--perspective);
  perspective-origin: 50% 50%;
  grid-gap: 50px;
  position: relative;

}

li {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transform: translateZ(calc(0px + const(--depth)));
  border: 1px #1D3557 solid;
  grid-row: span 5;
}

li::after {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: '';
  transform: translateZ(calc(0px - 2*(const(--depth))));
  background-color: rgba(168, 218, 220, 0.2);
  background-color: rgba(138, 179, 181, 0.2);
  background-color: rgba(29, 53, 87, 0.2);

}

img {
  position: absolute;
  top: 50%;
  left: 10%;
  width: 80%;
  transform: translateY(-50%) translateZ(calc(0px - (const(--depth)/2)));
  -webkit-filter: drop-shadow(0 50px 50px rgba(0, 0, 0, 0.10));
  filter: drop-shadow(0 50px 50px rgba(0, 0, 0, 0.30));
}

.boost {
  left: 0%;
  width: 100%;
}

.shrink {
  left: 15%;
  width: 70%;
}

.bigger1 {
  grid-row: span 6;
}

.bigger2 {
  grid-row: span 7;
}

.bigger3 {
  grid-row: span 8;
}

.bigger4 {
  grid-row: span 9;
}

h2 {
  position: absolute;
  top: 5px;
  right: 5px;
}

.price {
  position: absolute;
  bottom: 5px;
  right: 5px;
}

@media (min-width:565px) {
  ul {
    grid-auto-rows: 6vw;
  }
}

@media (min-width:815px) {
  body {
    margin: 50px;
  }

  ul {
    grid-auto-rows: 20px;
    grid-gap: 50px;
  }
}
</style>
