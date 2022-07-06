<template>
  <div class="LoginPage">
    <LoginBox></LoginBox>
  </div>
</template>


<script>
import LoginBox from "@/views/login/components/LoginBox";

export default {
  name: 'LoginPage',
  components: {
    LoginBox
  }
}
</script>

<style scoped>
.LoginPage {
}
</style>