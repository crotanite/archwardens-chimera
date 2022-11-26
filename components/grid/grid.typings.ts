import { alignProps } from '../../composables/components/props/useAlignProps'
import { columnsProps } from '../../composables/components/props/useColumnsProps'
import { gapProps } from '../../composables/components/props/useGapProps'

export const definedProps = {
    ...alignProps({ items: 'items-start', justify: 'justify-start' }),
    ...columnsProps({ columns: 'grid-cols-1' }),
    ...gapProps({ gap: 'gap-3' })
}
