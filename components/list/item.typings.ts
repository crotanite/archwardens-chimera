import { hrefProps } from '../../composables/components/props/useHrefProps'
import { hideBorderProps } from '../../composables/components/props/useHideBorderProps'
import { hideHoverProps } from '../../composables/components/props/useHideHoverProps'

export const definedProps = {
    ...hrefProps(),
    ...hideBorderProps(),
    ...hideHoverProps(),
}
