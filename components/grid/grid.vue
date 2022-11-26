<template>
    <div :class="classes">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { definedProps } from './grid.typings'
import useApplyAlign from '../../composables/components/methods/useApplyAlign'
import useApplyColumns from '../../composables/components/methods/useApplyColumns'
import useApplyGap from '../../composables/components/methods/useApplyGap'

defineProps(definedProps)

const { applyAlign } = useApplyAlign()
const { applyColumns } = useApplyColumns()
const { applyGap } = useApplyGap()

const classes = computed((): Array<string> => {
    return [
        'grid',
        applyAlign(),
        applyColumns(true),
        applyGap()
    ]
})
</script>

<script lang="ts">
export default {
    name: 'ChiGrid'
}
</script>
