import styled from 'styled-components'



// H1 Design System

export const Lighth1 = styled.h1`

    font-size:48px;
    color:#ffff;
    font-weight:300;
    word-wrap: 4px;
    text-align: left;

`

export const Midh1 = styled.h1`

    font-size:48px;
    color:#ffff;
    font-weight:500;
    word-wrap: 4px;
    text-align: left;


`


// H4 Design System

export const Midh4 = styled.h4`

    font-size: 25px;
    font-weight: 500;
    color: ${props => props.color === "primary" ? "#F7CCAC" : "white"};
    word-wrap: 4px;
    text-align: left;

`


export const Lighth4 = styled.h4`

    font-size: 25px;
    font-weight: 300;
    color: ${props => props.color === "primary" ? "#F7CCAC" : "white"};
    word-wrap: 4px;
    text-align: left;

`



// H5 Design System

export const Lighth5 = styled.h5`

    font-size:20px;
    color: ${props => props.color === "primary" ? "#F7CCAC" : "white"};
    font-weight:300;
    word-wrap: 4px;
    text-align: left;

`

export const Midh5 = styled.h5`

    font-size:20px;
    color: ${props => props.color === "primary" ? "#F7CCAC" : "white"};
    font-weight:500;
    word-wrap: 4px;
    text-align: left;

`


export const Lightbody = styled.p`

    font-size:16px;
    color:#ffff;
    font-weight:300;
    line-height: 30px;
    text-align: left;


`


export const Lightbody2= styled.p`

    font-size:14px;
    color:#ffff;
    font-weight:300;
    line-height: 30px;
    text-align: left;


`



// Spans


export const SpanPrimary = styled.span`

    font-weight:500;
    color:#F7CCAC;
    word-wrap: 5px;
    text-align: left;

`