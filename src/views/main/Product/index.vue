<template>
  <div class="product">
      <ProductList />
      <ProductPagination />
  </div>
</template>

<script>

import ProductList from "./ProductList"
import ProductPagination from "./ProductPagination"

export default {
  components:{
    ProductList,
    ProductPagination
  }
}
</script>

<style scoped>

.product{
  width: 1200px;
  margin: 0 auto;
}

</style>