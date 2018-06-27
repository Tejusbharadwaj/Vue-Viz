<template>
  <d3-chart :graph-data="graphData"/>
</template>


<script>
import _ from 'lodash';
import { mapState } from 'vuex';
import D3Chart from '../components/D3Chart.vue';

export default {
  components: {
    D3Chart,
  },
  computed: {
    ...mapState({
      graphData: graphData => _.get(graphData, 'graphData', {}),
    }),
  },

};
</script>

<style>

</style>
