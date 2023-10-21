import product from "@/sanity/schemas/product";
import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from 'react-hot-toast';

import { useStorage } from "@/lib/utils";

const Context = createContext<any>([]);

export const StateContext = ({ children }: any) => {
    const [showCart, setShowCart] = useState<any>(false);
    const [cartItems, setCartItems] = useState<any>([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantities, setTotalQuantities] = useState(0);
    const [qty, setQty] = useState(1);
    const { getItem, setItem } = useStorage()

    let foundProduct: any;
    let index: any;

    const handleSessionStorage = () => {
        setItem('cartItems', JSON.stringify(cartItems), 'session')
        setItem('totalPrice', JSON.stringify(totalPrice), 'session')
        setItem('totalQuantities', JSON.stringify(totalQuantities ? totalQuantities : 0), 'session')
    }

    useEffect(() => {
        let localCartItems = getItem('cartItems', 'session')
        let localTotalPrice = getItem('totalPrice', 'session')
        let localTotalQuantities = getItem('totalQuantities', 'session')

        setCartItems(localCartItems && localCartItems !== '' ? JSON.parse(localCartItems) : [])
        setTotalPrice(localTotalPrice && localTotalPrice !== '' ? parseInt(localTotalPrice) : 0)
        setTotalQuantities(localTotalQuantities && localTotalQuantities !== '' ? parseInt(localTotalQuantities) : 0)
    }, [])

    useEffect(() => {
        // once quantities change, it suggests that states have updated
        window.addEventListener('beforeunload', handleSessionStorage);
    }, [totalQuantities])


    const onAdd = (product: any, quantity: any) => {
        const checkProductInCart = cartItems.find((item: any) => item._id === product._id);

        setTotalPrice((prevTotalPrice: any) => prevTotalPrice + product.price * quantity);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

        if (checkProductInCart) {
            const updatedCartItems: any = cartItems.map((cartProduct: any) => {
                if (cartProduct._id === product._id) return {
                    ...cartProduct,
                    quantity: cartProduct.quantity + quantity
                }
            })

            setCartItems(updatedCartItems);
        } else {
            product.quantity = quantity;

            setCartItems([...cartItems, { ...product }]);
        }
        toast.success(`${qty} ${product.name} added to the cart.`);
    }

    const onRemove = (product: any) => {
        foundProduct = cartItems.find((item: any) => item._id === product._id)
        const newCartItems = cartItems.filter((item: any) => item._id !== product._id);

        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity)
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity)
        setCartItems(newCartItems)
    }

    const toggleCartItemQuantity = (id: any, value: any) => {
        foundProduct = cartItems.find((item: any) => item._id === id)
        index = cartItems.findIndex((product: any) => product._id === id);
        const newCartItems = cartItems.filter((item: any) => item._id !== id);

        if (value === 'inc') {
            setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 }]);
            setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
            setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1)
        } else if (value === 'dec') {
            if (foundProduct.quantity > 1) {
                setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 }]);
                setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
                setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1)
            }
        }
    }

    const incQty = () => {
        setQty((prevQty) => prevQty + 1);
    }

    const decQty = () => {
        setQty((prevQty) => {
            if (prevQty - 1 < 1) return 1;

            return prevQty - 1
        });
    }

    const resetStates = () => {
        setShowCart(false)
        setCartItems([])
        setTotalPrice(0)
        setTotalQuantities(0)
    }

    return (
        <Context.Provider
            value={{
                showCart,
                cartItems,
                totalPrice,
                totalQuantities,
                qty,
                incQty,
                decQty,
                onAdd,
                setShowCart,
                toggleCartItemQuantity,
                onRemove,
                resetStates
            }}
        >
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);