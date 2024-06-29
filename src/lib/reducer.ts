import { ActionTypes, IAction, IState, ITodo } from "./types";

export const reducer = (state:IState , action:IAction) => {
    switch(action.type){
        case ActionTypes.setTodoes:
            return {
                ...state,
                todos:action.payload as ITodo[]
            }

        case ActionTypes.addTodo:
            return {
                ...state , 
                todos:[...state.todos , action.payload as ITodo]
            }

        case ActionTypes.removeTodo:
            return {
                ...state ,
                todos:[...state.todos.filter(x => x.id != action.payload as string)]
            }
        
        case ActionTypes.updateTodo:

            return {
                ...state,
                todos: state.todos.map(todo =>
                  todo.id == action.payload
                    ? { ...todo, completed: !todo.completed }
                    : todo
                ),
              }
        
        default: 
         return state
    }
}