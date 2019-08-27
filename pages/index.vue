<template>
  <main>
    <div class="container flex flex-col">
      <h1 class="name flex flex-col md:flex-row text-4xl font-bold">
        <span class="mx-1">Victory</span>
        <span class="mx-1">Garuba</span>
      </h1>
      <p class="description">
        <span>I am a</span>
        <span class="profession"><b>Full Stack Web Developer</b></span>
      </p>
    </div>
  </main>
</template>

<script>
export default {}
</script>

<style lang="scss">
/* Sample `apply` at-rules with Tailwind CSS
  .container {
    @apply min-h-screen flex justify-center items-center text-center mx-auto;
  }
  */
main {
  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .description {
    .profession {
      transition: 2s all;
      &:hover {
        color: red;
        width: 0;
        overflow: hidden;
      }
    }
  }
}
</style>
