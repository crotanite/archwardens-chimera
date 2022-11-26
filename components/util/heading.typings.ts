import { contentProps } from '../../composables/components/props/useContentProps'

export const definedProps = {
    ...contentProps({ content: null }),

    level: {
        type: Number,
        default: 3
    }
}
