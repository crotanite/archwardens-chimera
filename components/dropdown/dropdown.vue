<template>
    <div
        ref="dropdown"
        class="relative inline-block"
    >
        <button
            class="flex items-center space-x-1"
            type="button"
            @click="toggle"
        >
            <slot name="trigger" />
            <div
                v-if="!hideArrow"
                class="text-xs"
            >
                <ChevronDownIcon class="h-4 w-4" />
            </div>
        </button>

        <transition
            @enter="(el: any, done: FadeDoneFunction) => { fade(el, done as FadeDoneFunction, 0, 1, duration, 0) }"
            @leave="(el: any, done: FadeDoneFunction) => { fade(el, done as FadeDoneFunction, 1, 0, duration, 0) }"
        >
            <div
                v-show="show"
                :class="[{
                    'absolute overflow-hidden rounded shadow z-10': true,
                    '-mt-2 top-0': vertical === 'overlay',
                    'mt-1': vertical === 'bottom',
                    'bottom-0': vertical === 'top',
                    '-ml-0.5 left-0': horizontal === 'left',
                    '-mr-0.5 right-0': horizontal === 'right',
                    [useTheme().colors.background.system.element]: true
                }]"
            >
                <div
                    :class="[
                        'border-gray-300 py-2 overflow-x-hidden',
                        [applyWidth(), applyBorder()],
                    ]"
                    :style="[{ maxHeight: maxHeight > 0 ? `${maxHeight}px` : '' }]"
                >
                    <slot :close="close" :show="show" :toggle="toggle" />
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ChevronDownIcon } from '@heroicons/vue/24/outline'
import { onClickOutside } from '@vueuse/core'
import { definedProps } from './dropdown.typings'
import useTheme from '../../composables/useTheme'
import useApplyBorder from '../../composables/components/methods/useApplyBorder'
import useApplyToggle from '../../composables/components/methods/useApplyToggle'
import useApplyWidth from '../../composables/components/methods/useApplyWidth'
import { fade, FadeDoneFunction } from '../../composables/transitions/fade'

defineProps(definedProps)

const { show, toggle, close } = useApplyToggle(false)
const { applyBorder } = useApplyBorder(false)
const { applyWidth } = useApplyWidth()

const dropdown = ref(null)
onClickOutside(dropdown, () => close())
</script>

<script lang="ts">
export default {
    name: 'ChiDropdown'
}
</script>
