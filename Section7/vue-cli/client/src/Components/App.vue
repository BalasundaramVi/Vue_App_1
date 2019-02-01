<template>
<app-servers></app-servers>
</template>

<script>
import Home from './Home'

export default {
  data: () => ({
    status: 'Critical',
  }),
  components: {
    'app-servers': Home,
  }
}
</script>

<style>

</style>
