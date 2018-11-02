<template>
	<div class="columns">
		<div class="column">
			<div class="columns">
				<div class="column is-2">
					<MainMenu />
				</div>
				<div class="column is-9">
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import MainMenu from './AppMainMenu.vue';

@Component({
  components: {
    MainMenu,
  },
})
export default class Dashboard extends Vue {}
</script>

<style lang="sass" scoped>
</style>
