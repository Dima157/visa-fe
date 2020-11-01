<template>
  <form @submit.prevent="submit()">
    <p>Email</p>
    <input type="email" validation="email" v-model="user.email" required/>
    <p>Name</p>
    <input type="text" v-model="user.name" required/>
    <p>Last name</p>
    <input type="text" v-model="user.lastName" required/>
    <p>Country</p>
    <select name="country" id="country" required v-model="user.country">
      <option v-for="country in countries" :value="country.code">{{ country.name }}</option>
    </select>
    <p>Password</p>
    <input type="password" name="password" required v-model="user.password"/>
    <p>Password confirm</p>
    <input type="password" v-model="user.password_confirm" name="password_confirm" required ref="repeatedPasswordEl"/>

    <button type="submit">Save</button>
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
    axios.get('http://localhost:3000/countries').then((res) => {
      this.countries = res.data;
    })
  },
  methods: {
    submit() {
      axios.post('http://localhost:3000/users', this.user)
    },
    checkPasswordsEquality() {
      const { password, password_confirm } = this.user;
      const { repeatedPasswordEl } = this.$refs;

      if (password !== password_confirm) {
        repeatedPasswordEl.setCustomValidity(
            'Пароли должны совпадать',
        );
      } else {
        repeatedPasswordEl.setCustomValidity('');
      }
    },
  }
}
</script>

<style scoped>

</style>
