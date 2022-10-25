import React from 'react';
import CardItem from './CardItem';
import '././Cards.css'

function Cards() {
  return (
    <div className='cards'>
    <h1>Check out your role</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className= 'cards__items'>
                    <CardItem 
                    img src= 'images/img1.jpg'
                    text= "Check your history of product"
                    lable= "Vendor" path="/vendor" />

                    <CardItem 
                    img src= 'images/img1.jpg'
                    text= "Check your history of product"
                    lable= "Customer" path="/customer" />
                </ul>
            </div>
        </div>   
    </div>
  )
}

// function Cards({title, imageUrl, body}) {
//   return (
//     <div className='cards'>
//     <h1>Check out your role</h1>
//       <div className= 'cards__container'>
//         <div className= 'cards__wrapper'>
//           <div className='image-container'>
//               <img src= {imageUrl} alt= ''/>
//             </div>
//             <div className= 'card-title'>
//                 <h3>{title}</h3>
//             </div>
//             <div className= 'card-body'>
//               <p>{body}</p>
//             </div>
//         </div>
//       </div>
//     </div>
//   )
// }




export default Cards;
