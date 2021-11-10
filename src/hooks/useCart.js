import { useEffect, useState } from "react"

const useCart = packages => {
    const [cart, setCart] = useState([]);

    useEffect( () =>{

        if(packages.length){
            const savedCart = getStoredCart
        }

    }, [packages])
}