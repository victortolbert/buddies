import { shallowMount, createLocalVue } from '@vue/test-utils';
import RingChart from './RingChart.vue';

const localVue = createLocalVue();

const value = 10;

describe('RingChart', () => {
  it('Snapshot test for RingChart', () => {
    const wrapper = shallowMount(RingChart, {
      localVue,
      propsData: {
        value
      }
    });
    expect(wrapper).toMatchSnapshot();
  });
});
