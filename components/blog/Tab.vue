<template>
  <div> 
    <GridCol3>
      <template v-slot:1>
        <BlogCardBasic />
      </template>
      <template v-slot:2>
        <BlogCard />
      </template>
      <template v-slot:3>
        <BlogCardAlt />
      </template>
    </GridCol3>
    <GridCol3>
      <template v-slot:1>
        <BlogCardTall />
      </template>
      <template v-slot:2>
        <BlogCardSolid />
      </template>
      <template v-slot:3>
        <BlogCardSimple />
      </template>
    </GridCol3>
    <GridCol2FiveSeven>
      <template v-slot:1>
        <BlogCardAlt2 />
      </template>
      <template v-slot:2>
        <BlogAuthor />
      </template>
    </GridCol2FiveSeven>
  </div>
</template>

<script setup lang="ts">

</script>
