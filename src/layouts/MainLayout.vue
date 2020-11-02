<template>
  <div id="main-layout">
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
            <md-list-item v-for="rout in routes" @click="showSidepanel = false" to="rout.link">
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
    routes: [
      {link: '/sign-up', name: 'Sign up'},
      {link: '/', name: 'Login'}
    ]
  }),
}
</script>
