<template>
    <component :is="getComponent()" :class="classes">
        <slot />
    </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { definedProps } from './paper.typings'
import useApplyDensity from '../../composables/components/methods/useApplyDensity'
import useApplyElevation from '../../composables/components/methods/useApplyElevation'
import useApplyHideBorder from '../../composables/components/methods/useApplyHideBorder'
import useApplyHideRounded from '../../composables/components/methods/useApplyHideRounded'
import useApplyTheme from '../../composables/components/methods/useApplyTheme'
import useGetComponent from '../../composables/components/methods/useGetComponent'

defineProps(definedProps)

const { applyDensity } = useApplyDensity()
const { applyElevation } = useApplyElevation()
const { applyHideBorder } = useApplyHideBorder()
const { applyHideRounded } = useApplyHideRounded()
const { applyTheme } = useApplyTheme()
const { getComponent } = useGetComponent()

const classes = computed((): Array<string> => {
    return [
        applyDensity(),
        applyElevation(),
        applyHideBorder(),
        applyHideRounded(),
        applyTheme()
    ]
})
</script>

<script lang="ts">
export default {
    name: 'ChiPaper'
}
</script>
