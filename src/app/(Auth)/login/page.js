const Login = ()=>{

    return(
        <form className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8">
  <div className="mb-6 text-center">
    <h2 className="text-2xl font-semibold text-slate-900">Welcome Back</h2>
    <p className="text-sm text-slate-500 mt-1">
      Login to manage your contacts
    </p>
  </div>

  <div className="space-y-4">
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1">
        Email
      </label>
      <input
        type="email"
        placeholder="you@example.com"
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1">
        Password
      </label>
      <input
        type="password"
        placeholder="••••••••"
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
      />
    </div>

    <div className="flex items-center justify-between text-sm">
      <label className="flex items-center gap-2 text-slate-600">
        <input
          type="checkbox"
          className="h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
        />
        Remember me
      </label>

      <button
        type="button"
        className="text-sky-600 hover:text-sky-700 font-medium"
      >
        Forgot password?
      </button>
    </div>

    <button
      type="submit"
      className="w-full rounded-xl bg-sky-600 py-3 text-white font-semibold shadow hover:bg-sky-700 active:bg-sky-800 transition"
    >
      Login
    </button>
  </div>

  <div className="mt-6 text-center text-sm text-slate-600">
    Don&apos;t have an account?{" "}
    <span className="text-sky-600 font-medium hover:text-sky-700 cursor-pointer">
      Sign up
    </span>
  </div>
</form>

    )
}

export default Login