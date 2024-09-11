'use client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import LoginForm from './_components/login-form';

export default function LoginPage() {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === 'authenticated') {
      // Redireciona para o dashboard se o usuário estiver autenticado
      router.push('/dashboard');
    }
  }, [status, router]);

  // Enquanto a sessão está carregando, você pode mostrar um estado de carregamento
  if (status === 'loading') {
    return <p>Carregando...</p>;
  }

  return <LoginForm />;
}
