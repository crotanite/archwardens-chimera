import { getCurrentInstance } from 'vue'
import { Screens } from '../../../archwardens.config'
import { useScreen } from '../../useScreen'

type ApplyColumns = (grid: boolean) => string

export default function useApplyColumns (): { applyColumns: ApplyColumns } {
    const ctx = getCurrentInstance()

    const applyColumns: ApplyColumns = (grid = true): string => {
        const columns = ctx?.props.columns
        const { getValueForScreen } = useScreen()

        // grid
        if (grid) {
            if (columns === null) {
                return ''
            } else if(typeof columns === 'string') {
                return columns
            } else {
                const defaultColumns: Screens<string> = { xs: 'grid-cols-1' }
                const currentColumns: Screens<string> = { ...defaultColumns, ...columns }
                const output = getValueForScreen(currentColumns as Screens<string>)
                return output
            }

        // flex
        } else {
            if (columns === null) {
                return 'flex-row'
            }
            const defaultColumns: Screens<boolean> = { xs: true, md: false }
            const currentColumns: Screens<boolean> = { ...defaultColumns, ...columns }
            const output = getValueForScreen(currentColumns as Screens<unknown>)
            return output === 'true' ? 'flex-col' : 'flex-row'
        }


        // if (typeof columns === 'object') {
        //     const { getValueForScreen } = useScreen()
        //     if (grid) {
        //         const val = Number(getValueForScreen(columns as Screens<unknown>))
        //         return val === 0 ? 'grid-cols-none' : `grid-cols-${val}`
        //     } else {
        //         const defaultColumns = { xs: true, md: false }
        //         const currentColumns = { ...defaultColumns, ...columns }
        //         const val = getValueForScreen(currentColumns as Screens<unknown>)
        //         return val === 'true' ? 'flex-col' : 'flex-row'
        //     }
        // } else {
        //     return columns === 0 ? 'grid-cols-none' : `grid-cols-${columns}`
        // }
    }

    return { applyColumns }
}

[
    ['grid-cols-none', 'grid-cols-1', 'grid-cols-2', 'grid-cols-3', 'grid-cols-4', 'grid-cols-5', 'grid-cols-6', 'grid-cols-7', 'grid-cols-8', 'grid-cols-9', 'grid-cols-10', 'grid-cols-1', 'grid-cols-12']
]
