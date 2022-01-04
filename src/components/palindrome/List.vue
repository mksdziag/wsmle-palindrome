<template>
  <AppBox no-space>
    <div class="list-wrapper">
      <h2 class="list-wrapper__title">Palindrome list</h2>

      <ul class="palindromes-list" v-if="items.length">
        <transition-group name="fade" mode="out-in">
          <li v-for="item in items" :key="item" class="palindromes-list__item">{{ item }}</li>
        </transition-group>
      </ul>
    </div>
  </AppBox>
</template>

<script>
import AppBox from "../shared/AppBox.vue"
export default {
  name: "PalindromeList",
  components: { AppBox },
  props: {
    items: {
      type: Array,
      required: true
    },
  },
}
</script>