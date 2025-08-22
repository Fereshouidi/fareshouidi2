'use client';
import { backendServer } from '@/constents';
import { ContactForm } from '@/types';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { StatusBannerContext } from '@/contexts';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Contact = () => {

  const setStatusBanner = useContext(StatusBannerContext)?.setStatusBanner;
  const [loading, setLoading] = useState<boolean>(false);

  const [form, setForm] = useState<ContactForm>({
    fullName: '',
    email: '',
    title: '',
    summary: ''
  });

  // useEffect(() => { 
  //   console.log({form});
    
  // }, [form])

  const handleSubmit = async () => {

    if (!form.email || !form.title) {
      setStatusBanner && setStatusBanner(true, 'both of your email and your idea are required', 'exclamation');
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post(backendServer + '/createNewWorkRequest', { 
        title: form.title, 
        summary: form.summary, 
        client: {
          email: form.email,
          fullName: form.fullName,
          token: localStorage.getItem('clientToken')
        } 
      });

      if (res.status === 201) {
        console.log(res?.data?.client?.token);
        localStorage.setItem('clientToken', res?.data?.client?.token)
        setStatusBanner && setStatusBanner(true, "Your request has been sent to Fares and is now being processed. You’ll receive a response from Fares soon 😊", "success");
        
      } else {
        setStatusBanner && setStatusBanner(true, "something went wrong !", "exclamation");
      }
      setLoading(false);

    } catch (err) {
      console.error(err);
      setStatusBanner && setStatusBanner(true, "something went wrong !", "exclamation");
      setLoading(false);
    }
  };


  return (
    <div id='contact' className={`w-full flex flex-col items-center sm:px-[70px] `}>

      <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
          Contact Me
      </h1>

      <div className='w-full p-5 sm:p-15 z-20 flex flex-col sm:flex-row gap-5 justify-center flex-wrap text-white mb-20'>

        <div className='flex flex-1 flex-col gap-2 rounded-sm'>
          <h4 className='ml-2'>Full Name</h4>
          <input 
            type="text" 
            placeholder='Full Name...'
            className='w-full h-14 bg-gradient-to-r from-purple-950/50 to-cyan-950/50 px-5 py-2 outline-0 rounded-sm'
            onChange={(e) => setForm({
              ...form,
              fullName: e.target.value
            })}
          />
        </div>

        <div className='flex flex-1 flex-col gap-2 rounded-sm'>
          <h4 className='ml-2'>email</h4>
          <input 
            type="text" 
            placeholder='email...'
            className='w-full h-14 bg-gradient-to-r from-purple-950/50 to-cyan-950/50 px-5 py-2 outline-0 rounded-sm'
            onChange={(e) => setForm({
              ...form,
              email: e.target.value
            })}
          />
        </div>

        <div className='flex flex-1 flex-col gap-2 rounded-sm'>
          <h4 className='ml-2'>your idea</h4>
          <input 
            type="text" 
            placeholder='your idea that you want to make it real...'
            className='w-full h-14 bg-gradient-to-r from-purple-950/50 to-cyan-950/50 px-5 py-2 outline-0 rounded-sm'
            onChange={(e) => setForm({
              ...form,
              title: e.target.value
            })}
          />
        </div>

        <div className='flex w-full h-50 flex-col gap-2 rounded-sm'>
          <h4 className='ml-2'>Short paragraph</h4>
          <textarea 
            placeholder='Short paragraph to discribe your idea...'
            className='bg-gradient-to-r from-purple-950/50 to-cyan-950/50 rounded-sm px-5 py-2 outline-0 w-full h-full'
            onChange={(e) => setForm({
              ...form,
              summary: e.target.value
            })}
          />
        </div>

        <button 
          className='
            bg-[linear-gradient(to_bottom,rgb(168,85,247,0.7),rgb(6,182,212,0.7))] opacity-80
            hover:bg-[linear-gradient(to_top,rgb(168,85,247,0.7),rgb(6,182,212,0.7))] hover:opacity-100
            rounded-sm flex justify-center items-center mt-10 w-full h-14 cursor-pointer
          '
          onClick={handleSubmit}
        >
          
          {loading ?    
            <DotLottieReact
              src="loading.json"
              autoplay
              loop
              className='w-20 h-20'
            /> :
            <h5 className=''>submit</h5>
          }
        </button>

      </div>
      


    </div>
  )
}

export default Contact;
