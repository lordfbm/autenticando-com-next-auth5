'use server'

import { signIn } from "@/auth"
//import { redirect } from "next/navigation"


export default async  function githublogin() {

  await signIn('github')
 
}