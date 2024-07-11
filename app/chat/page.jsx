'use client'

import { auth } from "@/libs/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import ChatScene from "@/components/ChatScene";


const ChatPage = () => {
  const router = useRouter();

  return (
    <div>
      <button 
      className="black_btn"
      onClick={() => {
        signOut(auth);
        router.push("/");
      }}>Sign Out</button>
      <ChatScene/>
    </div>
  );
};

export default ChatPage;
