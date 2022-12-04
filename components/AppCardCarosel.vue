<template>
  <div class="gallery">
    <ul class="cards">
      <li>0</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
      <li>21</li>
      <li>22</li>
      <li>23</li>
      <li>24</li>
      <li>25</li>
      <li>26</li>
      <li>27</li>
      <li>28</li>
      <li>29</li>
      <li>30</li>
    </ul>
    <div class="actions">
      <button class="prev">Prev</button>
      <button class="next">Next</button>
    </div>
  </div>
</template>

<script setup lang="ts">

// interface Props {
//   src?: string
//   width?: string
//   height?: string
//   speed?: number
//   mode?: string
// }

// const props = withDefaults(defineProps<Props>(), {
//   src: 'https://assets10.lottiefiles.com/packages/lf20_soCRuE.json',
//   width: '100%',
//   height: '100%',
//   speed: 1,
//   mode: 'bounce'
// })

gsap.registerPlugin(ScrollTrigger)

let iteration = 0 // gets iterated when we scroll all the way to the end or start and wraps around - allows us to smoothly continue the playhead scrubbing in the correct direction.

const spacing = 0.1,    // spacing of the cards (stagger)
  snap = gsap.utils.snap(spacing), // we'll use this to snap the playhead on the seamlessLoop
  cards = gsap.utils.toArray('.cards li'),
  seamlessLoop = buildSeamlessLoop(cards, spacing),
  scrub = gsap.to(seamlessLoop, { // we reuse this tween to smoothly scrub the playhead on the seamlessLoop
    totalTime: 0,
    duration: 0.5,
    ease: "power3",
    paused: true
  }),
  trigger = ScrollTrigger.create({
    start: 0,
    onUpdate(self) {
      if (self.progress === 1 && self.direction > 0 && !self.wrapping) {
        wrapForward(self)
      } else if (self.progress < 1e-5 && self.direction < 0 && !self.wrapping) {
        wrapBackward(self)
      } else {
        scrub.vars.totalTime = snap((iteration + self.progress) * seamlessLoop.duration())
        scrub.invalidate().restart() // to improve performance, we just invalidate and restart the same tween. No need for overwrites or creating a new tween on each update.
        self.wrapping = false
      }
    },
    end: "+=3000",
    pin: ".gallery"
  })

function wrapForward(trigger) { // when the ScrollTrigger reaches the end, loop back to the beginning seamlessly
  iteration++
  trigger.wrapping = true
  trigger.scroll(trigger.start + 1)
}

function wrapBackward(trigger) { // when the ScrollTrigger reaches the start again (in reverse), loop back to the end seamlessly
  iteration--
  if (iteration < 0) { // to keep the playhead from stopping at the beginning, we jump ahead 10 iterations
    iteration = 9
    seamlessLoop.totalTime(seamlessLoop.totalTime() + seamlessLoop.duration() * 10)
    scrub.pause() // otherwise it may update the totalTime right before the trigger updates, making the starting value different than what we just set above. 
  }
  trigger.wrapping = true
  trigger.scroll(trigger.end - 1)
}

function scrubTo(totalTime) { // moves the scroll position to the place that corresponds to the totalTime value of the seamlessLoop, and wraps if necessary.
  let progress = (totalTime - seamlessLoop.duration() * iteration) / seamlessLoop.duration()
  if (progress > 1) {
    wrapForward(trigger)
  } else if (progress < 0) {
    wrapBackward(trigger)
  } else {
    trigger.scroll(trigger.start + progress * (trigger.end - trigger.start))
  }
}

document.querySelector(".next").addEventListener("click", () => scrubTo(scrub.vars.totalTime + spacing))
document.querySelector(".prev").addEventListener("click", () => scrubTo(scrub.vars.totalTime - spacing))




