import React, { Component } from 'react';


export default function Card(props){
    let badgeText
    if(props.openSpots === 0){
        badgeText = "SOLD OUT"
    }
    else{
        badgeText = "ONLINE"
    }


    return (

        <div className='card'>
            {
                badgeText &&
                <div className='card--badge'>{badgeText}</div>
            }
            <img src={`/images/${props.image}`} alt="experienced person" className='card--image' draggable='false'/>

            <div className='status'>
                <img src={"/images/star.png"} alt="" />
                <span className='rating'>{props.status.rating}</span>({props.status.reviewCount}) - {props.location}
            </div>
            <h3 className='card--title'>{props.name}</h3>
            <p className='card--cost'><span className='exp--price'>From ${props.price}  </span>/ person</p>
        </div>
    )
}