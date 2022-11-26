<template>
    <form class="flex flex-col space-y-2">
        <slot />
    </form>
</template>

<script setup lang="ts">
import { provide } from 'vue'
import { definedProps, FormProps } from './form.typings'

const props = defineProps(definedProps)

provide('form', props as FormProps)
</script>

<script lang="ts">
export default {
    name: 'ChiForm'
}
</script>
