<template>
  <div class="page-container md-layout-column">
    <md-app>
      <md-app-toolbar class="md-primary">
        <span class="md-title">VisaApp</span>
        <div class="md-toolbar-section-end">
          <md-button @click="showSidepanel = true">
            <md-avatar class="md-avatar-icon md-small">
              <md-icon>home</md-icon>
            </md-avatar>
          </md-button>
        </div>
      </md-app-toolbar>
      <md-app-drawer class="md-right" :md-active.sync="showSidepanel">
        <md-toolbar class="md-transparent" md-elevation="0">
          <span class="md-title">Favorites</span>
        </md-toolbar>

        <md-list>
          <md-list-item to="/sign-up">
            <span class="md-list-item-text" >Sign Up</span>
          </md-list-item>

          <md-list-item>
            <span class="md-list-item-text">Login</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>
      <md-app-content>
        <component :is="getLayout">
          <router-view/>
        </component>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
  import MainLayout from '@/layouts/MainLayout'
  export default {
    data: () => ({
      showSidepanel: false
    }),
    computed: {
      getLayout() {
        return this.$route.meta.layout;
      }
    },
    components: {
      MainLayout
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
