<template>
	<Teleport to="body">
		<Transition name="modal-outer">
			<div v-show="modalActive"
				class="fixed left-0 top-0 z-[1000] flex h-screen w-full items-center justify-center bg-black/50 px-8">
				<Transition name="modal-inner">
					<div v-if="modalActive" class=" min-w-[300px] max-w-screen-md overflow-hidden rounded-xl bg-white">
						<div class="flex flex-row items-center justify-between gap-1 bg-red-700 p-3 text-lg font-medium text-white">
							<div class="flex flex-row items-center gap-1">
								<svg width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.4449 0.608765C8.0183 -0.107015 6.9817 -0.107015 6.55509 0.608766L0.161178 11.3368C-0.275824 12.07 0.252503 13 1.10608 13H13.8939C14.7475 13 15.2758 12.07 14.8388 11.3368L8.4449 0.608765ZM7.4141 1.12073C7.45288 1.05566 7.54712 1.05566 7.5859 1.12073L13.9798 11.8488C14.0196 11.9154 13.9715 12 13.8939 12H1.10608C1.02849 12 0.980454 11.9154 1.02018 11.8488L7.4141 1.12073ZM6.8269 4.48611C6.81221 4.10423 7.11783 3.78663 7.5 3.78663C7.88217 3.78663 8.18778 4.10423 8.1731 4.48612L8.01921 8.48701C8.00848 8.766 7.7792 8.98664 7.5 8.98664C7.2208 8.98664 6.99151 8.766 6.98078 8.48701L6.8269 4.48611ZM8.24989 10.476C8.24989 10.8902 7.9141 11.226 7.49989 11.226C7.08567 11.226 6.74989 10.8902 6.74989 10.476C6.74989 10.0618 7.08567 9.72599 7.49989 9.72599C7.9141 9.72599 8.24989 10.0618 8.24989 10.476Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
								<h3>Error</h3>
							</div>
							<svg @click="$emit('close-modal')" class="cursor-pointer" width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
						</div>
						<div class="mb-4 p-4">
							<slot />
						</div>
						<div class="h-px w-full bg-black/20"></div>
						<div class="flex w-full justify-end p-2">
							<button class="rounded-md bg-red-600 px-5 py-2 text-white transition-colors hover:bg-red-700" @click="$emit('close-modal')">Close</button>
						</div>
					</div>
				</Transition>
			</div>
		</Transition>
	</Teleport>
</template>

<script setup>
defineEmits(["close-modal"]);
defineProps({
	modalActive: {
		type: Boolean,
		default: false
	}
})
</script>

<style scoped>
.modal-outer-enter-active,
.modal-outer-leave-active {
	transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.modal-outer-enter-from,
.modal-outer-leave-to {
	opacity: 0;
}

.modal-inner-enter-active {
	transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.modal-inner-leave-active {
	transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-inner-enter-from {
	opacity: 0;
	transform: scale(0.8);
}
.modal-inner-leave-to {
	transform: scale(0.8);
}
</style>
