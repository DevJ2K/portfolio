<template>

	<div
		class="custom-shadow-lg flex max-w-xs flex-col justify-between overflow-hidden rounded-2xl border-ui-border bg-ui-bg dark:border-d-ui-border dark:bg-d-ui-bg  b_project_card:hidden">
		<div>
			<div>
				<AnimatedPlaceholder class=" size-full h-44" />
			</div>
			<div class="flex flex-col gap-4 p-6">
				<AnimatedPlaceholder class="w-2/6 rounded-full" />
				<div class="flex flex-col gap-1.5">
					<AnimatedPlaceholder class=" h-3 rounded-full" />
					<AnimatedPlaceholder class=" h-3 w-10/12 rounded-full" />
					<AnimatedPlaceholder class=" h-3 w-11/12 rounded-full" />
					<AnimatedPlaceholder class=" h-3 w-9/12 rounded-full" />
					<AnimatedPlaceholder class=" h-3 w-6/12 rounded-full" />
				</div>
				<div class="flex size-full flex-col items-start justify-start">
					<div class="flex flex-wrap justify-start gap-2">
						<div v-for="_ in 5" :key="_">
							<AnimatedPlaceholder class="w-16 cursor-default rounded-xl px-4 py-2 text-xs" />
						</div>
					</div>
				</div>
			</div>
		</div>
		<div>
			<div class="h-px w-full bg-ui-border/50 dark:bg-d-ui-border/50"></div>
			<div class="flex w-full flex-col items-center justify-center gap-2 p-3 md:flex-row">
				<AnimatedPlaceholder class="size-full rounded-xl px-3 py-2 text-sm" />
				<AnimatedPlaceholder class="size-full rounded-xl px-3 py-2 text-sm" />
			</div>
		</div>
	</div>

	<div
		class="custom-shadow-lg hidden w-full flex-row overflow-hidden rounded-2xl border-subtle-border bg-subtle-bg dark:border-d-subtle-border dark:bg-d-ui-bg b_project_card:flex">
		<div class="w-9/12">
			<AnimatedPlaceholder class="size-full" />
		</div>
		<div class="flex w-full flex-col items-start gap-4 p-4">
			<div class="flex w-full flex-col gap-4">

				<AnimatedPlaceholder class="w-2/6 rounded-full text-lg sm:text-2xl" />

				<div class="flex w-full flex-col flex-nowrap gap-1">
					<AnimatedPlaceholder class=" w-full rounded-full text-xs" />
					<AnimatedPlaceholder class=" w-10/12 rounded-full text-xs" />
					<AnimatedPlaceholder class=" w-11/12 rounded-full text-xs" />
				</div>
				<div class="flex size-full flex-col items-start justify-start">
					<div class="flex flex-wrap justify-start gap-2">
						<div v-for="_ in 5" :key="_">
							<AnimatedPlaceholder class="w-16 cursor-default rounded-xl px-4 py-2 text-xs" />
						</div>
					</div>
				</div>
			</div>
			<div>

				<div class="flex flex-col items-center justify-center gap-2 pt-2 md:flex-row">

					<AnimatedPlaceholder class="h-full w-24 rounded-2xl px-3 py-2 text-sm" />
					<AnimatedPlaceholder class="h-full w-36 rounded-2xl px-3 py-2 text-sm" />
				</div>
			</div>

		</div>
	</div>
</template>

<script setup>
import AnimatedPlaceholder from './AnimatedPlaceholder.vue';


</script>
