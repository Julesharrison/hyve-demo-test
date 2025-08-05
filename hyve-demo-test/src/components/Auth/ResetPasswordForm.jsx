import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function ResetPasswordForm(){
 const [email,setEmail]=useState('');
 const [message,setMessage]=useState('');

 const handleReset=async(e)=>{
  e.preventDefault();
  const {error}=await supabase.auth.resetPasswordForEmail(email);
  if(error) alert(error.message); else setMessage('Check your email for reset link!');
 };
 return (
  <form onSubmit={handleReset}>
    <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
    <button type="submit">Send Reset Email</button>
    {message && <p>{message}</p>}
  </form>
 );
}