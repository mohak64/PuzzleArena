import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import avatar from '../assets/profile.png';
import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { passwordValidate } from '../helper/validate'
import useFetch from '../hooks/fetch.hook';
import { useAuthStore } from '../store/store'
import { verifyPassword } from '../helper/helper'
import styles from '../styles/Username.module.css';

export default function Password() {

  const navigate = useNavigate()
  const { username } = useAuthStore(state => state.auth)
  const [{ isLoading, apiData, serverError }] = useFetch(`/user/${username}`)

  const formik = useFormik({
    initialValues : {
      password : ''
    },
    validate : passwordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit : async values => {
      
      let loginPromise = verifyPassword({ username, password : values.password })
      toast.promise(loginPromise, {
        loading: 'Checking...',
        success : <b>Login Successfully...!</b>,
        error : <b>Password Not Match!</b>
      });

      loginPromise.then(res => {
        console.log(res.data)
        let { token } = res.data;
        localStorage.setItem('token', token);
        navigate('/profile')
      })
    }
  })

  if(isLoading) return (
    // <h1 className="text-2xl font-bold">isLoading</h1>
    <div id="inner" 
                  className=" flex-column align-items-center position-relative overflow-hidden bg-white p-4 border-solid">
                      
                      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="100" viewBox="0 0 960 560">
                          <polyline className="zigzag" fill="none" stroke="#000000" strokeWidth="16" strokeMiterlimit="10" points="902 245.5 762.5 141.5 623.01 245.5 483.51 141.5 344.01 245.5 204.5 141.5 65 245.5 "/>
                      </svg>
                      
              </div>
    );
  if(serverError) return <h1 className='text-xl text-red-500'>{serverError.message}</h1>

  return (
    <div style={{ backgroundColor: "#f8ddfc" }}>
    <div className="container mx-auto">

      <Toaster position='top-center' reverseOrder={false}></Toaster>

      <div className='flex justify-center items-center h-screen'>
        <div className={styles.glass}>

          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-bold'>Hello {apiData?.firstName || apiData?.username}</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              Explore More by connecting with us.
            </span>
          </div>

          <form className='py-1' onSubmit={formik.handleSubmit}>
            
              <div className='profile flex justify-center py-4'>
                  <img src={apiData?.profile || avatar} className={styles.profile_img} alt="avatar" />
              </div>

              <div className="textbox flex flex-col items-center gap-6">
                  <input {...formik.getFieldProps('password')} className={styles.textbox} type="text" placeholder='Password' />
                  <button className={styles.btn} type='submit'>Sign In</button>
              </div>

              <div className="text-center py-4">
                <span className='text-gray-500'>Forgot Password? <Link className='text-red-500' to="/recovery">Recover Now</Link></span>
              </div>

          </form>

        </div>
      </div>
    </div>
    </div>
  )
}
