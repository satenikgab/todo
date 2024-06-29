import { useContext } from "react"
import { ActionTypes, ITodo } from "../lib/types"
import { TodoContext } from "../lib/context"
import { remove } from "../lib/api"

interface Props {
    todo: ITodo
}


export const ToDoItem:React.FC<Props> = ({todo}) => {
    
    const context = useContext(TodoContext)
    if(!context){
        throw new Error("err")
    }

    const {dispatch} = context

    const handleDelete = (id:string) =>{
       
        remove(id)
        .then(() => {
            dispatch({type:ActionTypes.removeTodo , payload:id})
           
        })

    }

    const handleDone = (id: string) => {
    
        dispatch({
          type: ActionTypes.updateTodo,
          payload: id,
        })
      }
    
    
    return <div className={`item ${todo.completed ? 'completed' : ''}`}>
        <p>{todo.text}</p>
        <div>
        <button onClick={() => handleDone(todo.id)}>
           
           {todo.completed ? 'Undo' : 'Done'}
        
        </button>
           
            <button onClick={() =>handleDelete(todo.id) }>remove</button>
        
        </div>
    </div>
}