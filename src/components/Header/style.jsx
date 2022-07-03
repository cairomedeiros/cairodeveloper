import styled from "styled-components";

export const HeaderContainer = styled.header`

    //position: fixed;
    background-color: #181818;
    height: 50px;
    width: 100%;
    border-bottom: 1px solid #242424;
    display: flex;
    justify-content: center;
    

    nav{
        width: 80%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
    }

   

    nav .infos{
        
        display: flex;
        align-items: center;
       
        
    }

    nav .infos ul {
        
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        
       
    }

    nav .infos ul li{
        margin: 10px
    }

   a, h1{
    color: #FFF;
   }


`;