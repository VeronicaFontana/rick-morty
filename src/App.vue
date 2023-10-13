<script>
import { store } from './data/store';
import Header from './components/Header.vue';
import axios from 'axios';
import CardsContainer from './components/CardsContainer.vue';
import Results from './components/partials/Results.vue';
import SearchBar from './components/partials/SearchBar.vue';
import Loader from './components/partials/Loader.vue';

export default {
  name: "App",
  components:{
    Header,
    CardsContainer,
    Results,
    SearchBar,
    Loader
  },
  data(){
    return{
      store
    }
  },
  methods:{
    getApi(){
      store.isLoading = true;
      axios.get(store.apiUrl, {
        params:{
          name: store.nameToSearch,
          status: store.statusToSearch
        }
      })
      .then( risultato =>{
        console.log(risultato.data.results)
        store.charactersList = risultato.data.results;
        store.isLoading = false;
        // ciclo tutti i characters per prendere tutti gli stati
        store.charactersList.forEach(char=>{
          //se lo status non è incluso nell'array degli status, lo pusho
          if(!store.statusList.includes(char.status)){
            store.statusList.push(char.status)
          }
        })
      })
      .catch( error =>{
        console.log(error.data)
        store.charactersList= [];
        store.isLoading = false;
      })
    },
    testEmit(){
      console.log("emit")
    }
  },
  mounted(){
    this.getApi();
  }
}
</script>

<template>
  <Header titleString=" - Rick&Morty - " /> <!--le props hanno il binding se il dato passato è dinamico, qua è statico -->
  <SearchBar @startSearch="getApi" />
  <Loader v-if="store.isLoading" title="Loading Rick & Morty API" />
  <CardsContainer v-else />
  <Results v-if="!store.isLoading" />
</template>

<style lang="scss" >

@use "./scss/main.scss";

</style>