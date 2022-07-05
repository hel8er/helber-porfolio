<template>

    <ContentList path="/blog/posts" v-slot="{ list }">

      <div v-for="post in list" :key="post._path">
      <hr>
      <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
      
      <!-- <img class="h-24" :src="post.cover" alt=""> -->
      <p><i>{{ post.description }}</i></p>
      
      </div>

    </ContentList>


</template>

<script setup lang="ts">
// const blogPosts = await queryContent('/blog/')
//   .sort({ date: -1 }) // show latest articles first
//   .where({ _partial: false }) // exclude the Partial files
//   .find();

// const blogPosts = await queryContent('blog').where({ tags: { $in: ['ecommerce', 'it'] } }).find()
</script>