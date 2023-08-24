<script>
import { store , fetchCards } from "../store";

export default {
  data() {
    return {
      store
    }
  },
  methods: {
  },
  mounted(){
    fetchCards();
  },
};
</script>

<template>
  <div class="container py-5 d-flex flex-wrap">
    <div class="row g-4">
      <div class="col-12 col-xl-3 col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center"
      v-for="singleCard in store.cards">
        <div class="card h-100" style="width: 18rem;">
          <img :src="singleCard.card_images[0].image_url" class="card-img-top" :alt="singleCard.name">
          <div class="card-body d-flex flex-column align-items-center justify-content-start">
            <p class="card-text fw-bold text-center fs-4">{{singleCard.name}}</p>
            <p class="mt-auto text-center"
            :class="singleCard.archetype ?? 'd-none'">
              <p class="card-text fw-bold text-decoration-underline">Archetype:</p>
              <p class="card-text">{{singleCard.archetype}}</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* .card{
  min-height: ;
} */
</style>
