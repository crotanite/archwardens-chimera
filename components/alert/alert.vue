<template>
    <div :class="classes">
        <slot>{{ content }}</slot>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { definedProps } from './alert.typings';
import useApplyDensity from '../../composables/components/methods/useApplyDensity'
import useApplyElevation from '../../composables/components/methods/useApplyElevation'
import useApplyTheme from '../../composables/components/methods/useApplyTheme'

defineProps(definedProps)

const { applyDensity } = useApplyDensity()
const { applyElevation } = useApplyElevation()
const { applyTheme } = useApplyTheme()

const classes = computed((): Array<string> => {
    return [
        'rounded text-sm w-full',
        applyDensity('element'),
        applyElevation(),
        applyTheme()
    ]
})
</script>

<script lang="ts">
export default {
    name: 'ChiAlert'
}
</script>
