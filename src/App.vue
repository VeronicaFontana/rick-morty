<script>
import { store } from './data/store';
import Header from './components/Header.vue';
import axios from 'axios';
import CardsContainer from './components/CardsContainer.vue';
import Results from './components/partials/Results.vue';

export default {
  name: "App",
  components:{
    Header,
    CardsContainer,
    Results
  },
  data(){
    return{
      store
    }
  },
  methods:{
    getApi(){
      axios.get(store.apiUrl)
      .then( risultato =>{
        console.log(risultato.data.results)
        store.charactersList = risultato.data.results;
      })
      .catch( error =>{
        console.log(error.data)
      })
    }
  },
  mounted(){
    this.getApi();
  }
}
</script>

<template>
  <Header titleString=" - Rick&Morty - " /> <!--le props hanno il binding se il dato passato è dinamico, qua è statico -->
  <CardsContainer />
  <Results />
</template>

<style lang="scss" >

@use "./scss/main.scss";

</style>