<template>
  <div :class="['app-box', { 'app-box--no-space': noSpace }]">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'AppBox',
  props: {
    noSpace: {
      default: false,
      type: Boolean
    }
  }
}
</script>