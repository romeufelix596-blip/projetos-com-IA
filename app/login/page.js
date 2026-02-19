"use client"
import { useState } from "react"
import { supabase } from "../../lib/supabaseClient"

export default function Login() {
  const [email, setEmail] = useState("")

  const handleLogin = async () => {
    await supabase.auth.signInWithOtp({ email })
    alert("Verifique seu email para login.")
  }

  return (
    <div style={{textAlign:"center",marginTop:"100px"}}>
      <h2>Login</h2>
      <input 
        type="email" 
        placeholder="Seu email"
        onChange={(e)=>setEmail(e.target.value)}
      />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  )
}