<template>

	<nav class="navbar main-navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <img class="brand-size" src="../assets/brand-icon2.png" alt="brand-name">
      <a role="button" class="navbar-item">
        <span class="brand-name">Bookerfy</span>
      </a>
      <div class="navbar-item">
        <b-field class="">
          <b-input
            placeholder="Search"
            icon="magnify"
            >
          </b-input>
        </b-field>
      </div>
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <b-icon
          icon="account-circle">
          </b-icon>
        </div>
      </div>
    </div>

  </nav>

</template>

<script lang="ts">
import Vue from 'vue';
export default {};
</script>

<style lang="scss" scoped>
@import 'buefy.config';

.main-navbar {
  background-color: $navbar-background;
  padding: 0.5rem;
  a {
    font-family: $roboto-condesed-regular;
  }

  .brand-name {
    font-size: 1.4rem;
  }

  .brand-size {
    width: 3.5rem;
    height: 3.5rem;
  }

  .search-input {
    padding: 2rem;
  }
}
</style>
