import { supabase } from '../lib/supabaseClient';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location = '/';
  };

  return (
    <div>
      <h1>Welcome {user?.email}</h1>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
}