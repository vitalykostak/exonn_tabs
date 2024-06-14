import StatisticsIcon from './assets/icons/statistics.svg'
import PostOfficeIcon from './assets/icons/postOffice.svg'
import AdministrationIcon from './assets/icons/administration.svg'
import HelpIcon from './assets/icons/help.svg'
import InventoryIcon from './assets/icons/inventory.svg'
import SelectionListIcon from './assets/icons/selectionList.svg'
import ShoppingIcon from './assets/icons/shopping.svg'
import CalculationIcon from './assets/icons/calculation.svg'
import SaleIcon from './assets/icons/sale.svg'
import AccountingIcon from './assets/icons/accounting.svg'
import TelephonyIcon from './assets/icons/telephony.svg'
import BankingIcon from './assets/icons/banking.svg'
import DashboardIcon from './assets/icons/dashboard.svg'
import WarehouseManagementIcon from './assets/icons/warehouseManagement.svg'

export const TABS_STORAGE_KEY = 'interactiveStorage@'

export const WAREHOUSE_MANAGEMENT_TAB_ID = 'warehouse_management'
export const DASHBOARD_TAB_ID = 'dashboard'
export const BANKING_TAB_ID = 'banking'
export const TELEPHONY_TAB_ID = 'telephony'
export const ACCOUNTING_TAB_ID = 'accounting'
export const SALE_TAB_ID = 'sale'
export const STATISTICS_TAB_ID = 'statistics'
export const POST_OFFICE_TAB_ID = 'post_office'
export const ADMINISTRATION_TAB_ID = 'administration'
export const HELP_TAB_ID = 'help'
export const INVENTORY_TAB_ID = 'inventory'
export const SELECTION_LIST_TAB_ID = 'selection_list'
export const SHOPPING_TAB_ID = 'shopping'
export const CALCULATION_TAB_ID = 'calculation'

export const tabs = [
    {
        title: 'Lagerverwaltung',
        icon: <WarehouseManagementIcon />,
        id: WAREHOUSE_MANAGEMENT_TAB_ID
    },
    { title: 'Dashboard', icon: <DashboardIcon />, id: DASHBOARD_TAB_ID },
    { title: 'Banking', icon: <BankingIcon />, id: BANKING_TAB_ID },
    { title: 'Telefonie', icon: <TelephonyIcon />, id: TELEPHONY_TAB_ID },
    { title: 'Accounting', icon: <AccountingIcon />, id: ACCOUNTING_TAB_ID },
    { title: 'Verkauf', icon: <SaleIcon />, id: SALE_TAB_ID },
    { title: 'Statistik', icon: <StatisticsIcon />, id: STATISTICS_TAB_ID },
    { title: 'Post Office', icon: <PostOfficeIcon />, id: POST_OFFICE_TAB_ID },
    { title: 'Administration', icon: <AdministrationIcon />, id: ADMINISTRATION_TAB_ID },
    { title: 'Help', icon: <HelpIcon />, id: HELP_TAB_ID },
    { title: 'Warenbestand', icon: <InventoryIcon />, id: INVENTORY_TAB_ID },
    { title: 'Auswahllisten', icon: <SelectionListIcon />, id: SELECTION_LIST_TAB_ID },
    { title: 'Einkauf', icon: <ShoppingIcon />, id: SHOPPING_TAB_ID },
    { title: 'Rechn', icon: <CalculationIcon />, id: CALCULATION_TAB_ID }
]
