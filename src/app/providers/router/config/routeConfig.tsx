import { type RouteProps } from 'react-router-dom'

import { AppRoutes, getMainRoute, getNotFoundRoute } from '@/shared/constants/router'
import { MainPage } from '@/pages/Main'

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: getMainRoute(),
        element: <MainPage />
    },

    [AppRoutes.NOT_FOUND]: {
        path: getNotFoundRoute(),
        element: <div>Not Found Page</div>
    }
}
