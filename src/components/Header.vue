<script>
export default {
  name: "Header",
  props:{
    titleString: String
  }
}
</script>

<template>
  <header class="text-center my-5">
    <h1>{{ titleString }}</h1>
  </header>
</template>

<style lang="scss" scoped>

</style>