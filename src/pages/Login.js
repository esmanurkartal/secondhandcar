import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div className="flex-1 w-full mb-8 bg-white border border-gray-300 rounded-lg px-6 py-8">
        <form className="flex flex-col gap-y-4">
          <label>Ad Soyad</label>
          <input
            className="border border-gray-300 focus:border-violet-700 rounded w-full px-4 h-14 text-sm outline-none"
            type="text"
            placeholder="Ad Soyad*"
          />

          <label>Email</label>
          <input
            className="border border-gray-300 focus:border-violet-700 rounded w-full px-4 h-14 text-sm outline-none"
            type="email"
            placeholder="Email*"
          />

          <label>Şifre</label>
          <input
            className="border border-gray-300 focus:border-violet-700 rounded w-full px-4 h-14 text-sm outline-none"
            type="password"
            placeholder="Şifre*"
          />

          <label>Şifreni Doğrula</label>
          <input
            className="border border-gray-300 focus:border-violet-700 rounded w-full px-4 h-14 text-sm outline-none"
            type="password"
            placeholder="Şifreni Doğrula*"
          />
          <div className="flex gap-x-2">
            <button onClick='/'
              className="bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition"
              type="submit"
            >
              Giriş Yap
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default Login;