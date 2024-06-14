import { createStrictContext, useStrictContext } from '@/shared/lib/react'

type VisibilityChildContext = {
    parentDomRect: DOMRect | null
}

export const visibilityChildContext = createStrictContext<VisibilityChildContext>()

export const useParentDomRect = () => {
    const { parentDomRect } = useStrictContext(visibilityChildContext)

    return parentDomRect
}
