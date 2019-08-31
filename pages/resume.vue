<template>
  <div class="page-wrapper">
    <div class="page-wrapper h-full">
      <page-title :image="image">Resume.</page-title>
      <div class="content">
        <title-bar class="mt-10">Experience</title-bar>
        <div class="experience-grid px-3">
          <experience :from="from" :to="to">
            <template #title
              >Web Developer Intern</template
            >
            <template #location
              >Havenda Plus Web School</template
            >
            <template #description>
              I participated in the training of clients in the company's web
              development courses. I was able to build some websites from web
              development technologies learned during this period.
            </template>
          </experience>
        </div>
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
    }),
    experience: () => ({
      component: import('~/components/Experience')
    })
  },
  data() {
    return {
      to: '09/2016',
      from: '07/2016',
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

<style scoped lang="scss">
.page-wrapper {
  .line {
    width: 2px;
    left: -10px;
    &:before,
    &:after {
      content: '';
      width: 10px;
      height: 10px;
      -webkit-border-radius: 50%;
      border-radius: 50%;
      border: 2px solid #00a3e1;
      position: absolute;
      left: -4px;
    }
    &:before {
      top: -10px;
    }
    &:after {
      bottom: -10px;
    }
  }
  .year {
    .to,
    .left {
      left: -10px;
    }
    .to {
      top: -18px;
    }
    .from {
      bottom: -18px;
    }
  }
}
</style>
