'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Mail } from 'lucide-react';
import emailLogin from '../_actions/email-login';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function LoginForm() {
  return (
    <Card className="mx-auto max-w-96">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Receba o Acesso pelo email</CardDescription>
        <p>A Maneira mais fácil de Entrar!</p>
      </CardHeader>
      <CardContent>
      <form action={emailLogin} className="text-center">
      <div className="space-y-6">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                name="email"
                type="email"
                id="email"
                placeholder="Email"
                required  // Torna o campo obrigatório
              />
      </div>
      </div>
  <div className="flex justify-center space-y-6">
    <Button
      size={'sm'}
      type="submit"
      className="mt-2 rounded-full pt-2 pb-2 w-25 h-25 flex items-center justify-center gap-2"
    >
      <Mail className='w-4 h-4 ' />
      Enviar Acesso </Button>
  </div>
</form>

      </CardContent>
     
    </Card>
  );
}
