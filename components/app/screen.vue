<template>
    <div :class="['h-screen w-screen overflow-y-auto', [useTheme().colors.background.system.body]]">
        <slot />
    </div>
</template>

<script setup lang="ts">
import useTheme from '../../composables/useTheme'
</script>

<script lang="ts">
export default {
    name: 'ChiAppScreen'
}
</script>
