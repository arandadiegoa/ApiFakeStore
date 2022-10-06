import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  selectCanDecrement,
  selectCountValue,
  setCount,
} from "../../state/countSlice";

const Count = () => {
  const text = useSelector(selectCountValue);
  const countDecrement = useSelector(selectCanDecrement);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    console.log(event.target.id);
    if (event.target.id === "increment") {
      dispatch(increment());
    } else if (event.target.id === "decrement" && countDecrement) {
      dispatch(decrement());
    } else {
      dispatch(setCount(0));
    }
  };

  return (
    <div>
      <p>{text}</p>
      <button id="increment" onClick={handleClick}>
        Increment
      </button>
      <button id="decrement" onClick={handleClick}>
        Decrement
      </button>
      <button id="reset" onClick={handleClick}>
        Reset
      </button>
    </div>
  );
};
export default Count;

/*Redux sirve para tener un estado global de una app 
Y un estado es un objeto -> count
-Store: Donde guarda el estado global. Solo hay un Store
-Acciones: objeto{
    type: "setCount", payload: "Cualquier tipo de variable"
}
-Reducer: Es una funcion que toma un Estado(objeto) y una accion. Retorna un nuevo 
estado(copia, crea uno nuevo).
const ejemploReducer = (state, action)
{
    switch (action.type) {
        case "setCount" : 
        return {...state, count: action.payload}
        default :
        return state //sin modificar
    }
    
}
useSelector = se usa para leer valores del estado global
useDispatch = se usa para disparar acciones
Hoy en dia se usa Redux Toolkit, que simplifica estados
*/
