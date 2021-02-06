<!--suppress HtmlUnknownTarget -->
<template>
  <div class="page-wrapper h-full">
    <page-title :image="image">Contact Me.</page-title>
    <div class="content mt-3 pl-3">
      <title-bar class="mt-10"> Let's Talk</title-bar>
      <div class="contact-form mt-6 w-full lg:w-2/3 mx-auto mb-10">
        <div class="flex flex-col lg:flex-row">
          <div class="relative mb-10 w-full lg:w-1/2">
            <input
              id="name"
              v-model="user.name"
              :class="{ filled: user.name !== '' }"
              type="text"
              class="w-full bg-transparent text-white px-3 py-1"
            />
            <label for="name" class="absolute left-0 text-white bottom-1"
              >Name</label
            >
          </div>
          <div class="relative mb-10 lg:ml-6 w-full lg:w-1/2">
            <input
              id="email"
              v-model="user.email"
              :class="{ filled: user.email !== '' }"
              type="text"
              class="w-full bg-transparent text-white px-3 py-1"
            />
            <label for="email" class="absolute left-0 text-white bottom-1"
              >Email</label
            >
          </div>
        </div>
        <div class="mt-6 w-full relative">
          <textarea
            id="message"
            v-model="user.message"
            :class="{ filled: user.message !== '' }"
            name="message"
            cols="30"
            rows="5"
            class="w-full bg-transparent text-white px-3 py-1"
          />
          <label for="message" class="absolute left-0 text-white top-0"
            >How can I help you?</label
          >
        </div>
        <div class="flex justify-center mt-6">
          <button
            class="border-2 border-primary px-6 py-1 text-primary relative"
            @click.prevent="sendContactMail()"
          >
            SEND MESSAGE
          </button>
        </div>
      </div>
      <div
        class="contact-details flex flex-col lg:flex-row items-center mt-10 pt-6"
      >
        <div class="w-full flex flex-col justify-center items-center mb-6">
          <img src="/svg/paper-plane.svg" alt="location" class="w-1/6 mb-3" />
          <p class="text-white">garubav@gmail.com</p>
        </div>
        <div class="w-full flex flex-col justify-center items-center mb-6">
          <img src="/svg/placeholder.svg" alt="location" class="w-1/6 mb-3" />
          <p class="text-white">Lagos, Nigeria</p>
        </div>
        <div class="w-full flex flex-col justify-center items-center mb-6">
          <img
            src="/svg/telephone-handle-silhouette.svg"
            alt="location"
            class="w-1/6 mb-3"
          />
          <p class="text-white">(+234) 818 365 9972</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Contact',
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
      image: '/svg/envelope.svg',
      user: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  mounted() {
    this.toggleSidebar('reset')
  },
  methods: {
    ...mapActions({
      toggleSidebar: 'sidebar/toggleSidebar',
      showToast: 'toast/showToast'
    }),
    async sendContactMail() {
      const resetUser = {
        name: '',
        email: '',
        message: ''
      }
      try {
        this.showToast('Mail Sending....')
        await this.$axios.$post('/api/contact', this.user)
        this.user = resetUser
        this.showToast('Mail Sent.')
        setTimeout(() => {
          this.hideToast()
        }, 3000)
      } catch (e) {
        this.showToast('Unable to Send Mail')
        // console.log(`Unable to Complete: ${e}`)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.contact-form {
  input,
  textarea {
    border: 2px solid #999;
    transition: all 0.5s ease;
    & + label {
      left: 10px;
      bottom: 7px;
      transition: all 0.2s ease;
      cursor: text;
    }
    &:focus {
      border: {
        color: #fff;
      }
    }
    &:focus + label {
      transform: translateY(-30px);
    }
    &.filled + label {
      transform: translateY(-30px);
    }
  }
  button {
    transition: all 0.3s ease;
    &:hover {
      color: #000;
    }
    &:hover:after {
      opacity: 1;
      left: 0;
      width: 100%;
      background: {
        color: #00a3e1;
      }
    }
    &:after {
      position: absolute;
      content: '';
      width: 30%;
      height: 100%;
      top: 0;
      left: 35%;
      transition: all 0.3s ease;
      z-index: -1;
      opacity: 0;
    }
  }
}
</style>
