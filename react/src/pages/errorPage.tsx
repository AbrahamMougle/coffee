import { useRouteError } from "react-router-dom";

export default function errorElement() {
    const error=useRouteError()// error depend de probleme rencontrons lord de l'accesion d'une route 
    console.log(error);
    console.log("pageError");
    return <div>
        error No matching routes
    </div>
    
}