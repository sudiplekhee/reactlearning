function Form({ text }) {
  return (
      <>
          <div>
              <meta charSet="UTF-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <title>Registration Form</title>
              <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full animate-fade-in">
                  <h2 className="text-2xl font-bold text-center text-indigo-800 mb-8">
                      {text === "createpage" ? "Create a page" : "Edit a page"}
                  </h2>
                  <form id="registrationForm" className="space-y-6" noValidate>
                      {text === "createpage" && (
                          <div>
                              <label htmlFor="username" className="block text-indigo-900 font-semibold mb-2">
                                  Username
                              </label>
                              <input
                                  type="text"
                                  id="username"
                                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-800 transition-all duration-300"
                                  placeholder="Enter your username"
                                  required
                              />
                              <p className="text-red-500 text-sm mt-2 hidden" id="usernameError">
                                  Username is required.
                              </p>
                          </div>
                      )}

                      <div>
                          <label htmlFor="email" className="block text-indigo-900 font-semibold mb-2">
                              Email
                          </label>
                          <input
                              type="email"
                              id="email"
                              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-800 transition-all duration-300"
                              placeholder="Enter your email"
                              required
                          />
                          <p className="text-red-500 text-sm mt-2 hidden" id="emailError">
                              Please enter a valid email.
                          </p>
                      </div>
                      <div>
                          <label htmlFor="password" className="block text-indigo-900 font-semibold mb-2">
                              Password
                          </label>
                          <input
                              type="password"
                              id="password"
                              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-800 transition-all duration-300"
                              placeholder="Enter your password"
                              required
                          />
                          <p className="text-red-500 text-sm mt-2 hidden" id="passwordError">
                              Password is required.
                          </p>
                      </div>
                      {text === "createpage" && (
                          <div>
                              <label htmlFor="confirm-password" className="block text-indigo-900 font-semibold mb-2">
                                  Confirm Password
                              </label>
                              <input
                                  type="password"
                                  id="confirm-password"
                                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-800 transition-all duration-300"
                                  placeholder="Confirm your password"
                                  required
                              />
                              <p className="text-red-500 text-sm mt-2 hidden" id="confirmPasswordError">
                                  Passwords do not match.
                              </p>
                          </div>
                      )}
                      <button
                          type="submit"
                          className="w-full bg-indigo-800 text-white py-3 rounded-lg font-semibold hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-indigo-800 focus:ring-offset-2 transition-all duration-300 transform hover:scale-[1.02]"
                      >
                          Register
                      </button>
                  </form>
                  <p className="text-center text-gray-600 mt-6">
                      Already have an account?
                      <a
                          href="https://tailwindflex.com/@nejaa-badr/login-form-12"
                          className="text-indigo-800 font-semibold hover:text-blue-900 transition-colors duration-300"
                      >
                          Sign In
                      </a>
                  </p>
              </div>
              <style dangerouslySetInnerHTML={{
                  __html: `
                      @keyframes fadeIn {
                          from { opacity: 0; transform: translateY(-10px); }
                          to { opacity: 1; transform: translateY(0); }
                      }
                      .animate-fade-in {
                          animation: fadeIn 0.5s ease-out forwards;
                      }
                  `
              }} />
          </div>
      </>
  );
}

export default Form;