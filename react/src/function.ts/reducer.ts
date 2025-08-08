import type { Action } from "../types/type";
import type { State } from "../types/type";

export  default function reducer(state: State, action: Action) {
    switch (action.type) {
      case "updateField":
         return {
    ...state,
    [action.field]: action.value,// cette syntaxe  est computed property".


  };
        case "reset":
          return{
            ...state,
            name:'',
            email:'',
            message:''
          }
      default:
        return state
    }

  }
    
