<template>
    <div>
        <chi-form-label
            v-if="type !== 'checkbox' && content !== null"
            :content="content"
            :for="name"
        />
        <chi-form-input v-bind="props" @update:modelValue="updateValue" />
        <chi-form-label
            v-if="type === 'checkbox' && content !== null"
            :content="content"
            inline
            :for="name"
        />
        <chi-form-error :error="error" />
    </div>
</template>

<script setup lang="ts">
import { definedProps } from './input.typings'
import ChiFormInput from './input.vue'
import ChiFormLabel from './label.vue'

const emits = defineEmits(['update:modelValue'])
const props = defineProps(definedProps)

const updateValue = (value: unknown) => {
    emits('update:modelValue', value)
}
</script>

<script lang="ts">
export default {
    name: 'ChiFormInputWithLabel'
}
</script>
