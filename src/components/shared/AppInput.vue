<template>
  <div class="app-input__wrapper">
    <label class="app-input__label" v-if="label.length" :for="id"></label>
    <input class="app-input__input" :type="type" :id="id" :name="name" v-model="vValue" />
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    vValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
}
</script>