export const ACTUALIZAR_OPERACION = 'ACTUALIZAR_OPERACION'
export const ERROR_HANDLER = 'ERROR_HANDLER'


export const actualizarOperacion = (operacion) =>{
    return{
        type: ACTUALIZAR_OPERACION,
        payload: operacion
    }
}

export const errorHandler = (error) =>{
    return{
        type: ERROR_HANDLER,
        payload: error
    }
}