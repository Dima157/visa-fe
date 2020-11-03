<template>
  <form @submit.prevent="login()">
    <md-field>
      <md-input type="email" v-model="user.email"/>
    </md-field>
    <md-field>
      <md-input type="password" v-model="user.password"/>
    </md-field>

    <md-button type="submit" :disabled="$v.$invalid">Save</md-button>

  </form>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import {required, email} from 'vuelidate/lib/validators'

export default {
  name: "SignInForm",
  data: () => {
    return {
      user: {
        email: null,
        password: null
      }
    }
  },
  validations: {
    user: {
      email: {email, required},
      password: {required}
    }
  },
  methods: {
    login() {}
  }

}
</script>

<style scoped>

</style>
