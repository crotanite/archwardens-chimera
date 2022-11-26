<template>
    <component :is="icon" />
</template>

<script setup lang="ts">
import { ArrowDownIcon } from '@heroicons/vue/24/outline'
import { definedProps } from './icon.typings'

defineProps(definedProps)
</script>

<script lang="ts">
export default {
    name: 'ChiIcon'
}
</script>
