<template>
    <div class="inline-flex items-center space-x-3">
        <div
            :class="[{
                'inline-block flex items-center cursor-pointer h-6 w-12 rounded-full border': true,
                [useTheme().colors.background.system.disabled]: true,
                [useTheme().colors.border.system.body]: true,
                [color]: isActive
            }]"
            @click="toggle"
        >
            <div
                :class="[{
                    'h-5 w-5 rounded-full flex transition transition-all': true,
                    [useTheme().colors.background.system.element]: true,
                    [useTheme().colors.border.system.element]: true,
                    'ml-0.5': !isActive,
                    'ml-6': isActive
                }]"
            >
                <slot />
            </div>
        </div>
        <chi-form-label
            v-if="content !== null"
            :content="content"
            inline
        />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { definedProps } from './toggle.typings'
import useTheme from '../../composables/useTheme'

const emits = defineEmits(['update:modelValue'])
const props = defineProps(definedProps)

const isActive = ref(props.modelValue)
function toggle () {
    isActive.value = !isActive.value
    emits('update:modelValue', isActive.value)
}
</script>

<script lang="ts">
export default {
    name: 'ChiFormToggle'
}
</script>
