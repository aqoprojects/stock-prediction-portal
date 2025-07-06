import { useContext, useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSpinner} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

import {useNavigate} from 'react-router-dom'
import { AuthContext } from '../AuthProvider'





const Login = () => {
  const [username, setUsername] =useState('')
  const [password, setPassword] =useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const [error,setError] = useState('')
  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)

  const handleLogin = async (e)=>{
    e.preventDefault();
    setLoading(true)
    const userData = {username, password}
    console.log(userData);

    try{
      const resposne = await axios.post('http://localhost:8000/api/v1/token/', userData)
      localStorage.setItem('accessToken', resposne.data.access)
      localStorage.setItem('refreshToken', resposne.data.refresh)
      console.log('Login successful');
      setIsLoggedIn(true)
      navigate('/')
    } catch (error) {
      setError('Invalid credentials')
    }
    finally{
      setLoading(false)
    }
  
  }



  return (
    <>
      <div className="container">
        <div className="row jusify-content-center">
          <div className="col-md-6 bg-light-dark p-5 rounded">

            <h3 className='text-light text-center mb-4'>Login to our portal</h3>
            <form onSubmit={handleLogin}>
              <div className='mb-3'>
                <input type="text" className='form-control' placeholder='Enter username' value={username} onChange={( e ) => setUsername( e.target.value )} />

                
              </div>

              <div className='mb-3'>
                <input type="password" className='form-control' placeholder='Set password' value={password} onChange={( e ) => setPassword( e.target.value )} />

                
              </div>
              
              {error && <div className='text-danger'>{error}</div>}

              
              {loading ? (
                <button type="submit" className='btn btn-info d-block mx-auto' disabled> <FontAwesomeIcon icon={faSpinner} spin/>Logging in..</button>) : (
                  <button type="submit" className='btn btn-info d-block mx-auto'>Register</button>
                )
              }
              
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login