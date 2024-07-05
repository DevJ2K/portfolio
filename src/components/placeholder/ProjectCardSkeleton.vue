<template>

	<div
		class="custom-shadow-lg flex max-w-xs flex-col justify-between overflow-hidden rounded-2xl border-ui-border bg-ui-bg dark:border-d-ui-border dark:bg-d-ui-bg  b_project_card:hidden">
		<div>
			<div>
				<AnimatedPlaceholder class=" size-full min-h-44" />
			</div>
			<div class="flex flex-col gap-4 p-6">
				<!-- <h1 class=" text-lg font-semibold text-high-contrast-text dark:text-d-high-contrast-text sm:text-xl">Salut</h1> -->
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
				<AnimatedPlaceholder class="size-full rounded-xl px-3 py-2 text-sm"/>
				<AnimatedPlaceholder class="size-full rounded-xl px-3 py-2 text-sm"/>
			</div>
		</div>
	</div>
	<div class="hidden size-60 bg-red-500 b_project_card:flex">

	</div>

	<!-- <div class="flex w-full rounded-md bg-red-500 px-3 py-6 shadow-md">
			<div class="flex flex-1 flex-col gap-2">
				<AnimatedPlaceholder class="max-w-[50%]" />
				<AnimatedPlaceholder class="max-w-[40%]" />
			</div>

			<div class="flex flex-1 flex-col items-end gap-2">
				<AnimatedPlaceholder class="w-full max-w-[50px]" />
				<AnimatedPlaceholder class="w-full max-w-[75px]" />
			</div>
		</div> -->
</template>

<script setup>
import AnimatedPlaceholder from './AnimatedPlaceholder.vue';


</script>
