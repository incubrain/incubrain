<template>
  <div class="flex flex-col space-y-6 lg:space-y-12">
    <CommonTitle
      :label="pricing.label"
      :title="pricing.title"
      :description="pricing.description"
      class="max-w-xl"
    />
    <div :class="`grid grid-cols-1 lg:grid-cols-${pricing.items.length || 1} gap-4 lg:gap-8`">
      <UCard
        v-for="item in pricing.items"
        :key="item.id"
        class="max-w-xl mx-auto"
      >
        <template #header>
          <div class="flex flex-col gap-3">
            <div class="flex w-full justify-end">
              <NuxtImg
                :src="item.image"
                alt="Pricing Icon"
                width="100%"
                height="100%"
              />
            </div>
            <h4 class="font-semibold"> {{ item.title }}</h4>
            <h2 class="text-xl lg:text-2xl font-semibold"> ${{ item.price }}/mo</h2>
            <p> {{ item.description }}</p>
          </div>
        </template>
        <ul class="pb-8 space-y-2">
          <li
            v-for="benefit in item.benefits"
            :key="benefit"
            class="flex gap-3 items-center"
          >
            <UIcon name="i-mdi-check" class="flex-shrink-0 text-primary-500" />
            {{ benefit }}
          </li>
        </ul>
        <slot />
      </UCard>
    </div>
  </div>
</template>

<script setup lang="ts">

const pricing = {
  label: 'Pricing',
  title: 'Our Pricing',
  description: `
  At Incubrain, we foster a dynamic and inclusive company culture that encourages creativity,
  continuous learning, and teamwork. Our team is passionate about helping startups succeed and we believe that a strong company culture
  is the foundation for achieving our vision.`,
  items: [
    {
      id: 1,
      title: 'Business Starter',
      description: 'Get support in talent acquisition and management.',
      image: 'images/icon.png',
      price: '1,250 PM',
      benefits: [
        'Get support in talent acquisition and management.',
        'Access our network of skilled professionals to find the right talent for your business needs, ensuring you have the right team to drive success.',
        'Get support in talent acquisition and management.',
        'Access our network of skilled professionals to find the right talent for your business needs, ensuring you have the right team to drive success.'
      ]
    },
    {
      id: 2,
      title: 'Hire Us',
      description: 'Get support in talent acquisition and management.',
      image: 'images/icon.png',
      price: '80 PH',
      benefits: [
        'Get support in talent acquisition and management.',
        'Access our network of skilled professionals to find the right talent for your business needs, ensuring you have the right team to drive success.',
        'Get support in talent acquisition and management.',
        'Access our network of skilled professionals to find the right talent for your business needs, ensuring you have the right team to drive success.'
      ]
    }
  ]
}

</script>

<style scoped></style>