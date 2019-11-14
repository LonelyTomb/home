<!--suppress HtmlUnknownTarget -->
<template>
  <div class="page-wrapper h-full">
    <page-title :image="image">Resume.</page-title>
    <div class="content">
      <div class="experiences">
        <title-bar class="mt-10">Experience</title-bar>
        <div
          class="experience-grid px-3 flex flex-col lg:flex-row flex-wrap ml-1 md:ml-10"
        >
          <experience
            v-for="(experience, index) in experiences"
            :key="`experience-${index}`"
            :from="experience.from"
            :to="experience.to"
            class="w-full lg:w-1/2 mb-10 p-1"
          >
            <template #title>{{ experience.title }}</template>
            <template #location>{{ experience.location }}</template>
            <template #description>
              {{ experience.description }}
            </template>
          </experience>
        </div>
      </div>
      <div class="education mt-10">
        <title-bar class="mt-10">Education</title-bar>
        <div
          class="experience-grid px-3 flex flex-col lg:flex-row flex-wrap ml-1 md:ml-10"
        >
          <experience
            v-for="(education, index) in educations"
            :key="`education-${index}`"
            :from="education.from"
            :to="education.to"
            class="w-full lg:w-1/2 mb-10 p-1"
          >
            <template #title>{{ education.title }}</template>
            <template #location>{{ education.location }}</template>
            <template #description>
              {{ education.description }}
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
      experiences: [
        {
          title: 'Front End Engineer',
          location: 'Fluidangle',
          description:
            'In charge of creating awesome user interfaces, conversions of ui/ux designs to actual code.',
          from: '07/2019',
          to: 'Present'
        },
        {
          title: 'Operations Support Services Engineer (WEB)',
          location: 'Huawei Technologies Co. Ltd',
          description:
            'I had to develop web solutions for various telecommunications clients. I also performed periodic maintenance of both foreign and local developed codebase. It was also part of my job to act as an interface between foreign developers and local based clients',
          from: '10/2018',
          to: '06/2019'
        },
        {
          title: 'Graduate Intern',
          location: 'Microtel Systems Limited',
          description: '',
          from: '12/2017',
          to: '10/2018'
        },
        {
          title: 'Web Developer Intern',
          location: 'Havenda Plus Web School',
          description:
            "I participated in the training of clients in the company's web development courses. I was able to build some websites from web development technologies learned during this period.",
          to: '09/2016',
          from: '07/2016'
        }
      ],
      educations: [
        {
          title: 'Responsive Web Design Certification',
          location: 'FreeCodeCamp',
          description: '',
          from: '',
          to: ''
        },
        {
          title: 'Google Africa Scholarship Mobile Web Specialist Course',
          location: 'Andela',
          description: '',
          from: '2018',
          to: '2018'
        },
        {
          title: '(B.Sc.) Computer Science',
          location: 'University of Ilorin',
          description: '',
          from: '2013',
          to: '2017'
        }
      ],
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
}
</style>
