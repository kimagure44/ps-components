<template>
  <div role="alert" class="v-alert v-sheet theme--light elevation-24 v-alert--border v-alert--border-top blue lighten-2" style="" normal="true">
    <div class="v-alert__wrapper">
      <div class="v-alert__content">
        Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. In auctor lobortis lacus.
      </div>
    <div class="v-alert__border v-alert__border--top">
  </div>
  </div></div>
</template>

<script>
export default {
  name: 'PsAlert',
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
  },
  methods: {
    msn(e) {
      console.log(e);
    },
  },
  computed: {
    val: {
      get() {
        return this.value;
      },
      set(data) {
        this.$emit('input', data);
      },
    },
  },
};
</script>
