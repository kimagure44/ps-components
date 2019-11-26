/* eslint-disable import/no-extraneous-dependencies */
// import M from 'materialize-css/dist/js/materialize.min';
import { storiesOf } from '@storybook/vue';
import 'materialize-css/dist/css/materialize.min.css';
import PsButton from '@/components/ps-button.vue';
import '../styles/icomoon/style.css';

storiesOf('ps-button', module)
  .add('Sin nada', () => ({
    components: { PsButton },
    template: '<ps-button></ps-button>',
  }))
  .add('Con texto', () => ({
    components: { PsButton },
    template: '<ps-button>Botón</ps-button>',
  }))
  .add('Con texto icono a la izquerda', () => ({
    components: { PsButton },
    template: '<ps-button icon="left" icon-name="icon-activity">Botón</ps-button>',
  }))
  .add('Con texto icono a la derecha', () => ({
    components: { PsButton },
    template: '<ps-button icon="right" icon-name="icon-activity">Botón</ps-button>',
  }))
  .add('Plano', () => ({
    components: { PsButton },
    template: '<ps-button icon="right" icon-name="icon-activity" :flat="true">Botón</ps-button>',
  }))
  .add('Tamaño', () => ({
    components: { PsButton },
    template: '<ps-button icon="right" icon-name="icon-activity" size="large">Botón</ps-button>',
  }))
  .add('Deshabilitado', () => ({
    components: { PsButton },
    template: '<ps-button icon="right" icon-name="icon-activity" size="large" :disabled="true">Botón</ps-button>',
  }));
