import { useDispatch } from 'react-redux'

import { type AppDispatch } from '@/app/providers/StoreProvider/config/createStore'

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>()
