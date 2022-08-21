import {useState, useEffect} from 'react'

const useLocalStorage = (key, defaultValue = null) => {
    const initial = localStorage.getItem(key) || defaultValue

    const [item, setItem] = useState(initial);
    
    useEffect(() => {
        if(item === null) {
            localStorage.removeItem(key)
        } else {
            localStorage.setItem(key, item)
        }
    }, [key, item])

    return [item, setItem]
}

export default useLocalStorage;