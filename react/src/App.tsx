import { useReducer, useRef } from "react"

/*import { useState } from "react";
import type { product } from "./types/Product";
import Header from "./pages/Header";
export default function App() {
  const [cartItems, setCartItems] = useState<product[]>([])
  const [cartTotal, setCartTotal] = useState<number>(0)
  const addToCart = (product: product) => {
    const newCartItems = [...cartItems, product]
    setCartItems(newCartItems)
    setCartTotal(cartTotal + product.price)
  };
  const removeFromCart = (productId: number) => {
    const updatedItems = cartItems.filter(item => item.id !== productId);
    const removedItem = cartItems.find(item => item.id === productId)
    setCartItems(updatedItems)
    setCartTotal(cartTotal - (removedItem?.price ?? 0))
  }
  return (
    <div>
      <Header
        cartItems={cartItems}
        cartTotal={cartTotal}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    </div>
  )
}

import Profil from "./components/Profil";
export default function App() {
  const name:string="abraham"
  const mysurname:string='Mougle'
  const country:string="Benin"
  const color:string='red'
  const age:number=12
  return(
    <div className="ml-1.5">
     <h1 className="font-bold text-4xl">Hello word</h1>
      <Profil
      name={name}
      surname={mysurname}
      country={country}
      color={color}
       age={age}
      />
    </div>
  )
  
}
// mon application faire passer les donner tel que name surname country age et color en perforant ces composants ainsi y a de perforage donc appelons Api context pour fini avec 

import Cardprovider from "./components/CardProvider"
import Profil from "./components/Profil"
export  default function App() {
  return(
    <Cardprovider>
      <Profil/>
      </Cardprovider>
  )
} *
export default function App() {
  const [increment, setIncrement] = useState<number>(0)
  
  return (
    <div>
      <h2> {increment} </h2>
      <button  className="border-2 border-black rounded-2xl bg-white text-black p-2" onClick={()=>setIncrement((prev)=>prev+1)}>incremente</button>
      <button  className="border-2 border-black rounded-2xl bg-white text-black p-2" onClick={()=>setIncrement((prev)=>prev-1)}>incremente</button>
      <button  className="border-2 border-black rounded-2xl bg-white text-black p-2" onClick={()=>setIncrement(0)}>Reset</button>
       
 
    </div>
  )
}
  
export default function App() {
  type Actiontype = 'incremente' | 'decrement' | "reset"
  function reducer(state: number, action: Actiontype) {
    switch (action) {
      case "decrement":
        return state - 1
      case "incremente":
        return state + 1

      case "reset":
        return 0
      default:
        return state;
    }
  }
  const [count, dispatch] = useReducer(reducer, 0)

  return (
    <div>
      <h2> {count} </h2>
      <div className="flex gap-2">
        <button className="border-2 border-black rounded-2xl bg-white text-black p-2 block" onClick={() => dispatch('incremente')}>incremente</button>
        <button className="border-2 border-black rounded-2xl bg-white text-black p-2 block" onClick={() => dispatch('decrement')}>decrement</button>
        <button className="border-2 border-black rounded-2xl bg-white text-black p-2 block" onClick={() => dispatch('reset')}>reset</button>

      </div>

    </div>
  )
}

 
// mise en evidence de useReduce
interface stateType {
  id: number
  text: string
  done: boolean
}

type typeAction =
  | { type: 'add',text:string}
  | { type: 'delete'; id: number }
  | { type: 'task'; id: number };
const initialTasks = [
  {id: 0, text: 'Visiter le musée Franz-Kafka', done: true},
  {id: 1, text: 'Voir un spectacle de marionnettes', done: false},
  {id: 2, text: 'Prendre une photo du mur John Lennon', done: false},
];
export default function App() {
  const [count, dispatch] = useReducer(reducer, initialTasks)
  const i = useRef<HTMLInputElement>(null);

  function reducer(state:stateType[],action:typeAction) {
    switch (action.type) {
      case 'add':
        return [
          ...state ,
          {
           id: state.length > 0 ? state[state.length - 1].id + 1 : 0,
            text:action.text,
            done:true
          }
        ]
        
    case 'task':
      return state
      case "delete":
      return state.filter((t)=>t.id !== action.id
      )

      default:
        return state
    }
    
  }
  function handlechangeTask(text:string) {
    dispatch({
      type:"add",
      text:text,
    })
    
  }
  function handledeleteTask(i:number) {
    dispatch({
      type:'delete',
      id:i
    })
    
  }
  
  return(
    <>
  
      <h1>Voyage à Prague</h1>
      <div>
        <input type="text"
      placeholder="Ajouter"
      ref={i} />
      <button type="button" onClick={()=>{if (i.current?.value) {
  handlechangeTask(i.current.value);
  i.current.value = ""; // vide le champ
}}}>Add</button>
      </div>
      <div>
        { 
          
          count.map((t)=> 
          <div key={t.id} className="flex my-4">
            <input type="checkbox"  /> 
            <p> {t.text} </p>
            <button>Modifier</button>
            <button type="button" disabled={!i.current?.value.trim()} onClick={()=>{handledeleteTask(t.id)}}>Supprimer</button>
          </div>
          )
        }
      </div>
    </>
  )

}*/
//un compteur avec plusieurs actions 
export default function App() {
  return (
    <div>
      <button className="bg-black text-zinc-50 text-md border-2 border-amber-50 rounded-xl py-2 px-2.5">Incremente +1</button>
      <button className="bg-black text-zinc-50 text-md border-2 border-amber-50 rounded-xl py-2 px-2.5">Décrémenter de -1</button>
      <button className="bg-black text-zinc-50 text-md border-2 border-amber-50 rounded-xl py-2 px-2.5">Réinitialiser à zéro</button>
      <button className="bg-black text-zinc-50 text-md border-2 border-amber-50 rounded-xl py-2 px-2.5">Incremente +1</button>
      <button className="bg-black text-zinc-50 text-md border-2 border-amber-50 rounded-xl py-2 px-2.5">Incrémenter de +5</button>


    </div>
  )
}