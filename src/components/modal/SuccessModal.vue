<template>
	<Teleport to="body">
		<Transition name="modal-outer">
			<div v-show="modalActive"
				class="fixed left-0 top-0 z-[1000] flex h-screen w-full items-center justify-center bg-red-500 px-8 opacity-100">
				<Transition name="modal-inner">
					<div v-if="modalActive" class="max-w-screen-md bg-white p-4">
						<slot />
						<button class="mt-8 bg-accent-color px-6 py-2 text-white" @click="$emit('close-modal')">Close</button>
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
