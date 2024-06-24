<template>
	<div class="relative flex min-h-screen w-full flex-col">
		<BackgroundSpotlight color="bg-blue-500" rotate="bg-gradient-to-bl" bg-nb="1" />
		<div class=" h-28 w-full"></div>
		<main class=" container z-10 flex min-h-screen flex-col items-center  gap-9 text-primary dark:text-d-primary">
			<h1 class="text-3xl underline decoration-accent-color underline-offset-8">Skills</h1>
			<div class="flex w-full flex-col items-center justify-center">
				<h3 class=" mb-4 text-center text-sm font-medium sm:text-xl">Soft skills</h3>
				<div class="container flex flex-wrap items-center justify-center gap-3">
					<SkillCard skill="API" description="Adipisicing irure proident culpa nostrud sit ipsum exercitation excepteur in officia ex. Aute irure ut elit ipsum eu ea dolor Lorem velit. Consequat veniam sint velit pariatur quis. Consectetur eiusmod laboris quis magna amet." icon="fa-solid fa-cube"/>

					<SkillCard skill="Unit Test" description="Ad enim exercitation aliqua nulla ea ipsum ea incididunt dolor. Excepteur eu in nisi id commodo voluptate. Ea reprehenderit sunt in ipsum enim. Ipsum officia et commodo occaecat." icon="fa-solid fa-vials"/>

					<SkillCard skill="Clean Code" description="Dolore pariatur exercitation do Lorem magna proident. Eiusmod incididunt tempor eu ut labore fugiat aute adipisicing. Sint culpa sunt aliquip et." icon="fa-solid fa-spray-can-sparkles"/>

					<SkillCard skill="Peer To Peer Learning" description="Laborum deserunt consectetur adipisicing aute anim sint non excepteur enim elit ipsum magna excepteur. Do duis dolor labore velit dolore sunt tempor quis culpa magna laboris." icon="fa-solid fa-users"/>

					<SkillCard skill="Oriented Object Programming" description="Laborum deserunt consectetur adipisicing aute anim sint non excepteur enim elit ipsum magna excepteur. Do duis dolor labore velit dolore sunt tempor quis culpa magna laboris." icon="fa-solid fa-diagram-project"/> <!-- Search by Apple -->

					<SkillCard skill="Data structures and algorithms" description="Laborum deserunt consectetur adipisicing aute anim sint non excepteur enim elit ipsum magna excepteur. Do duis dolor labore velit dolore sunt tempor quis culpa magna laboris." icon="fa-solid fa-database"/> <!-- Search by Apple -->

					<SkillCard skill="Debugging" description="Laborum deserunt consectetur adipisicing aute anim sint non excepteur enim elit ipsum magna excepteur. Do duis dolor labore velit dolore sunt tempor quis culpa magna laboris. " icon="fa-solid fa-bug"/> <!-- Search by Apple -->

					<SkillCard skill="Problem solving " description="Laborum deserunt consectetur adipisicing aute anim sint non excepteur enim elit ipsum magna excepteur. Do duis dolor labore velit dolore sunt tempor quis culpa magna laboris." icon="fa-solid fa-square-check"/> <!-- Search by Apple -->

				</div>
				<div class="container z-10 flex min-h-screen flex-col items-center  gap-9 text-primary dark:text-d-primary">
					<div class="flex flex-col items-center justify-center">
						<h3 class=" mb-4 text-center text-sm font-medium sm:text-xl">Programming languages</h3>
						<!-- <div class="grid grid-cols-3 flex-row gap-3 sm:flex"> -->
						<div class="flex flex-wrap justify-center gap-4 md:gap-10">
							<LogoSkill :logo="SwiftSvg" tech-name="Swift"/>
							<LogoSkill :logo="PythonSvg" tech-name="Python"/>
							<LogoSkill :logo="CSvg" tech-name="C"/>
							<LogoSkill :logo="CplusplusSvg" tech-name="C++"/>
							<LogoSkill :logo="JavascriptSvg" tech-name="Javascript"/>
						</div>
					</div>

					<div class="w-2/3 border opacity-25"></div>

					<div class="flex flex-col items-center justify-center">
						<h3 class=" mb-4 text-sm font-medium sm:text-xl">Frameworks</h3>
						<div class="flex flex-wrap justify-center gap-4 md:gap-10">
							<LogoSkill :logo="FlutterSvg" tech-name="Flutter"/>
							<LogoSkill :logo="VueSvg" tech-name="Vue"/>
							<LogoSkill :logo="TailwindSvg" tech-name="Tailwind"/>
						</div>
					</div>

					<div class="w-1/3 border opacity-25"></div>

					<div class="flex flex-col items-center justify-center">
						<h3 class=" mb-4 text-sm font-medium sm:text-xl">Database</h3>
						<div class="flex flex-wrap justify-center gap-4 md:gap-10">
							<LogoSkill :logo="FirebaseSvg" tech-name="Firebase"/>
						</div>
					</div>

					<div class="w-[6%] border opacity-25"></div>
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
import SkillCard from '@/components/SkillCard.vue';
</script>
