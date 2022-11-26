export interface IconProps {
    //
}

export function iconProps (props: IconProps = {}) {
    const defaults: IconProps = { ...{ }, ...props }

    return {
        icon: {
            type: String,
            required: true
        }
    }
}

export const definedProps = {
    ...iconProps()
}
