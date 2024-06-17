<template>
	<div class="relative flex h-screen w-full">
		<BackgroundSpotlight color="bg-blue-500" rotate="bg-gradient-to-br" />
		<main class="container z-10 flex h-screen w-full flex-col items-center justify-center">
			<h1 class=" text-2xl text-primary">About</h1>
			<div
				class="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent md:before:mx-auto md:before:translate-x-0">

				<!-- Item #1 -->
				<div
					class="is-active group relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse">
					<!-- Icon -->
					<div
						class=" flex size-10 shrink-0 items-center justify-center rounded-full border border-white bg-slate-300 text-slate-500 opacity-0 shadow group-[.is-active]:bg-emerald-500 group-[.is-active]:text-emerald-50 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
						<!-- <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
			<path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
		</svg> -->
					</div>
					<!-- Card -->
					<div class="w-[calc(100%-4rem)] p-4 md:w-[calc(50%-2.5rem)]">

						<div class="mb-3 flex flex-row items-center justify-center md:group-even:flex-row-reverse">
							<div class=" size-2 overflow-hidden rounded-full border-2 bg-primary"></div>
							<div class=" h-px w-full bg-accent-color"></div>
						</div>

						<h2 class="mb-1 text-xl font-bold text-primary">September 2020</h2>
						<p class="text-primary">Minim anim sunt duis non dolor adipisicing consequat. Qui laboris
							deserunt laboris est enim velit fugiat voluptate sint qui adipisicing sint in..</p>
					</div>


					<!-- <div class="w-[calc(100%-4rem)] rounded border border-slate-200 bg-white p-4 shadow md:w-[calc(50%-2.5rem)]">
		<div class="mb-1 flex items-center justify-between space-x-2">
			<div class="font-bold text-slate-900">Order Placed</div>
			<time class="font-caveat font-medium text-indigo-500">08/06/2023</time>
		</div>
		<div class="text-slate-500">Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.</div>
	</div> -->
				</div>
				<!-- Item #1 -->
				<div
					class="is-active group relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse md:even:text-right">
					<!-- Icon -->
					<div
						class="flex size-10 shrink-0 items-center justify-center rounded-full border border-white bg-slate-300 text-slate-500 opacity-0 shadow group-[.is-active]:bg-emerald-500 group-[.is-active]:text-emerald-50 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
						<!-- <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
			<path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
		</svg> -->
					</div>
					<!-- Card -->
					<div class="w-[calc(100%-4rem)] p-4 md:w-[calc(50%-2.5rem)]">

						<div class="mb-3 flex flex-row items-center justify-center md:group-even:flex-row-reverse">
							<div class=" size-2 overflow-hidden rounded-full border-2 bg-primary"></div>
							<div class=" h-px w-full bg-accent-color"></div>
						</div>

						<h2 class="mb-1 text-xl font-bold text-primary">2021</h2>
						<p class="text-primary">Minim anim sunt duis non dolor adipisicing consequat. Qui laboris
							deserunt laboris est enim velit fugiat voluptate sint qui adipisicing sint in..</p>
					</div>


					<!-- <div class="w-[calc(100%-4rem)] rounded border border-slate-200 bg-white p-4 shadow md:w-[calc(50%-2.5rem)]">
		<div class="mb-1 flex items-center justify-between space-x-2">
			<div class="font-bold text-slate-900">Order Placed</div>
			<time class="font-caveat font-medium text-indigo-500">08/06/2023</time>
		</div>
		<div class="text-slate-500">Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.</div>
	</div> -->
				</div>


				<!-- Item #5 -->
				<!-- <div class="group relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse">

					<div
						class="flex size-10 shrink-0 items-center justify-center rounded-full border border-white bg-slate-300 text-slate-500 shadow group-[.is-active]:bg-emerald-500 group-[.is-active]:text-emerald-50 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
						<svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="12">
							<path
								d="M12 10v2H7V8.496a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V12H0V4.496a.5.5 0 0 1 .206-.4l5.5-4a.5.5 0 0 1 .588 0l5.5 4a.5.5 0 0 1 .206.4V10Z" />
						</svg>
					</div>

					<div
						class="w-[calc(100%-4rem)] rounded border border-slate-200 bg-white p-4 shadow md:w-[calc(50%-2.5rem)] md:group-even:justify-end">
						<div class="mb-1 flex items-center justify-between space-x-2">
							<div class="font-bold text-slate-900">Delivered</div>
							<time class="font-caveat font-medium text-amber-500">Exp. 12/08/2023</time>
						</div>
						<div class="text-slate-500">Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
							morbi blandit cursus risus.</div>
					</div>
				</div> -->

			</div>
		</main>
	</div>
</template>

<script setup>
import BackgroundSpotlight from '../../components/BackgroundSpotlight.vue'
</script>
