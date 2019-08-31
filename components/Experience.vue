<template>
  <div class="experience relative p-3 mt-3">
    <span class="line bg-primary absolute top-0 h-full"></span>
    <div class="content ml-10 text-white">
      <h4 class="uppercase text-lg font-bold"><slot name="title"></slot></h4>
      <h5 class="uppercase text-sm text-primary font-semibold">
        <slot name="location"></slot>
      </h5>
      <div class="description py-3">
        <p>
          <slot name="description"></slot>
        </p>
      </div>
    </div>
    <span class="year absolute h-full top-0 text-primary">
      <span class="to absolute"> {{ to }} </span>
      <span class="from absolute"> {{ from }} </span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Experience',
  props: {
    from: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.experience {
  .line {
    width: 2px;
    left: -10px;
    &:before,
    &:after {
      content: '';
      width: 10px;
      height: 10px;
      -webkit-border-radius: 50%;
      border-radius: 50%;
      border: 2px solid #00a3e1;
      position: absolute;
      left: -4px;
    }
    &:before {
      top: -10px;
    }
    &:after {
      bottom: -10px;
    }
  }
  .year {
    .to,
    .left {
      left: -10px;
    }
    .to {
      top: -18px;
    }
    .from {
      bottom: -18px;
    }
  }
}
</style>
