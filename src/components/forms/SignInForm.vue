<template>
  <form @submit.prevent="login()" class="md-layout md-alignment-top-center">
    <md-card class="md-layout-item md-size-30 md-small-size-50">
      <md-card-content>
        <md-field>
          <md-input type="email" v-model="user.email"/>
        </md-field>
        <md-field>
          <md-input type="password" v-model="user.password"/>
        </md-field>
      </md-card-content>
      <md-card-actions>
        <md-button type="submit" :disabled="$v.$invalid">Save</md-button>
      </md-card-actions>
    </md-card>
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
