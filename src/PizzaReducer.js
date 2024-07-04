const initialPizzaCount = {
    count : 0
}

export function pizzaReducer(state=initialPizzaCount,action){
    switch(action.type){
        case 'increasePizza' : 
        return {
            ...state,
            count : state.count + 1
        }

        case 'decreasePizza' : 
        return {
            ...state,
            count : state.count - 1
        }

    default : 
       return state
    }

}