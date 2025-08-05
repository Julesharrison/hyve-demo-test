import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignupForm from '../components/Auth/SignupForm';

export default function SelectUserType() {
  const [type, setType] = useState(null);
  const navigate = useNavigate();

  if (type) return <SignupForm userType={type} />;

  return (
    <div>
      <button onClick={() => setType('supporter')}>Sign up as Supporter</button>
      <button onClick={() => setType('artist')}>Sign up as Artist</button>
      <button onClick={() => setType('promoter')}>Sign up as Promoter</button>
      <button onClick={() => navigate('/')}>Back</button>
    </div>
  );
}