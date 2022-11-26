<template>
    <span v-if="href === null" :class="classes">
        <slot>{{ content }}</slot>
    </span>
    <InertiaLink :class="classes" :href="href" v-else>
        <slot>{{ content }}</slot>
    </InertiaLink>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Link as InertiaLink } from '@inertiajs/inertia-vue3'
import { definedProps } from './link.typings'

const props = defineProps(definedProps)

const classes = computed((): Array<string> => {
    return ['cursor-pointer', props.color]
})
</script>

<script lang="ts">
export default {
    name: "ChiUtilLink"
}
</script>
