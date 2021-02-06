<!--suppress HtmlUnknownTarget -->
<template>
  <div class="page-wrapper h-full">
    <page-title :image="image">Portfolio.</page-title>
    <div class="content">
      <title-bar class="mt-10">My Works</title-bar>
      <div
        class="portfolio-grid px-3 grid grid-cols-1 lg:grid-cols-3 gap-10 ml-1 md:ml-10"
      >
        <portfolio-card
          v-for="(portfolio, index) in portfolios"
          :key="index"
          :portfolio="portfolio"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Portfolio',
  components: {
    'title-bar': () => ({
      component: import('~/components/TitleBar')
    }),
    'page-title': () => ({
      component: import('~/components/PageTitle')
    }),
    'portfolio-card': () => ({
      component: import('~/components/PortfolioCard')
    })
  },
  data() {
    return {
      image: '/svg/suitcase.svg',
      portfolios: [
        {
          name: 'Afrocinema',
          image:
            'https://res.cloudinary.com/nazarick/image/upload/v1612571609/netwiq/Home_AFROCINEMA_1.png',
          url: 'https://afrocinema.tv',
          description: 'tags:nuxt.js|cloudinary|strapi;text:Fluidangle website'
        },
        {
          name: 'Athlst',
          image:
            'https://res.cloudinary.com/nazarick/image/upload/v1612569278/netwiq/ATHLST_-_Home.png',
          url: 'https://athlst.uc.r.appspot.com',
          description: 'tags:nuxt.js|cloudinary|strapi;text:Fluidangle website'
        },
        {
          name: 'Waziki',
          image:
            'https://res.cloudinary.com/nazarick/image/upload/v1612569219/netwiq/Waziki.png',
          url: 'https://wazikilife.com',
          description: 'tags:nuxt.js|cloudinary|strapi;text:Fluidangle website'
        },
        {
          name: 'Fount Farms',
          image:
            'https://res.cloudinary.com/nazarick/image/upload/v1612569267/netwiq/Home.png',
          url: 'https://fountfarms.appspot.com',
          description: 'tags:nuxt.js|cloudinary|strapi;text:Fluidangle website'
        },
        {
          name: 'FluidAngle',
          image:
            'https://res.cloudinary.com/nazarick/image/upload/v1571739364/netwiq/fluidangle.png',
          url: 'https://fluidangle.com',
          description: 'tags:nuxt.js|cloudinary|strapi;text:Fluidangle website'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss" />
