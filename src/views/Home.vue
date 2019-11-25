<template>
  <div class="home">
    <div class="separator">
      <ps-button @click="evt" class="deep-orange accent-1">
        Boton1
      </ps-button>
    </div>
    <div class="separator">
      <ps-button icon="left" icon-name="icon-activity" class="brown darken-4">
        Boton2
      </ps-button>
    </div>
    <div class="separator">
      <ps-button icon-name="icon-activity" class="brown darken-4">
        Boton3
      </ps-button>
    </div>
    <div class="separator">
      <ps-button icon="right" icon-name="icon-activity" :flat="true">
        Boton4
      </ps-button>
    </div>
    <div class="separator">
      <ps-button icon="left" icon-name="icon-activity" size="large" class="green darken-4">
        Boton5
      </ps-button>
    </div>
    <div class="separator">
      <ps-button icon="right" icon-name="icon-activity" :disabled="true" class="light-blue darken-2">
        Boton6
      </ps-button>
    </div>
  </div>
</template>

<script>
import PsButton from '@/components/ps-button.vue';

export default {
  name: 'home',
  data() {
    return {
      texto: '',
    };
  },
  methods: {
    evt(e) {
      console.log(e);
    },
  },
  components: {
    PsButton,
  },
};
</script>

<style lang="scss" scoped>
  .separator {
    margin: 10px;
  }
</style>
