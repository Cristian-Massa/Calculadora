import React, { useEffect } from "react";
import styled from "styled-components";
import { Font } from "../GeneralStyles";
import { useDispatch, useSelector } from "react-redux";
import { errorHandler, actualizarOperacion } from "../../redux/actions/actions";

const ErrorWindow = styled.div`
    background-color: #FF3F3F;
    border: 1px #E50000 solid;
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;

`
const BtnClose = styled.button`
    border-radius: 50%;
    height: 25px;
    width: 25px;
`

export function ErrorWindows () {
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    useEffect(()=>{
    }, [state.error])
    return(
        <ErrorWindow>
            <Font style={{fontSize: '20px' }}>Error de sintaxis</Font>
            <BtnClose onClick={() =>{dispatch(errorHandler(false), dispatch(actualizarOperacion('')))}}>x</BtnClose>
        </ErrorWindow>
    )
}