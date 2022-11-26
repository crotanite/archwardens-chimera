declare module "@archwardens/chimera" {
    export const components: any

    export interface Colors {
        success: string
        warning: string
        error: string
        info: string
        system: {
            [index: string]: string
            body: string
            element: string
        }
        accent: string
        clear: string
    }

    export interface Padding {
        dense: string
        wide: string
    }

    export interface Theme {
        colors: {
            background: Colors
            border: Colors
            text: Colors
        }
        padding: {
            element: Padding
            content: Padding
        }
        spacing: {
            x: string
        }
    }

    export interface Screens<T> {
        xs: T
        sm: T
        md: T
        lg: T
        xl: T
        "2xl": T
    }

    export const desktop: Array<keyof Screens<string>>
    export const mobile: Array<keyof Screens<string>>
    export const screenSizes: Screens<number>
    export const theme: Theme
}
