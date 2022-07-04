<!-- This component is used to show Markdown code block examples -->
<template>
<div v-if="loading" class="loading-page">
    <div class="loading"></div>
      <pre><Markdown :use="$slots.default" unwrap="p" /></pre>
  </div>

</template>

<script>
  export default {
    data: () => ({
      loading: false,
    }),
    methods: {
      start() {
        this.loading = true
      },
      finish() {
        this.loading = false
      },
    },
  }
</script>