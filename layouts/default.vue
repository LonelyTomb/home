<template>
  <div class="page mx-auto relative h-screen">
    <MobileSidebar
      :mobile="true"
      class="w-1/2 sm:w-1/3 md:w-1/6 h-full bg-dark md:hidden z-50"
    ></MobileSidebar>
    <div class="wrapper">
      <MobileHeader class="md:hidden"></MobileHeader>
      <Sidebar
        class="w-1/2 sm:w-1/3 md:w-1/6 h-full bg-dark hidden md:flex"
      ></Sidebar>
      <nuxt />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Sidebar: () => ({ component: import('~/components/Sidebar') }),
    MobileSidebar: () => ({ component: import('~/components/Sidebar') }),
    MobileHeader: () => ({ component: import('~/components/MobileHeader') })
  }
}
</script>
<style lang="scss"></style>
