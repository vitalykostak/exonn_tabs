import { memo, type FC } from 'react'

import AppRouter from './providers/router/ui/AppRouter/AppRouter'

const App: FC = memo(() => {
    return <AppRouter />
})

export default App
