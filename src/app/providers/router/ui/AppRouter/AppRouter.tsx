import { memo, type FC, Suspense } from 'react'
import { Route, type RouteProps, Routes } from 'react-router-dom'

import { routeConfig } from '../../config/routeConfig'

const AppRouter: FC = memo(() => {
    const renderRoute = (r: RouteProps) => (
        <Route key={r.path} path={r.path} element={<Suspense>{r.element} </Suspense>} />
    )

    return <Routes>{Object.values(routeConfig).map((r) => renderRoute(r))}</Routes>
})

export default AppRouter
