<template>
	<div class="relative flex min-h-screen w-full flex-col">
		<BackgroundSpotlight color="bg-blue-500" rotate="bg-gradient-to-bl"/>
		<div class=" h-28 w-full"></div>
		<main class=" container z-10 flex min-h-screen flex-col items-center  gap-9 text-primary dark:text-d-primary">
			<h1 class="text-3xl underline decoration-accent-color underline-offset-8">Skills</h1>

			<div class="flex flex-col gap-8">
				<fieldset class="flex w-full items-center justify-center rounded-lg border bg-accent-color/15 px-6 py-4">
					<legend class=" m-auto px-1 text-lg font-semibold">Technical Skills</legend> <!-- rounded-md border-->

					<div class=" flex w-full flex-col items-center justify-center gap-4">
							<div class=" grid w-full grid-cols-3 justify-center gap-3 max-sm:flex max-sm:flex-wrap">
								<SkillCard skill="API" icon="fa-solid fa-cube" />
								<SkillCard skill="Unit Test" icon="fa-solid fa-vials" />
								<SkillCard skill="Peer To Peer Learning" icon="fa-solid fa-users" />
							</div>

							<div class=" grid w-full grid-cols-2 justify-center gap-3 max-sm:flex max-sm:flex-wrap">
								<SkillCard skill="Oriented Object Programming" icon="fa-solid fa-diagram-project" />
								<!-- Search by Apple -->
								<SkillCard skill="Data structures and algorithms" icon="fa-solid fa-database" />
								<!-- Search by Apple -->
							</div>

							<div class=" grid w-full grid-cols-3 justify-center gap-3 max-sm:flex max-sm:flex-wrap">
								<SkillCard skill="Debugging" icon="fa-solid fa-bug" /> <!-- Search by Apple -->
								<SkillCard skill="Clean Code" icon="fa-solid fa-spray-can-sparkles" />
								<SkillCard skill="Problem solving" icon="fa-solid fa-square-check" />
								<!-- Search by Apple -->
							</div>
					</div>
				</fieldset>

				<fieldset class="flex w-full items-center justify-center rounded-lg border bg-accent-color/15 px-6 py-4">
					<legend class=" m-auto px-1 text-lg font-semibold">Programming Languages</legend>
					<div class="flex w-full flex-wrap justify-center gap-6">
						<LogoSkill :logo="SwiftSvg" tech-name="Swift" />
						<LogoSkill :logo="PythonSvg" tech-name="Python" />
						<LogoSkill :logo="CSvg" tech-name="C" />
						<LogoSkill :logo="CplusplusSvg" tech-name="C++" />
						<LogoSkill :logo="JavascriptSvg" tech-name="Javascript" />
					</div>
				</fieldset>

				<fieldset class="flex w-full items-center justify-center rounded-lg border bg-accent-color/15 px-6 py-4">
					<legend class=" m-auto px-1 text-lg font-semibold">Frameworks & Librairies</legend>
					<div class="flex w-full flex-wrap justify-center gap-6">
						<LogoSkill :logo="FlutterSvg" tech-name="Flutter" />
						<LogoSkill :logo="VueSvg" tech-name="Vue" />
						<LogoSkill :logo="TailwindSvg" tech-name="Tailwind" />
						<LogoSkill :logo="SeleniumSvg" tech-name="Selenium" />
					</div>
				</fieldset>

				<fieldset class="flex w-full items-center justify-center rounded-lg border bg-accent-color/15 p-3">
					<legend class=" m-auto px-1 text-lg font-semibold">Databases</legend>
					<div class="flex w-full flex-wrap justify-center gap-6">
						<LogoSkill :logo="FirebaseSvg" tech-name="Firebase" />
						<LogoSkill :logo="SqliteSvg" tech-name="Sqlite" />
					</div>
				</fieldset>
			</div>

		</main>
	</div>
</template>

<script setup>
import BackgroundSpotlight from '@/components/BackgroundSpotlight.vue';
import LogoSkill from '@/components/LogoSkill.vue';
import SkillCard from '@/components/SkillCard.vue';

// Importing Svg \\
import SwiftSvg from '@/components/logos/skills/SwiftSvg.vue';
import PythonSvg from '@/components/logos/skills/PythonSvg.vue';
import CSvg from '@/components/logos/skills/CSvg.vue';
import CplusplusSvg from '@/components/logos/skills/CplusplusSvg.vue';
import JavascriptSvg from '@/components/logos/skills/JavascriptSvg.vue';

import FlutterSvg from '@/components/logos/skills/FlutterSvg.vue';
import VueSvg from '@/components/logos/skills/VueSvg.vue';
import TailwindSvg from '@/components/logos/skills/TailwindSvg.vue';
import SeleniumSvg from '@/components/logos/skills/SeleniumSvg.vue';

import FirebaseSvg from '@/components/logos/skills/FirebaseSvg.vue';
import SqliteSvg from '@/components/logos/skills/SqliteSvg.vue';

</script>
