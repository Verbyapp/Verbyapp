import { useState } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../../lib/firebase';
import { useNavigate } from 'react-router-dom';
import MainNavbar from '../../components/MainNavbar';
import { Zap } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError('');
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/profile');
    } catch {
      setError("Authentication failed. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen font-mono bg-[#F0EFEB] text-[#333333]">
      <MainNavbar />
      
      <div className="max-w-md mx-auto px-6 py-20">
        <div className="text-center mb-10">
          <div className="w-16 h-16 rounded-lg bg-[#EB3514] flex items-center justify-center mx-auto mb-6">
            <Zap size={32} className="text-white" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Welcome to Verby</h1>
          <p className="text-sm text-gray-500">Sign in to track your progress and compete</p>
        </div>

        <div className="bg-white border border-[#DEDDDA] rounded-lg p-8">
          <button
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 bg-white border border-[#DEDDDA] rounded-lg py-3 px-4 hover:bg-[#F0EFEB] hover:border-[#333333] transition-all disabled:opacity-50"
          >
            <img 
              src="https://www.svgrepo.com/show/355037/google.svg" 
              className="w-5 h-5" 
              alt="Google" 
            />
            <span className="text-sm font-bold">
              {loading ? 'Signing in...' : 'Continue with Google'}
            </span>
          </button>

          {error && (
            <div className="mt-4 bg-red-50 border border-red-200 text-red-600 p-3 rounded-lg text-sm text-center">
              {error}
            </div>
          )}
        </div>

        <p className="text-xs text-gray-400 text-center mt-8">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Login;
