<template>
    <label :class="classes" :for="props.for">
        <slot>{{ content }}</slot>
    </label>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { definedProps } from './label.typings'

const props = defineProps(definedProps)

const classes = computed((): Array<string> => {
    return [
        'font-bold text-sm',
        props.inline ? 'inline-block' : 'block'
    ]
})
</script>

<script lang="ts">
export default {
    name: 'ChiFormLabel'
}
</script>
