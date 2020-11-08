<template>
  <form @submit.prevent="submit()" class="md-layout md-alignment-top-center">
    <md-card class="md-layout-item md-size-50 md-small-size-100">
      <md-card-header>
        <div class="md-title">User registration</div>
      </md-card-header>
      <md-card-content>
        <div class="md-layout md-gutter">
          <div class="md-layout-item md-small-size-100">
            <md-field>
              <label>Name</label>
              <md-input type="text" v-model="user.name" required/>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100">
            <md-field>
              <label>Last name</label>
              <md-input type="text" v-model="user.lastName" required/>
            </md-field>
          </div>
        </div>

        <md-field>
          <label>Email</label>
          <md-input type="email" validation="email" v-model="user.email" required/>
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
          <md-input type="password" v-model="user.password_confirm" name="password_confirm" required/>
          <span
              class="md-helper-text invalid"
              v-if="$v.user.password_confirm.$invalid"
          >
            Пароли не совпадают
          </span>
        </md-field>
      </md-card-content>
      <md-card-actions>
        <md-button type="submit" :disabled="$v.$invalid">Save</md-button>
      </md-card-actions>
    </md-card>
  </form>
</template>

<script>
import axios from 'axios';
import {required, minLength, sameAs, email} from 'vuelidate/lib/validators'

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
  validations: {
    user: {
      email: {email},
      name: {required},
      lastName: {required},
      country: {required},
      password: {required, minLength: minLength(6)},
      password_confirm: {
        sameAsPassword: sameAs('password')
      }
    }
  },
  mounted() {
    console.log(process.env.VISA_API_URL)
    axios.get('http://localhost:3000/countries').then((res) => {
      this.countries = res.data;
    })
  },
  methods: {
    submit() {
      axios.post('http://localhost:3000/users', this.user)
    },
  }
}
</script>

