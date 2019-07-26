<template>
    <div>
      <ul class="list-group">
        <li class="list-group-item" 
          v-for="(customer,id) in customers" 
          :key="id"> 
          {{ `${customer.name} ${customer.email}` }} 
          <button class="btn btn-outline-primary btn-sm" @click="removeCustomer(id)">Delete customer</button>
        </li>
      </ul>
      <form @submit.prevent="addCustomer">
        <div>
          <p>Add new customer</p>
        </div>
        <div class="form-group">
          <label for="name">Name :</label>
          <input type="text" class="form-control form-control-sm" id="name" v-model="newCustomer.name" />
        </div>
        <div class="form-group">
          <label for="email">Email :</label>
          <input type="email" class="form-control form-control-sm" id="email" v-model="newCustomer.email" />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
</template>

<script>
export default {
  data() {
    return {
      newCustomer : {
        id : '',
        name : '',
        email : '',
      },
      customers : [
        { id: 1, name: 'Goran Jovicic', email: 'gugacns94@gmail.com' },
        { id: 2, name: 'Marko Trivunic', email: 'marko@trivunic.com' },
        { id: 3, name: 'Ivan Vujovic', email: 'ivan@vujovic.com' }
      ]
    }
  },

  methods : {
    removeCustomer(id) {
      this.customers.splice(id,1)
    },

    addCustomer() {
      this.customers.push(this.newCustomer)
      this.newCustomer = {
        id : '',
        name: '',
        email: ''
      }
    }
  }
}
</script>

<style>

</style>
