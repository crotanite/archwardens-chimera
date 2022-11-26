<template>
    <div class="ml-4 w-28">
        <chi-form-select
            :options="locales"
            show-above
            v-model="currentLocale"
            @update:model-value="switchLanguage($event)"
        />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Inertia } from '@inertiajs/inertia'
import { usePage } from '@inertiajs/inertia-vue3'

const locales = {
    en: 'English',
    de: 'Deutsch',
}
const currentLocale = ref<string>(usePage().props.value.lang.locale)

const switchLanguage = (locale: string) => {
    Inertia.patch(`/language/${locale}`, {}, {
        onSuccess: () => {
            console.log('success')
        }
    })
    // form.patch(`/language/${locale}`)
}
</script>

<script lang="ts">
export default {
    name: 'ChiAppSwitchLanguage'
}
</script>
