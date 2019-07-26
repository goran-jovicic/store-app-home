<template>
  <div>
    <ul class="list-group">
      <li class="list-group-item" v-for="(customer,id) in customers" :key="id">
        {{ `${customer.fullName}` }}
        <button
          class="btn btn-outline-primary btn-sm"
          @click="removeCustomer(customer)"
        >Delete customer</button>
        <button
          class="btn btn-outline-danger btn-sm"
          @click="singleCustomerPage(customer.id)"
        >Latest Purchases</button>
      </li>
    </ul>
    <form @submit.prevent="addCustomer">
      <div>
        <p>Add new customer</p>
      </div>
      <div class="form-group">
        <label for="name">Name :</label>
        <input
          type="text"
          class="form-control form-control-sm"
          id="name"
          v-model="newCustomer.name"
        />
      </div>
      <div class="form-group">
        <label for="email">Email :</label>
        <input
          type="email"
          class="form-control form-control-sm"
          id="email"
          v-model="newCustomer.email"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import { customerService } from "@/services/CustomerService";

export default {
  data() {
    return {
      newCustomer: {
        id: "",
        fullName: "",
        email: "",
        products: []
      },
      customers: customerService.list()
    };
  },

  methods: {
    removeCustomer(customer) {
      customerService.remove(customer);
    },

    addCustomer() {
      this.customers.push(this.newCustomer);
      this.newCustomer = {
        id: "",
        name: "",
        email: "",
        products: []
      };
    },

    singleCustomerPage(id) {
      this.$router.push(`customers/${id}`);
    }
  }
};
</script>

<style>
</style>
