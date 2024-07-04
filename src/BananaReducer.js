const initialBananaCount = {
    count : 0
}

export function bananaReducer(state=initialBananaCount,action){
    switch(action.type){
        case 'increaseBanana' : 
        return {
            ...state,
            count : state.count + 1
        }

        case 'decreaseBanana' : 
        return {
            ...state,
            count : state.count - 1
        }

    default : 
       return state
    }

}