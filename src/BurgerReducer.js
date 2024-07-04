const initialBurgerCount = {
    count : 0
}

export function burgerReducer(state=initialBurgerCount,action){
    switch(action.type){
        case 'increaseBurger' : 
        return {
            ...state,
            count : state.count + 1
        }

        case 'decreaseBurger' : 
        return {
            ...state,
            count : state.count - 1
        }

    default : 
       return state
    }

}
