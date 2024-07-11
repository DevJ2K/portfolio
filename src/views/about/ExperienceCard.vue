<template>
	<div
		class="custom-shadow-md flex w-full cursor-default flex-col gap-6 rounded-3xl border border-ui-border/50 bg-ui-bg p-6 transition-all hover:border-ui-border dark:border-d-ui-border/50 dark:bg-d-ui-bg dark:hover:border-d-ui-border/80">
		<div class=" text-high-contrast-text dark:text-d-high-contrast-text">
			<h3 class=" text-xl font-bold">{{ name }}</h3>
			<h3 class=" text-base">{{ company }} - {{ expType }}</h3>
			<h3 class=" text-base">{{ date }}</h3>
		</div>
		<div v-if="description" class="flex flex-col gap-2">
			<div class="flex flex-row items-center justify-center">
				<div class="h-px w-8 bg-accent-color dark:bg-d-accent-color"></div>
				<!-- Pour "principe de la mission"
				Mission Overview
				Project Overview
				Mission Statement
				Project Summary
				Project Description
				Pour "mon rôle"
				My Role
				Role Description
				Responsibilities
				Key Responsibilities
				Role Overview -->
				<h3 class=" text-nowrap px-2 font-bold text-high-contrast-text underline-offset-4 dark:text-d-high-contrast-text">Role Overview</h3>
				<div class="h-px w-full bg-accent-color dark:bg-d-accent-color"></div>
			</div>
			<p class="text-sm">{{ description }}</p>
		</div>

		<div class="flex flex-col gap-2">
			<div class="flex flex-row items-center justify-center">
				<div class="h-px w-8 bg-accent-color dark:bg-d-accent-color"></div>
				<!-- Technologies Used
				Tools and Technologies
				Tech Stack
				Technology Stack
				Used Technologies
				Technologies Employed
				Technological Tools
				Technical Skills Utilized -->
				<h3 class=" text-nowrap px-2 font-bold text-high-contrast-text underline-offset-4 dark:text-d-high-contrast-text">Used Technologies</h3>
				<div class="h-px w-full bg-accent-color dark:bg-d-accent-color"></div>
			</div>
			<div class="flex flex-wrap gap-2">

				<div v-for="tag in technos" :key="tag"
					class=" custom-shadow-sm w-fit cursor-default rounded-xl border-ui-border bg-ui-bg px-4 py-2 text-xs font-semibold capitalize text-low-contrast-text transition-colors duration-75 hover:border-hover-ui-border dark:border-d-ui-border dark:bg-d-hover-ui-bg dark:text-d-low-contrast-text dark:hover:border-d-hover-ui-border">
					{{ tag }}
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
defineProps({
	name: {
		type: String,
		default: "Developer web"
	},
	date: {
		type: String,
		default: "2022 - 2024"
	},
	company: {
		type: String,
		default: "Company"
	},
	expType: {
		type: String,
		default: "Freelance"
	},
	technos: {
		type: Array,
		default: () => ['Tech1', 'Tech2', 'Tech3', 'Tech4',]
	},
	description: {
		type: String,
		default: null
	}
})
</script>
