import { type PropsWithChildren, memo, type FC } from 'react'

import { classNames } from '@/shared/lib/styles/classNames/classNames'

import styles from './InteractiveTabs.module.scss'

interface TabContentLayoutProps extends PropsWithChildren {
    className?: string
}

const TabContentLayout: FC<TabContentLayoutProps> = memo((props) => {
    const { className, children } = props

    const mods = {}

    const additionsClasses = [className]

    return (
        <div className={classNames(styles.tabContainerLayoutWrapper, mods, additionsClasses)}>
            <div className={styles.tabContainerLayoutContainer}>
                <div className={styles.tabContainerLayoutContent}>{children}</div>
            </div>
        </div>
    )
})

export default TabContentLayout
