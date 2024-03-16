// import Pizza from  "../pizza/Pizza"

// function Pizza({pizzaData}){
//     <main className = "menu">
//         <ul className="pizzas">
//             {pizzaData.map(pizza => <p>{pizza}</p>)}
//         </ul>
//     </main>
// }


function Pizza({pizzaInfo}){
    const soldOut = pizzaInfo.soldOut;
    return (
        <li className={`pizza ${soldOut ? 'sold-out' : ''}`}>
            <img src={pizzaInfo.photoName} alt=""></img>
            <div>
                <h3>{pizzaInfo.name}</h3>
                <p>{pizzaInfo.ingredients}</p>
                {/* <span>{Boolean(pizzaInfo.soldOut) ? 'SOLD OUT' : `$${pizzaInfo.price}.00`}</span> */}
                <span>
                    {pizzaInfo.soldOut ? (
                        <p>Sold Out</p>
                    ) : (
                        <p>${pizzaInfo.price}</p>)}
                </span>
            </div>
        </li>
    )
}

export default Pizza