<template>
  <form @submit.prevent="submit()">
    <md-field>
      <label>Email</label>
      <md-input type="email" validation="email" v-model="user.email" required/>
    </md-field>
    <md-field>
      <label>Name</label>
      <md-input type="text" v-model="user.name" required/>
    </md-field>
    <md-field>
      <label>Last name</label>
      <md-input type="text" v-model="user.lastName" required/>
    </md-field>
    <md-field>
      <label>Country</label>
      <md-select name="country" id="country" required v-model="user.country">
        <md-option v-for="country in countries" :value="country.code">{{ country.name }}</md-option>
      </md-select>
    </md-field>
    <md-field>
      <label>Password</label>
      <md-input type="password" name="password" required v-model="user.password"/>
    </md-field>
    <md-field>
      <label>Password confirm</label>
      <md-input ref="repeatedPasswordEl" type="password" v-model="user.password_confirm" name="password_confirm" required/>
    </md-field>
    <md-button type="submit">Save</md-button>
  </form>
</template>

<script>
import axios from 'axios';
export default {
  name: "SignUpForm",
  data: () => {
    return {
      countries: [],
      user: {
        email: null,
        name: null,
        lastName: null,
        country: null,
        password: null,
        password_confirm: null,
      }
    }
  },
  watch: {
    'user.password_confirm': 'checkPasswordsEquality',
    'user.password': 'checkPasswordsEquality',
  },
  mounted() {
    axios.get(process.env.VUE_VISA_API_URL + '/countries').then((res) => {
      this.countries = res.data;
    })
  },
  methods: {
    submit() {
      axios.post(process.env.VUE_VISA_API_URL + '/users', this.user)
    },
    checkPasswordsEquality() {
      const repeatedPasswordEl = this.$refs.repeatedPasswordEl.$el;
      repeatedPasswordEl.setCustomValidity('');

      if (this.user.password !== this.user.password_confirm) {
        repeatedPasswordEl.setCustomValidity(
            'Пароли должны совпадать',
        );
      }
    },
  }
}
</script>

<style scoped>

</style>
