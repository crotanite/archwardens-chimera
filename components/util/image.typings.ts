import { heightProps } from '../../composables/components/props/useHeightProps'
import { srcProps } from '../../composables/components/props/useSrcProps'
import { widthProps } from '../../composables/components/props/useWidthProps'

export const definedProps = {
    ...heightProps(),
    ...srcProps(),
    ...widthProps()
}
