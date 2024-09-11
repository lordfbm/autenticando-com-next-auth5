'use server'

import { signIn } from "@/auth"
//import { redirect } from "next/navigation"


export default async  function emailLogin(FormData: FormData) {
  const email = FormData.get('email') as string;

  await signIn('nodemailer', {email});
 
}