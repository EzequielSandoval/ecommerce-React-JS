import React from 'react'
import { ItemCount } from './ItemCount'

export const Item = ({ nameItem, imgItem, priceItem, stockItem }) => {

    return (
        <div className='itemContainer'>
            <div className='bodyItem'>
                <img className='imgItem' src={imgItem} alt="imagen calzado nike" />
            </div>
            <div className='footerItem'>
                <p className='titleItem'>{nameItem} </p>
                <span className='priceItem'>${ priceItem}</span>
                <ItemCount stock={stockItem} />
            </div>
        </div>
    )
}
