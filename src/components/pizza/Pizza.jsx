

// function Pizza(pizza){
//     return (
//         <li className="pizza" key={pizza.index} >
//             <img src={`/public/pizzas/${pizza.photoName}`} alt={pizza.name} />
//             <h3>{pizza.name}</h3>
//             <p>{pizza.ingredients}</p>
//             <p>{`$${pizza.price}`}</p>
//             {pizza.soldOut && <p>Sold Out</p>}
//         </li>
//     )
// }

function Pizza(pizza){
    if (pizza.soldOut){
        return (
            <li className="pizza sold-out">
                
            </li>
        )
    }else{
        return (
            <li className="pizza">
                
            </li>
        )
    }
}

export default Pizza