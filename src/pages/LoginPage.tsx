import { useState } from "react";
import { toast } from "react-toastify";
// import HomePage from "./HomePage";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
   const [phone, setPhone] = useState("");
   const [password, setPassword] = useState("");

   const navigate = useNavigate();

   const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      fetch("https://autoapi.dezinfeksiyatashkent.uz/api/auth/signin", {
         method: "POST",
         headers: {
            "Content-Type": "application/json; charset=utf-8",
         },
         body: JSON.stringify({
            phone_number: phone,
            password: password,
         }),
      })
         .then((response) => response.json())
         .then((result) => {
            if (result.success) {
               navigate("/home");
               localStorage.setItem(
                  "token",
                  result.data.tokens.accessToken.token
               );
               console.log();
               toast.success(result.message);
            } else {
               toast.error(result.message);
            }
         })
         .catch((error) => toast.error(error.message));

      console.log(phone, password);
   };

   return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
         <form
            onSubmit={formSubmit}
            className="bg-gray-800/80 backdrop-blur-lg p-8 rounded-xl shadow-2xl w-96 border border-gray-700/50 transform transition-all duration-300 hover:shadow-purple-500/10 hover:border-purple-500/20"
         >
            <h2 className="text-white text-2xl font-bold mb-8 tracking-tight">
               Login
            </h2>

            <div className="space-y-6">
               <input
                  onChange={(e) => setPhone(e.target.value)}
                  type="text"
                  placeholder="Phone"
                  className="w-full p-3.5 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 outline-none transition-all duration-300 hover:bg-gray-700/70 hover:border-purple-500/30 hover:shadow-md focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 focus:shadow-lg focus:shadow-purple-500/20 focus:bg-gray-700/90"
               />

               <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                  className="w-full p-3.5 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 outline-none transition-all duration-300 hover:bg-gray-700/70 hover:border-purple-500/30 hover:shadow-md focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 focus:shadow-lg focus:shadow-purple-500/20 focus:bg-gray-700/90"
               />

               <button
                  type="submit"
                  className="w-full p-3.5 bg-purple-600 text-white rounded-lg font-medium
                           transform transition-all duration-200 ease-out
                           hover:bg-purple-500 hover:shadow-lg hover:shadow-purple-500/25
                           active:scale-[0.98] active:duration-75
                           focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
                           focus:ring-offset-gray-800"
               >
                  Login
               </button>
            </div>
         </form>
      </div>
   );
}
