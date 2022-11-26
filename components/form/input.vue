<template>
    <input
        :autocomplete="autocomplete"
        :class="classes"
        :disabled="form !== null ? form.disabled : disabled"
        :name="name"
        :placeholder="placeholder ?? content"
        :type="type"
        :value="modelValue"
        @input="updateValue($event, emits)"
        @keyup.enter="form !== null ? form.submit : null"
    >
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import useInputClasses from '../../composables/components/methods/useInputClasses'
import { definedProps, updateValue } from './input.typings'
import { FormProps } from './form.typings'

const emits = defineEmits(['update:modelValue'])
const props = defineProps(definedProps)

const form: FormProps|null = inject('form', null as FormProps|null)
const classes = computed((): string => {
    return props.type === 'checkbox'
        ? useInputClasses(true, 'mr-3', form !== null ? form.disabled : null)
        : useInputClasses(true, 'w-full', form !== null ? form.disabled : null)
})
</script>

<script lang="ts">
export default {
    name: 'ChiFormInput'
}
</script>
