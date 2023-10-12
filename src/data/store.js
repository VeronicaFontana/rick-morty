//contenitore di dati reattivi condivisi (state management)

import { reactive } from "vue";

//le proprietà dell'oggetto reactive sono proprietà reattive
export const store = reactive({
  apiUrl: "https://rickandmortyapi.com/api/character",
  charactersList: []
})
