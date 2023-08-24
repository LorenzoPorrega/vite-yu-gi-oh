<script>
import MyHeader from './components/MyHeader.vue'
import MyCardsList from './components/MyCardsList.vue'
export default {
  components: {
    MyHeader,
    MyCardsList,
  }
}
</script>

<template>
  <MyHeader></MyHeader>
  <main class="bg-warning-subtle d-flex justify-content-center">
    <MyCardsList></MyCardsList>
  </main>
</template>

<style lang="scss">
</style>
