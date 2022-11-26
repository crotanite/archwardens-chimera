import { getCurrentInstance } from 'vue'

type ApplyGap = () => string

export default function useApplyGap (): { applyGap: ApplyGap } {
    const ctx = getCurrentInstance()

    const applyGap: ApplyGap = (): string => {
        const gap = ctx?.props.gap
        return gap === null ? '' : `${gap}`
    }

    return { applyGap }
}
