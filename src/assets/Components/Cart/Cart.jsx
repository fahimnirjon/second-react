import PropTypes from 'prop-types';
import './cart.css';
const Cart = ({cart, removeItem}) => {
    return (
        <div>
             <h4>Cart: {cart.length} </h4>
            <div className='imgCon'>
            {cart.map(bottle=> <div key={bottle.id}>
                <img  src={bottle.img}></img>
                <button onClick={()=>removeItem(bottle.id)}>Remove</button>
            </div>)}
            </div>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    removeItem: PropTypes.func.isRequired
}
export default Cart;