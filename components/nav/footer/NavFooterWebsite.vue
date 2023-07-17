<template>
  <footer class="bg-gray-800 text-white py-10 px-8 md:px-20">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
            <NuxtLink
              :to="link.path"
              class="text-gray-300 hover:text-white"
              >{{ link.name }}</NuxtLink
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="mt-8 flex justify-center space-x-4">
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
