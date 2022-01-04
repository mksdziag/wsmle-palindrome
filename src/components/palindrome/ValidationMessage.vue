<template>
  <div class="validation-message">
    <span v-if="text">"{{ text }}"</span>
    <span
      :class="[
      'validation-message__status',
      `validation-message__status--${status ? 'success' : 'error'}`]"
      v-text="statusText"
    /> palindrom!
  </div>
</template>
<script>
export default {
  props: {
    status: {
      type: Boolean,
      default: true
    },
    text: {
      type: String,
      default: ''
    }
  },
  computed: {
    statusText() {
      return this.status ? "is" : "is not";
    },
  }
}
</script>