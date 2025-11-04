import React from 'react'

const SignIn = ({ setsignInClicked }) => {
  return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setShowSignIn(false)}>
          <div className="bg-gradient-to-br from-purple-900/95 to-blue-900/95 backdrop-blur-xl rounded-3xl p-8 max-w-md w-full border border-white/20 shadow-2xl transform transition-all" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-center mb-6">
                  <h2 className="text-3xl font-bold text-white">Welcome Back</h2>
                  <button onClick={setsignInClicked} className="text-white/60 hover:text-white text-2xl">×</button>
              </div>

              <div className="space-y-4 mb-6">
                  <div>
                      <label className="block text-purple-200 mb-2 text-sm font-medium">Email</label>
                      <input
                          type="email"
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 outline-none focus:border-purple-400 focus:bg-white/20 transition-all"
                      />
                  </div>

                  <div>
                      <label className="block text-purple-200 mb-2 text-sm font-medium">Password</label>
                      <input
                          type="password"
                          placeholder="••••••••"
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 outline-none focus:border-purple-400 focus:bg-white/20 transition-all"
                      />
                  </div>
              </div>

              <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg mb-4">
                  Sign In
              </button>

              <div className="text-center">
                  <a href="#" className="text-purple-300 hover:text-purple-200 text-sm">Forgot password?</a>
                  <p className="text-purple-200 text-sm mt-4">
                      Don't have an account? <a href="#" className="text-white font-semibold hover:text-purple-300">Sign up</a>
                  </p>
              </div>
          </div>
      </div>
  )
}

export default SignIn
