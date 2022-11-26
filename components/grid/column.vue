<template>
    <div :class="classes">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { definedProps } from './column.typings'
import useApplyWidth from '../../composables/components/methods/useApplyWidth'

const props = defineProps(definedProps)

const { applyWidth } = useApplyWidth()
const classes = computed((): Array<string> => {
    return [
        props.shrink !== null ? (props.shrink ? 'shrink' : 'shrink-0') : '',
        props.grow !== null ? (props.grow ? 'grow' : 'grow-0') : '',
        applyWidth()
    ]
})
</script>

<script lang="ts">
export default {
    name: 'ChiGridColumn'
}
</script>
