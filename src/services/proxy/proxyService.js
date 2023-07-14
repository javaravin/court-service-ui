import axios from "axios";
    export const postData = async (url,  data, header) => {
        try {
            console.log('Invoked postData'+url);
          const response = await axios.post(url, data, header);
          const responseData = response.data; // Convert to JavaScript object
          console.log('Response Data:', response.status);
          console.log('Response Data:', responseData);
          return {
            status: response.status,
            data: responseData,
          };
        } catch (error) {
            
            if (error.response) {
                // The request was made and the server responded with a status code outside the range of 2xx
                console.log('Error Status:', error.response.status);
                return  {
                  status:error.response.status,
                  message:"error occred"
              };
              } else  {
                // The request was made but no response was received
                console.log('No Response:', error.request);
                return  {
                  status:500,
                  message:"network error"
                };
             
              }
        }
            
      };

    export const putData = async (url, data,header) => {
        try {
          const response = await axios.put(url, data,header);
          return response.data;
        } catch (error) {
          // Handle the error
          throw new Error(error.message);
        }
     };

    export const getData = async (url,header) => {
        try {
          const response = await axios.get(url,header);
          return response.data;
        } catch (error) {
           // Handle the error
          throw new Error(error.message);
        }
     };
