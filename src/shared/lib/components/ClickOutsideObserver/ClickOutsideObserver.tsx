import {
    type RefObject,
    useRef,
    type ComponentPropsWithoutRef,
    type ElementType,
    type PropsWithChildren
} from 'react'
import useOnClickOutside from 'use-onclickoutside'

type PolymorphicAsProp<E extends ElementType> = {
    as?: E
}

type PolymorphicProps<E extends ElementType> = PropsWithChildren<
ComponentPropsWithoutRef<E> & PolymorphicAsProp<E>
>

const defaultElement = 'div'

type ClickOutsideObserverProps<E extends ElementType = typeof defaultElement> =
    PolymorphicProps<E> & {
        onClickOutside: () => void
    }

function ClickOutsideObserver<E extends ElementType = typeof defaultElement> ({
    as,
    children,
    className,
    onClickOutside,
    ...restProps
}: ClickOutsideObserverProps<E>) {
    const outsideObserverRef = useRef()
    useOnClickOutside(outsideObserverRef as unknown as RefObject<HTMLElement>, onClickOutside)

    const Component = as ?? defaultElement

    return (
        <Component {...restProps} className={className} ref={outsideObserverRef as unknown as any}>
            {children}
        </Component>
    )
}

export default ClickOutsideObserver
