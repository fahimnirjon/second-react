import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css';
import { addToLs, getStoredCart, removeLS } from "../../../Utilities/localstorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
    fetch('water.json')
    .then(res=>res.json())
    .then(data=>setBottles(data))
        },[])

        // load cart from local storage

        useEffect(()=>{
            console.log('called the useEffect',bottles.length)
            if(bottles.length>0){
                const storedCart = getStoredCart();
                console.log(storedCart);

                // get item from cart

                const savedCart = [];
                for(const id of storedCart){
                    console.log(id);
                    const bottle = bottles.find(bottle => bottle.id === id);
                    if(bottle){
                        savedCart.push(bottle)
                    }
                }
                console.log('saved cat', savedCart);
                setCart(savedCart);
            }
        },[bottles])

        const handleToCart = bottle =>{
            const newCart = [...cart, bottle];
            setCart(newCart);
            addToLs(bottle.id);
        }

        // remove items from cart

        const removeItem = id =>{

            const remainingCart = cart.filter(bottle=> bottle.id !==id);
            setCart(remainingCart);

            removeLS(id);
        }

    return (
        <div >
            <h1>Memorable Water Bottles </h1>
            <h3>Bottles Available: {bottles.length} </h3>
            <Cart cart={cart} removeItem={removeItem}></Cart>
            <div className="container">
            {
                bottles.map(bottle=> <Bottle key={bottle.id} bottle={bottle}
                    handleToCart={handleToCart}
                ></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;