import { type FC, type ReactNode } from 'react'

import { classNames } from '@/shared/lib/styles/classNames/classNames'

import styles from './Page.module.scss'

type PageProps = {
    className?: string
    children?: ReactNode
}

const Page: FC<PageProps> = (props) => {
    const { className, children } = props

    return <main className={classNames(styles.Page, {}, [className])}>{children}</main>
}

export default Page
