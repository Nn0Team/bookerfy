<template>
	<div class="columns">
		<div class="column is-two-fifths">
			<section class=" level seciton">
				<div class="level-left">
					<div class="level-item">
						<!-- Panel controler -->
						<ThePanel/>
					</div>
					<div class="is-divider-vertical"></div>
				</div>
			</section>
		</div>
		<div class="column">
			<section class="level-right section">
				<div class="level-right">
					<!-- note spot -->
				</div>
			</section>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import ThePanel from '../../../shared-components/ThePanel.vue';

@Component({
  components: {
    ThePanel,
  },
})
export default class Dashboard extends Vue {}
</script>

<style lang="scss" scoped>
</style>
