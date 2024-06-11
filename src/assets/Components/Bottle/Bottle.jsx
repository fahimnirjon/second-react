import PropTypes from 'prop-types';
import './Bottle.css'; 

const Bottle = ({bottle, handleToCart}) => {
   const {name, img, price} = bottle;
    return (
        <div className="bottle-box">
            <h3>Bottle: {name} </h3>
            <img src={img} alt="" />
            <p>Price:$ {price} </p>
            <button onClick={()=> handleToCart(bottle)}>Purchase</button>
        </div>
    );
};

Bottle.propTypes ={
    bottle: PropTypes.object.isRequired,
    handleToCart : PropTypes.func.isRequired
}

export default Bottle;