import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux"
import { Font } from "../GeneralStyles";
const ContainerText = styled.div`
    background-color: #292C30;
    display: flex;
    justify-content: end;
    padding-right: 10px;
    align-items: center;
    margin-bottom: 10px;
    border-radius: 2rem;
    overflow: hidden;
`


export function Pantalla() {
    const state = useSelector(state => state)
    let render = ''
    render = state.operacion
    return (
        <ContainerText>
            <Font>{render}</Font>
        </ContainerText>
    )
}