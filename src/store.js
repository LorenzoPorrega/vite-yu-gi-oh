import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
  cards: [],
  archetypesList: [],
  selectedArchetype: "",
});

export function fetchCards(){
  store.cards = [];
  let url = "";

  if(store.selectedArchetype == ""){
    url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0';
    console.log(url)
    console.log("Preso url statico")
  }
  else{
    url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${store.selectedArchetype}&num=20&offset=0`;
    console.log(url)
    console.log("Preso url dinamico")
  }
  
  axios.get(url)
  .then((response) => {
    store.cards.push(...response.data.data);
    console.log(`Funzione per prendere le carte`);
  });
};

export function getArchetypesList(){
  const url = 'https://db.ygoprodeck.com/api/v7/archetypes.php';
  
  axios.get(url).then((response) => {
    store.archetypesList.push(...response.data);
    console.log(`Funzione per prendere gli archetypes`);
  });
};

export function filterCards(){
  console.log("Funzione per prendere l'archetipo selezionato");

  fetchCards();
};