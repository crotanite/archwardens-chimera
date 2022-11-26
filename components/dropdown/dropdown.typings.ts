import { alignmentProps } from '../../composables/components/props/useAlignmentProps'
import { heightProps } from '../../composables/components/props/useHeightProps'
import { hideArrowProps } from '../../composables/components/props/useHideArrowProps'
import { hideBorderProps } from '../../composables/components/props/useHideBorderProps'
import { toggleProps } from '../../composables/components/props/useToggleProps'
import { widthProps } from '../../composables/components/props/useWidthProps'

export const definedProps = {
    ...alignmentProps(),
    ...heightProps(),
    ...hideBorderProps(),
    ...hideArrowProps(),
    ...toggleProps(),
    ...widthProps()
}
