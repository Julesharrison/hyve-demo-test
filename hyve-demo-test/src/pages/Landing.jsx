import { useNavigate } from 'react-router-dom';

export default function Landing() {
  const navigate = useNavigate();
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'100vh'}}>
      <h1>Music Connect</h1>
      <button onClick={() => navigate('/signup-type')}>Get Started</button>
    </div>
  );
}