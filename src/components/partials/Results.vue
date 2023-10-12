<script>
import { store } from '../../data/store';

export default {
  name: "Results",
  data(){
    return{
      store
    }
  },
  computed:{
    outputResult(){
      if(store.charactersList.length > 0){
        return "Risultati trovati: " + store.charactersList.length;
      }else{
        return "Nessun risultato";
      }
      
    }
  }
}
</script>

<template>
  <p>{{ outputResult }}</p>
</template>

<style lang="scss" scoped>
p{
  margin-bottom: 50px;
  text-align: center;
}
</style>