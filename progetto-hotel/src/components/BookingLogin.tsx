interface BookingLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingLoginModal: React.FC<BookingLoginModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="relative bg-white px-10 py-8 rounded-xl w-full max-w-sm shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl font-bold"
        >
          &times;
        </button>
        <form method="POST" action="#">
          <div className="space-y-4">
            <h1 className="text-center text-2xl font-semibold text-gray-600">Login</h1>
            <hr />
            <div className="flex items-center border-2 py-2 px-3 rounded-md mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none w-full"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none w-full"
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
          </div>

          <div className="flex justify-center items-center mt-4">
            <p className="inline-flex items-center text-gray-700 font-medium text-xs text-center">
              <input
                type="checkbox"
                id="rememberMeCheckbox"
                name="rememberMe"
                className="mr-2"
              />
              <span className="text-xs font-semibold">Remember me?</span>
            </p>
          </div>

          <button
            type="submit"
            className="mt-6 w-full shadow-xl bg-gradient-to-tr from-blue-600 to-red-400 hover:to-red-700 text-indigo-100 py-2 rounded-md text-lg tracking-wide transition duration-1000"
          >
            Login
          </button>
          <hr />
          <div className="flex justify-center items-center mt-4">
            <p className="inline-flex items-center text-gray-700 font-medium text-xs text-center">
              <span className="ml-2">
                You don't have an account?
                <a
                  href="#"
                  className="text-xs ml-2 text-blue-500 font-semibold"
                >
                  Register now &rarr;
                </a>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingLoginModal;
