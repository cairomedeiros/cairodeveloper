import styled from "styled-components";

export const HeaderContainer = styled.header`

    position: fixed;
    background-color: #181818;
    height: 50px;
    width: 100%;
    border-bottom: 1px solid #242424;
   display: flex;
   justify-content: center;
    
    

    nav{
        
        width: 80%;
        max-width: 1320px;
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
        margin: 10px;
        
    }


   a, h1{
    color: #FFF;
   }

   .checkbtn{
        color: #fff;
        font-size: 30px;
        cursor: pointer;
        display: none;
    }

    #check{
      display: none;
    }

    


    @media (max-width: 858px){
        .checkbtn{
            display: block;
            
        }

        .logo{
            display: block;
        }


        ul{
            position: fixed;
            width: 100%;
            height: 100%;
            top: 50px;
            left: -100%;
            background-color: #242424;
            text-align: center;
            transition: all .5s;

            display: flex;
            flex-direction: column;
            
            
            
                
        }

        nav .infos ul li {
            display: block;
            line-height: 30px;
            width: 100%;
            display: flex;
            justify-content: center;
            margin-top: -150px;
            

            
        }

        nav ul li a{
            
            font-size: 20px;
        }

        a:active{
            background: none;
            color: #181818;
        }

        a:hover{
            background: none;
            color: #181818;
        }

        #check:checked ~ ul{
            left: 0;
        }

        
    }

`;