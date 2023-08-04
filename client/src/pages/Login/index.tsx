import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/button';
import { toast } from "react-hot-toast";
import { LoginUser } from '../../apicalls/users';
function Login(){
    const navigate = useNavigate();
    const [user,setUser] = useState({
        email:"",
        password:""
    })
    const login = async () => {
        try {
          const response = await LoginUser(user);
          if (response.success) {
            localStorage.setItem("token", response.data);
            navigate("/");
            toast.success(response.message);
          } else {
            toast.error(response.message);
          }
        } catch (error) {
          toast.error(error.message);
        }
      };

    return (
        <div className="flex  justify-center h-screen items-center bg-primary">
            <div className="bg-white  p-5 w-[450px] rounded-md">
                <div className="flex flex-col gap-5">
                <h1 className='text-2xl font-bold text-primary text-center uppercase'>BYTEBLOG -Login</h1>
                <input type="email" placeholder="Enter Your Email" value={user.email}
                onChange={(e)=>setUser({...user, email:e.target.value})}/>
                
                <input type="password" placeholder="Enter Your Pasword" value={user.password}
                onChange={(e)=>setUser({...user, password:e.target.value})}/>

                <Button title="Login"  onclick={login} disabled={user.email.length<3 || user.password.length <6}/>
                
                <Link to='/register' className='text-center text-primary underline'>
                    Don't have a account ? Sign Up
                </Link>
                </div>
            </div>
            
        </div>
    )
}
export default  Login;