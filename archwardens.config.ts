import { Screens, Theme } from '@archwardens/chimera'

export const theme: Theme = {
    colors: {
        background: {
            success: 'bg-green-500 text-white dark:bg-green-600',
            warning: 'bg-yellow-500 text-white dark:bg-yellow-600',
            error: 'bg-red-500 text-white dark:bg-red-600',
            info: 'bg-blue-500 text-white dark:bg-blue-600',
            system: {
                body: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100',
                element: 'bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:shadow-gray-800',
                disabled: 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100',
                input: 'bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:shadow-gray-800',
                inputDisabled: 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100',
            },
            accent: 'bg-accent-500 text-white dark:bg-accent-600',
            clear: 'bg-transparent'
        },
        border: {
            success: 'border-green-600 dark:border-green-700',
            warning: 'border-yellow-600 dark:border-yellow-700',
            error: 'border-red-600 dark:border-red-700',
            info: 'border-blue-600 dark:border-blue-700',
            system: {
                body: 'border-gray-200 dark:border-gray-800',
                element: 'border-gray-200 dark:border-gray-700',
                disabled: 'border-gray-200 dark:border-gray-600',
                input: 'border-gray-200 dark:border-gray-700',
                inputDisabled: 'border-gray-200 dark:border-gray-600',
            },
            accent: '',
            clear: 'border-gray-200 dark:border-gray-700'
        },
        text: {
            success: 'text-green-400 dark:text-green-500',
            warning: 'text-yellow-400 dark:text-yellow-500',
            error: 'text-red-400 dark:text-red-500',
            info: 'text-blue-400 dark:text-blue-500',
            system: {
                body: 'text-gray-200 dark:text-gray-600',
                element: 'text-gray-200 dark:text-gray-700',
            },
            accent: 'text-accent-500 dark:text-accent-600',
            clear: ''
        },
    },
    padding: {
        element: {
            dense: 'px-2 py-1',
            wide: 'px-4 py-2'
        },
        content: {
            dense: 'px-6 py-3',
            wide: 'p-6'
        }
    },
    spacing: {
        x: 'space-x-3 md:space-x-6'
    }
}

export const screenSizes: Screens<number> = {
    "2xl": 1536,
    xl: 1280,
    lg: 1024,
    md: 768,
    sm: 640,
    xs: 0
}

export const desktop: Array<keyof Screens<string>> = ['2xl', 'xl', 'lg']
export const mobile: Array<keyof Screens<string>> = ['xs']
