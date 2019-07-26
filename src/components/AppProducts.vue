<template>
  <div>
    <ul class="list-group">
      <li class="list-group-item" v-for="(product,id) in filteredProducts" :key="id">
        {{ `${product.name} Quantity : ${product.quantity}` }}
      </li>
    </ul>
    <input type="text" placeholder="Search.." v-model="term">
  </div>
</template>

<script>
import { productService } from '../services/ProductService'

export default {
  data() {
    return {
      products : productService.list(),
      term : ''
    }
  },

  computed : {
    filteredProducts() {
      return this.products.filter(product => {
        return product.name.toLowerCase().includes(this.term.toLowerCase())
      })
    }
  }
}
</script>

<style>

</style>


// Postaviti niz proizvoda u `data()` komponente `AppProducts`
// Implementirati listanje proizvoda u AppProducts komponenti
// Komitovati urađeno
