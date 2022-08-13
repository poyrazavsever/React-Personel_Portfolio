import styled from 'styled-components'


export const Btn = styled.button`

    border:none;
    width:100px;
    height:40px;
    color:#ffff;
    border-radius:2px;
    cursor:pointer;
    padding:4px 8px;
    transition:all .3s;
    margin: 0 32px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
        ${props => props.theme === "primary" ? `background-color:#5614A6` : `background-color:#7F5B9F` }
    }

    ${props => props.theme === "primary" ? `background-color:#812EE6;` : `background-color:#9E88B2;` }
`