<template>
    <div class="text-sm">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { provide } from 'vue'
import { definedProps } from './list.typings'

const props = defineProps(definedProps)
provide('list', props)
</script>

<script lang="ts">
export default {
    name: 'ChiList'
}
</script>
