<template>
	<div class="relative flex h-screen w-full">
		<BackgroundSpotlight color="bg-blue-500" rotate="bg-gradient-to-bl" />
		<main class=" container z-10 flex h-screen flex-col items-center justify-center gap-10 text-primary dark:text-primary-dark">
			<h1>Skills</h1>
			<div>
				<h3>Programming languages</h3>
				<div>
					<LogoSkill :logo="SwiftSvg" tech-name="Swift"/>
				</div>
			</div>
		</main>
	</div>
</template>

<script setup>
import BackgroundSpotlight from '@/components/BackgroundSpotlight.vue';
import LogoSkill from '@/components/LogoSkill.vue';
import SwiftSvg from '@/components/logos/skills/SwiftSvg.vue';

</script>
