import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css';
import { addToLs, getStoredCart } from "../../../Utilities/localstorage";

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
            }
        },[bottles])

        const handleToCart = bottle =>{
            const newCart = [...cart, bottle];
            setCart(newCart);
            addToLs(bottle.id);
        }

    return (
        <div >
            <h1>Memorable Water Bottles </h1>
            <h3>Bottles Available: {bottles.length} </h3>
            <h4>Cart: {cart.length} </h4>
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