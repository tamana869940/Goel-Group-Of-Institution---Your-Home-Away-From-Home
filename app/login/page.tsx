import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FiMail, FiLock } from "react-icons/fi";

export default function Login() {
  return ( 
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white px-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Auth Tabs */}
        <div className="flex">
          <Link
            href="/login"
            className="flex-1 py-4 text-center text-lg font-semibold text-blue-600 border-b-4 border-blue-600 transition-all"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="flex-1 py-4 text-center text-lg font-semibold text-gray-500 hover:text-blue-600 transition-all"
          >
            Sign Up
          </Link>
        </div>

        {/* Login Form */}
        <div className="p-8">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
            <p className="text-gray-600">Log in to access your account</p>
          </div>

          {/* Email Login Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <div className="relative mt-1">
                <FiMail className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="email"
                  className="w-full pl-10 pr-3 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <div className="relative mt-1">
                <FiLock className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="password"
                  className="w-full pl-10 pr-3 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <div className="flex justify-between items-center">
              <label className="flex items-center text-sm text-gray-700">
                <input type="checkbox" className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded" />
                Remember me
              </label>
              <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </Link>
            </div>

            <button className="w-full py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-medium shadow-md transition">
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-2 bg-white text-gray-500 text-sm">or continue with</span>
            </div>
          </div>

          {/* Social Login */}
          <div className="flex gap-4">
            <button className="w-full flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
              <FcGoogle className="text-xl" />
              <span className="text-sm font-medium">Google</span>
            </button>
            <button className="w-full flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
              <FaFacebook className="text-xl text-blue-600" />
              <span className="text-sm font-medium">Facebook</span>
            </button>
          </div>

          {/* Signup Link */}
          <p className="mt-6 text-center text-gray-600">
            Don't have an account?{" "}
            <Link href="/signup" className="text-blue-600 font-medium hover:underline">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
