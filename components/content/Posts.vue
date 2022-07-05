<template>

    <ContentList path="/blog/posts" v-slot="{ list }">

      <ul v-for="post in list" :key="post._path">
      <li><NuxtLink :to="post._path">{{ post.title }}</NuxtLink></li>
      
      </ul>

    </ContentList>


</template>

<script setup lang="ts">
// const blogPosts = await queryContent('/blog/')
//   .sort({ date: -1 }) // show latest articles first
//   .where({ _partial: false }) // exclude the Partial files
//   .find();

// const blogPosts = await queryContent('blog').where({ tags: { $in: ['ecommerce', 'it'] } }).find()
</script>