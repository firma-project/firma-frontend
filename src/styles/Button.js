import styled from "styled-components";

const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 40px;
    border-radius: 10px;
    color: #5E5E5E;
    font-weight: bold;
    font-size: 24px;
    background-color: #FFD445;
    cursor: pointer;

    &:active {
        background-color: #FFE800;
    }

`

export default Button;