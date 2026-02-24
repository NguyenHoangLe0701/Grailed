// src/components/auth/RegisterForm.jsx
const RegisterForm = ({ onLogin }) => {
  return (
    <div className="space-y-6">
      {/* Tiêu đề */}
      <h2 className="text-2xl font-bold text-center text-gray-900">
        Tạo tài khoản Grailed
      </h2>

      {/* Form */}
      <form className="space-y-5">
        {/* Username */}
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1.5">
            Tên người dùng
          </label>
          <input
            id="username"
            type="text"
            placeholder="Chọn tên người dùng"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 placeholder-gray-400 shadow-sm"
          />
        </div>

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
            placeholder="Tạo mật khẩu (ít nhất 8 ký tự)"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 placeholder-gray-400 shadow-sm"
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1.5">
            Xác nhận mật khẩu
          </label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Nhập lại mật khẩu"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 placeholder-gray-400 shadow-sm"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-black text-white py-3.5 rounded-xl font-medium text-base hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-all duration-200 shadow-md"
        >
          Tạo tài khoản
        </button>
      </form>

      {/* Link to Login */}
      <p className="text-center text-sm text-gray-600 mt-6">
        Đã có tài khoản?{' '}
        <button
          onClick={onLogin}
          className="text-black font-medium hover:underline transition"
        >
          Đăng nhập ngay
        </button>
      </p>

      {/* Checkbox điều khoản (thêm để chuyên nghiệp hơn) */}
      <p className="text-xs text-center text-gray-500 mt-4">
        Bằng cách đăng ký, bạn đồng ý với{' '}
        <a href="#" className="text-blue-600 hover:underline">
          Điều khoản dịch vụ
        </a>{' '}
        và{' '}
        <a href="#" className="text-blue-600 hover:underline">
          Chính sách bảo mật
        </a>
        .
      </p>
    </div>
  );
};

export default RegisterForm;