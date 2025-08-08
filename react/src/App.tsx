
import { useReducer } from "react"
import debounce from "./function.ts/debounce"
import reducer from "./function.ts/reducer"
import type { State } from "./types/type"

export default function App() {

  const initState: State = {
    name: '',
    email: '',
    message: ''

  }
  const [state, dispatch] = useReducer(reducer, initState)
  const debouncefun = debounce(dispatch, 100)

  return (
    <div className="p-4 space-y-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold">Formulaire de contact</h2>

      <div className="flex flex-col gap-2">
        <label>Nom :</label>
        <input
          type="text"
          value={state.name}
          onChange={(e) =>
            debouncefun({
              type: "updateField",
              field: "name",
              value: e.target.value,
            })
          }
          className="border p-2 rounded"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label>Email :</label>
        <input
          type="email"
          value={state.email}
          onChange={(e) =>
            debouncefun({
              type: "updateField",
              field: "email",
              value: e.target.value,
            })
          }
          className="border p-2 rounded"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label>Message :</label>
        <textarea
          value={state.message}
          onChange={(e) =>
            debouncefun({
              type: "updateField",
              field: "message",
              value: e.target.value,
            })
          }
          className="border p-2 rounded"
        />
      </div>

      <button
        onClick={() => debouncefun({ type: "reset" })}
        className="bg-red-600 text-white px-4 py-2 rounded"
      >
        Réinitialiser
      </button>

      <hr />

      <div>
        <h3 className="font-semibold">Données saisies :</h3>
        <p><strong>Nom :</strong> {state.name}</p>
        <p><strong>Email :</strong> {state.email}</p>
        <p><strong>Message :</strong> {state.message}</p>
      </div>
    </div>
  );
}