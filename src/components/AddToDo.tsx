import { useContext, useState } from "react"
import { TodoContext } from "../lib/context"
import { ActionTypes } from "../lib/types"
import { add } from "../lib/api"


export const AddToDo:React.FC = () => {
    const context = useContext(TodoContext)
    if(!context){
        throw new Error("err")
    }

    const [text , setText ] = useState<string>("")
    const {dispatch} = context

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        add({text,completed:false})
        .then(res => {
            dispatch({type:ActionTypes.addTodo,payload:res})
            setText("")
        })

    }
    
    
    return <div>
       <form onSubmit={handleSubmit}>
        <input  value = {text} onChange={e => setText(e.target.value)}/>
        <button>save</button>
       </form>
    </div>
}