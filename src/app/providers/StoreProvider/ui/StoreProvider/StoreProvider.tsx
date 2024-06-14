import { memo, type FC, type ReactNode } from 'react'
import { Provider } from 'react-redux'

import { createReduxStore } from '../../config/createStore'

interface StoreProviderProps {
    children: ReactNode
}

const StoreProvider: FC<StoreProviderProps> = memo((props) => {
    const { children } = props

    const store = createReduxStore()

    return <Provider store={store}>{children}</Provider>
})

export default StoreProvider
