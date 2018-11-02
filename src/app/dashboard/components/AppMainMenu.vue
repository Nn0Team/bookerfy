<template>
  <div>
    <aside class="menu">
      <ul class="menu-list">
        <p class="menu-label">General</p>
        <li><a class="is-active"><b-icon icon="folder"/>Folders</a></li>
        <li><a><b-icon icon="pencil"/> Notes</a></li>
      </ul>
      <div class="is-divider"></div>
      <ul class="menu-list">
        <p class="menu-label">Labels</p>
        <li><a><b-icon icon="label"/>Work</a></li>
        <li><a><b-icon icon="label"/>Life</a></li>
      </ul>
      <div class="is-divider"></div>
      <ul class="menu-list">
        <p class="menu-label">Actions</p>
        <li><a><b-icon icon="archive"/>Archive</a></li>
        <li><a><b-icon icon="delete"/>Trash</a></li>
      </ul>
    </aside>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class MainMenu extends Vue {}
</script>

<style lang="sass" scoped>
@import 'buefy.config'
</style>
