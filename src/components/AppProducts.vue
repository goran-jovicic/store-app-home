<template>
  <div>
    <ul class="list-group">
      <li class="list-group-item" v-for="(product,id) in filteredProducts" :key="id">
        {{ `${product.name} Quantity : ${product.quantity}` }}
        <button
          class="btn btn-outline-primary btn-sm"
          @click="incrementProduct(product)"
        >+</button>
        <button 
          class="btn btn-outline-danger btn-sm" 
          @click="decrementProduct(product)"
        >-</button>
      </li>
    </ul>
    <input type="text" placeholder="Search.." v-model="term" />
  </div>
</template>

<script>
import { productService } from "../services/ProductService";

export default {
  data() {
    return {
      products: productService.list(),
      term: ""
    }
  },

  methods : {
    incrementProduct(product) {
      productService.increment(product)
    },

    decrementProduct(product) {
      productService.decrement(product)
    }
  },

  computed: {
    filteredProducts() {
      return this.products.filter(product => {
        return product.name.toLowerCase().includes(this.term.toLowerCase());
      });
    }
  }
};
</script>

<style>
</style>
