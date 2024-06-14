import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'

import { type StateSchema } from '../types/StateSchema'

export const createReduxStore = () => {
    const rootReducer: ReducersMapObject<StateSchema> = {}

    const store = configureStore<StateSchema>({
        reducer: rootReducer
    })

    return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
