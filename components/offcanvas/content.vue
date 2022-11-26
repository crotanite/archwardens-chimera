<template>
    <div
        class="grow duration-500 ease-in-out"
        :style="{ marginLeft: showLeft ? `${offcanvas.left}px` : '0px' }"
    >
        <slot @close-drawer="closeDrawer" />
    </div>
</template>

<script setup lang="ts">
import { computed, inject, ref } from 'vue'
import { OffCanvasInject } from './offcanvas.typings'

const emits = defineEmits(['close-drawer'])

const screen = inject('screen', ref())
const offcanvas = inject('offcanvas') as OffCanvasInject
const showLeft = computed((): boolean => {
    return offcanvas.showLeftAtScreen?.includes(screen.value)
})
const showRight = computed((): boolean => {
    return offcanvas.showRightAtScreen?.includes(screen.value)
})
const closeDrawer = () => {
    console.log('close drawer', 'content')
}
</script>

<script lang="ts">
export default {
    name: 'ChiOffcanvasContent'
}
</script>
