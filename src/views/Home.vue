<template>
  <div class="home">
    <new-trip-form/>
  </div>
</template>
<script>
import NewTripForm from "@/components/forms/NewTripForm";
export default {
  name: 'Home',
  components: {
    NewTripForm
  }
}
</script>
