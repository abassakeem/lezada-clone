<template>
  <div class="px-3 lg:px-6">

    <div class="tab-header text-2xl flex items-center justify-center space-x-10 my-6">
        <h3>New</h3>
        <h3>Popular</h3>
        <h3>Sale</h3>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3">
        <ProductCard/>
    </div>


  </div>
</template>

<script>
import ProductCard from './ProductCard.vue';


export default {
    components: { ProductCard },

}
</script>

<style>

</style>