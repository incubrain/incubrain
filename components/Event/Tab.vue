<template>
  <div> 
    <GridCol1>
      <template v-slot:default>
        <EventCard />
      </template>
    </GridCol1>
    <GridCol3>
      <template v-slot:1>
        <EventTaskCharts />
      </template>
      <template v-slot:2>
        <EventTicket />
      </template>
      <template v-slot:3>
        <EventCardAlt2 />
      </template>
    </GridCol3>
    <GridCol1>
      <template v-slot:default>
        <EventCalendar />
      </template>
    </GridCol1>
    <GridCol3>
      <template v-slot:1>
        <EventCardFancy />
      </template>
      <template v-slot:2>
        <EventCardAlt3 />
      </template>
      <template v-slot:3>
      </template>
    </GridCol3>
  </div>
</template>

<script setup lang="ts">

</script>
