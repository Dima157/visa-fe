<template>
  <div id="main-layout">
    <div class="page-container md-layout-column">
      <md-app style="min-height: 100vh;">
        <md-app-toolbar class="md-primary">
          <router-link to="/">
            <span class="md-title">VisaApp</span>
          </router-link>
          <div class="md-toolbar-section-end">
            <md-menu v-if="!currentUser">
              <md-button class="md-icon-button md-dense md-primary" md-menu-trigger>
                <md-icon>person</md-icon>
              </md-button>
              <md-menu-content>
                <md-menu-item to="/sign-up">Sign up</md-menu-item>
                <md-menu-item to="/" @click="currentUser = null" v-if="currentUser">Logout</md-menu-item>
                <md-menu-item to="/" @click="currentUser = {name: 'Test User'}" v-else>Login</md-menu-item>
              </md-menu-content>
            </md-menu>
            <md-button class="md-icon-button md-dense md-primary" @click="showSidepanel = true" v-if="currentUser">
              <md-icon>person</md-icon>
            </md-button>
          </div>
        </md-app-toolbar>
        <md-app-drawer class="md-right" :md-active.sync="showSidepanel" v-if="currentUser">
          <md-toolbar class="md-transparent" md-elevation="0">
            <span class="md-title">{{currentUser.name}}</span>
          </md-toolbar>
          <md-list>
            <md-list-item v-for="rout in routes" @click="showSidepanel = false" :to="rout.link">
              <span class="md-list-item-text" >{{ rout.name }}</span>
            </md-list-item>
          </md-list>
        </md-app-drawer>
        <md-app-content>
          <div id="page-content">
            <router-view/>
          </div>
        </md-app-content>
      </md-app>
    </div>
    <div id="footer">
      Footer
    </div>
  </div>
</template>

<script>
export default {
  name: "MainLayout",
  data: () => ({
    showSidepanel: false,
    currentUser: null,
    routes: [
      {link: '/sign-up', name: 'Sign up'},
      {link: '/', name: 'Login'}
    ]
  }),
}
</script>
