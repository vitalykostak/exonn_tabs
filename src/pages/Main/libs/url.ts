import { useCallback, useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const URL_TAB_ID_PARAM = 'tabId'

export const useSaveTabIdInUrl = () => {
    const [, setSearchParams] = useSearchParams()

    return useCallback(
        (tabId: string) => {
            setSearchParams({ [URL_TAB_ID_PARAM]: tabId })
        },
        [setSearchParams]
    )
}

export const useGetInitiallySavedTabIfAny = () => {
    const ref = useRef<string | null>(null)
    const [isInitialSavedTabChecked, setCheckedInitialTab] = useState<boolean>(false)

    const [searchParams] = useSearchParams()

    useEffect(() => {
        ref.current = searchParams.get(URL_TAB_ID_PARAM)
        setCheckedInitialTab(true)
    }, [setCheckedInitialTab])

    return {
        isInitialSavedTabChecked,
        getInitiallySavedTabIfAny: useCallback(() => ref.current, [])
    }
}
