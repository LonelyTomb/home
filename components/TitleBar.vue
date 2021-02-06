<template>
  <div class="wrapper flex flex-row justify-center">
    <h3
      class="title-bar font-sans text-center text-white text-3xl border-primary border-b-2 px-3 relative mb-6 font-bold uppercase"
    >
      <slot></slot>
    </h3>
  </div>
</template>

<script>
export default {
  name: 'TitleBar'
}
</script>

<style lang="scss">
.title-bar {
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
</style>
