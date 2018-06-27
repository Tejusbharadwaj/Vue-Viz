import Vue from 'vue';
import D3ChartContainer from './D3ChartContainer';

export default function initialize(element) {
  return new Vue({
    el: element,
    render: h => h(D3ChartContainer),
  });
}
