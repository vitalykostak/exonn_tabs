import { type ReactNode, memo, type FC, useRef, useState } from 'react'

import { classNames } from '@/shared/lib/styles/classNames/classNames'

import Menu from '../Menu/Menu'

import styles from './Tab.module.scss'

type ContextMenuItem = {
    icon: ReactNode
    label: string
    onClick: () => void
}

export type TabProps = {
    icon: ReactNode
    title: string
    minimizeMode?: boolean
    selected?: boolean
    className?: string
    onClick: () => void
    contextMenuItems?: ContextMenuItem[]
}

const Tab: FC<TabProps> = memo((props) => {
    const { className, icon, title, selected, onClick, contextMenuItems, minimizeMode } = props

    const [isShownContextMenu, setShownContextMenu] = useState<boolean>(false)

    const pageXref = useRef<number | null>(null)

    const handleContextMenuClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault()
        setShownContextMenu(true)
        pageXref.current = e.pageX
    }

    const closeContextMenu = () => {
        setShownContextMenu(false)
    }

    const mods = { [styles.selected]: selected, [styles.openedContextMenu]: isShownContextMenu }

    const additionsClasses = [className]

    return (
        <div
            className={classNames(styles.wrapper, {}, additionsClasses)}
            onContextMenu={handleContextMenuClick}
        >
            <div className={classNames(styles.container, mods, additionsClasses)} onClick={onClick}>
                {icon}
                <p className={classNames(styles.title, { [styles.dn]: minimizeMode })}>{title}</p>
            </div>
            {contextMenuItems && Boolean(contextMenuItems?.length) && isShownContextMenu && (
                <Menu
                    className={styles.contextMenuContainer}
                    items={contextMenuItems}
                    onClickOutside={closeContextMenu}
                    style={{ left: pageXref.current || 0 }}
                />
            )}
        </div>
    )
})

export default Tab
