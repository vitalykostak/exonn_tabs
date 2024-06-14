import { type ReactNode, memo, type FC, type HTMLAttributes } from 'react'

import { classNames } from '@/shared/lib/styles/classNames/classNames'
import ClickOutsideObserver from '@/shared/lib/components/ClickOutsideObserver/ClickOutsideObserver'

import styles from './Menu.module.scss'

export type MenuItem = {
    icon: ReactNode
    label: string
    onClick: () => void
}
interface MenuProps extends HTMLAttributes<HTMLUListElement> {
    className?: string
    items: MenuItem[]
    onClickOutside: () => void
}

const Menu: FC<MenuProps> = memo((props) => {
    const { className, onClickOutside, items, ...rest } = props

    const mods = {}

    const additionsClasses = [className]

    return (
        <ClickOutsideObserver
            as='ul'
            onClickOutside={onClickOutside}
            className={classNames(styles.container, mods, additionsClasses)}
            {...rest}
        >
            {items?.map((item, index) => (
                <li key={index} onClick={item.onClick} className={styles.item}>
                    {item.icon}
                    <p className={styles.label}>{item.label}</p>
                </li>
            ))}
        </ClickOutsideObserver>
    )
})

export default Menu
