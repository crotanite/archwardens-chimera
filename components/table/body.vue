<template>
    <tbody>
        <slot />
    </tbody>
</template>

<script setup lang="ts">
import { provide } from 'vue'

provide('type', 'body')
</script>

<script lang="ts">
export default {
    name: 'ChiTableBody'
}
</script>
