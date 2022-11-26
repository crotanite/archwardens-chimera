<template>
    <div :class="classes">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { definedProps } from './flex.typings'
import useApplyAlign from '../../composables/components/methods/useApplyAlign'
import useApplyColumns from '../../composables/components/methods/useApplyColumns'
import useApplyGap from '../../composables/components/methods/useApplyGap'

const props = defineProps(definedProps)

const { applyAlign } = useApplyAlign()
const { applyColumns } = useApplyColumns()
const { applyGap } = useApplyGap()

const classes = computed((): Array<string> => {
    return [
        'flex',
        applyAlign(),
        applyColumns(false),
        applyGap()
    ]
})
</script>

<script lang="ts">
export default {
    name: 'ChiGridFlex'
}
</script>
