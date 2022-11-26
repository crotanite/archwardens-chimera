<template>
    <component :class="classes" :is="type === 'head' ? 'th' : 'td'">
        <slot>{{ content }}</slot>
    </component>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { contentProps } from '../../composables/components/props/useContentProps'
import { widthProps } from '../../composables/components/props/useWidthProps'
import useApplyWidth from '../../composables/components/methods/useApplyWidth'

const props = defineProps({
    ...contentProps(),
    ...widthProps(),

    left: {
        type: Boolean,
        default: false
    }
})

const { applyWidth } = useApplyWidth()
const type = inject<string>('type')
const classes = computed((): Array<string> => {
    return [
        'p-3 whitespace-nowrap first:pl-6 last:pr-6',
        props.width === null ? 'w-auto' : applyWidth(),
        props.left ? 'text-left' : 'text-center',
        type === 'head' ? 'font-bold' : 'font-normal',
    ]
})
</script>

<script lang="ts">
export default {
    name: 'ChiTableCol'
}
</script>
