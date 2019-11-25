<template>
  <div class="input-field">
    <input type="text" class="validate" v-model="val">
    <label for="first_name">First Name</label>
  </div>
</template>

<script>
export default {
  name: 'PsInput',
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
