<template>
    <chi-paper :class="['flex']" dense hide-border hide-rounded>
        <slot />
    </chi-paper>
</template>

<script setup lang="ts">
import useTheme from '../../composables/useTheme'
</script>

<script lang="ts">
export default {
    name: 'ChiAppBar'
}
</script>
