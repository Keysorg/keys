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
    // const [user, setUser] = useState<any>();
    const { getItem, setItem } = useStorage()

    let foundProduct: any;
    let index: any;

    useEffect(() => {
        console.log('context')
        let email = getItem('email', 'local')
        // let localShowCart = getItem('showCart', 'local')
        let localCartItems = getItem('cartItems', 'local')
        let localTotalPrice = getItem('totalPrice', 'local')
        let localTotalQuantities = getItem('totalQuantities', 'local')

        console.log(email, localCartItems, localTotalPrice, localTotalQuantities)

        // setUser({ email: email })
        setCartItems(localCartItems && localCartItems !== '' ? JSON.parse(localCartItems) : [])
        setTotalPrice(localTotalPrice && localTotalPrice !== '' ? parseInt(localTotalPrice) : 0)
        setTotalQuantities(localTotalQuantities && localTotalQuantities !== '' ? parseInt(localTotalQuantities) : 0)
    }, [])

    // useEffect(() => {
    //     console.log('cartitem changed', cartItems)
    //     setItem('cartItems', JSON.stringify(cartItems), 'local')
    // }, [cartItems])

    // useEffect(() => {
    //     console.log('totalprice changed', totalPrice)
    //     setItem('totalPrice', JSON.stringify(totalPrice), 'local')
    // }, [totalPrice])

    // useEffect(() => {
    //     console.log('totalQuantities changed', totalQuantities)
    //     setItem('totalQuantities', JSON.stringify(totalQuantities ? totalQuantities : 0), 'local')
    // }, [totalQuantities])

    // useEffect(() => {
    //     console.log('user changed', user)
    //     setItem('email', user?.email ? user?.email : '', 'local')
    // }, [user])

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

    return (
        <Context.Provider
            value={{
                showCart,
                cartItems,
                totalPrice,
                totalQuantities,
                qty,
                // user,
                incQty,
                decQty,
                onAdd,
                setShowCart,
                toggleCartItemQuantity,
                onRemove,
                // addUser,
                // removeUser
            }}
        >
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);