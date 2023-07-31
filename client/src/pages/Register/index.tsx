import {useState} from 'react'
import { Link } from 'react-router-dom';
import Button from '../../components/button';
function Register(){

    const [user,setUser] = useState({
        name:"",
        email:"",
        password:""
    })
    const register =()=>{
        console.log(user);
    }

    return (
        <div className="flex  justify-center h-screen items-center bg-primary">
            <div className="bg-white  p-5 w-[450px] rounded-md">
                <div className="flex flex-col gap-5">
                <h1 className='text-2xl font-bold text-primary text-center uppercase'>BYTEBLOG -Register</h1>
                <input type="text" placeholder="Enter Your Name" value={user.name}
                onChange={(e)=>setUser({...user, name:e.target.value})}/>
                
                <input type="email" placeholder="Enter Your Email" value={user.email}
                onChange={(e)=>setUser({...user, email:e.target.value})}/>
                
                <input type="password" placeholder="Enter Your Pasword" value={user.password}
                onChange={(e)=>setUser({...user, password:e.target.value})}/>
                <Button title="Register" onclick={register} disabled={user.name.length <3 || user.email.length<3 || user.password.length <6}/>
                
                <Link to='/login' className='text-center text-primary underline'>
                    Already have a account ? Login
                </Link>
                </div>
            </div>
            
        </div>
    )
}
export default  Register;