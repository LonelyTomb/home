<template>
  <Header class="">
    <nav class="flex relative justify-center items-center py-3 bg-dark">
      <p class="text-white font-bold">VICTORY GARUBA</p>
      <a
        class="toggle-menu absolute right-0 p-3 h-full flex"
        @click="toggleSidebar"
      >
        <img src="/svg/menu.svg" alt="" class="menu-bar w-6 items-center" />
      </a>
    </nav>
  </Header>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'MobileHeader',
  data() {
    return {}
  },
  methods: {
    ...mapActions({ toggleSidebar: 'sidebar/toggleSidebar' })
  }
}
</script>

<style scoped lang="scss">
header {
  .menu-bar {
    filter: invert(1);
  }
}
</style>
