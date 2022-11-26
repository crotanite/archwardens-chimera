import { contentProps } from '../../composables/components/props/useContentProps'
import { inlineProps } from '../../composables/components/props/useInlineProps'

export interface FormLabelProps {
    /**
     * The input this label is for.
     * @type {string|null}
     */
    for?: string|null
}

export function formLabelProps(props: FormLabelProps = {}) {
    const defaults: FormLabelProps = { ...{ for: null }, ...props }

    return {
        for: {
            type: String,
            default: defaults.for
        }
    }
}

export const definedProps = {
    ...contentProps({ content: null }),
    ...inlineProps({ inline: false }),
    ...formLabelProps({ for: null }),
}
