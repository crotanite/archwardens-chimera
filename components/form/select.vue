<template>
    <div ref="select" :class="['relative', applyWidth()]">
        <div :class="[useInputClasses(true, 'cursor-pointer relative pl-4 pr-8 w-full'), {
            'rounded-b-none !border-b-transparent': show && !showAbove,
            'rounded-t-none !border-t-transparent': show && showAbove
        }]" @click="toggle">
            <slot
                name="model"
                :model="parseModel"
            >
                {{ parseModel }}
            </slot>
            <ChevronDownIcon
                :class="['absolute h-4 w-4 right-2 top-3 transition-transform', { 'rotate-180': show }]"
            />
        </div>

        <div v-if="show" :class="[useInputClasses(false, 'absolute left-0 right-0 overflow-y-auto px-0 pt-0 pb-2 z-10'), maxHeight, {
            'bottom-0 mb-9 rounded-b-none !border-b-transparent': showAbove,
            'rounded-t-none !border-t-transparent': !showAbove
        }]">
            <div v-if="group === null">
                <div v-if="Array.isArray(options)">
                    <div v-for="option in options" @click="selectOption(option)">
                        <slot
                            name="option"
                            :value="parseOption(option)"
                            :option="option"
                        >
                            <div class="cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800">
                                {{ parseOption(option) }}
                            </div>
                        </slot>
                    </div>
                </div>
                <div v-else>
                    <div v-for="(label, track) in options" :key="track" @click="selectOption(track)">
                        <slot
                            name="option"
                            :label="label"
                            :track="track"
                        >
                            <div class="cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800">
                                {{ label }}
                            </div>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { ChevronDownIcon } from '@heroicons/vue/24/outline'
import { onClickOutside } from '@vueuse/core'
import useInputClasses from '../../composables/components/methods/useInputClasses'
import useApplyWidth from '../../composables/components/methods/useApplyWidth'
import { definedProps } from './select.typings'

const emits = defineEmits(['update:modelValue'])
const props = defineProps(definedProps)

const { applyWidth } = useApplyWidth()

const show = ref<boolean>(false) // whether to show the select dropdown
const select = ref<HTMLElement|null>(null) // the element itself (for click outside closing)
const isEmpty = computed((): boolean => {
    return typeof props.modelValue === 'undefined' || props.modelValue === null
}) // if the options are empty

/**
 * Output the model value.
 *
 * @return {string}
 */
const parseModel = computed((): string => {
    if (isEmpty.value) {
        return ''
    }
    return parseOption(props.modelValue)
})
const parseOption = (option: string|number|object): string|object => {
    if (typeof option === 'string' || typeof option === 'number') {
        if (Array.isArray(props.options)) {
            const opt = props.options.filter((item) => item[props.trackBy] === option)[0]
            if(props.label === null) {
                return opt
            }
            return opt[props.label]
        }
        return props.options[option]
    }
    return option[props.label]
}

/**
 * Select an option and emits the new model value.
 * Close after.
 *
 * @param {string|number} index
 * @return {void}
 */
const selectOption = (option: string|number): void => {
    if (Array.isArray(props.options)) {
        if(props.trackBy === null) {
            emits('update:modelValue', option)
        } else {
            emits('update:modelValue', option[props.trackBy])
        }
    } else {
        emits('update:modelValue', option)
    }

    disappear()
}

/**
 * Functions to show/hide the select dropdown.
 */
const appear = () => {
    show.value = true
}
const disappear = () => {
    show.value = false
}
const toggle = () => {
    show.value = !show.value
}

onClickOutside(select, () => disappear())
</script>

<script lang="ts">
export default {
    name: 'ChiFormSelect'
}
</script>
