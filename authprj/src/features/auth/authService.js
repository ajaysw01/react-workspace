import axios from 'axios'

const API_URL = "http://localhost:8000"

//register user 
const register = async (userData) => {
  const response = await axios.post(API_URL+"/api/users/register ", userData)
  if(response.data){
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  return response.data
}


//logout
const logout = () => {
  localStorage.removeItem('user')
}


//register user 
const login = async (userData) => {
  const response = await axios.post(API_URL+"/api/auth/login ", userData)
  if(response.data){
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  return response.data
}

const authService = {
  register,
  login,
  logout
}

export default authService
