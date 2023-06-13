<template>
  <div>
    <div class="form-wrapper">
      <h3 class="text-xl lg:text-3xl mb-6"> Reach out! </h3>
      <form onsubmit="return false;">
        <label for="name">Name</label>
        <input
          id="name"
          type="text"
        />

        <label for="email">Email</label>
        <input
          id="email"
          type="text"
        />

        <label for="about">Let's discuss</label>
        <textarea
          id="about"
          class="w-full"
          type="about"
          cols="40"
          rows="5"
        />

        <button class="w-full p-4 bg-[#f3b148] text-white font-semibold">
          Let's make something together
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
* {
  box-sizing: border-box;
}

html,
body {
  font-size: 20px;
  height: 100vh;
  margin: 0;
  background-color: #fff;
}

.form-wrapper {
  position: relative;
  display: grid;
  height: 100%;
  margin: 0;
  place-items: center;
  max-width: 100%;
  padding: 2rem;
}

form {
  margin: auto;
  width: 100%;
  max-width: 600px;
}

label {
  display: block;
  font-size: small;
  margin-bottom: 0.5rem;
  color: rgb(163, 163, 163);
}

input {
  display: block;
  width: 100%;
  margin: 0 0 1rem 0;
  padding: 0.8rem 0rem;
  font-size: 1rem;
  border: 0;
  border-radius: 0.125rem 0.25rem;
  background-color: hsl(222, 20%, 95%);
}

textarea {
  display: block;
  width: 100%;
  margin: 0 0 1rem 0;
  padding: 0.8rem 0rem;
  font-size: 1rem;
  border: 0;
  border-radius: 0.125rem 0.25rem;
  background-color: hsl(222, 20%, 95%);
}

button {
  display: block;
  padding: 0.8rem;
  border: 0;
  border-radius: 0.125rem 0.25rem;
  margin: 2rem 0 0 auto;
}

input:focus,
button:focus {
  outline: 0;
}

canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}
</style>
