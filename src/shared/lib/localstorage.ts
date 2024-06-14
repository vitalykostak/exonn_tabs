export const setToLocalStorage = <T extends Record<string, any>>(key: string, value: T) => {
    try {
        localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
        console.error('setToLocalStorage', key, value)
    }
}

export const getFromLocalStorage = <T>(key: string, defaultValue: T) => {
    try {
        const value = localStorage.getItem(key)
        return value ? JSON.parse(value) : defaultValue
    } catch (error) {
        console.error(error, 'getFromLocalStorage', key)
    }
}
