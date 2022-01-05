<template>
  <AppBox>
    <form @submit.prevent="handleSubmit">
      <AppInput v-model="text" name="palindrome" id="palindrome-input" />
      <transition name="fade" mode="out-in">
        <div key="hint" v-if="text.length === 0">
          <p>Enter the word, check if it is palindrome and add palindrome to list by submiting the form</p>
        </div>
        <ValidationMessage v-else :text="text" key="validation-message" :status="isPalindrome" />
      </transition>
    </form>
  </AppBox>
</template>

<script>
import AppInput from "../shared/AppInput.vue"
import AppBox from "../shared/AppBox.vue";
import ValidationMessage from "./ValidationMessage.vue";

import checkPalindrome from "../../helpers/is-palindrome"

export default {
  components: {
    AppInput,
    AppBox,
    ValidationMessage,
  },
  data() {
    return {
      text: "",
    };
  },
  computed: {
    isPalindrome() {
      return checkPalindrome(this.text);
    },

  },
  methods: {
    handleSubmit() {
      if (this.text.length === 0 || !this.isPalindrome)
        return;
      this.$emit("submit", this.text);
      this.text = "";
    },
  },
}
</script>