export default function RestaurantCard(prop){
const {name,cuisine,costForTwo,minOrder, deliveryTime, payment_methods,rating,votes,reviews,src} = prop.data
const {cash,card}= payment_methods
return (
    <div style={{border: '5px solid grey',width:'550px',margin:'30px auto'}}>
        <div style={{display:'flex',flexDirection:'row', 
        gap:'10px',
        padding:'20px'}}>
            <div style={{flexBasis:'100px'}}>
                <img src={src} alt={name} width='100px'/>
            </div>
            <div style={{textAlign:'left',flex:'2'}}>
                <h3 style={{margin:0,color:'maroon'}}>{name}</h3>
                <p style={{margin:'2px 0', color:'grey',fontSize:'14px',fontWeight:'500'}}>{cuisine.join(', ')}</p>
                <p style={{margin:'2px 0', color:'grey',fontSize:'14px',fontWeight:'500'}}>Cost ₹{costForTwo} for Two</p>
                <p style={{margin:'2px 0',fontSize:'14px',fontWeight:'500'}}>Min ₹{minOrder} * Up to {deliveryTime} minutes</p>
                {cash && card?<p style={{margin:'5px 0',fontSize:'14px',fontWeight:'500'}}>Accepts: Cash and Card</p>:card?<p style={{margin:'5px 0',fontSize:'14px',fontWeight:'500'}}>Accepts: Card</p>:<p style={{margin:'5px 0',fontSize:'14px',fontWeight:'500'}}>Accepts: Cash</p>}
            </div>
            <div style={{flexBasis:'200px' ,textAlign:'right'}}>
                <div style={{width:'40px',background:'lightGreen',borderRadius:'5px',color:'white',height:'25px',textAlign:'center',marginLeft:'150px'}}>
                    {rating}
                </div>
                <p style={{margin:'2px 0', color:'grey',fontSize:'14px',fontWeight:'500'}}>{votes} votes</p>
                <p style={{margin:'2px 0', color:'grey',fontSize:'14px',fontWeight:'500'}}>{reviews} reviews</p>
            </div>
        </div>
        <div style={{borderTop:'1px solid black',textAlign:'right'}}>
            <button style={{height:'40px',width:'100px',cursor:'pointer',backgroundColor:'lightgreen',color:'green',border:0}}>Order Online</button>
        </div>
    </div>
)
}
