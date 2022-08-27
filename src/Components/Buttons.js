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


export const AnimationBtn = styled.a`

    margin: 0 23px;
    position:relative;
    display: inline-block;
    padding:12px 16px;
    color:var(--primary);
    text-transform: uppercase;
    letter-spacing: 4px;
    text-decoration:none;
    font-size:1.2rem;
    overflow: hidden;
    transition: .2s;

    &:hover{
        font-weight:500;
        color:var(--dark);
        background: var(--secondary);
        transition-delay:1s;
        box-shadow:0 0 5px var(--secondary), 0 0 8px var(--secondary), 0 0 11px var(--secondary) ;
    }
`


export const AnimationBtn2 = styled.button`
    position:relative;
    display: inline-block;
    padding:12px 16px;
    color:var(--primary);
    text-transform: uppercase;
    letter-spacing: 4px;
    text-decoration:none;
    font-size:1.2rem;
    overflow: hidden;
    transition: .2s;
    border: none;
    background-color: transparent;
    cursor: pointer;

    &:hover{
        font-weight:500;
        color:var(--dark);
        background: var(--secondary);
        transition-delay:1s;
        box-shadow:0 0 5px var(--secondary), 0 0 8px var(--secondary), 0 0 11px var(--secondary) ;
    }
`