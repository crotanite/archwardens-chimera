<template>
    <chi-util-link
        :class="classes"
        color="text-current"
        :href="href"
    >
        <div v-if="$slots.prefix">
            <slot name="prefix" />
        </div>
        <div class="grow">
            <slot />
        </div>
        <div v-if="$slots.suffix">
            <slot name="suffix" />
        </div>
    </chi-util-link>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import ChiUtilLink from '../util/link.vue'
import useApplyBorder from '../../composables/components/methods/useApplyBorder'
import useApplyHover from '../../composables/components/methods/useApplyHover'
import { definedProps } from './item.typings'
import { ListProps } from './list.typings'

const props = defineProps(definedProps)

const list: ListProps = inject('list') as ListProps
const { applyBorder } = useApplyBorder(true)
const { applyHover } = useApplyHover(true)
const classes = computed((): Array<string> => {
    return [
        'flex items-center leading-4 space-x-1 text-body w-full',
        applyBorder(`border-b ${list.border} last:border-b-0`, props.hideBorder !== null ? !props.hideBorder : !list.hideBorder),
        applyHover(`cursor-pointer ${list.hover}`, props.hideHover !== null ? !props.hideHover : !list.hideHover),
        list.padding
    ]
})
</script>

<script lang="ts">
export default {
    name: 'ChiListItem'
}
</script>
