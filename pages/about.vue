<template>
  <main class="h-screen px-3 absolute right-0 w-full sm:w-2/3 md:w-5/6">
    <div
      class="title flex flex-row w-full justify-between pt-6 pb-3 px-3 font-bold"
    >
      <h2 class="text-4xl text-primary font-sans">About Me.</h2>
      <img src="/svg/user.svg" alt="me" class="w-6 filter-blue" />
    </div>
    <div class="content mt-3">
      <p class="job-title text-lg text-white">Full Stack Web Developer</p>
      <div class="content-description">
        <p class="mt-3 text-white">
          Hello, I'm a Full Stack Web Developer. I'm always ready to learn
          something new everyday. Challenges? bring 'em on
        </p>
      </div>
      <div class="personal-info mt-3 text-white">
        <p class="content-title text-2xl">Personal Information</p>
        <div class="px-3 info-description">
          <p class="mb-1"><span>Name</span> : Victory Garuba</p>
          <p class="mb-1"><span>Residence</span> : Lagos, Nigeria</p>
          <p class="mb-1"><span>Email</span> : garubav@gmail.com</p>
          <p class="mb-1"><span>Phone</span> : (+234) 818 365 9972</p>
          <p class="mb-1"><span>Freelance</span> : Available</p>
        </div>
      </div>
      <div class="download-resume mt-3">
        <button
          class="border-primary border-2 p-3 text-white hover:text-secondary hover:bg-dark"
        >
          Download Resume
        </button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped lang="scss">
main {
  .filter-blue {
    filter: invert(54%) sepia(88%) saturate(4471%) hue-rotate(169deg)
      brightness(102%) contrast(103%);
  }
  .title {
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
}
</style>
