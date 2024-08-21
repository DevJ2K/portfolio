<template>
	<div class="relative flex w-full flex-col">
		<!-- <BackgroundSpotlight color="bg-blue-500" rotate="bg-gradient-to-bl"/> -->
		<BgTab />
		<div class=" h-28 w-full"></div>
		<main
			class=" container z-10 flex flex-col items-center  gap-9 text-high-contrast-text dark:text-d-high-contrast-text">
			<TabTitleComponent title="Skills" />
			<div class="flex w-full flex-col gap-8">
				<div class=" z-20 w-full" data-aos="zoom-in" data-aos-delay="0" data-aos-duration="400">
					<fieldset class="skill-fieldset">
						<legend class="custom-legend">Technical Skills</legend> <!-- rounded-md border-->

						<div class=" flex w-full flex-col items-center justify-center gap-4">
							<div class=" grid w-full grid-cols-3 justify-center gap-3 max-sm:flex max-sm:flex-wrap">
								<SkillCard skill="API" icon="fa-solid fa-cube" description="APIs enable different software systems to communicate and interact. They are essential for integrating external services, accessing data, and ensuring interoperability between applications." />

								<SkillCard skill="Unit Test" icon="fa-solid fa-vials" description="Unit tests are automated tests that check the functionality of small code units, like functions. They help catch bugs early, improve code quality, and ease maintenance by ensuring changes don’t introduce new issues."/>

								<SkillCard skill="Peer To Peer Learning" icon="fa-solid fa-users" description="Peer-to-peer learning involves sharing knowledge among colleagues rather than through formal training. It fosters collaboration, knowledge sharing, and collective problem-solving in team environments." />
							</div>

							<div class=" grid w-full grid-cols-2 justify-center gap-3 max-sm:flex max-sm:flex-wrap">
								<SkillCard skill="Object-Oriented Programming" icon="fa-solid fa-diagram-project" description="Object-Oriented Programming (OOP) organizes code into objects and classes. It promotes modularity, code reuse, and a structured approach to software development, which is crucial for building robust systems."/>
								<!-- Search by Apple -->
								<SkillCard skill="Data structures and algorithms" icon="fa-solid fa-database" description="Data structures organize and store data, while algorithms are sets of instructions for solving problems. Understanding them is vital for creating efficient solutions and optimizing performance in software development." />
								<!-- Search by Apple -->
							</div>

							<div class=" grid w-full grid-cols-3 justify-center gap-3 max-sm:flex max-sm:flex-wrap">
								<SkillCard skill="Debugging" icon="fa-solid fa-bug" description="Debugging involves finding and fixing errors in code. It is crucial for ensuring software reliability, improving code quality, and speeding up development by resolving issues promptly."/> <!-- Search by Apple -->
								<SkillCard skill="Clean Code" icon="fa-solid fa-spray-can-sparkles" description="Clean code is well-organized, readable, and maintainable code. Writing clean code makes it easier for others to understand, maintain, and extend, reducing errors and enhancing software quality."/>
								<SkillCard skill="Problem solving" icon="fa-solid fa-square-check" description="Problem-solving is the ability to identify, analyze, and resolve issues effectively. It is essential for tackling technical challenges, developing innovative solutions, and improving processes."/>
								<!-- Search by Apple -->
							</div>
						</div>
					</fieldset>
				</div>
				<div class=" z-10 w-full" data-aos="zoom-in" data-aos-delay="0" data-aos-duration="400">
					<fieldset class=" skill-fieldset">
						<legend class="custom-legend">Programming Languages</legend>
						<div class="flex w-full flex-wrap justify-center gap-6">
							<LogoSkill :logo="SwiftSvg" tech-name="Swift" />
							<LogoSkill :logo="PythonSvg" tech-name="Python" />
							<LogoSkill :logo="CSvg" tech-name="C" />
							<LogoSkill :logo="CplusplusSvg" tech-name="C++" />
							<LogoSkill :logo="JavascriptSvg" tech-name="Javascript" />
						</div>
					</fieldset>
				</div>

				<div class=" z-10 w-full" data-aos="zoom-in" data-aos-delay="0" data-aos-duration="400">
					<fieldset class="skill-fieldset">
						<legend class="custom-legend">Frameworks & Librairies</legend>
						<div class="flex w-full flex-wrap justify-center gap-6">
							<LogoSkill :logo="FlutterSvg" tech-name="Flutter" />
							<LogoSkill :logo="VueSvg" tech-name="Vue" />
							<LogoSkill :logo="TailwindSvg" tech-name="Tailwind" />
							<LogoSkill :logo="SeleniumSvg" tech-name="Selenium" />
							<LogoSkill :logo="DiscordSvg" tech-name="Discord.py"/>
						</div>
					</fieldset>
				</div>

				<div class=" z-10 w-full" data-aos="zoom-in" data-aos-delay="0" data-aos-duration="400">
					<fieldset class="skill-fieldset">
						<legend class="custom-legend">Databases</legend>
						<div class="flex w-full flex-wrap justify-center gap-6">
							<LogoSkill :logo="FirebaseSvg" tech-name="Firebase" />
							<LogoSkill :logo="SqliteSvg" tech-name="Sqlite" />
						</div>
					</fieldset>
				</div>

				<div class=" z-10 w-full" data-aos="zoom-in" data-aos-delay="0" data-aos-duration="400">
					<fieldset class="skill-fieldset">
						<legend class="custom-legend">DevOps</legend>
						<div class="flex w-full flex-wrap justify-center gap-6">
							<LogoSkill :logo="DockerSvg" tech-name="Docker"/>
						</div>
					</fieldset>
				</div>
			</div>

		</main>
		<div class=" h-28 w-full"></div>
	</div>
</template>

<script setup>
import LogoSkill from '@/components/LogoSkill.vue';
import SkillCard from '@/components/SkillCard.vue';

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
import BgTab from '@/components/background/BgTab.vue';
import TabTitleComponent from '@/components/TabTitleComponent.vue';
import DiscordSvg from '@/components/logos/skills/DiscordSvg.vue';
import DockerSvg from '@/components/logos/skills/DockerSvg.vue';

</script>
