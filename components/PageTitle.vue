<template>
  <div
    class="title flex flex-row w-full justify-between pt-6 pb-3 px-3 font-bold"
  >
    <h2 class="text-4xl text-primary font-sans"><slot></slot></h2>
    <img :src="image" alt="title" class="w-6 filter-blue" />
  </div>
</template>

<script>
export default {
  name: 'PageTitle',
  props: {
    image: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.title {
  border: {
    bottom: 1px dashed rgba(255, 255, 255, 0.2);
  }

  .filter-blue {
    filter: invert(54%) sepia(88%) saturate(4471%) hue-rotate(169deg)
      brightness(102%) contrast(103%);
  }
}
</style>
