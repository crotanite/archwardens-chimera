export interface HrefProps {
    /**
     * The link to apply.
     * @type {null|string}
     */
     href?: null|string
}

export function hrefProps (props: HrefProps = {}) {
    const defaults: HrefProps = { ...{ href: null }, ...props }

    return {
        href: {
            type: String,
            default: defaults.href
        }
    }
}
