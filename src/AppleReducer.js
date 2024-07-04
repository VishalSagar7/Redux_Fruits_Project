const initialAppleCount = {
    count : 0
}

export function appleReducer(state=initialAppleCount,action){
    switch(action.type){
        case 'increaseApple' : 
        return {
            ...state,
            count : state.count + 1
        }

        case 'decreaseApple' : 
        return {
            ...state,
            count : state.count - 1
        }

    default : 
       return state
    }

}