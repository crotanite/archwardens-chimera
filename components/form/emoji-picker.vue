<template>
    <div class="inline-block cursor-pointer relative" ref="emojiPicker" @click="show = true">
        <div class="flex flex-col items-center space-y-1">
            <NoSymbolIcon class="h-6 w-6 inline-block opacity-70" v-if="modelValue === null" />
            <chi-util-emoji class="h-6 w-6" v-else :emoji="modelValue" />
            <ArrowPathIcon class="h-3 w-3 text-accent-500" />
        </div>
        <chi-util-emoji-picker
            class="absolute left-0 top-0 mt-6 z-[2]"
            @selectEmoji="selectEmoji"
            v-show="show"
        />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ArrowPathIcon, NoSymbolIcon } from '@heroicons/vue/24/outline'
import { onClickOutside } from '@vueuse/core'
import { definedProps } from './emoji-picker.typings'

const emits = defineEmits(['update:modelValue'])
const props = defineProps(definedProps)

const emojiPicker = ref<null|HTMLElement>(null)
const show = ref<boolean>(false)

const selectEmoji = (emojiNative, emoji) => {
    emits('update:modelValue', emoji.id)
    show.value = false
}

onClickOutside(emojiPicker, () => show.value = false)
</script>

<script lang="ts">
export default {
    name: 'ChiFormEmojiPicker'
}
</script>
