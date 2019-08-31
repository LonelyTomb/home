<template>
  <div class="page-wrapper">
    <div class="page-wrapper h-full">
      <page-title :image="image">Resume.</page-title>
      <div class="content">
        <title-bar>Experience</title-bar>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Resume',
  components: {
    'title-bar': () => ({
      component: import('~/components/TitleBar')
    }),
    'page-title': () => ({
      component: import('~/components/PageTitle')
    })
  },
  data() {
    return {
      image: '/svg/certificate.svg'
    }
  },
  mounted() {
    this.toggleSidebar('reset')
  },
  methods: {
    ...mapActions({ toggleSidebar: 'sidebar/toggleSidebar' })
  }
}
</script>

<style scoped></style>
