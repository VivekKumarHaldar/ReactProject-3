import styled from "styled-components";

const StartGame = ({ toggle }) => {
  return (
    <Container>
        <div><img src ="images/dices1.png" alt ="dice image" /></div>
        
        <div className="content">
            <h1>DICE GAME</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
    display:flex;
    margin: 0 auto;
    height:100vh;
    align-items:center;
    max-width : 1180px;
   .content {
    h1{
        font-size:96px;
    }

   } 
`


const Button = styled.button`

padding:10px 18px;
background:#000000;
border-radius:5px;
color:white;
min-width:220px;
border:none;
font-size:16px;
border:1px solid transparent;
transition: 0.4s background ease-in;
cursor:pointer;
&:hover{
    background-color:white;
    border:1px solid black;
    color:black;
    transition: 0.3s background ease-in;
}

`
