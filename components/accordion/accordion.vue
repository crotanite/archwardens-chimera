<template>
    <div>
        <slot
            name="trigger"
            :show="show"
            :toggle="toggle"
        />

        <transition
            @enter="(el: any, done: SlideVerticalDoneFunction) => { slideDown(el, done as SlideVerticalDoneFunction, duration) }"
            @leave="(el: any, done: SlideVerticalDoneFunction) => { slideUp(el, done as SlideVerticalDoneFunction, duration) }"
        >
            <div
                v-if="show"
                class="overflow-hidden"
            >
                <slot />
            </div>
        </transition>
    </div>
</template>

<script setup lang="ts">
import { toggleProps } from '../../composables/components/props/useToggleProps'
import useApplyToggle from '../../composables/components/methods/useApplyToggle'
import { slideUp, slideDown, SlideVerticalDoneFunction } from '../../composables/transitions/slideVertical'

defineProps({
    ...toggleProps()
})

const { show, toggle } = useApplyToggle(false)
</script>

<script lang="ts">
export default {
    name: 'ChiAccordion'
}
</script>
