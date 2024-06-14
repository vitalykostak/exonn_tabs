import { type ReactNode, memo, type FC, type ButtonHTMLAttributes } from 'react'

import { classNames } from '@/shared/lib/styles/classNames/classNames'

import styles from './Button.module.scss'

type ButtonVariant = 'normal' | 'accent'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    icon?: ReactNode
    fullWidth?: boolean
    fullHeight?: boolean
    variant?: ButtonVariant
    reverseIconVerticalDirection?: boolean
}

const Button: FC<ButtonProps> = memo((props) => {
    const {
        className,
        icon,
        fullHeight,
        fullWidth,
        variant = 'normal',
        reverseIconVerticalDirection,
        ...rest
    } = props

    const mods = {
        [styles.fullWidth]: fullWidth,
        [styles.fullHeight]: fullHeight
    }

    const additionsClasses = [styles[variant], className]

    return (
        <button className={classNames(styles.container, mods, additionsClasses)} {...rest}>
            {icon && (
                <div
                    className={classNames('', {
                        [styles.reverseIconVerticalDirection]: reverseIconVerticalDirection
                    })}
                >
                    {icon}
                </div>
            )}
        </button>
    )
})

export default Button
