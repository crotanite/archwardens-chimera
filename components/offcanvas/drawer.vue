<template>
    <div
        ref="drawer"
        :class="[
            'transition transition-[margin] duration-500 ease-in-out bottom-0 fixed top-0 z-50 shadow dark:shadow-gray-800',
            [useTheme().colors.background.system.element],
            {
                'left-0': side === 'left',
                'right-0': side === 'right'
            }
        ]"
        :style="[{
            width: `${offcanvas[side]}px`,
            marginLeft: side === 'left' && !show ? `-${offcanvas.left}px` : '',
            marginRight: side === 'right' && !show ? `-${offcanvas.right}px` : ''
        }]"
    >
        <slot />
    </div>
</template>

<script setup lang="ts">
import { computed, inject, ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import useTheme from '../../composables/useTheme'
import { OffCanvasInject } from './offcanvas.typings'

const emits = defineEmits(['close-drawer'])
const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false
    },

    side: {
        type: String,
        default: 'left',
        validator: (val: string) => ['left', 'right'].includes(val)
    }
})

const screen = inject('screen', ref())
const offcanvas = inject('offcanvas') as OffCanvasInject
const showAtScreen = computed((): boolean => {
    return offcanvas.showLeftAtScreen?.includes(screen.value) ?? false
})
const showHidden = computed((): boolean => {
    return !showAtScreen.value && offcanvas.openDrawers.value[props.side]
})
const show = computed((): boolean => {
    return showAtScreen.value || showHidden.value
})
const closeDrawer = (): void => {
    if (showHidden.value) {
        emits('close-drawer', { side: props.side })
    }
}

const drawer = ref(null)
onClickOutside(drawer, () => closeDrawer())
</script>

<script lang="ts">
export default {
    name: 'ChiOffcanvasDrawer'
}
</script>
