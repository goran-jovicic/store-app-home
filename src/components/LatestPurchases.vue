<template>
  <div>
    <h1>{{ customer.fullName }}</h1>
    <ul>
      <li v-for="(listItems,index) in customer.products" :key="index">{{ listItems }}</li>
    </ul>
  </div>
</template>

<script>
import { customerService } from "@/services/CustomerService";

export default {
  data() {
    return {
      customer: customerService.find(this.$route.params.id)
    };
  },
  watch: {
    $route() {
      if (this.$route.params.id) {
        this.customer = customerService.find(this.$route.params.id);
      }
    }
  }
};
</script>

<style>
</style>
