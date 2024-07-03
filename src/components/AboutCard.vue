<template>
	<div class="group relative mb-6 flex items-center justify-between md:justify-normal md:odd:flex-row-reverse md:even:text-right">
		<!-- Icon -->
		<div class=" flex size-10 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">

		</div>
		<!-- <div class="flex size-10 shrink-0 items-center justify-center rounded-full border border-white bg-slate-300 text-slate-500 shadow group-[.is-active]:bg-emerald-500 group-[.is-active]:text-emerald-50 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
			<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.89346 2.35248C3.49195 2.35248 2.35248 3.49359 2.35248 4.90532C2.35248 6.38164 3.20954 7.9168 4.37255 9.33522C5.39396 10.581 6.59464 11.6702 7.50002 12.4778C8.4054 11.6702 9.60608 10.581 10.6275 9.33522C11.7905 7.9168 12.6476 6.38164 12.6476 4.90532C12.6476 3.49359 11.5081 2.35248 10.1066 2.35248C9.27059 2.35248 8.81894 2.64323 8.5397 2.95843C8.27877 3.25295 8.14623 3.58566 8.02501 3.88993C8.00391 3.9429 7.98315 3.99501 7.96211 4.04591C7.88482 4.23294 7.7024 4.35494 7.50002 4.35494C7.29765 4.35494 7.11523 4.23295 7.03793 4.04592C7.01689 3.99501 6.99612 3.94289 6.97502 3.8899C6.8538 3.58564 6.72126 3.25294 6.46034 2.95843C6.18109 2.64323 5.72945 2.35248 4.89346 2.35248ZM1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.0084 1.35248 6.73504 1.76049 7.20884 2.2953C7.32062 2.42147 7.41686 2.55382 7.50002 2.68545C7.58318 2.55382 7.67941 2.42147 7.79119 2.2953C8.265 1.76049 8.99164 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
        </div> -->
		<!-- Card -->
		<!-- <div class="w-[calc(100%-4rem)] p-4 md:w-[calc(50%-2.5rem)]"> -->

		<div v-if="gradientText" class="w-[calc(100%-4rem)] rounded-xl border border-ui-border bg-gradient-to-b from-ui-bg to-transparent p-4 dark:border-d-ui-border dark:from-d-ui-bg md:w-[calc(50%-2.5rem)]">


			<!-- Line with dot -->
			<!-- <div class="mb-3 flex flex-row items-center justify-center md:group-even:flex-row-reverse">
				<div class=" size-2 overflow-hidden rounded-full border-2 bg-ui-bg"></div>
				<div class=" h-px w-full bg-accent-color"></div>
			</div> -->

			<!-- Content -->
			<h2 class=" mb-1 font-bold text-high-contrast-text dark:text-d-high-contrast-text sm:text-lg">{{ itemDate }}</h2>
			<p class="bg-gradient-to-b from-low-contrast-text bg-clip-text text-xs text-transparent dark:from-d-low-contrast-text sm:text-sm">{{ content }}</p>
		</div>
		<!-- <div v-if="gradientText" class="w-[calc(100%-4rem)] rounded-xl border border-ui-border bg-gradient-to-b from-ui-bg to-transparent p-4 dark:border-d-ui-border dark:from-d-ui-bg md:w-[calc(50%-2.5rem)]">
			<h2 class=" mb-1 text-xl font-bold text-high-contrast-text dark:text-d-high-contrast-text">{{ itemDate }}</h2>
			<p class="bg-gradient-to-b from-low-contrast-text bg-clip-text text-transparent dark:from-d-low-contrast-text">{{ content }}</p>
		</div> -->
		<div v-else class="w-[calc(100%-4rem)] rounded-xl border border-ui-border bg-ui-bg p-4 dark:border-d-ui-border dark:bg-d-ui-bg md:w-[calc(50%-2.5rem)]">
			<h2 class=" mb-1 font-bold text-high-contrast-text dark:text-d-high-contrast-text sm:text-lg">{{ itemDate }}</h2>
			<p class="text-xs text-low-contrast-text dark:text-d-low-contrast-text sm:text-sm">
				{{ content }}
			</p>
		</div>
	</div>
</template>

<script setup>
defineProps({
	itemDate: {
		type: String,
		default: 'Month YYYY'
	},
	content: {
		type: String,
		default: "Lorem mollit velit consequat ea commodo sunt cupidatat ipsum veniam qui elit. Ex eiusmod consequat sit proident officia elit et eiusmod officia reprehenderit proident. Culpa et ea et duis officia incididunt ut quis est. Ipsum fugiat nulla ea incididunt magna magna voluptate nostrud ullamco deserunt do cillum. Pariatur Lorem quis consequat ipsum."
	},
	gradientText: {
		type: Boolean,
		default: false
	}
})
</script>
