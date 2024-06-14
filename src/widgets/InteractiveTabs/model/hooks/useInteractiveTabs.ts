import { useEffect, useState } from 'react'
import { type OnDragEndResponder } from 'react-beautiful-dnd'

import { reorder } from '@/shared/lib/dnd'

import {
    removeTabById,
    setIsOutsideOfLine,
    unSelectAllTabs,
    prepareStoredTabsStateToUsage,
    prepareTabsStateToStorage
} from '../../libs/tabs'
import { type InteractiveTap, type TabState } from '../../ui/InteractiveTabs'
import {
    useGetInitialSelectedTab,
    useGetStoredTabsState,
    useOnChangeTab,
    useStoreTabsState
} from '../../deps'

export const useInteractiveTabs = (tabs: InteractiveTap[]) => {
    const getStoredTabsState = useGetStoredTabsState()
    const storeTabsState = useStoreTabsState()
    const onChangeTab = useOnChangeTab()
    const getInitialSelectedTab = useGetInitialSelectedTab()

    const [tabsStatePinned, setTabsStatePinned] = useState<TabState[]>(() => {
        const stored = getStoredTabsState()
        if (!stored) {
            return []
        }
        const initialSelected = tabs.find((t) => t.id === getInitialSelectedTab())?.id
        const tabsState = prepareStoredTabsStateToUsage(tabs, stored).tabsStatePinned
        if (!initialSelected) {
            return tabsState
        }
        return unSelectAllTabs(tabsState).map((t) =>
            t.id === initialSelected ? { ...t, selected: true } : { ...t, selected: false }
        )
    })
    const [tabsStateUnPinned, setTabsStateUnPinned] = useState<TabState[]>(() => {
        const stored = getStoredTabsState()
        const initialSelected = tabs.find((t) => t.id === getInitialSelectedTab())?.id
        const currentTabs = tabs.map((tab, index) => (!index ? { ...tab, selected: true } : tab))
        if (!stored && !initialSelected) {
            return currentTabs
        }

        if (!stored && initialSelected) {
            return unSelectAllTabs(currentTabs).map((t) =>
                t.id === initialSelected ? { ...t, selected: true } : { ...t, selected: false }
            )
        }

        const preparedStored = prepareStoredTabsStateToUsage(tabs, stored).tabsStateUnPinned

        if (!initialSelected) {
            return preparedStored
        }

        return unSelectAllTabs(preparedStored).map((t) =>
            t.id === initialSelected ? { ...t, selected: true } : { ...t, selected: false }
        )
    })
    const tabsOutsideOfLine = tabsStateUnPinned.filter((t) => t.isOutsideOfLine)

    useEffect(() => {
        if (tabsStatePinned && tabsStateUnPinned) {
            storeTabsState(prepareTabsStateToStorage({ tabsStatePinned, tabsStateUnPinned }))
        }
    }, [tabsStatePinned, tabsStateUnPinned, storeTabsState])

    useEffect(() => {
        if (!tabsStatePinned || !tabsStateUnPinned) {
            return
        }
        const tabId = [...tabsStatePinned, ...tabsStateUnPinned].find((t) => t.selected)?.id
        if (tabId) {
            onChangeTab(tabId)
        }
    }, [tabsStatePinned, tabsStateUnPinned, onChangeTab])

    const selectTab = (tabId: string) => () => {
        const newPinnedState = unSelectAllTabs(tabsStatePinned).map((t) =>
            t.id === tabId ? { ...t, selected: true } : { ...t, selected: false }
        )
        const newUnPinnedState = unSelectAllTabs(tabsStateUnPinned).map((t) =>
            t.id === tabId ? { ...t, selected: true } : { ...t, selected: false }
        )

        setTabsStatePinned(newPinnedState)
        setTabsStateUnPinned(newUnPinnedState)
    }
    const pinTab = (tabId: string) => () => {
        const { updatedTabs: newUnPinnedTabsState, removedTab } = removeTabById(
            tabsStateUnPinned,
            tabId
        )
        const newPinnedTabsState = [...tabsStatePinned, { ...removedTab, pinned: true }]

        setTabsStateUnPinned(() => newUnPinnedTabsState)
        setTabsStatePinned(() => newPinnedTabsState)
    }

    const unPinTab = (tabId: string) => () => {
        const { updatedTabs: newPinnedTabsState, removedTab } = removeTabById(
            tabsStatePinned,
            tabId
        )
        const newUnPinnedTabsState = [{ ...removedTab, pinned: false }, ...tabsStateUnPinned]

        setTabsStateUnPinned(newUnPinnedTabsState)
        setTabsStatePinned(newPinnedTabsState)
    }

    const handlePinnedDragEnd: OnDragEndResponder = (result, s) => {
        if (!result.destination) {
            return
        }
        const newTabsState = reorder(tabsStatePinned, result.source.index, result.destination.index)
        setTabsStatePinned(newTabsState)
    }
    const handleUnPinnedDragEnd: OnDragEndResponder = (result, s) => {
        if (!result.destination) {
            return
        }
        const newTabsState = reorder(
            tabsStateUnPinned,
            result.source.index,
            result.destination.index
        )
        setTabsStateUnPinned(newTabsState)
    }

    const handleOutsideOfLine = (id: string, isOutside: boolean) => {
        setTabsStateUnPinned((prev) => setIsOutsideOfLine(prev, id, isOutside))
        setTabsStatePinned((prev) => setIsOutsideOfLine(prev, id, isOutside))
    }

    return {
        unPinTab,
        selectTab,
        pinTab,
        tabsStatePinned,
        tabsStateUnPinned,
        handlePinnedDragEnd,
        handleUnPinnedDragEnd,
        handleOutsideOfLine,
        tabsOutsideOfLine,
        isAnyOutSideOfLine: tabsOutsideOfLine.length !== 0,
        selectedTabId: [...tabsStatePinned, ...tabsStateUnPinned].find((t) => t.selected)?.id
    }
}
