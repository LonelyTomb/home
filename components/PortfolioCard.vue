<template>
  <div class="portfolio-card bg-white rounded shadow-lg hover:shadow-2xl">
    <a :href="portfolio.url" target="_blank">
      <img
        :src="portfolio.image"
        :alt="portfolio.name"
        class="object-cover object-left portfolio-image rounded-t"
      />
    </a>
    <div class="flex flex-row p-4 justify-between items-center">
      <p>
        <a :href="portfolio.url" target="_blank">{{ portfolio.name }}</a>
      </p>
      <a :href="portfolio.url" target="_blank">
        <img
          src="https://res.cloudinary.com/nazarick/image/upload/v1612573375/netwiq/export.svg"
          alt=""
          class="object-cover w-6"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioCard',
  props: {
    portfolio: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss">
.portfolio-card {
  .portfolio-image {
    height: 18.25rem;
  }
}
</style>
