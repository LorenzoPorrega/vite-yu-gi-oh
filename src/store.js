import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
  cards: [],
});

export function fetchCards(){
  const url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0';
  
  axios.get(url).then((response) => {
    store.cards.push(...response.data.data);
    console.log(`Funzione per prendere le carte`);
  });
}