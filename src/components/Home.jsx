import axios from "axios"
import { useEffect } from "react";
import Cookies from "universal-cookie"

function Home() {

    const cookies = new Cookies();

    const verifyuser = async () =>{

        const token = cookies.get("token");
        const baseurl = "  ";
        
        try{
            const response = await axios.get(baseurl,{
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            })

            console.log(response.data)

        }catch(error){
            console.log("Error ",error);
        }
    }
    

    useEffect(()=>{
        verifyuser();
    })

  return (
    <div>
      Homepage
    </div>
  )
}

export default Home
