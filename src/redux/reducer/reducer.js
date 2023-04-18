const initialState = {
    operacion: '',
    error: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ACTUALIZAR_OPERACION':
            return{
                ...state,
                operacion: action.payload
            }
        case 'ERROR_HANDLER':
            return{
                ...state,
                error: action.payload
            }

        default:
            return state;
        }
}

export default reducer