import React from "react";
import styled from "styled-components"
import { Pantalla } from "../Pantalla/Pantalla";
import { Botones } from "../Botones/Botones";
const Container = styled.div`
    display: grid;
    height: 600px;
    width: 400px;
    grid-template-rows: 20% auto;
    background-color: #1B1B1A;
    border-radius: 2rem;
    padding: 10px;
`

export const Calculadora = () => {
    return (
        <Container>
            <Pantalla />
            <Botones />
        </Container>
    )
}