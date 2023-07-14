import { postData } from "../proxy/proxyService"

export const UserAuth = async(userData) => {
    console.log('Invoked userAuth')
   
    const url="http://localhost:8080/auth/login";
    
     const response = await postData(url,userData);
     
     if(response.status === 200) {
      
        return response.data;

     } else  {
        return  {
            status:500,
            message:"error occred"
        };

     }
    
    
}

export const UserSignUp = async(userData) => {
   console.log('Invoked userAuth')
  
   const url="http://localhost:8080/auth/login";
   
    const response = await postData(url,userData);
    
    if(response.status === 200) {
     
       return response.data;

    } else  {
       return  {
           status:500,
           message:"error occred"
       };

    }
   
   
}