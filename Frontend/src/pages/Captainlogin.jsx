import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Captainlogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [captainData, setCaptainData] = useState('');
    const submitHandler = (e) => {
        e.preventDefault();
        setCaptainData({ email, password }); 
        setEmail('');
        setPassword('');
    };
  return (
    
    <div className="p-7 h-screen flex flex-col justify-between">
    <div>
        <img 
            className="w-16 mb-2" 
            src="data:image/png;base64,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" 
            alt="Uber Logo"
        />
        <form onSubmit={submitHandler}>
            <h3 className="text-lg font-medium mb-2">What's your email</h3>
            <input
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                type="email"
                placeholder="email@example.com"
            />
            <h3>Enter Password</h3>
            <input
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                type="password"
                placeholder="password"
            />
            <button
                type="submit"
                className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg"
            >
                Login
            </button>
            <p className="text-center">
               Join a fleet ? <Link to="/captain-signup" className="text-blue-600">Resgister as a Captain</Link>
            </p>
        </form>
    </div>
    <div>
        <Link
            to="/login"
            className="bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg"
        >
            Sign in as User
        </Link>
    </div>
</div>
  )
}
export default Captainlogin