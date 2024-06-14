import {
    useEffect,
    useRef,
    type ComponentPropsWithoutRef,
    type ElementType,
    type PropsWithChildren
} from 'react'

import { useParentDomRect } from '../model/context'

type PolymorphicAsProp<E extends ElementType> = {
    as?: E
}

type PolymorphicProps<E extends ElementType> = PropsWithChildren<
ComponentPropsWithoutRef<E> &
PolymorphicAsProp<E> & { onChangeVisibility?: (isVisible: boolean) => void }
>

const defaultElement = 'div'

type ClickOutsideObserverProps<E extends ElementType = typeof defaultElement> = PolymorphicProps<E>

function VisibilityChild<E extends ElementType = typeof defaultElement> ({
    as,
    children,
    className,
    onChangeVisibility,
    ...restProps
}: ClickOutsideObserverProps<E>) {
    const Component = as ?? defaultElement
    const childRef = useRef<HTMLElement>()
    const parentDomRect = useParentDomRect()

    const visibilityRef = useRef<boolean>()

    useEffect(() => {
        if (!onChangeVisibility) {
            return
        }
        const childDomRect = childRef?.current?.getBoundingClientRect()
        if (!parentDomRect || !childDomRect) {
            return
        }

        const isVisible =
            childDomRect.left >= parentDomRect.left && childDomRect.right <= parentDomRect.right

        if (isVisible !== visibilityRef.current) {
            visibilityRef.current = isVisible
            onChangeVisibility(isVisible)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [parentDomRect])

    return (
        <Component {...restProps} className={className} ref={childRef as unknown as any}>
            {children}
        </Component>
    )
}

export default VisibilityChild