function buildSeamlessLoop(items, spacing) {
  let overlap = Math.ceil(1 / spacing), // number of EXTRA animations on either side of the start/end to accommodate the seamless looping
    startTime = items.length * spacing + 0.5, // the time on the rawSequence at which we'll start the seamless loop
    loopTime = (items.length + overlap) * spacing + 1, // the spot at the end where we loop back to the startTime 
    rawSequence = gsap.timeline({ paused: true }), // this is where all the "real" animations live
    seamlessLoop = gsap.timeline({ // this merely scrubs the playhead of the rawSequence so that it appears to seamlessly loop
      paused: true,
      repeat: -1, // to accommodate infinite scrolling/looping
      onRepeat() { // works around a super rare edge case bug that's fixed GSAP 3.6.1
        this._time === this._dur && (this._tTime += this._dur - 0.01)
      }
    }),
    l = items.length + overlap * 2,
    time = 0,
    i, index, item

  // set initial state of items
  gsap.set(items, { xPercent: 400, opacity: 0, scale: 0 })

  // now loop through and create all the animations in a staggered fashion. Remember, we must create EXTRA animations at the end to accommodate the seamless looping.
  for (i = 0; i < l; i++) {
    index = i % items.length
    item = items[index]
    time = i * spacing
    rawSequence.fromTo(item, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, zIndex: 100, duration: 0.5, yoyo: true, repeat: 1, ease: "power1.in", immediateRender: false }, time)
      .fromTo(item, { xPercent: 400 }, { xPercent: -400, duration: 1, ease: "none", immediateRender: false }, time)
    i <= items.length && seamlessLoop.add("label" + i, time) // we don't really need these, but if you wanted to jump to key spots using labels, here ya go.
  }

  // here's where we set up the scrubbing of the playhead to make it appear seamless. 
  rawSequence.time(startTime)
  seamlessLoop.to(rawSequence, {
    time: loopTime,
    duration: loopTime - startTime,
    ease: "none"
  }).fromTo(rawSequence, { time: overlap * spacing + 1 }, {
    time: startTime,
    duration: startTime - (overlap * spacing + 1),
    immediateRender: false,
    ease: "none"
  })
  return seamlessLoop
}


</script>

<style scoped>
* {
  box-sizing: border-box;
}

body {
  background: #111;
  min-height: 100vh;
  padding: 0;
  margin: 0;
}

.gallery {
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.cards {
  position: absolute;
  width: 14rem;
  height: 18rem;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.cards li {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 14rem;
  height: 18rem;
  text-align: center;
  line-height: 18rem;
  font-size: 2rem;
  font-family: sans-serif;
  background-color: #9d7cce;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 0.8rem;
}

.actions {
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
}

button {
  display: inline-block;
  outline: none;
  border: none;
  padding: 8px 14px;
  background: #414141;
  background-image: -webkit-linear-gradient(top, #575757, #414141);
  background-image: -moz-linear-gradient(top, #575757, #414141);
  background-image: -ms-linear-gradient(top, #575757, #414141);
  background-image: -o-linear-gradient(top, #575757, #414141);
  background-image: linear-gradient(to bottom, #575757, #414141);
  text-shadow: 0px 1px 0px #414141;
  -webkit-box-shadow: 0px 1px 0px 414141;
  -moz-box-shadow: 0px 1px 0px 414141;
  box-shadow: 0px 1px 0px 414141;
  color: #ffffff;
  text-decoration: none;
  margin: 0 auto 10px;
  -webkit-border-radius: 4;
  -moz-border-radius: 4;
  border-radius: 4px;
  padding: 12px 25px;
  font-family: "Signika Negative", sans-serif;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
  font-size: 13px;
  line-height: 18px;
}

button:hover {
  background: #57a818;
  background-image: -webkit-linear-gradient(top, #57a818, #4d9916);
  background-image: -moz-linear-gradient(top, #57a818, #4d9916);
  background-image: -ms-linear-gradient(top, #57a818, #4d9916);
  background-image: -o-linear-gradient(top, #57a818, #4d9916);
  background-image: linear-gradient(to bottom, #57a818, #4d9916);
  text-shadow: 0px 1px 0px #32610e;
  -webkit-box-shadow: 0px 1px 0px fefefe;
  -moz-box-shadow: 0px 1px 0px fefefe;
  box-shadow: 0px 1px 0px fefefe;
  color: #ffffff;
  text-decoration: none;
}

button {
  font-size: 20px;
  font-weight: 400;
}

a {
  color: #88ce02;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

</style>
