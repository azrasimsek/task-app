import { useState } from 'react'
import './App.css'

function App() {
  const handleLogin = () => {
    // Giriş yapma işlemi burada olacak
    alert('Giriş Yap butonuna tıklandı!');
  };

  const handleRegister = () => {
    // Kayıt olma işlemi burada olacak
    alert('Kayıt Ol butonuna tıklandı!');
  };

  return (
    <div className="welcome-container text-center p-5 flex justify-center items-center min-h-screen">
      <div className="welcome-content p-2">
        <h1 className="mt-4 text-3xl font-bold mb-[20px] text-[#9576d5]">Welcome to</h1>
        <div className="content-header flex flex-col items-center justify-center gap-2">
          <img src="/butterfly.png" alt="Butterfly" className='h-20 w-20'/>
          <p className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Task App
          </p>
        </div>
        
        <p className="welcome-description p-2">
          Use the buttons below to sign in to your task management application or create a new account.
        </p>
        <div className="form">
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-1.5 text-left">
              <label className="text-xs font-semibold text-gray-600 ml-1">Email Address</label>
              <input 
                type="email" 
                placeholder="example@mail.com"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all duration-200"
              />
            </div>

            <div className="flex flex-col gap-1.5 text-left">
              <label className="text-xs font-semibold text-gray-600 ml-1">Password</label>
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-200"
              />
            </div>

            {/* Buton Grubu */}
            <div className="flex flex-col items-center gap-3 mt-8">
              <button 
                className="w-1/2 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold rounded-xl shadow-lg hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer"
                onClick={handleLogin}
              >
                Log In
              </button>
              
              <div className="flex items-center gap-2 my-2">
                <div className="h-[1px] bg-gray-200 flex-1"></div>
                <span className="text-xs text-gray-400">OR</span>
                <div className="h-[1px] bg-gray-200 flex-1"></div>
              </div>

              <button 
                className="w-1/2 py-3 px-1 bg-white border-2 border-purple-100 text-purple-600 font-bold rounded-xl hover:bg-purple-50 transition-all mb-4 cursor-pointer"
                onClick={handleRegister}
              >
                Create New Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
