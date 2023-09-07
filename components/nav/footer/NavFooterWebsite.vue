<template>
  <footer class="foreground">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 container-lg p-4 xl:p-8 " v-if="routes">
      <div
        v-for="item in routes"
        :key="item.section"
      >
        <h4 class="font-semibold mb-4">{{ item.section }}</h4>
        <ul class="space-y-2">
          <li
            v-for="link in item.links"
            :key="link.path"
          >
            <NuxtLink :to="link.path">{{ link.name }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="mt-8 flex justify-center space-x-4 container-lg ">
      <a
        v-for="social in socials"
        :key="social.name"
        :href="social.url"
        target="_blank"
        rel="noopener noreferrer"
      >
        <UIcon
          :name="social.icon"
          aria-hidden="true"
        />
      </a>
    </div>
    <NavFooterBottomBar />
  </footer>
</template>

<script setup>
import routes from '../routes/nav-routes-web-footer.json'
import socials from '@/data/socials.json'
</script>
