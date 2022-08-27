import styled from 'styled-components'

export const Icon = styled.img`
    width:20px;
`
export const BtnIcon = styled.img`
    width:15px;
    margin-left:.3rem ;
`

export const ContactIcon = styled.img`
    width:25px;
`

export const FlexContainer = styled.div`

    width: 1248px;
    margin: auto;
    display: flex;
    justify-content: ${props => props.content === "around"? "space-around" : "space-beetween"} !important;
    align-items:center;
    flex-direction: row;
    @media screen and (max-width:1200px){
        width: 1248px;
        flex-direction: row;
        
    }
    @media screen and (max-width:1115px) {
        width: 824px;
        flex-direction: column;
        align-items: center !important;
    }

    @media screen and (max-width:768px) {
        width: 648px;
        
    }

    @media screen and (max-width:600px) {
        width: 350px;
    }

    @media screen and (max-width:450px){
        width: 250px;
    }

    @media screen and (max-width:300px){
        width: 200px;
    }

    
`  

export const ContactFC = styled.div`

    width: 1048px;
    margin: auto;
    display: flex;
    justify-content:${props => props.content === "around"? "space-around" : "space-beetween"};
    align-items:center;
    @media screen and (max-width:1200px){
        width: 1048px;
    }
    @media screen and (max-width:992px) {
        width: 724px;
    }

    @media screen and (max-width:768px) {
        width: 548px;
        flex-direction: column !important;
    }

    @media screen and (max-width:600px) {
        width: 340px;
    }

    @media screen and (max-width:400px) {
        width: 300px;
    }

`
    


export const GridContainer = styled.div`
   
    margin: auto;
    display: grid;
    row-gap: 30px;
    column-gap: 30px;
    justify-content:center;
    width: 1248px;
    grid-template-columns: auto auto auto auto auto;

    @media screen and (max-width:1200px){
        width: 1248px;
        grid-template-rows: auto auto auto auto auto;
    }
    @media screen and (max-width:992px) {
        width: 824px;
        grid-template-rows: auto auto auto;
    }

    @media screen and (max-width:768px) {
        width: 648px;
        grid-template-rows: auto auto;
    }

    @media screen and (max-width:600px) {
        width: 380px;
        grid-template-rows: auto;
    }

    @media screen and (max-width:400px) {
        width: 240px;
    }

`

export const SkillIcon = styled.img `

    width: 65px;
`


