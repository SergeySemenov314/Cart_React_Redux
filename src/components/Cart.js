import {useState, useEffect} from 'react';

function Cart(props) {
    let goodsObj = props.goodsObj;
    let cart = props.cart;
    let cartKeys = Object.keys(cart);

    function getTotal() {
        let total = 0;
        for (let key in cart) {
            total += cart[key] * goodsObj[key]['cost'];
        }
        return total;
    }


    return(
        <>
         { cartKeys.length > 0 && 
            <table className = 'cartTable'>
                <tbody>
                        {cartKeys.map(item =>
                            <tr  key={item + goodsObj[item]['title']} data-articul = {item}>
                                <td className = 'cartTable__td' >
                                    <button className ='btn-delete' data-articul = {item}>Удалить</button>
                                </td> 
                                <td className = 'cartTable__td'><img src={goodsObj[item]['image']} alt="" className = 'cartTable__img' /></td>
                                <td className = 'cartTable__td'>{goodsObj[item]['title']}</td>
                                <td className = 'cartTable__td'>{goodsObj[item]['cost']} руб.</td>
                                <td className = 'cartTable__td'>{cart[item]}</td>
                                <td className = 'cartTable__td' >
                                    <button className ='btn-minus' data-articul = {item}>-</button>
                                </td>
                                <td className = 'cartTable__td'>{goodsObj[item]['cost'] * cart[item]} руб.</td>
                            </tr>
                        )}

                            <tr>
                               <td colSpan="7" className = 'cartTable__td cartTable__total'>Всего: {getTotal()} руб.</td>                          
                           </tr>                                                  
                </tbody>
            </table>
         }
       </>
       
    );

}

export default Cart;