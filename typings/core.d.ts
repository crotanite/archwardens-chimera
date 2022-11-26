import { Colors, Padding, Screens, Theme } from '../archwardens.config'

declare module "@archwardens/chimera" {
    export const components: any
    export const desktop: Array<keyof Screens<string>>
    export const mobile: Array<keyof Screens<string>>
    export const screenSizes: Screens<number>
    export const theme: Theme

    export {
        Colors,
        Padding,
        Screens,
        Theme
    }
}
