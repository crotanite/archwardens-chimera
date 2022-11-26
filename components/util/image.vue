<template>
    <img
        :class="classes"
        :src="src"
    >
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { definedProps } from './image.typings'
import useApplyHeight from '../../composables/components/methods/useApplyHeight'
import useApplyWidth from '../../composables/components/methods/useApplyWidth'

defineProps(definedProps)

const { applyHeight } = useApplyHeight()
const { applyWidth } = useApplyWidth()
const classes = computed((): Array<string> => {
    return [
        'inline-block',
        applyHeight(),
        applyWidth()
    ]
})
</script>

<script lang="ts">
export default {
    name: 'ChiUtilImage'
}
</script>
