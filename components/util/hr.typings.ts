import { colorProps } from '../../composables/components/props/useColorProps'

export const definedProps = {
    ...colorProps({ color: 'dark:border-gray-600' }),

    gap: {
        type: String,
        default: 'my-1'
    }
}
