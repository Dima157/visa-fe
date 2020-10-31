<template>
  <div id="main-layout">
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "MainLayout"
}
</script>
