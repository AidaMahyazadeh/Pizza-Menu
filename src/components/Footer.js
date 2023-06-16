import Order from "./Order";

function Footer () {
const hour = new Date().getHours();
const openHour = 12;
const closeHour = 22;
const isOpen = hour >= openHour && hour <= closeHour;

return(
  <footer className="footer" >
   {!isOpen ? (
     <p className="footer">
      We're happy to welcome you between {openHour}:00 and {closeHour}:00.
     </p>
     ) : <Order closeHour ={closeHour} /> 
    }
 
  </footer>
)
}

export default Footer;