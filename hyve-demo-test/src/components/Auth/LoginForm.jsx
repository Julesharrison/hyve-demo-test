import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function LoginForm(){
 const [email,setEmail]=useState('');
 const [password,setPassword]=useState('');
 const [error,setError]=useState(null);

 const handleSubmit=async(e)=>{
  e.preventDefault();
  const {error:err}=await supabase.auth.signInWithPassword({email,password});
  if(err) setError(err.message); else window.location='/dashboard';
 };
 return (
  <form onSubmit={handleSubmit}>
    {error && <p>{error}</p>}
    <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
    <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password"/>
    <button type="submit">Log In</button>
  </form>
 );
}