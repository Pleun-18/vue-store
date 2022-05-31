<template>
  <div class="about">
    <h1>This is an about page with some counter information...</h1>
    <h2>Counter: {{ counter }}</h2>
  </div>
</template>

<script>

export default {
  name: 'AboutView', 
  computed: {
    counter() {
      return this.$store.state.counter;
    }
  },
}
</script>
