<template>
  <div class="page-wrapper h-full">
    <page-title :image="image">Portfolio.</page-title>
  </div>
</template>

<script>
export default {
  name: 'Portfolio',
  components: {
    'page-title': () => ({
      component: import('~/components/PageTitle')
    })
  },
  data() {
    return {
      image: '/svg/suitcase.svg'
    }
  }
}
</script>

<style scoped lang="scss"></style>
