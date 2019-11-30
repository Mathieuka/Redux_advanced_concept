import { INCREMENT, DECREMENT, ADD, SUBTRACT, STORE_RESULT, DELETE_RESULT} from './type';

export const _incrementCounter = () => {
    return {
        type: INCREMENT
    }
}

export const _decrementCounter = () => {
    return {
        type: DECREMENT,
    }
}

export const _addCounter = () => {
    return {
        type: ADD,
        payload: {
            val: 10
        }
    }
}

export const _subtractCounter = () => {
    return {
        type: SUBTRACT,
        payload: {
            val: 15
        }
    }
}

export const _storeResult = (result) => {
    return {
        type: STORE_RESULT,
        payload: {
            result: result
        }
    }
}

export const _deleteResult = (id) => {
    return {
        type: DELETE_RESULT,
        payload: {
            resultElId: id
        }
    }
}

