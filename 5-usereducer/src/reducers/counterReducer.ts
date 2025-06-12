type IAction = { type: 'INCREMENT' | 'DECREMENT'; } // The action can either be 'INCREMENT' or 'DECREMENT'

export const reducerCounter = (state: number, action: IAction) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1; // Increment the state by 1
        case 'DECREMENT':
            return state - 1; // Decrement the state by 1
        default:
            return state; // If the action is not recognized, return the current state
    }
}