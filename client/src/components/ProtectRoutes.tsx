import {toast} from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import { GetUser } from "../apicalls/users";
import { useEffect, useState } from 'react';

function ProtectRoutes({children}){
    const [user,setUser] = useState(null);
    const navigate = useNavigate();

    const getUser = async()=>{
        try {
            const response = await GetUser();
            if(response.success){
                toast.success(response.message);
                setUser(response.data);
            }
            else{
                toast.error(response.message);
            }
        } catch (error) {
            toast.error(error.message);
        }

    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
          getUser();
        } else {
          navigate("/login");
        }
      }, []);
      
    return user &&
        <div>
        {user.email} <br/>
        {user.name}
        {children}
        </div>;
}
export default ProtectRoutes;
