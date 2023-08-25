<script>
import MyHeader from './components/MyHeader.vue'
import MyCardsList from './components/MyCardsList.vue'
import MySearchForm from './components/MySearchForm.vue';
export default {
  components: {
    MyHeader,
    MyCardsList,
    MySearchForm
  }
}
</script>

<template>
  <MyHeader></MyHeader>
  <main class="bg-warning-subtle d-flex justify-content-center flex-wrap">
    <MySearchForm></MySearchForm>
    <MyCardsList></MyCardsList>
  </main>
</template>

<style lang="scss">
</style>
