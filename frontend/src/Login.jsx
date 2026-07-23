function Login({ onLogin }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="bg-slate-800 p-8 rounded-xl shadow-lg w-96">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Global Retail Analytics
        </h1>

        <p className="text-gray-400 text-center mb-6">
          Sign in to your account
        </p>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded-lg bg-slate-700 text-white outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 rounded-lg bg-slate-700 text-white outline-none"
        />

        <button
  onClick={onLogin}
  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
>
  Login
</button>

        <p className="text-center text-gray-400 mt-6">
          Don't have an account?
          <span className="text-blue-400 cursor-pointer"> Create Account</span>
        </p>
      </div>
    </div>
  );
}

export default Login;