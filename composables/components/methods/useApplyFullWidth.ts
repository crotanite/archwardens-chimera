import { getCurrentInstance } from 'vue'

type ApplyFullWidth = () => string

export default function useApplyFullWidth (): { applyFullWidth: ApplyFullWidth } {
    const ctx = getCurrentInstance()

    const applyFullWidth: ApplyFullWidth = () => {
        let state = ctx?.props.fullWidth
        return state ? 'w-full' : ''
    }

    return { applyFullWidth }
}
