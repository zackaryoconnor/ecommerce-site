const LoginSignupUI = () => {
  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-start">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{'Log in.'}</h1>
        </div>

        <form className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label 
                htmlFor="email" 
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full py-2 border-b-2 border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="me@email.com"
              />
            </div>

            <div className="pt-4">
              <label 
                htmlFor="password" 
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password *
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full py-2 border-b-2 border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="********"
              />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <button
              type="button"
              className="text-black-600 hover:underline"
            >
              Forgot your password?
            </button>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 rounded-full text-sm font-medium text-white bg-black hover:scale-[1.02] transition duration-120"
            >
              Log in
            </button>
          </div>
        </form>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <button
              type="button"
              className="text-black-600 hover:underline"
            >
              Create One Now
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignupUI