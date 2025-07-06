import axios from 'axios';
import {useEffect} from 'react'
import axiosinstance from '../../axiosinstance'
const Dashboard = () => {
  useEffect(()=>{
    const fetchProtectedData = async () =>{
      try{
        const response = await axiosinstance.get('/protected-view/')
        // console.log("Success", response.data);
      }catch(error){
          console.error("Error fetching data", error);
      }
    }
    fetchProtectedData()
  },[])
  return (
    <div className='text-light container'>Dashboard</div>
  )
}

export default Dashboard