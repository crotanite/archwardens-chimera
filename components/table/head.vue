<template>
    <thead :class="['text-xs uppercase tracking-wide border-b', useTheme().colors.background.system.body]">
        <chi-table-row>
            <slot />
        </chi-table-row>
    </thead>
</template>

<script setup lang="ts">
import { provide } from 'vue'
import useTheme from '../../composables/useTheme'

provide('type', 'head')
</script>

<script lang="ts">
export default {
    name: 'ChiTableHead'
}
</script>
