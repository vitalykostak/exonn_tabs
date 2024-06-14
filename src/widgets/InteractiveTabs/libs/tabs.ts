import { type MenuItem } from '@/shared/ui/Menu/Menu'

import { type InteractiveTap, type TabState } from '../ui/InteractiveTabs'
import { type StoredTabsStateType } from '../deps'

export const unSelectAllTabs = <T>(
    tabs: Array<T extends { selected?: boolean } ? T : never>
): T[] => tabs.map((t) => (t.selected ? { ...t, selected: false } : t))

export const removeTabById = <T>(
    tabs: Array<T extends { id: string } ? T : never>,
    id: string
): { updatedTabs: T[], removedTab: T } => {
    return {
        removedTab: tabs.find((t) => t.id === id) as T,
        updatedTabs: tabs.filter((t) => t.id !== id)
    }
}

export const setIsOutsideOfLine = <T>(
    tabs: Array<
    T extends {
        isOutsideOfLine?: boolean
        id: string
    }
        ? T
        : never
    >,
    id: string,
    isOutsideOfLine: boolean
) => tabs.map((t) => (t.id !== id ? t : { ...t, isOutsideOfLine }))

export const mapTabStateItemsToContextMenuProps = (
    tabState: TabState[],
    onClick: (tabId: string) => () => void
): MenuItem[] =>
    tabState.map(({ title, ...rest }) => ({ label: title, ...rest, onClick: onClick(rest.id) }))

export const prepareTabsStateToStorage = (state: {
    tabsStatePinned: TabState[]
    tabsStateUnPinned: TabState[]
}) => {
    return {
        tabsStatePinned: state.tabsStatePinned.map(({ icon, ...t }) => ({ ...t })),
        tabsStateUnPinned: state.tabsStateUnPinned.map(({ icon, ...t }) => ({ ...t }))
    }
}

export const prepareStoredTabsStateToUsage = (
    originalTabs: InteractiveTap[],
    stored: StoredTabsStateType
): {
    tabsStatePinned: TabState[]
    tabsStateUnPinned: TabState[]
} => {
    return {
        tabsStatePinned: stored.tabsStatePinned.map(({ ...t }) => ({
            ...t,
            icon: originalTabs.find((tab) => tab.id === t.id)?.icon
        })),
        tabsStateUnPinned: stored.tabsStateUnPinned.map(({ ...t }) => ({
            ...t,
            icon: originalTabs.find((tab) => tab.id === t.id)?.icon
        }))
    }
}
