<template>
  <Footer class="p-3 mt-10">
    <div class="social-icons flex flex-row justify-center mb-3">
      <a href="https://www.twitter.com/lonelytomb" target="_blank">
        <img
          src="/svg/twitter-sign.svg"
          alt="twitter"
          class="w-6 mx-1 filter-white"
        />
      </a>
      <a href="https://www.github.com/lonelytomb" target="_blank">
        <img
          src="/svg/github-sign.svg"
          alt="github"
          class="w-6 mx-1 filter-white"
        />
      </a>
      <a href="https://www.linkedin.com/in/victory-garuba" target="_blank">
        <img
          src="/svg/linkedin-logo.svg"
          alt="linkedin"
          class="w-6 mx-1 filter-white"
        />
      </a>
    </div>
    <p class="text-center text-white">
      {{ new Date().getUTCFullYear() }} &copy; Victory Garuba
    </p>
    <p class="text-center text-white">All Rights Reserved</p>
  </Footer>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

<style scoped lang="scss">
footer {
  .filter-white {
    filter: invert(1);
  }
}
</style>
