import { getCurrentInstance } from 'vue'

type ApplyAlign = () => string

export default function useApplyAlign (): { applyAlign: ApplyAlign } {
    const ctx = getCurrentInstance()

    const applyAlign: ApplyAlign = (): string => {
        const items = ctx?.props.items
        const justify = ctx?.props.justify
        return `${items} ${justify}`
    }

    return { applyAlign }
}
