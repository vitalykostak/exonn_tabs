import { memo, useState, type FC } from 'react'
import { DragDropContext, Droppable, Draggable, type OnDragEndResponder } from 'react-beautiful-dnd'

import { classNames } from '@/shared/lib/styles/classNames/classNames'
import Tab, { type TabProps } from '@/shared/ui/Tab/Tab'
import Button from '@/shared/ui/Button/Button'
import ChevronIcon from '@/shared/assets/icons/chevron.svg'
import Menu from '@/shared/ui/Menu/Menu'
import {
    VisibilityObserverChild,
    VisibilityObserverParent
} from '@/shared/lib/components/VisibilityChildObserver'

import { useInteractiveTabs } from '../model/hooks/useInteractiveTabs'
import PinIcon from '../assets/icons/pin.svg'
import { mapTabStateItemsToContextMenuProps } from '../libs/tabs'
import { useRenderContent } from '../deps'

import styles from './InteractiveTabs.module.scss'

export type InteractiveTap = Omit<TabProps, 'onClick'> & { id: string }
export type TabState = InteractiveTap & {
    pinned?: boolean
    isOutsideOfLine?: boolean
}

type InteractiveTabsProps = {
    tabs: InteractiveTap[]
    className?: string
}

const InteractiveTabs: FC<InteractiveTabsProps> = memo((props) => {
    const { tabs, className } = props

    const renderContent = useRenderContent()

    const {
        tabsStatePinned,
        tabsStateUnPinned,
        pinTab,
        unPinTab,
        handlePinnedDragEnd,
        handleUnPinnedDragEnd,
        selectTab,
        handleOutsideOfLine,
        isAnyOutSideOfLine,
        tabsOutsideOfLine,
        selectedTabId
    } = useInteractiveTabs(tabs)

    const [isShowTabsOutsideOfLineContextMenu, setShowTabsOutsideOfLineContextMenu] =
        useState<boolean>(false)
    const showContextMenu = () => {
        setShowTabsOutsideOfLineContextMenu(true)
    }
    const closeContextMenu = () => {
        setShowTabsOutsideOfLineContextMenu(false)
    }

    const getContextMenuItems = (tabId: string) => {
        const targetTab = [...tabsStatePinned, ...tabsStateUnPinned].find((t) => t.id === tabId)
        const isPinned = targetTab?.pinned

        return [
            {
                icon: isPinned ? targetTab.icon : <PinIcon />,
                label: isPinned ? targetTab.title : 'Tab anpinnen',
                onClick: isPinned ? unPinTab(tabId) : pinTab(tabId)
            }
        ]
    }

    const mods = { [styles.isOverflownTabs]: isAnyOutSideOfLine }

    const additionsClasses = [className]

    const renderTabsLine = (
        tabs: TabState[],
        handleDragEnd: OnDragEndResponder,
        className: string,
        onChangeVisibility?: (tabId: string) => (isVisible: boolean) => void
    ) => (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId='tabs' direction='horizontal'>
                {(provided) => {
                    return (
                        <VisibilityObserverParent className={className}>
                            <ul
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                className={styles.tabsListContainer}
                            >
                                {tabs.map(({ pinned, ...tab }, index) => (
                                    <Draggable key={tab.id} draggableId={tab.id} index={index}>
                                        {(provided) => {
                                            return (
                                                <li
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                >
                                                    <VisibilityObserverChild
                                                        onChangeVisibility={onChangeVisibility?.(
                                                            tab.id
                                                        )}
                                                    >
                                                        <Tab
                                                            {...tab}
                                                            minimizeMode={pinned}
                                                            onClick={selectTab(tab.id)}
                                                            contextMenuItems={getContextMenuItems(
                                                                tab.id
                                                            )}
                                                        />
                                                    </VisibilityObserverChild>
                                                </li>
                                            )
                                        }}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </ul>
                        </VisibilityObserverParent>
                    )
                }}
            </Droppable>
        </DragDropContext>
    )

    return (
        <>
            <div className={classNames(styles.wrapper, mods, additionsClasses)}>
                {renderTabsLine(
                    tabsStatePinned,
                    handlePinnedDragEnd,
                    styles.pinnedContainer,
                    undefined
                )}
                {renderTabsLine(
                    tabsStateUnPinned,
                    handleUnPinnedDragEnd,
                    styles.unPinnedContainer,
                    (tabId: string) => (isVisible: boolean) => {
                        handleOutsideOfLine(tabId, !isVisible)
                    }
                )}
                {isAnyOutSideOfLine && (
                    <Button
                        icon={<ChevronIcon />}
                        className={styles.buttonContainer}
                        disabled={isShowTabsOutsideOfLineContextMenu}
                        onClick={showContextMenu}
                        variant={isShowTabsOutsideOfLineContextMenu ? 'accent' : 'normal'}
                        reverseIconVerticalDirection={isShowTabsOutsideOfLineContextMenu}
                    />
                )}
                {isShowTabsOutsideOfLineContextMenu && isAnyOutSideOfLine && (
                    <Menu
                        className={styles.contextMenuContainer}
                        items={mapTabStateItemsToContextMenuProps(
                            tabsOutsideOfLine,
                            (tabId: string) => () => {
                                selectTab(tabId)()
                                closeContextMenu()
                            }
                        )}
                        onClickOutside={closeContextMenu}
                    />
                )}
            </div>
            {selectedTabId && renderContent(selectedTabId)}
        </>
    )
})

export default InteractiveTabs
