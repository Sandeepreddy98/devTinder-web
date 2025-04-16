import { Outlet, useNavigate } from "react-router";
import NavBar from "./NavBar";
import Footer from "./Footer";
import axios from "axios";
import { SERVER_URI } from "../utils/constants-env";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/store/userSlice";

function Body() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store : any) => store.user)

  const fetchUser = async () =>{
    if(!user) return
    try{
      const res = await axios.get(SERVER_URI+"/profile/view",{withCredentials: true})
      dispatch(addUser(res.data.data))
    }catch(err : any){
      if(err.status === 401){
        navigate('/login')
      }
      console.error(err)
    }
  }

  useEffect(() => {
    fetchUser()
  },[])

  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Body;
