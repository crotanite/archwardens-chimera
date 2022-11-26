<template>
    <chi-form-toggle v-model="isDark" />
</template>

<script setup lang="ts">
import { useDark } from '@vueuse/core'
const isDark = useDark()
</script>

<script lang="ts">
export default {
    name: 'ChiAppDarkToggle'
}
</script>
