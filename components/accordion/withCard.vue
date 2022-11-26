<template>
    <chi-accordion
        class="py-3"
        :can-toggle="canToggle"
        :duration="duration"
        :is-open="isOpen"
    >
        <template #trigger="{ show, toggle }">
            <div class="flex items-center">
                <div class="grow">
                    <chi-util-heading
                        :level="4"
                        :content="title"
                    />
                    <div class="text-gray-400">
                        {{ subtitle }}
                    </div>
                </div>
                <chi-button
                    class="text-gray-900 dark:text-white"
                    :theme="null"
                    @click="toggle"
                >
                    <chi-icon
                        :class="['transition-transform', { 'rotate-180': show }]"
                        icon="chevron-down"
                    />
                </chi-button>
            </div>
        </template>
        <chi-card class="mt-3">
            <slot />
        </chi-card>
    </chi-accordion>
</template>

<script setup lang="ts">
import { titleProps } from '../../composables/components/props/useTitleProps'
import { toggleProps } from '../../composables/components/props/useToggleProps'

defineProps({
    ...titleProps(),
    ...toggleProps()
})
</script>

<script lang="ts">
export default {
    name: 'ChiAccordionWithCard'
}
</script>
