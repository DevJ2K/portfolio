<template>
	<div class="relative flex w-full flex-col">
		<!-- <BackgroundSpotlight rotate="bg-gradient-to-bl"/> -->
		<BgTab/>
		<div class=" h-28 w-full"></div>
		<main class=" container z-10 flex flex-col items-center gap-9">
			<!-- <h1 class="tab-title">Contact</h1> -->
			<TabTitleComponent title="Contact"/>

			<SuccessModal :modal-active="successModalActive" @close-modal="toggleSuccessModal">
				<div class=" text-black/70">
					<p>The contact message has been sent successfully !</p>
				</div>
			</SuccessModal>

			<WarningModal :modal-active="warningModalActive" @close-modal="toggleWarningModal">
				<div class=" text-black/70">
					<p>Please fill out all fields.</p>
				</div>
			</WarningModal>

			<WarningModal :modal-active="waitModalActive" @close-modal="toggleWaitModal">
				<div class=" text-black/70">
					<p>Please wait before sending another message.</p>
				</div>
			</WarningModal>



			<!-- <h3 class=" mb-4 text-center text-xl font-medium sm:text-2xl">Find me on my social networks or send me an email.</h3> -->
			<fieldset class="flex w-full flex-row items-center justify-around rounded-lg border border-subtle-border bg-subtle-bg px-6 py-4 shadow-md transition-all hover:border-hover-ui-border hover:shadow-lg dark:border-d-subtle-border dark:bg-d-subtle-bg dark:hover:border-d-hover-ui-border">
				<legend class="custom-legend">Social Networks</legend>
			<!-- <div class="flex w-3/4 flex-row justify-between"> -->
				<SocialLogo :logo="GithubSvg" name="DevJ2K" size="contact-view-logo"/>
				<SocialLogo :logo="LinkedinSvg" name="Théo Ajavon" size="contact-view-logo"/>
				<SocialLogo :logo="InstagramSvg" name="devj2k" size="contact-view-logo"/>
				<SocialLogo :logo="MaltSvg" name="theoajavon" size="contact-view-logo"/>
				<SocialLogo :logo="EmailSvg" name="ajavontheopro@gmail.com" size="contact-view-logo"/>
			<!-- </div> -->
			</fieldset>

			<!-- <div class="w-1/2 border-t  opacity-30"></div> -->


			<fieldset class="flex w-full flex-col items-center justify-center gap-6 rounded-lg border border-subtle-border bg-subtle-bg py-4 shadow-md transition-all hover:border-hover-ui-border hover:shadow-lg dark:border-d-subtle-border dark:bg-d-subtle-bg dark:hover:border-d-hover-ui-border">
					<legend class="custom-legend">Get In Touch</legend>

			<div class="flex w-3/4 flex-col items-end gap-6">
				<div class="flex w-full flex-col items-start gap-1">
					<h3 class="form-input-name">Name</h3>
					<input id="form_name" class="form-input form-input-border" type="text" maxlength="30">
				</div>
				<div class="flex w-full flex-col items-start gap-1">
					<h3 class="form-input-name">Email</h3>
					<input id="form_email" class="form-input form-input-border" type="text">
				</div>
				<div class="flex w-full flex-col items-start gap-1">
					<h3 class="form-input-name">Subject</h3>
					<input id="form_subject" class="form-input form-input-border" type="text">
				</div>
				<div class="flex w-full flex-col items-start gap-1">
					<h3 class="form-input-name">How can I help you ?</h3>
					<textarea id="form_body" class="form-input form-input-border" rows="4" minlength="50" maxlength="2000"></textarea>
				</div>

				<button @click="sendMessages" class="flex w-fit cursor-pointer flex-row items-center justify-center gap-2 rounded-md border border-ui-border px-4 py-2 text-high-contrast-text shadow-lg  ring-accent-color ring-offset-2 ring-offset-subtle-bg transition-all hover:border-transparent hover:bg-hover-accent-color  hover:text-d-high-contrast-text  hover:shadow-xl focus:outline-2 focus:ring-2  dark:border-d-ui-border dark:text-d-high-contrast-text dark:ring-d-accent-color dark:ring-offset-d-subtle-bg hover:dark:border-transparent dark:hover:bg-d-hover-accent-color ">
					<i class="fa-regular fa-paper-plane"></i>
					<h3>Send</h3>
				</button>
			</div>


			</fieldset>

		</main>
		<div class=" h-64 w-full"></div>
	</div>
