import { useEffect, useState } from "react";

const useMenu = () => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true)
    // console.log(`${import.meta.env.VITE_API_URL}/menu`);
    useEffect(() => {
        // fetch('menu.json')
        fetch(`${import.meta.env.VITE_API_URL}/menu`)
            .then(res => res.json())
            .then(data => {
                setMenu(data)
                setLoading(false)
            })
    }, [])

    return [menu, loading]
};

export default useMenu;