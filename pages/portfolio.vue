<!--suppress HtmlUnknownTarget -->
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
      image: '/svg/suitcase.svg',
      portfolios: [
        {
          name: 'FluidAngle',
          image:
            'https://res.cloudinary.com/nazarick/image/upload/v1571739364/netwiq/fluidangle.png',
          url: 'https://fluidangle.com',
          description: 'tags:nuxt.js|cloudinary|strapi;text:Fluidangle website'
        },
        {
          name: 'Currency Converter',
          image: '',
          url:
            'https://res.cloudinary.com/nazarick/image/upload/v1537433450/netwiq/currencyConverter.png',
          description:
            'tags:PWA|express.js|idb;text:A PWA App to converting currencies built for ALC3.0 project;'
        },
        {
          name: 'Currency Converter',
          image: '',
          url: '',
          description:
            'tags:PWA|express.js|idb;text:A PWA App to converting currencies built for ALC3.0 project;'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss" />
