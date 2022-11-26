<template>
    <hr :class="[gap, color]">
</template>

<script setup lang="ts">
import { definedProps } from './hr.typings'

defineProps(definedProps)
</script>

<script lang="ts">
export default {
    name: 'ChiUtilHr'
}
</script>
