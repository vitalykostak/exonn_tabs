import { memo, type FC } from 'react'

import { classNames } from '@/shared/lib/styles/classNames/classNames'

interface BankingProps {
    className?: string
}

const Banking: FC<BankingProps> = memo((props) => {
    const { className } = props

    const mods = {}

    const additionsClasses = [className]

    return (
        <div className={classNames('', mods, additionsClasses)}>
            Banking
            <div>
                <br />
                <h1>About project</h1>
                <h2>Actions:</h2>
                <ul>
                    <li>- drag and drop tabs, separately for pinned and unpinned tabs</li>
                    <li>
                        - mouse right click to pin/unpin tabs (need to add on mobile, button for
                        opening context menu, now it conflicts with drag and drop
                    </li>
                </ul>
                <h2>Todo:</h2>
                <ul>
                    <li>- button for opening context menu on mobile as was mentioned above</li>
                    <li>- on change tab need to automatically scroll to selected tab</li>
                </ul>
                <h2>Architecture</h2>
                <a target='_blank' href='https://feature-sliced.design' rel='noreferrer'>
                    Feature-Sliced Design
                </a>
                <h2>Info</h2>
                <ul>
                    <li>
                        - this tabs implemented as widget `InteractiveTabs` which include all logic
                        implementation for tabs working, as result this widget is low abstraction
                        component, which receive all dependencies by props and context.
                    </li>
                </ul>
            </div>
        </div>
    )
})

export default Banking
