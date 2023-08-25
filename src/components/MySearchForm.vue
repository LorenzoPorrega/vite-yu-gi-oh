<script>
import { store , fetchCards , getArchetypesList , filterCards } from "../store";

export default {
  data() {
    return {
      store,
    }
  },
  methods: {
    filterCards
  },
  mounted(){
    fetchCards();
    getArchetypesList();
  },
};
</script>

<template>
  <div class="container mt-3">
    <form class="row g-3">

      <div class="mb-3 col-md-3">
        <label class="form-label fw-bold fs-5">Archetype</label>
          <select class="form-select"
          v-model="store.selectedArchetype">
            <option value="" selected hidden disable>Select an Archetype</option>
            <option 
            :value="singleArchetype.archetype_name"
            v-for="singleArchetype in store.archetypesList"
            @click="filterCards()">
            {{ singleArchetype.archetype_name }}</option>
          </select>
      </div>

      <!-- <div class="mb-3 col-md-3">
        <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
      </div>

      <div class="mb-3 col-md-3">
        <input type="text" class="form-control" placeholder="Username" aria-label="Username">
      </div> -->
    </form>
  </div>
</template>

<style scoped lang="scss">
</style>
