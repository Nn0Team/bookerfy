<template>
  <div>
    <section class="section">
      <TheNavbar/>
    </section>
    <div class="column is-half">
      <router-view class="column"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import TheNavbar from '../shared-components/TheNavbar.vue';

@Component({
  components: {
    TheNavbar,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import 'buefy.config';
</style>
