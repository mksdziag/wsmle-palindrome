<template>
  <div id="app">
    <AppContainer>
      <AppHeader />
      <AppColumns>
        <PalindromeForm @submit="addToList" slot="left" />
        <PalindromeList :items="list" slot="right" />
      </AppColumns>
    </AppContainer>
  </div>
</template>

<script>
import { readFromLs, saveToLs } from "./helpers/local-storage"
import PalindromeList from "./components/palindrome/List.vue"
import PalindromeForm from "./components/palindrome/Form.vue"
import AppHeader from "./components/shared/AppHeader.vue"
import AppContainer from "./components/shared/AppContainer.vue"
import AppColumns from "./components/shared/AppColumns.vue"

export default {
  name: 'App',
  components: {
    PalindromeList,
    PalindromeForm,
    AppHeader,
    AppContainer,
    AppColumns
  },
  data() {
    return {
      list: []
    }
  },

  methods: {
    addToList(text) {
      //already in the list
      if (this.list.findIndex(item => item === text) > -1) return

      this.list.push(text);
      saveToLs('palindromes', this.list);
    },

  },
  mounted() {
    const lsList = readFromLs('palindromes');
    if (Array.isArray(lsList)) this.list = lsList;
  },
}
</script>

