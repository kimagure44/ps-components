import { mount } from '@vue/test-utils';
import PsButton from '@/components/ps-button.vue';

describe('Realizamos los test para el componente <ps-button>', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(PsButton);
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('El componente se una instancia de Vue', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  describe('Propiedad "icon" e "icon-name"', () => {
    it('No recibe ningún icono y alinieación incorrecta', () => {
      wrapper.setProps({
        icon: 1,
      });
      expect(wrapper.find('i.l').exists()).toBeFalsy();
    });
    it('No recibe ningún icono y alineado a la izquierda', () => {
      wrapper.setProps({
        icon: 'left',
      });
      expect(wrapper.find('i.left').exists()).toBeTruthy();
    });
    it('No recibe ningún icono y alineado a la derecha', () => {
      wrapper.setProps({
        icon: 'right',
      });
      expect(wrapper.find('i.right').exists()).toBeTruthy();
    });
    it('Recibe un icono sin alinear', () => {
      wrapper.setProps({
        iconName: 'icon-activity',
      });
      expect(wrapper.find('i').exists()).toBeFalsy();
    });
    it('Recibe un icono y alineado a la izquierda', () => {
      wrapper.setProps({
        icon: 'left',
        iconName: 'icon-activity',
      });
      expect(wrapper.find('i.left.icon-activity').exists()).toBeTruthy();
    });
    it('Recibe un icono y alineado a la derecha', () => {
      wrapper.setProps({
        icon: 'right',
        iconName: 'icon-activity',
      });
      expect(wrapper.find('i.right.icon-activity').exists()).toBeTruthy();
    });
    it('El valor y/o el tipo de la propiedad no es correcto', () => {
      const { icon } = wrapper.vm.$options.props;
      try {
        expect(icon.validator('123123')).toBe('large');
      } catch (e) {
        expect(e.message).toBe("Componente <ps-button> => El valor de la propiedad 'icon' es incorrecta. Los posibles valores son 'left' o 'right'");
      }
    });
  });

  describe('Propiedad "flat"', () => {
    it('La propiedad es igual a "true"', () => {
      wrapper.setProps({
        flat: true,
      });
      expect(wrapper.find('a.btn-flat').exists()).toBeTruthy();
    });
    it('El valor y/o el tipo de la propiedad no es correcto', () => {
      const { flat } = wrapper.vm.$options.props;
      try {
        expect(flat.validator('123123')).toBe(Boolean);
      } catch (e) {
        expect(e.message).toBe("Componente <ps-button> => El valor de la propiedad 'flat' es incorrecta. Los posibles valores son 'true' o 'false'");
      }
    });
  });

  describe('Propiedad "size"', () => {
    it('La propiedad es igual a "large"', () => {
      wrapper.setProps({
        size: 'large',
      });
      expect(wrapper.find('a.btn-large').exists()).toBeTruthy();
    });
    it('La propiedad es igual a "small"', () => {
      wrapper.setProps({
        size: 'small',
      });
      expect(wrapper.find('a.btn-small').exists()).toBeTruthy();
    });
    it('El valor y/o el tipo de la propiedad no es correcto', () => {
      const { size } = wrapper.vm.$options.props;
      try {
        expect(size.validator('123123')).toBe('large');
      } catch (e) {
        expect(e.message).toBe("Componente <ps-button> => El valor de la propiedad 'size' es incorrecta. Los posibles valores son 'small' o 'large'");
      }
    });
  });

  describe('Propiedad "disabled"', () => {
    it('La propiedad es igual a "true"', () => {
      wrapper.setProps({
        disabled: true,
      });
      expect(wrapper.find('a.disabled').exists()).toBeTruthy();
    });
    it('El valor y/o el tipo de la propiedad no es correcto', () => {
      const { disabled } = wrapper.vm.$options.props;
      try {
        expect(disabled.validator('123123')).toBe(Boolean);
      } catch (e) {
        expect(e.message).toBe("Componente <ps-button> => El valor de la propiedad 'disable' es incorrecta. Los posibles valores son 'true' o 'false'");
      }
    });
  });

  describe('Comprobamos los métodos y eventos', () => {
    it('Hacemos click en el botón', () => {
      const btn = wrapper.find('a');
      btn.trigger('click');
      expect(wrapper.emitted().click.length).toBe(1);
    });
  });
});
