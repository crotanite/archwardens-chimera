<template>
    <component
        :is="`h${level}`"
        :class="classes"
    >
        <slot>{{ content }}</slot>
    </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { definedProps } from './heading.typings'

const props = defineProps(definedProps)

const classes = computed((): Array<string> => {
    const level = Number(props.level)
    const classes = ['block font-bold font-headings']

    switch (level) {
        case 1: classes.push('text-5xl'); break
        case 2: classes.push('text-4xl'); break
        case 3: classes.push('text-3xl'); break
        case 4: classes.push('text-2xl'); break
        case 5: classes.push('text-xl'); break
        case 6: classes.push('text-lg'); break
    }

    return classes
})
</script>

<script lang="ts">
export default {
    name: 'ChiUtilHeading'
}
</script>
