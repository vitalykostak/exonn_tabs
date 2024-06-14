import {
    useEffect,
    useRef,
    useState,
    type ComponentPropsWithoutRef,
    type ElementType,
    type PropsWithChildren
} from 'react'

import { visibilityChildContext } from '../model/context'

type PolymorphicAsProp<E extends ElementType> = {
    as?: E
}

type PolymorphicProps<E extends ElementType> = PropsWithChildren<
ComponentPropsWithoutRef<E> & PolymorphicAsProp<E>
>

const defaultElement = 'div'

type ClickOutsideObserverProps<E extends ElementType = typeof defaultElement> = PolymorphicProps<E>

function VisibilityObserverParent<E extends ElementType = typeof defaultElement> ({
    as,
    children,
    className,
    ...restProps
}: ClickOutsideObserverProps<E>) {
    const Component = as ?? defaultElement

    const parentRef = useRef<HTMLElement>()
    const [parentDomRect, setParentDomRect] = useState<DOMRect | null>(null)

    useEffect(() => {
        const node = parentRef?.current

        const setDomRect = () => {
            setParentDomRect(node?.getBoundingClientRect() || null)
        }

        setDomRect()

        const listener = () => {
            setDomRect()
        }

        node?.addEventListener('scroll', listener)
        window.addEventListener('resize', listener)

        return () => {
            node?.removeEventListener('scroll', listener)
            window.removeEventListener('resize', listener)
        }
    }, [])

    return (
        <Component {...restProps} className={className} ref={parentRef as unknown as any}>
            <visibilityChildContext.Provider value={{ parentDomRect }}>
                {children}
            </visibilityChildContext.Provider>
        </Component>
    )
}

export default VisibilityObserverParent
