"use client"
import { authClient } from "@/lib/auth-client";

export default function SignUp() {

  const signUpWithGoogle = async () => {
    const { data, error } = await authClient.signIn.social({ provider: 'google' });
    if (error) {
      alert(error.message);
    } else {
      // redirect to the dashboard
    }
  };

  const signUpWithReddit = async () => {
    const { data, error } = await authClient.signIn.social({ provider: 'reddit' });
    if (error) {
      alert(error.message);
    } else {
      // redirect to the dashboard
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen h-full">
      <button className="border p-2 bg-white text-black rounded-md hover:bg-white/80 hover:scale-105 duration-300 transition-all" onClick={signUpWithGoogle}>Sign Up with Google</button>
      <button className="border p-2 bg-white text-black rounded-md hover:bg-white/80 hover:scale-105 duration-300 transition-all" onClick={signUpWithReddit}>Sign Up with Reddit</button>
    </div>
  );
}