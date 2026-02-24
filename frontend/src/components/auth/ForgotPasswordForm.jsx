// src/components/auth/ForgotPasswordForm.jsx
const ForgotPasswordForm = ({ onBack }) => {
  return (
    <div className="space-y-6">
      {/* Tiêu đề */}
      <h2 className="text-2xl font-bold text-center text-gray-900">
        Quên mật khẩu?
      </h2>

      {/* Hướng dẫn */}
      <p className="text-center text-gray-600 text-sm">
        Đừng lo, chỉ cần nhập email của bạn. Chúng tôi sẽ gửi link đặt lại mật khẩu ngay.
      </p>

      {/* Form */}
      <form className="space-y-5">
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
            Email đã đăng ký
          </label>
          <input
            id="email"
            type="email"
            placeholder="Nhập email của bạn"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 placeholder-gray-400 shadow-sm"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-black text-white py-3.5 rounded-xl font-medium text-base hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-all duration-200 shadow-md"
        >
          Gửi link đặt lại
        </button>
      </form>

      {/* Back to Login */}
      <button
        onClick={onBack}
        className="w-full text-center text-blue-600 font-medium hover:text-blue-800 hover:underline transition mt-4"
      >
        ← Quay lại đăng nhập
      </button>
    </div>
  );
};

export default ForgotPasswordForm;