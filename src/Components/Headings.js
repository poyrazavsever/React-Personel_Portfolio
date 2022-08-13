import styled from 'styled-components'



// H1 Design System

export const Lighth1 = styled.h1`

    font-size:48px;
    color:black;
    font-weight:300;

`

export const Midh1 = styled.h1`

    font-size:48px;
    color:black;
    font-weight:500;

`


// H4 Design System

export const Midh4 = styled.h4`

    font-size: 25px;
    font-weight: 500;
    color: ${props => props.color === "purple" ? "#812EE6" : "black"};
`



// H5 Design System

export const Lighth5 = styled.h5`

    font-size:20px;
    color:black;
    font-weight:300;
`


export const Lightbody = styled.p`

    font-size:16px;
    color:black;
    font-weight:300;

`



// Spans


export const SpanPurple = styled.span`

    font-weight:500;
    color:#812EE6;
`