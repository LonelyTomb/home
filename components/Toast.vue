<template>
  <div class="toast-container">
    <div class="toast">
      <div class="message">
        <p>{{ message }}</p>
      </div>
      <div class="close" @click="hideToast()">
        x
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Toast',
  props: {
    message: {
      type: String,
      default: ''
    }
  },
  methods: {
    ...mapActions({ hideToast: 'toast/hideToast' })
  }
}
</script>

<style scoped lang="scss">
.toast-container {
  position: fixed;
  bottom: 10px;
  left: 10px;
  z-index: 100;

  .toast {
    background-color: #333;
    color: #eee;
    margin-bottom: 8px;
    font-size: 0.85rem;
    border-radius: 1px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    overflow: hidden;
    min-width: 300px;
    user-select: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: center;

    .message {
      padding: 12px 16px;
      width: 100%;
    }

    .close {
      padding: 12px 16px;
      opacity: 0.7;
      cursor: pointer;
    }
  }
}
</style>
