import styled from 'styled-components'


export const Btn = styled.button`

    border:none;
    width:100px;
    height:40px;
    color:#3A3845;
    border-radius:2px;
    cursor:pointer;
    padding:4px 8px;
    transition:all .3s;
    margin: 0 32px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
        ${props => props.theme === "primary" ? `background-color:#ad8f78` : `background-color:#8b6d56` }
    }

    ${props => props.theme === "primary" ? `background-color:#F7CCAC;` : `background-color:#C69B7B;` }
`