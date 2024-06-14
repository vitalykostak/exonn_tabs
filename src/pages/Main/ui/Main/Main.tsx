import { memo, type FC } from 'react'

import { Page } from '@/widgets/Page'
import {
    InteractiveTabs,
    TabContentLayout,
    interactiveTabsDepsContext
} from '@/widgets/InteractiveTabs'
import { getFromLocalStorage, setToLocalStorage } from '@/shared/lib/localstorage'

import { useGetInitiallySavedTabIfAny, useSaveTabIdInUrl } from '../../libs/url'
import { TABS_STORAGE_KEY, tabs } from '../../constants'

import TabsContentController from './TabsContent'

type MainProps = {
    className?: string
}

const Main: FC<MainProps> = memo(() => {
    const saveTabIdInUrl = useSaveTabIdInUrl()
    const { getInitiallySavedTabIfAny, isInitialSavedTabChecked } = useGetInitiallySavedTabIfAny()

    return (
        <Page>
            {isInitialSavedTabChecked && (
                <interactiveTabsDepsContext.Provider
                    value={{
                        getStoredTabsState: () => getFromLocalStorage(TABS_STORAGE_KEY, null),
                        storeTabsState: (tabsState) => {
                            setToLocalStorage(TABS_STORAGE_KEY, tabsState)
                        },
                        onChangeTab: saveTabIdInUrl,
                        getInitialSelectedTab: getInitiallySavedTabIfAny,
                        renderContent: (tabId) => (
                            <TabContentLayout>
                                <TabsContentController tabId={tabId} />
                            </TabContentLayout>
                        )
                    }}
                >
                    <InteractiveTabs tabs={tabs} />
                </interactiveTabsDepsContext.Provider>
            )}
        </Page>
    )
})

export default Main
