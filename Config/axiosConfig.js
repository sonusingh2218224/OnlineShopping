import axios from "axios";
const http=axios.create({
    baseURL:"http://localhost:5000"
});


const httpFile=axios.create({
    baseURL:"http://localhost:5000",
      headers:{"Content-Type":"multipart/form-data"}
    
    
});
export {http, httpFile}