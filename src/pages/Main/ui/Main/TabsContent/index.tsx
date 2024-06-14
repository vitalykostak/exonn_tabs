import { memo, type FC } from 'react'

import { classNames } from '@/shared/lib/styles/classNames/classNames'

import {
    ACCOUNTING_TAB_ID,
    ADMINISTRATION_TAB_ID,
    BANKING_TAB_ID,
    CALCULATION_TAB_ID,
    DASHBOARD_TAB_ID,
    HELP_TAB_ID,
    INVENTORY_TAB_ID,
    POST_OFFICE_TAB_ID,
    SALE_TAB_ID,
    SELECTION_LIST_TAB_ID,
    SHOPPING_TAB_ID,
    STATISTICS_TAB_ID,
    TELEPHONY_TAB_ID,
    WAREHOUSE_MANAGEMENT_TAB_ID
} from '../../../constants'

import WarehouseManagement from './WarehouseManagement'
import Dashboard from './Dashboard'
import Banking from './Banking'
import Telephony from './Telephony'
import Accounting from './Accounting'
import Sale from './Sale'
import Statistics from './Statistics'
import PostOffice from './PostOffice'
import Administration from './Administration'
import Help from './Help'
import Inventory from './Inventory'
import SelectionList from './SelectionList'
import Shopping from './Shopping'
import Calculation from './Calculation'

interface indexProps {
    className?: string
    tabId: string
}

const TabsContentController: FC<indexProps> = memo((props) => {
    const { className, tabId } = props

    const mods = {}

    const additionsClasses = [className]

    if (tabId === WAREHOUSE_MANAGEMENT_TAB_ID) {
        return <WarehouseManagement className={classNames('', mods, additionsClasses)} />
    }
    if (tabId === DASHBOARD_TAB_ID) {
        return <Dashboard className={classNames('', mods, additionsClasses)} />
    }
    if (tabId === BANKING_TAB_ID) {
        return <Banking className={classNames('', mods, additionsClasses)} />
    }
    if (tabId === TELEPHONY_TAB_ID) {
        return <Telephony className={classNames('', mods, additionsClasses)} />
    }
    if (tabId === ACCOUNTING_TAB_ID) {
        return <Accounting className={classNames('', mods, additionsClasses)} />
    }
    if (tabId === SALE_TAB_ID) {
        return <Sale className={classNames('', mods, additionsClasses)} />
    }
    if (tabId === STATISTICS_TAB_ID) {
        return <Statistics className={classNames('', mods, additionsClasses)} />
    }
    if (tabId === POST_OFFICE_TAB_ID) {
        return <PostOffice className={classNames('', mods, additionsClasses)} />
    }
    if (tabId === ADMINISTRATION_TAB_ID) {
        return <Administration className={classNames('', mods, additionsClasses)} />
    }
    if (tabId === HELP_TAB_ID) {
        return <Help className={classNames('', mods, additionsClasses)} />
    }
    if (tabId === INVENTORY_TAB_ID) {
        return <Inventory className={classNames('', mods, additionsClasses)} />
    }
    if (tabId === SELECTION_LIST_TAB_ID) {
        return <SelectionList className={classNames('', mods, additionsClasses)} />
    }
    if (tabId === SHOPPING_TAB_ID) {
        return <Shopping className={classNames('', mods, additionsClasses)} />
    }
    if (tabId === CALCULATION_TAB_ID) {
        return <Calculation className={classNames('', mods, additionsClasses)} />
    }

    return null
})

export default TabsContentController
