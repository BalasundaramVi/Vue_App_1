<template>
	<div class="container">
		<div class="row">
			<div class="col-xs-12">
				<app-quote>
					<h2>{{ quoteTitle }}</h2>
					<p>A wonderful Quote</p>
				</app-quote>
			</div>
		</div>
	</div>
</template>

<script>
import Quote from './components/Quote.vue';

export default {
		components: {
			appQuote: Quote,
		},
		data: () => ({
			quoteTitle: 'The Quote',
		})
}
</script>

<style>

</style>