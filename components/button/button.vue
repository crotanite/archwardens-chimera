<template>
    <component
        :class="classes"
        :color="null"
        :disabled="disabled || loading"
        :href="href"
        :is="href === null ? 'button' : 'chi-util-link'"
        type="button"
        @click="$emit('click', $event)"
    >
        <slot>{{ content }}</slot>
    </component>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { definedProps } from './button.typings'
import useApplyDensity from '../../composables/components/methods/useApplyDensity'
import useApplyDisabled from '../../composables/components/methods/useApplyDisabled'
import useApplyFullWidth from '../../composables/components/methods/useApplyFullWidth'
import useApplyHideRounded from '../../composables/components/methods/useApplyHideRounded'
import useApplyLoading from '../../composables/components/methods/useApplyLoading'
import useApplyTheme from '../../composables/components/methods/useApplyTheme'

defineEmits(['click'])
defineProps(definedProps)

const { applyDisabled } = useApplyDisabled()
const { applyLoading } = useApplyLoading()
const { applyDensity } = useApplyDensity()
const { applyFullWidth } = useApplyFullWidth()
const { applyHideRounded } = useApplyHideRounded()
const { applyTheme } = useApplyTheme()

const classes = computed((): Array<string> => {
    return [
        'inline-block font-bold text-center text-sm tracking-wide uppercase',
        applyDisabled(
            'bg-gray-400 cursor-not-allowed text-white dark:bg-gray-500 dark:text-gray-300',
            applyTheme(true)
        ),
        applyDensity('element'),
        applyFullWidth(),
        applyLoading(),
        group.state ? 'first:rounded-l last:rounded-r' : applyHideRounded(),
        group.border ? 'border-x first:border-l-0 last:border-r-0' : ''
    ]
})

const group = inject('group', { border: false, state: false }) as { border: boolean, state: boolean }
</script>

<script lang="ts">
export default {
    name: 'ChiButton'
}
</script>