</template>

<script setup>
import GithubSvg from '@/components/logos/GithubSvg.vue';
import LinkedinSvg from '@/components/logos/LinkedinSvg.vue';
import InstagramSvg from '@/components/logos/InstagramSvg.vue'
import MaltSvg from '@/components/logos/MaltSvg.vue';
import EmailSvg from '@/components/logos/EmailSvg.vue';
import SocialLogo from '@/components/SocialLogo.vue';
import BgTab from '@/components/background/BgTab.vue';

import { addDoc, collection, doc } from 'firebase/firestore/lite';
import db from '@/firebase/init';
import SuccessModal from '@/components/modal/SuccessModal.vue';
import { ref } from 'vue';
import WarningModal from '@/components/modal/WarningModal.vue';
import TabTitleComponent from '@/components/TabTitleComponent.vue';

const warningModalActive = ref(false);
const successModalActive = ref(false);
const waitModalActive = ref(false);

const toggleSuccessModal = () => {
	successModalActive.value = !successModalActive.value;
};
const toggleWarningModal = () => {
	warningModalActive.value = !warningModalActive.value;
};
const toggleWaitModal = () => {
	waitModalActive.value = !waitModalActive.value;
};

const clearFields = () => {
	const fields = [
		document.getElementById("form_name"),
		document.getElementById("form_email"),
		document.getElementById("form_subject"),
		document.getElementById("form_body")
	];
	for (let i = 0; i < fields.length; i++) {
		const element = fields[i];
		element.value = null;
		element.classList.add('form-input-border');
		element.classList.remove('form-input-empty');
	}
}

const highlightedEmptyField = () => {

	const fields = [
		document.getElementById("form_name"),
		document.getElementById("form_email"),
		document.getElementById("form_subject"),
		document.getElementById("form_body")
	];
	for (let i = 0; i < fields.length; i++) {
		const element = fields[i];
		if (!element.value) {
			element.classList.remove('form-input-border');
			element.classList.add('form-input-empty');
		} else {
			element.classList.add('form-input-border');
			element.classList.remove('form-input-empty');
		}
	}
}

const compareLastDateSent = () => {
	const lastDateString = localStorage.getItem("last-date-sent");
	if (!lastDateString) {
		return (true);
	}
	const lastDate = new Date(lastDateString);
	const currentDate = new Date();

	const diffInMs = Math.abs(currentDate.getTime() - lastDate.getTime());
	const fiveMinutesInMs = 1 * 60 * 1000;

	if (diffInMs <= fiveMinutesInMs) {
		return (false);
	} else {
		return (true);
	}
}

const saveDateSent = () => {
	const currentDate = new Date();
	const stringDate = currentDate.toString();
	localStorage.setItem("last-date-sent", stringDate);
}

const sendMessages = async () => {
	let form_name = document.getElementById("form_name").value;
	let form_email = document.getElementById("form_email").value;
	let form_subject = document.getElementById("form_subject").value;
	let form_body = document.getElementById("form_body").value;

	if (form_name && form_email && form_subject && form_body) {
		if (compareLastDateSent() == false) {
			toggleWaitModal();
			console.log("Please wait before sending new messages...");
		} else {
			await addDoc(collection(db, "contacts"), {
			name: form_name,
			email: form_email,
			subject: form_subject,
			body: form_body
			});

			clearFields();
			toggleSuccessModal();
			saveDateSent();
			console.log("Contact message has been added !");
		}
	} else {
		highlightedEmptyField();
		toggleWarningModal();
		console.log("Please fill all fields !");
	}
}
</script>
