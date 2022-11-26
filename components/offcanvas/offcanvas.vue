<template>
    <chi-app-screen>
        <slot
            :open-drawer="openDrawer"
            :close-drawer="closeDrawer"
        />
    </chi-app-screen>
</template>

<script setup lang="ts">
import { provide, ref } from 'vue'
import { definedProps, Drawers } from './offcanvas.typings'

const props = defineProps(definedProps)

const openDrawers = ref<Drawers>({ left: false, right: false })
const showingDrawers = ref<Drawers>({ left: false, right: false })

const openDrawer = ({ side }: { side: keyof Drawers }) => {
    if (showingDrawers.value[side] === false) {
        openDrawers.value[side] = true
        setTimeout(() => {
            showingDrawers.value[side] = true
        }, 500)
    }
}
const closeDrawer = ({ side }: { side: keyof Drawers }) => {
    if (showingDrawers.value[side] === true) {
        openDrawers.value[side] = false
        setTimeout(() => {
            showingDrawers.value[side] = false
        }, 500)
    }
}

provide('offcanvas', {
    ...props,
    openDrawers
})
</script>

<script lang="ts">
export default {
    name: 'ChiOffcanvas'
}
</script>
