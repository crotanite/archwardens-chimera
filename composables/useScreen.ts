import { inject, ref } from 'vue'
import { screenSizes, Screens } from '../archwardens.config'

export type CalculateScreenSize = () => string
export type GetValueForScreen = (sizes: unknown, defaultValue?: string) => string

export function useScreen (): { calculateScreenSize: CalculateScreenSize, getValueForScreen: GetValueForScreen } {
    const calculateScreenSize: CalculateScreenSize = (): string => {
        const width = typeof window !== 'undefined' ? window.innerWidth : 'lg'

        if (width >= screenSizes.xs && width < screenSizes.sm) {
            return 'xs'
        } else if (width >= screenSizes.sm && width < screenSizes.md) {
            return 'sm'
        } else if (width >= screenSizes.md && width < screenSizes.lg) {
            return 'md'
        } else if (width >= screenSizes.lg && width < screenSizes.xl) {
            return 'lg'
        } else if (width >= screenSizes.xl && width < screenSizes['2xl']) {
            return 'xl'
        } else {
            return '2xl'
        }
    }

    const getValueForScreen: GetValueForScreen = (sizes: Screens<unknown>, defaultValue = ''): string => {
        const screen = inject('screen', ref<string>(''))

        switch (screen.value) {
            case '2xl': {
                for (let i = Object.keys(screenSizes).indexOf('2xl'); i < Object.keys(screenSizes).length; i++) {
                    if (typeof sizes[Object.keys(screenSizes)[i]] !== 'undefined') {
                        return String(sizes[Object.keys(screenSizes)[i]])
                    }
                }
                break
            }
            case 'xl': {
                for (let i = Object.keys(screenSizes).indexOf('xl'); i < Object.keys(screenSizes).length; i++) {
                    if (typeof sizes[Object.keys(screenSizes)[i]] !== 'undefined') {
                        return String(sizes[Object.keys(screenSizes)[i]])
                    }
                }
                break
            }
            case 'lg': {
                for (let i = Object.keys(screenSizes).indexOf('lg'); i < Object.keys(screenSizes).length; i++) {
                    if (typeof sizes[Object.keys(screenSizes)[i]] !== 'undefined') {
                        return String(sizes[Object.keys(screenSizes)[i]])
                    }
                }
                break
            }
            case 'md': {
                for (let i = Object.keys(screenSizes).indexOf('md'); i < Object.keys(screenSizes).length; i++) {
                    if (typeof sizes[Object.keys(screenSizes)[i]] !== 'undefined') {
                        return String(sizes[Object.keys(screenSizes)[i]])
                    }
                }
                break
            }
            case 'sm': {
                for (let i = Object.keys(screenSizes).indexOf('sm'); i < Object.keys(screenSizes).length; i++) {
                    if (typeof sizes[Object.keys(screenSizes)[i]] !== 'undefined') {
                        return String(sizes[Object.keys(screenSizes)[i]])
                    }
                }
                break
            }
            case 'xs': {
                for (let i = Object.keys(screenSizes).indexOf('xs'); i < Object.keys(screenSizes).length; i++) {
                    if (typeof sizes[Object.keys(screenSizes)[i]] !== 'undefined') {
                        return String(sizes[Object.keys(screenSizes)[i]])
                    }
                }
                break
            }
            default: return defaultValue
        }
        return defaultValue
    }

    return { calculateScreenSize, getValueForScreen }
}
