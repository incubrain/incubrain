<template>
  <div class="m-0">
    <div class="lg:max-w-[452px] md:max-w-[343px] mx-auto container">
      <div class="range-slider">
        <input
          id="range"
          class="rounded-full"
          :style="{ '--range-progress': 'calc(' + newValue + '%' + newPosition + 'px' }"
          type="range"
          :step="props.steps"
          :value="props.value"
          :min="props.min"
          :max="props.max"
          @input="setValue"
          @loadeddata="setValue"
        >
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  step: {
    type: Number,
    default: 0.1
  },
  value: {
    type: Number,
    default: 0.6
  },
  min: {
    type: Number,
    default: 0.0
  },
  max: {
    type: Number,
    default: 1.0
  }
})
const newValue = ref(Number((props.value - props.min) * 100 / (props.max - props.min)))
const newPosition = ref(16 - (newValue.value * 0.32))

</script>

<style scoped>
.range-slider {
  width: 100%;
  position: relative;
}

#range {
  width: 100%;
}

#range:focus {
  outline: none;
}

#range::before,
#range::after {
  position: absolute;
  top: 2rem;
  color: #333;
  font-size: 14px;
  line-height: 1;
  padding: 3px 5px;
  background-color: rgba(0, 0, 0, .1);
  border-radius: 4px;
}

#range::-webkit-slider-runnable-track {
  width: 100%;
  height: 8px;
  cursor: pointer;
  animation: 0.2s;
  background: linear-gradient(90deg, rgb(67 56 202) var(--range-progress), #dee4ec var(--range-progress));
  /* background-color: rgb(67 56 202); */
  border-radius: 1rem;
}

#range::-webkit-slider-thumb {
  -webkit-appearance: none;
  border: 0.25rem solid white;
  /* box-shadow: 0 1px 3px rgba(0,0,255,.3); */
  border-radius: 50%;
  background: rgb(55 48 163);
  cursor: pointer;
  height: 24px;
  width: 24px;
  transform: translateY(calc(-50% + 5px));
}

#tooltip {
  position: absolute;
  bottom: 75px;
}

#tooltip span {
  position: absolute;
  text-align: center;
  display: block;
  line-height: 16px;
  padding: 0.125rem 0.25rem;
  padding: 10px;
  color: rgb(75 85 99);
  border-radius: 0.125rem;
  border-radius: 10px;
  background: white;
  font-size: 18px;
  left: 50%;
  width: 110px;
  height: 43px;
  transform: translate(-50%, 0);
}

#tooltip span:before {
  position: absolute;
  content: "";
  left: 50%;
  bottom: -8px;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border: 4px solid transparent;
  border-top-color: white;
}

@media (max-width: 768px) {
  #tooltip span {
    position: absolute;
    text-align: center;
    display: block;
    line-height: 16px;
    padding: 0.125rem 0.25rem;
    padding: 10px;
    color: rgb(75 85 99);
    border-radius: 0.125rem;
    border-radius: 10px;
    background: white;
    font-size: 14px;
    left: 50%;
    width: 90px;
    height: 33px;
    transform: translate(-50%, 0);
    top: 12px;
  }
}
</style>
