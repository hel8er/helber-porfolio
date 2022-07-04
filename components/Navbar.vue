<script lang="ts" setup>
const { navigation } = useContent()
</script>

<template>
  <div class="flex justify-between max-w-2xl px-4 py-4 mx-auto sm:px-8">
    <!-- Navigation -->
    <div class="text-gray-700 dark:text-gray-200">
      <NuxtLink
        v-for="link of navigation"
        :key="link._path"
        :to="link._path"
        active-class="overline decoration-2 underline-offset-8"
        class="mr-4 uppercase"
      >
        {{ link.navTitle || link.title }}
      </NuxtLink>
      <!-- <NuxtLink to="#footer">Контакты</NuxtLink> -->
    </div>
    <!-- Social icons & Color Mode -->
    <div class="space-x-3 text-gray-500 transition">
      <ColorModeSwitch class="hover:text-gray-700 dark:hover:text-gray-300" />
    </div>
  </div>
</template>
