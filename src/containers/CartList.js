import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import{
    selectGoods
} from '../store/goodsSlice';
import{
    selectCart,
    minus,
    del,
} from '../store/cartSlice';
import Cart from '../components/Cart';

function CartList() {

    const dispatch = useDispatch();
    const goods = useSelector(selectGoods);
    const cart = useSelector(selectCart);
    const goodsObj = goods.reduce((accum, item) => {
        accum[item['articul']] = item;
        return accum;
    }, {});

    function clickHandler(evt){
        if(evt.target.classList.contains('btn-minus')){
            let btnMinus = evt.target;
            let articul = btnMinus.dataset.articul;
            dispatch(minus(articul));
        } else if (evt.target.classList.contains('btn-delete')) {
            let btnDelete = evt.target;
            let articul = btnDelete.dataset.articul;
            dispatch(del(articul));
        }
    }


    return(
      <div className = 'cart-field' onClick = {clickHandler}>
          <Cart cart = {cart} goodsObj = {goodsObj} />        
      </div>
    );

}

export default CartList;