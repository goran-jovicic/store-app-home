<template>
  <div>
    <ul class="list-group">
      <li class="list-group-item" v-for="(product,id) in products" :key="id">
        {{ `${product.name} Quantity : ${product.quantity}` }}
      </li>
    </ul>
  </div>
</template>

<script>
import { productService } from '../services/ProductService'

export default {
  data() {
    return {
      products : productService.list()
    }
  }
}
</script>

<style>

</style>


// Postaviti niz proizvoda u `data()` komponente `AppProducts`
// Implementirati listanje proizvoda u AppProducts komponenti
// Komitovati urađeno
