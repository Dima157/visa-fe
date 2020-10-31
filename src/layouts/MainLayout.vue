<template>
  <div id="main-layout">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/sign-up">Sigh up</router-link>
    </div>

    <div id="content">
      <router-view/>
    </div>

    <div id="footer">
      Footer
    </div>
  </div>
</template>

<script>
export default {
  name: "MainLayout"
}
</script>
