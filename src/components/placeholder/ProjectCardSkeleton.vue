<template>

	<div
		class="custom-shadow-lg flex max-w-xs flex-col justify-between overflow-hidden rounded-2xl border-ui-border bg-ui-bg dark:border-d-ui-border dark:bg-d-ui-bg  b_project_card:hidden">
		<div>
			<div>
				<AnimatedPlaceholder class=" size-full h-44" />
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

	<div class="custom-shadow-lg hidden w-full flex-row overflow-hidden rounded-2xl border-subtle-border bg-subtle-bg dark:border-d-subtle-border dark:bg-d-ui-bg b_project_card:flex">
		<div class="w-9/12">
			<AnimatedPlaceholder class="size-full"/>
		</div>
		<div class="flex w-full flex-col items-start gap-4 p-4">
			<div class="flex w-full flex-col gap-4">

				<AnimatedPlaceholder class="w-2/6 rounded-full text-lg sm:text-2xl"/>

				<div class="flex w-full flex-col flex-nowrap gap-1">
					<AnimatedPlaceholder class=" w-full rounded-full text-xs"/>
					<AnimatedPlaceholder class=" w-10/12 rounded-full text-xs"/>
					<AnimatedPlaceholder class=" w-11/12 rounded-full text-xs"/>
				</div>
				<!-- <p class=" text-sm font-normal  text-high-contrast-text dark:text-d-high-contrast-text">Elit ut ea in ut sint nostrud duis amet ullamco cillum ipsum ut qui dolore. Nisi nulla Lorem et ea magna nisi. Magna irure esse anim magna aute laborum velit consectetur do esse sit Lorem.</p> -->

				<div class="flex size-full flex-col items-start justify-start">
					<div class="flex flex-wrap justify-start gap-2">
						<div v-for="_ in 5" :key="_">
							<AnimatedPlaceholder class="w-16 cursor-default rounded-xl px-4 py-2 text-xs" />
						</div>
					</div>
				</div>

				<!-- <div class="flex size-full flex-col items-start justify-start">
						<div class="flex flex-wrap justify-start gap-2">
							<div v-for="tag in tags" :key="tag"
								class=" custom-shadow-sm cursor-default rounded-xl border-ui-border bg-ui-bg px-4 py-2 text-xs font-semibold text-low-contrast-text transition-colors duration-75 hover:border-hover-ui-border dark:border-d-ui-border dark:bg-d-hover-ui-bg dark:text-d-low-contrast-text dark:hover:border-d-hover-ui-border">{{ tag }}
							</div>
						</div>
				</div> -->
			</div>

			<div class="">

				<div class="flex flex-col items-center justify-center gap-2 pt-2 md:flex-row">

					<AnimatedPlaceholder class="h-full w-24 rounded-2xl px-3 py-2 text-sm"/>

					<!-- <div class="project-card-btn project-card-btn-outline group h-full">
						<GithubSvg color="font-medium text-high-contrast-text dark:text-d-high-contrast-text h-4 w-4"/>
						<h3 class=" text-nowrap text-sm font-medium text-high-contrast-text dark:text-d-high-contrast-text">Github</h3>
					</div> -->

					<AnimatedPlaceholder class="h-full w-36 rounded-2xl px-3 py-2 text-sm"/>
					<!-- <div class="project-card-btn project-card-btn-fill h-full text-nowrap">
							<RedirectionSvg color="text-white dark:text-white h-4 w-4"/>
							<h3 class="text-sm text-white dark:text-white">View Project</h3>
					</div> -->
				</div>
			</div>

		</div>
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
