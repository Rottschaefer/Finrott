import styled from "styled-components";

export const StyledMenu = styled.nav`
position: relative;
width: 100vw;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-end;

/* background-color: aqua; */
position: fixed;
  bottom: 0;
`

export const StyledDivSides = styled.div`
background-color: green;
height: 66.65px;
width: 30vw;
`

export const StyledDivCenter = styled.div`
background-color: white;
height: 6.5vh;
width: 40vw;
z-index: 2;
`

export const StyledCircle1 = styled.div`
position: absolute;
bottom: -11.2px;
right: 7%;
background-color: white;
height: 4.875rem;
width:  4.875rem;
border-radius: 50%;
margin-top: 10px;
`

export const StyledCircle2 = styled.div`
position: absolute;
bottom: -11.6px;
left: 7%;
background-color: white;
height:  4.875rem;
width:  4.875rem;
border-radius: 50%;
margin-top: 10px;
`

export const StyledCircleCenter = styled.div`
margin: auto;
position: absolute;
bottom: 27.8px; 
left: 50%;
transform: translateX(-50%);
background-color:rgb(233, 233, 233);
;
height: 7.7rem;
width: 7.7rem;
border-radius: 50%;
margin-top: 10px;

z-index: 2;

`

export const StyledDivFixed = styled.div`
width: 300px;
position: relative;
`