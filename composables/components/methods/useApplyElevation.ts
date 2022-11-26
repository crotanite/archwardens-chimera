import { getCurrentInstance } from 'vue'

type ApplyElevation = (initial?: number) => string

export default function useApplyElevation (): { applyElevation: ApplyElevation } {
    const ctx = getCurrentInstance()

    const applyElevation: ApplyElevation = () => {
        const elevation = ctx?.props.elevation
        switch (elevation) {
            case 0: return ''
            case 1: return 'shadow'
            case 2: return 'shadow-md'
            case 3: return 'shadow-lg'
            case 4: return 'shadow-xl'
            case 5: return 'shadow-2xl'
            default: return ''
        }
    }

    return { applyElevation }
}
