'use server';

import db from "@/lib/db";
import { hashSync } from "bcrypt-ts";
import { redirect } from "next/navigation"; // Alterado para usar o redirecionamento correto do Next.js

export default async function register(FormData: FormData) {
    const name = FormData.get('name') as string;
    const email = FormData.get('email') as string;
    const password = FormData.get('password') as string;

    if (!name || !email || !password) {
        throw new Error('Preencha todos os Campos');
    }

    const user = await db.user.findUnique({
        where: {
            email: email
        }
    });
    
    if (user) {
        throw new Error('Esse usuario já existe');
    }
    
    await db.user.create({
        data: {
            email: email,
            name: name,
            password: hashSync(password)
        }
    });

    // Redireciona para a página inicial
    redirect("/"); // Usar a nova API de redirecionamento
}
