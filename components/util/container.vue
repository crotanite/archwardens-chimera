<template>
    <div :class="[[useTheme().padding.content.wide]]">
        <slot />
    </div>
</template>

<script setup lang="ts">
import useTheme from '../../composables/useTheme'
</script>

<script lang="ts">
export default {
    name: 'ChiUtilContainer'
}
</script>
