<template>
  <Footer class="p-3">
    <div class="social-icons flex flex-row justify-center mb-3">
      <a href="https://www.twitter.com/lonelytomb">
        <img
          src="/svg/twitter-sign.svg"
          alt="twitter"
          class="w-6 mx-1 filter-white"
        />
      </a>
      <a href="https://www.github.com/lonelytomb">
        <img
          src="/svg/github-sign.svg"
          alt="github"
          class="w-6 mx-1 filter-white"
        />
      </a>
      <a href="https://www.linkedin.com/victory-garuba">
        <img
          src="/svg/linkedin-logo.svg"
          alt="linkedin"
          class="w-6 mx-1 filter-white"
        />
      </a>
    </div>
    <p class="text-center">
      {{ new Date().getUTCFullYear() }} &copy; Victory Garuba
    </p>
    <p class="text-center">All Rights Reserved</p>
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
