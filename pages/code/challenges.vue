<template>
  <div>
    <p>Code Challenges</p>
    <p>{{ challenges }}</p>
  </div>
</template>

<script setup lang="ts">

const { getUser, challenges } = useCodeWars()

getUser()

</script>
