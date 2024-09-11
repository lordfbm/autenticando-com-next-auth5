'use client';

import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Importar useRouter para redirecionamento

export default function LoginForm() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter(); // Inicializar o useRouter

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); // Prevenir o envio padrão do formulário
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    const res = await signIn('credentials', {
      email,
      password,
      redirect: false, // Evitar o redirecionamento automático
      callbackUrl: '/', // URL para redirecionar
    });

    if (res && res.error) {
      setError('Login ou Senha inválidos');
    } else if (res && res.ok) {
      router.push('/dashboard'); // Redirecionar manualmente se a autenticação for bem-sucedida
    }
  }

  return (
    <Card className="mx-auto max-w-96">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Entre com email e senha</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="text-left" onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input name="email" type="email" id="email" placeholder="Email" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="password">Senha</Label>
              <Input
                name="password"
                type="password"
                id="password"
                placeholder="password"
                required
              />
            </div>
          </div>
          {error && (
            <p className="text-red-500 text-sm mt-8 text-center">{error}</p>
          )}
          <Button size={'lg'} type="submit" className="w-full mt-10">
            Login
          </Button>
        </form>
      </CardContent>
      <CardFooter>
        <Link
          className={cn(
            buttonVariants({ variant: 'link', size: 'sm' }),
            'mt-2 mx-auto'
          )}
          href="/register"
        >
          Não possui conta?
        </Link>
      </CardFooter>
    </Card>
  );
}
