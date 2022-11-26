<template>
    <div class="overflow-x-auto p-0.5">
        <table :class="['border-collapse shadow rounded w-full table-auto overflow-hidden dark:shadow-gray-700', useTheme().colors.background.system.element]">
            <slot />
        </table>
    </div>
</template>

<script setup lang="ts">
import useTheme from '../../composables/useTheme'
</script>

<script lang="ts">
export default {
    name: 'ChiTable'
}
</script>
