<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <h1>{{ counter }}</h1>
    <div>
      <button @click="increment()" class="btn btn-succes">Increment</button>
      <button @click="decrement()" class="btn btn-info">Decrement</button>
      <br>
      <button @click="reset()" class="btn btn-danger">Reset</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    // HelloWorld
  },
  methods: {
    increment() {
      this.$store.dispatch('increment', 1)
    }, 
    decrement() {
      this.$store.dispatch('decrement', 1)
    },
    reset() {
      this.$store.dispatch('reset')
    }
  }, 
  computed: {
    counter() {
      return this.$store.state.counter;
    }
  }
}
</script>
