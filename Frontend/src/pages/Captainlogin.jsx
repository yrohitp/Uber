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
    <img className='w-20 mb-3' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />

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