import Pizza from "./Pizza";
import pizzaData from '../data';

function Menu () { 
  const numPizzas =pizzaData.length;
return (
  <main className="menu">
    <h2>Our Menu </h2>
     { numPizzas >0 ? (
      <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
  
          <ul className="pizzas">
            {pizzaData.map((pizza) =>(
            <Pizza pizza ={pizza} key={pizza.name} />
             ))}
           </ul>
       </>
       ) : <p> We 're still working on our menu , please come back later. </p>}
  </main>
)
}

export default Menu;