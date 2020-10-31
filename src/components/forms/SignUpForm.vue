<template>
  <FormulateForm @submit="submit">
    <p>Email</p>
    <FormulateInput type="email" validation="email" v-model="user.email"/>
    <p>Name</p>
    <FormulateInput type="text" v-model="user.name"/>
    <p>Last name</p>
    <FormulateInput type="text" v-model="user.lastName"/>
    <p>Country</p>
    <country-select v-model="user.country" :country="user.country" topCountry="US" />
    <p>Password</p>
    <FormulateInput
        type="password"
        name="password"
        validation="required"
        v-model="user.password"
    />
    <p>Password confirm</p>
    <FormulateInput
        type="password"
        name="password_confirm"
        validation="required|confirm"
        validation-name="Password confirmation"
    />

    <FormulateInput
        type="submit"
        label="Save"
    />
  </FormulateForm>
</template>

<script>
import axios from 'axios';
export default {
  name: "SignUpForm",
  data: () => {
    return {
      user: {
        email: null,
        name: null,
        lastName: null,
        country: null,
        password: null
      }
    }
  },
  methods: {
    submit() {
      axios.post('http://localhost:3000/users', this.user).then((res) => {
        console.log(res);
      })
    }
  }
}
</script>

<style scoped>

</style>
