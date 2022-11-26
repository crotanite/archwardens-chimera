import { getCurrentInstance, onMounted, Ref, ref } from 'vue'

export type Toggle = () => void
export type Close = () => void
export type Open = () => void

export default function useApplyToggle (defaultState = false): { show: Ref, toggle: Toggle, close: Close, open: Open } {
    const ctx = getCurrentInstance()
    const show = ref<boolean>(false)
    const disableToggle = ctx?.props.disableToggle ?? false
    const state = ctx?.props.isOpen ?? defaultState

    const toggle: Toggle = (): void => {
        if (!disableToggle) {
            show.value = !show.value
        }
    }
    const close: Close = (): void => {
        if (!disableToggle) {
            show.value = false
        }
    }
    const open: Open = (): void => {
        if (!disableToggle) {
            show.value = true
        }
    }

    onMounted(() => {
        show.value = state
    })

    return { show, toggle, close, open }
}
