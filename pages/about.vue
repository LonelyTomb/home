<template>
  <div class="page-wrapper h-full">
    <div
      class="title flex flex-row w-full justify-between pt-6 pb-3 px-3 font-bold"
    >
      <h2 class="text-4xl text-primary font-sans">About Me.</h2>
      <img src="/svg/user.svg" alt="me" class="w-6 filter-blue" />
    </div>
    <div class="content mt-3">
      <h3 class="job-title text-2xl text-white font-sans">
        Full Stack Web Developer
      </h3>
      <div class="content-description">
        <p class="mt-3 text-white">
          Hello, I'm a Full Stack Web Developer. I'm always ready to learn
          something new everyday. Challenges? bring 'em on
        </p>
      </div>
      <div class="personal-info mt-3 text-white">
        <h3 class="content-title text-2xl mb-3 font-sans">
          Personal Information
        </h3>
        <div class="px-3 info-description">
          <p class="mb-3"><span>Name</span> : Victory Garuba</p>
          <p class="mb-3"><span>Residence</span> : Lagos, Nigeria</p>
          <p class="mb-3"><span>Email</span> : garubav@gmail.com</p>
          <p class="mb-3"><span>Phone</span> : (+234) 818 365 9972</p>
          <p class="mb-3"><span>Freelance</span> : Available</p>
        </div>
      </div>
      <div class="download-resume mt-6 mb-6">
        <a
          class="border-primary border-2 p-3 text-white hover:text-secondary hover:bg-dark"
          href="https://drive.google.com/open?id=1buyYf4X0NSBUx_5o3rCsQWYV9wctVzTM"
          target="_blank"
        >
          Download Resume
        </a>
      </div>
      <div class="services mt-10 uppercase font-bold pt-6">
        <div class="wrapper flex flex-row justify-center">
          <h3
            class="title font-sans text-center text-white text-2xl border-primary border-b-2 px-3 relative mb-6"
          >
            Services
          </h3>
        </div>
        <div class="services-grid flex flex-row text-white px-6 py-3 flex-wrap">
          <div
            class="flex flex-col justify-around mb-10 px-3 w-full md:w-1/2 lg:w-1/4 items-center"
          >
            <img
              src="/png/front-end.png"
              alt="front end developer image"
              class="mb-3 w-4/5"
            />
            <div>
              <p class="skill-title text-center font-sans mb-3 px-3">
                Front End Development
              </p>
              <div
                class="front text-center flex flex-row flex-wrap justify-center"
              >
                <div
                  v-for="(item, index) in skills.frontend"
                  :key="`front-${index}`"
                >
                  <a :href="item.url" target="_blank">
                    {{ item.name }}
                  </a>
                  <span
                    v-if="index + 1 !== skills.frontend.length"
                    class="mr-1"
                  >
                    ,
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            class="flex flex-col justify-around mb-10 px-3 w-full md:w-1/2 lg:w-1/4 items-center"
          >
            <img
              src="/png/back-end-developer.jpg"
              alt="Back end developer image"
              class="mb-3 w-4/5"
            />
            <div>
              <p class="skill-title text-center font-sans mb-3 px-3">
                Back End Development
              </p>
              <div
                class="front text-center flex flex-row flex-wrap justify-center"
              >
                <div
                  v-for="(item, index) in skills.backend"
                  :key="`back-${index}`"
                >
                  <a :href="item.url" target="_blank">
                    {{ item.name }}
                  </a>
                  <span v-if="index + 1 !== skills.backend.length" class="mr-1">
                    ,
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            class="flex flex-col justify-around mb-10 px-3 w-full md:w-1/2 lg:w-1/4 items-center"
          >
            <img
              src="/png/database.png"
              alt="database management image"
              class="mb-3 w-4/5"
            />
            <div>
              <p class="skill-title text-center font-sans mb-3 px-3">
                DevOps
              </p>
              <div
                class="front text-center flex flex-row flex-wrap justify-center"
              >
                <div
                  v-for="(item, index) in skills.database"
                  :key="`database-${index}`"
                >
                  <a :href="item.url" target="_blank">
                    {{ item.name }}
                  </a>
                  <span
                    v-if="index + 1 !== skills.database.length"
                    class="mr-1"
                  >
                    ,
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            class="flex flex-col justify-around mb-6 px-3 w-full md:w-1/2 lg:w-1/4 items-center"
          >
            <img src="/png/devops.png" alt="Devops image" class="mb-3 w-4/5" />
            <div>
              <p class="skill-title text-center font-sans mb-3 px-3">
                DevOps
              </p>
              <div
                class="front text-center flex flex-row flex-wrap justify-center"
              >
                <div
                  v-for="(item, index) in skills.devops"
                  :key="`devops-${index}`"
                >
                  <a :href="item.url" target="_blank">
                    {{ item.name }}
                  </a>
                  <span v-if="index + 1 !== skills.devops.length" class="mr-1">
                    ,
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'About',
  data() {
    return {
      skills: {
        frontend: [
          {
            name: 'HTML5',
            url: 'https://www.stackshare.io/html5'
          },
          {
            name: 'CSS',
            url: 'https://www.stackshare.io/html5'
          },
          {
            name: 'SCSS',
            url: 'https://www.stackshare.io/sass'
          },
          {
            name: 'Vue.js',
            url: 'http://www.stackshare.io/vue-js'
          },
          {
            name: 'UIKit',
            url: 'https://www.stackshare.io/uikit'
          },
          {
            name: 'Vuetify',
            url: 'https://www.stackshare.io/vuetify'
          },
          {
            name: 'Tailwind',
            url: 'https://www.stackshare.io/tailwind-css'
          }
        ],
        backend: [
          {
            name: 'Node.js',
            url: 'http://www.stackshare.io/nodejs'
          },
          {
            name: 'Express.js',
            url: 'http://www.stackshare.io/expressjs'
          },
          {
            name: 'Nuxt.js',
            url: 'http://www.stackshare.io/nuxt'
          },
          {
            name: 'Laravel',
            url: 'http://www.stackshare.io/laravel'
          }
        ],
        database: [
          {
            name: 'MongoDb',
            url: 'http://www.stackshare.io/mongodb'
          },
          {
            name: 'MySQL',
            url: 'http://www.stackshare.io/myql'
          },
          {
            name: 'Graphql',
            url: 'http://www.stackshare.io/graphql'
          }
        ],
        devops: [
          {
            name: 'Git',
            url: 'http://www.stackshare.io/git'
          },
          {
            name: 'Travis CI',
            url: 'http://www.stackshare.io/travis-ci'
          },
          {
            name: 'Docker',
            url: 'http://www.stackshare.io/docker'
          },
          {
            name: 'Heroku',
            url: 'http://www.stackshare.io/heroku'
          }
        ]
      }
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
  .filter-blue {
    filter: invert(54%) sepia(88%) saturate(4471%) hue-rotate(169deg)
      brightness(102%) contrast(103%);
  }
  & > .title {
    border: {
      bottom: 1px dashed rgba(255, 255, 255, 0.2);
    }
  }
  .info-description {
    span {
      border: {
        bottom: solid 2px #00a3e1;
      }
    }
  }
  .services {
    .title {
      &:before,
      &:after {
        position: absolute;
        width: 3px;
        height: 4px;
        background: {
          color: #00a3e1;
        }
        bottom: 0;
        content: '';
      }
      &:before {
        position: absolute;
        width: 3px;
        height: 4px;
        background: {
          color: #00a3e1;
        }
        bottom: 0;
        left: 0;
      }
      &:after {
        right: 0;
      }
    }
    .services-grid {
      .skill-title {
      }
      .front {
        a {
          cursor: pointer;
        }
      }
    }
  }
}
</style>
