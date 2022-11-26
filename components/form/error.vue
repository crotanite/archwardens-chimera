<template>
    <div
        v-if="hasError"
        :class="['text-sm', [useTheme().colors.text.error]]"
    >
        <slot :error="error">
            {{ error }}
        </slot>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import useTheme from '../../composables/useTheme'
import { definedProps } from './error.typings'

const props = defineProps(definedProps)
const hasError = computed((): boolean => {
    return typeof props.error !== null
})
</script>

<script lang="ts">
export default {
    name: 'ChiFormErrors'
}
</script>
