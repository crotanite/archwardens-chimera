import { Screens } from '../../../archwardens.config'

export interface ColumnsProps {
    /**
     * The gap between elements.
     * @type {Screens<boolean>}
     */
     columns?: null|boolean|string|Screens<boolean>
}

export function columnsProps (props: ColumnsProps = {}) {
    const defaults: ColumnsProps = { ...{ columns: null }, ...props }

    return {
        columns: {
            type: [Boolean, String, Object as () => Screens<string|boolean>],
            default: defaults.columns
        }
    }
}
