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
import githubLogin from '../_actions/githubLogin';
import { SiGithub } from '@icons-pack/react-simple-icons';

export default function LoginForm() {
  return (
    <Card className="mx-auto max-w-96">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Entre com o GitHub</CardDescription>
      </CardHeader>
      <CardContent>
      <form action={githubLogin} className="text-center">
  <div className="flex justify-center space-y-6">
    <Button
      size={'sm'}
      type="submit"
      className="rounded-full pt-2 pb-2 w-25 h-25 flex items-center justify-center"
    >
      <SiGithub size={60} /> {/* Ajuste do tamanho do ícone */}
    </Button>
  </div>
</form>

      </CardContent>
      <CardFooter>
        
      </CardFooter>
    </Card>
  );
}
