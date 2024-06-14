import { type ReactNode } from 'react'

import { createStrictContext, useStrictContext } from '@/shared/lib/react'

import { type TabState } from './ui/InteractiveTabs'

export type StoredTabsStateType = {
    tabsStatePinned: Array<Omit<TabState, 'icon'>>
    tabsStateUnPinned: Array<Omit<TabState, 'icon'>>
}

type InteractiveTabsDepsContext = {
    storeTabsState: (tabsState: StoredTabsStateType) => void
    getStoredTabsState: () => StoredTabsStateType
    onChangeTab: (tabId: string) => void
    getInitialSelectedTab: () => string | null
    renderContent: (tabId: string) => ReactNode
}

export const interactiveTabsDepsContext = createStrictContext<InteractiveTabsDepsContext>()

export const useStoreTabsState = () => {
    const { storeTabsState } = useStrictContext(interactiveTabsDepsContext)
    return storeTabsState
}

export const useGetStoredTabsState = () => {
    const { getStoredTabsState } = useStrictContext(interactiveTabsDepsContext)
    return getStoredTabsState
}

export const useOnChangeTab = () => {
    const { onChangeTab } = useStrictContext(interactiveTabsDepsContext)
    return onChangeTab
}

export const useGetInitialSelectedTab = () => {
    const { getInitialSelectedTab } = useStrictContext(interactiveTabsDepsContext)
    return getInitialSelectedTab
}

export const useRenderContent = () => {
    const { renderContent } = useStrictContext(interactiveTabsDepsContext)
    return renderContent
}
