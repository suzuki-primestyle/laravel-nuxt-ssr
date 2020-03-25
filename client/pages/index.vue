<template>
  <div>
    <div>HelloWorld</div>
    <div>{{ data }}</div>
    <nuxt-link to="/authcheck">For checking authentication works or not.</nuxt-link>
  </div>
</template>

<script>
export default {
  async asyncData({app}) {
    const res = await app.$axios.$get('/api/hello');
    return {data: res};
  }
}
</script>
