<template>
  <aside
    :class="{ 'hide-sidebar': getSidebarState === false && mobile === true }"
    class="sidebar fixed left-0 overflow-y-scroll md:overflow-auto flex flex-col justify-between"
  >
    <div class="wrapper">
      <div class="image-part">
        <img src="/png/dice.jpg" alt="profile-picture" />
      </div>
      <div class="links">
        <ul>
          <li class="flex flex-row">
            <nuxt-link
              to="/"
              class="flex flex-row h-full justify-left w-full p-3 text-muted"
              ><img
                src="/svg/home.svg"
                alt="home"
                class="w-3 flex items-center mr-3"
              />
              HOME</nuxt-link
            >
          </li>
          <li class="flex flex-row">
            <nuxt-link
              to="/about"
              class="flex flex-row h-full justify-left w-full p-3 text-muted"
              ><img
                src="/svg/user.svg"
                alt="about me"
                class="w-3 flex items-center mr-3"
              />
              ABOUT ME</nuxt-link
            >
          </li>
          <li class="flex flex-row">
            <nuxt-link
              to="/resume"
              class="flex flex-row h-full justify-left w-full p-3 text-muted"
              ><img
                src="/svg/certificate.svg"
                alt="resume"
                class="w-3 flex items-center mr-3"
              />
              RESUME</nuxt-link
            >
          </li>
          <li class="flex flex-row">
            <nuxt-link
              to="/portfolio"
              class="flex flex-row h-full justify-left w-full p-3 text-muted"
              ><img
                src="/svg/suitcase.svg"
                alt="protfolio"
                class="w-3 flex items-center mr-3"
              />
              PORTFOLIO</nuxt-link
            >
          </li>
          <li class="flex flex-row">
            <nuxt-link
              to="/contact"
              class="flex flex-row h-full justify-left w-full p-3 text-muted"
              ><img
                src="/svg/envelope.svg"
                alt="contact"
                class="w-3  flex items-center mr-3"
              />
              CONTACT</nuxt-link
            >
          </li>
        </ul>
      </div>
    </div>
    <Footer></Footer>
  </aside>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Sidebar',
  components: {
    Footer: () => ({
      component: import('~/components/TheFooter')
    })
  },
  props: {
    mobile: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters({ getSidebarState: 'sidebar/getSidebarState' })
  }
}
</script>

<style scoped lang="scss">
aside {
  transition: 0.5s ease-in-out;
  &.hide-sidebar {
    left: -50%;
  }
  .links {
    ul {
      li {
      }
      a {
        border: {
          bottom: 1px solid #202226;
        }
        &.nuxt-link-exact-active {
          color: #fff;
        }
      }
      img {
        filter: invert(1);
      }
    }
  }
}
</style>
