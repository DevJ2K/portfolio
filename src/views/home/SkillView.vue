<template>
	<div class="relative flex h-screen w-full">
		<BackgroundSpotlight color="bg-blue-500" rotate="bg-gradient-to-bl" />
		<main class=" container z-10 flex h-screen flex-col items-center justify-center gap-10 text-primary dark:text-primary-dark">
			<h1>Skills</h1>
			<div>
				<h3>Programming languages</h3>
				<div class="flex flex-row gap-3">
					<LogoSkill :logo="SwiftSvg" tech-name="Swift"/>
					<LogoSkill :logo="PythonSvg" tech-name="Python"/>
					<LogoSkill :logo="CSvg" tech-name="C"/>
					<LogoSkill :logo="CplusplusSvg" tech-name="C++"/>
					<LogoSkill :logo="JavascriptSvg" tech-name="Javascript"/>
				</div>
			</div>
			<div>
				<h3>Framework</h3>
				<div class="flex flex-row gap-3">
					<LogoSkill :logo="FlutterSvg" tech-name="Flutter"/>
					<LogoSkill :logo="VueSvg" tech-name="Vue"/>
					<LogoSkill :logo="TailwindSvg" tech-name="Tailwind"/>
				</div>
			</div>
			<div>
				<h3>Database</h3>
				<div class="flex flex-row gap-3">
					<LogoSkill :logo="FirebaseSvg" tech-name="Firebase"/>
				</div>
			</div>
		</main>
	</div>
</template>

<script setup>
import BackgroundSpotlight from '@/components/BackgroundSpotlight.vue';
import LogoSkill from '@/components/LogoSkill.vue';

// Importing Svg \\
import SwiftSvg from '@/components/logos/skills/SwiftSvg.vue';
import PythonSvg from '@/components/logos/skills/PythonSvg.vue';
import CSvg from '@/components/logos/skills/CSvg.vue';
import CplusplusSvg from '@/components/logos/skills/CplusplusSvg.vue';
import JavascriptSvg from '@/components/logos/skills/JavascriptSvg.vue';

import FlutterSvg from '@/components/logos/skills/FlutterSvg.vue';
import VueSvg from '@/components/logos/skills/VueSvg.vue';
import TailwindSvg from '@/components/logos/skills/TailwindSvg.vue';

import FirebaseSvg from '@/components/logos/skills/FirebaseSvg.vue';
</script>
