<template>
    <tr :class="classes">
        <slot />
    </tr>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'

const type = inject<string>('type')
const classes = computed((): Array<string> => {
    return [
        'border-b last:border-b-0',
        type === 'head' ? '' : 'hover:bg-gray-50 dark:hover:bg-gray-850',
    ]
})
</script>

<script lang="ts">
export default {
    name: 'ChiTableRow'
}
</script>
