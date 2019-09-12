<template>
  <div class="page mx-auto relative min-h-screen">
    <MobileSidebar
      :mobile="true"
      class="w-1/2 sm:w-1/3 md:w-1/6 h-full bg-dark md:hidden z-50 fixed"
    ></MobileSidebar>
    <div class="wrapper min-h-full">
      <MobileHeader class="md:hidden fixed w-full z-30"></MobileHeader>
      <div class="flex flex-row min-h-full">
        <Sidebar
          class="w-1/2 sm:w-1/3 md:w-1/6 h-full bg-dark hidden md:flex"
        ></Sidebar>
        <main
          class="w-full md:w-5/6 h-auto min-h-screen right-0 absolute p-10 pt-6 md:p-3 overflow-hidden"
        >
          <nuxt />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Sidebar: () => ({ component: import('~/components/Sidebar') }),
    MobileSidebar: () => ({ component: import('~/components/Sidebar') }),
    MobileHeader: () => ({ component: import('~/components/MobileHeader') })
  }
}
</script>
<style lang="scss" scoped>
.page-enter-active {
  animation: rotateSlideInFromRight 0.8s ease-out;
}
.page-leave-active {
  animation: rotateSlideOutToRight 0.8s ease-in;
}
.rotateSlideOutToRight {
  -webkit-animation: rotateSlideOutToRight 1s both ease;
  animation: rotateSlideOutToRight 1s both ease;
}
@-webkit-keyframes rotateSlideOutToRight {
  0% {
  }
  25% {
    opacity: 0.5;
    -webkit-transform: translateZ(-500px);
  }
  75% {
    opacity: 0.5;
    -webkit-transform: translateZ(-500px) translateX(200%);
  }
  100% {
    opacity: 0.5;
    -webkit-transform: translateZ(-500px) translateX(200%);
  }
}
@keyframes rotateSlideOutToRight {
  0% {
  }
  25% {
    opacity: 0.5;
    -webkit-transform: translateZ(-500px);
    transform: translateZ(-500px);
  }
  75% {
    opacity: 0.5;
    -webkit-transform: translateZ(-500px) translateX(200%);
    transform: translateZ(-500px) translateX(200%);
  }
  100% {
    opacity: 0.5;
    -webkit-transform: translateZ(-500px) translateX(200%);
    transform: translateZ(-500px) translateX(200%);
  }
}
.rotateSlideInFromRight {
  -webkit-animation: rotateSlideInFromRight 1s both ease;
  animation: rotateSlideInFromRight 1s both ease;
}
@-webkit-keyframes rotateSlideInFromRight {
  0%,
  25% {
    opacity: 0.5;
    -webkit-transform: translateZ(-500px) translateX(200%);
  }
  75% {
    opacity: 0.5;
    -webkit-transform: translateZ(-500px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateZ(0) translateX(0);
  }
}
@keyframes rotateSlideInFromRight {
  0%,
  25% {
    opacity: 0.5;
    -webkit-transform: translateZ(-500px) translateX(200%);
    transform: translateZ(-500px) translateX(200%);
  }
  75% {
    opacity: 0.5;
    -webkit-transform: translateZ(-500px);
    transform: translateZ(-500px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateZ(0) translateX(0);
    transform: translateZ(0) translateX(0);
  }
}

main {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
  background: {
    image: url('/png/bg.jpg');
    repeat: no-repeat;
    size: cover;
  }
  perspective: 1200px;
}
</style>
