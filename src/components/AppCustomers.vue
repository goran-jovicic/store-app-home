<template>
    <div>
      <ul class="list-group">
        <li class="list-group-item" 
          v-for="(customer,index) in customers" 
          :key="index"> 
          {{ customer.name }} 
          <button class="btn btn-outline-primary btn-sm" @click="removeCustomer(index)">Delete customer</button>
          </li>
      </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      customers : [
        { name: 'Goran Jovicic' },
        { name: 'Marko Trivunic' },
        { name: 'Ivan Vujovic' }
      ]
    }
  },

  methods : {
    removeCustomer(index) {
      this.customers.splice(index,1)
    }
  }
}
</script>

<style>

</style>
