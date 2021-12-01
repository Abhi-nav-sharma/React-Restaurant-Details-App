import { useState } from 'react'
import data from '../../data.json'
import RestaurantCard from './RestaurantCard'
const RestaurantDetails = ()=>{
    const [rating,setRating]= useState(0)
    const [method,setMethod]= useState('all')
    const [order,setOrder]=useState('')
    const handleRating=(val)=>{
        setRating(val)
    }
    const handlePayment=(val=>{
        setMethod(val)
    })
    const handleSort = (val)=>{
        setOrder(val)
    }
    return (
        <div>
            <h1>Restaurants</h1>
            Rating: 
            <button onClick={()=>handleRating(4)}>4 star</button>
            <button onClick={()=>handleRating(3)}>3 star</button>
            <button onClick={()=>handleRating(2)}>2 star</button>
            <button onClick={()=>handleRating(1)}>1 star</button>
            <br/>
            Payment Methods:
            {['All','Card','Cash'].map((item)=>{
                return <button onClick={()=>handlePayment(item)}>{item}</button>
            })}
            <br/>
            Sort:
            <button onClick={()=>{handleSort('asce')}}>Low to High</button>
            <button onClick={()=>{handleSort('desc')}}>High to Low</button>
            {data.filter((item)=>{
                let paymentCondition= true
                if(method==='Cash'){
                    paymentCondition= item.payment_methods.cash?true:false
                }
                else if(method==='Card'){
                    paymentCondition= item.payment_methods.card?true:false
                }
                return item.rating>=rating && paymentCondition
            })
            .sort((a,b)=>{
                if(order==='asce'){
                    return a.costForTwo-b.costForTwo
                }
                else if(order==='desc'){
                    return b.costForTwo-a.costForTwo
                }
                else{
                    return 0
                }
            })
            .map((item)=><RestaurantCard data={item} key={item.id}/>)}
        </div>
    )
}

export default RestaurantDetails