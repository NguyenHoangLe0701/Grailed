// src/components/auth/LoginForm.jsx
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa'; // Dùng FaFacebookF để icon gọn hơn

const LoginForm = ({ onForgot }) => {
  return (
    <div className="space-y-6">
      {/* Tiêu đề */}
      <h2 className="text-2xl font-bold text-center text-gray-900">
        Đăng nhập vào Grailed
      </h2>

      {/* Social Login Buttons - nổi bật, dễ click */}
      <div className="space-y-3">
        <button
          type="button"
          className="w-full flex items-center justify-center gap-3 py-3.5 px-4 border border-gray-300 rounded-xl hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-all duration-200 shadow-sm"
        >
          <FcGoogle className="w-6 h-6" />
          <span className="font-medium text-gray-700">Tiếp tục với Google</span>
        </button>

        <button
          type="button"
          className="w-full flex items-center justify-center gap-3 py-3.5 px-4 border border-gray-300 rounded-xl hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 transition-all duration-200 shadow-sm"
        >
          <FaFacebookF className="w-6 h-6 text-blue-600" />
          <span className="font-medium text-gray-700">Tiếp tục với Facebook</span>
        </button>
      </div>

      {/* Divider */}
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-white text-gray-500 font-medium">hoặc đăng nhập bằng email</span>
        </div>
      </div>

      {/* Form email/password */}
      <form className="space-y-5">
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Nhập email của bạn"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 placeholder-gray-400 shadow-sm"
          />
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1.5">
            Mật khẩu
          </label>
          <input
            id="password"
            type="password"
            placeholder="Nhập mật khẩu"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 placeholder-gray-400 shadow-sm"
          />
        </div>

        {/* Forgot password + Remember me */}
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
            />
            <span className="ml-2 text-gray-600">Ghi nhớ đăng nhập</span>
          </label>

          <button
            type="button"
            onClick={onForgot}
            className="text-blue-600 font-medium hover:text-blue-800 hover:underline transition"
          >
            Quên mật khẩu?
          </button>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-black text-white py-3.5 rounded-xl font-medium text-base hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-all duration-200 shadow-md"
        >
          Đăng nhập
        </button>
      </form>

      {/* Link to Register */}
      <p className="text-center text-sm text-gray-600 mt-6">
        Chưa có tài khoản?{' '}
        <button className="text-black font-medium hover:underline transition">
          Đăng ký ngay
        </button>
      </p>
    </div>
  );
};

export default LoginForm;