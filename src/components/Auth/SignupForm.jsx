import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function SignupForm({ userType }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { userType } }
    });
    if (error) setError(error.message);
    else alert('Check your email to confirm sign up!');
    setLoading(false);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign up as {userType}</h2>
      {error && <p>{error}</p>}
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password"/>
      <button disabled={loading} type="submit">{loading ? 'Loading...' : 'Sign Up'}</button>
    </form>
  );
}