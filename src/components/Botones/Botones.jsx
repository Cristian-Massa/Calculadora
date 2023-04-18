import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import { actualizarOperacion, errorHandler } from "../../redux/actions/actions";
import { useDispatch, useSelector } from 'react-redux'

const ContainerButtons = styled.div`
    display:grid;
    width: 100%;
    height: 100%;
    row-gap: 20px;
`
const ContainerNums = styled.div`
display:grid;
grid-template-columns: auto auto auto;
`
const ContainerOperators = styled.div`
display:grid;
grid-template-columns: auto auto auto auto auto;
height: 100px;
`
const Buttons = styled.button`
font-size: 20px;
border-radius: 2rem;
background-color: #F8A21E;
`


export const Botones = (props) => {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    let operador;
    const [operacion, setOperacion] = useState('')
    const ingresarOperacion = (e) => {
        operador = e.currentTarget.value
        console.log(operador)
        setOperacion(operacion + operador)
    }
    useEffect(() => {
        dispatch(actualizarOperacion(operacion))
    }, [operacion])
    useEffect(() => {
        setOperacion(state.operacion)
        console.log(state)
    }, [state])

    const realizarOperacion = () => {
        try {

            const result = eval(operacion)
            setOperacion(result.toString())
        } catch (err) {
            dispatch(errorHandler(true))
            console.log(err)
        }
    }

    const borrar = () => {
        setOperacion('')
    }
    const borrarCaracter = () => {
        const nuevaOperacion = operacion.replace(operacion.at(-1), '')
        dispatch(actualizarOperacion(nuevaOperacion))
        setOperacion(state.operacion)
    }
    return (
        <ContainerButtons>
            <ContainerNums id="btns">
                <Buttons value={7} onClick={ingresarOperacion}>7</Buttons>
                <Buttons value={8} onClick={ingresarOperacion}>8</Buttons>
                <Buttons value={9} onClick={ingresarOperacion}>9</Buttons>
                <Buttons value={4} onClick={ingresarOperacion}>4</Buttons>
                <Buttons value={5} onClick={ingresarOperacion}>5</Buttons>
                <Buttons value={6} onClick={ingresarOperacion}>6</Buttons>
                <Buttons value={1} onClick={ingresarOperacion}>1</Buttons>
                <Buttons value={2} onClick={ingresarOperacion}>2</Buttons>
                <Buttons value={3} onClick={ingresarOperacion}>3</Buttons>
                <Buttons value={0} onClick={ingresarOperacion}>0</Buttons>
            </ContainerNums>
            <ContainerOperators>
                <Buttons value={'+'} onClick={ingresarOperacion}>+</Buttons>
                <Buttons value={'-'} onClick={ingresarOperacion}>-</Buttons>
                <Buttons value={'*'} onClick={ingresarOperacion}>*</Buttons>
                <Buttons onClick={borrar}>C</Buttons>
                <Buttons onClick={borrarCaracter}>{"<"}</Buttons>
                <Buttons value={'/'} onClick={ingresarOperacion}>/</Buttons>
                <Buttons value={'='} onClick={realizarOperacion}>=</Buttons>
            </ContainerOperators>
        </ContainerButtons>
    )
}
