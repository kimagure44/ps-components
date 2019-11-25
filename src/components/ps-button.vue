<template>
  <a :class="classCSS" @click="onClick">
    <i :class="[iconName, icon]" v-if="hasIcon" />
    <slot name="default" />
  </a>
</template>

<script>
export default {
  name: 'PsButton',
  props: {
    icon: {
      type: String,
      default: '',
      validator: (value) => {
        const val = !['left', 'right'].includes(value) && value.length > 0;
        if (val) {
          const msn = 'Componente <ps-button> => El valor de la propiedad \'icon\' es incorrecta. Los posibles valores son \'left\' o \'right\'';
          throw Error(msn);
        }
        return true;
      },
    },
    iconName: {
      type: String,
      default: '',
    },
    flat: {
      type: Boolean,
      default: false,
      validator: (value) => {
        const val = typeof value === 'boolean';
        if (!val) {
          const msn = 'Componente <ps-button> => El valor de la propiedad \'flat\' es incorrecta. Los posibles valores son \'true\' o \'false\'';
          throw Error(msn);
        }
        return true;
      },
    },
    size: {
      type: String,
      default: '',
      validator: (value) => {
        const val = !['large', 'small'].includes(value) && value.length > 0;
        if (val) {
          const msn = 'Componente <ps-button> => El valor de la propiedad \'size\' es incorrecta. Los posibles valores son \'small\' o \'large\'';
          throw Error(msn);
        }
        return true;
      },
    },
    disabled: {
      type: Boolean,
      default: false,
      validator: (value) => {
        const val = typeof value === 'boolean';
        if (!val) {
          const msn = 'Componente <ps-button> => El valor de la propiedad \'disable\' es incorrecta. Los posibles valores son \'true\' o \'false\'';
          throw new Error(msn);
        }
        return true;
      },
    },
  },
  computed: {
    hasIcon() {
      return this.icon.length && ['left', 'right'].includes(this.icon);
    },
    classCSS() {
      return [
        'waves-effect',
        'waves-light',
        'btn',
        this.flat ? 'btn-flat' : '',
        this.size ? `btn-${this.size}` : '',
        this.disabled ? 'disabled' : ''];
    },
  },
  methods: {
    onClick(e) {
      this.$emit('click', e);
    },
  },
};
</script>
