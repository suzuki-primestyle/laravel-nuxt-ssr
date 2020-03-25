<template>
  <div>
    <div>Auth Check Page</div>
    <div>{{ data }}</div>
    <nuxt-link to="/">return to home</nuxt-link>
  </div>
</template>

<script>
export default {
  async asyncData({app}) {
    const res = await app.$axios.$get('/api/foo/authcheck');
    return {data: res};
  }
}
</script>
