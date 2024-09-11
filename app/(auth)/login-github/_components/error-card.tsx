'use client';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,

}from '@/components/ui/card';
import { Button, buttonVariants} from '@/components/ui/button';

import Link from 'next/link';
import { cn }from '@/lib/utils';
import { CircleX } from 'lucide-react';
export default function ErrorCard({
    errorMessage,
    reset,
}:{
    errorMessage: string;
    reset: () => void;
}) {
    return (
        <>
        <Card className="mx-auto max-w-96 border-red-700">
            <CardHeader>
                <CardTitle className="flex intens-center justify-center ">
                    <CircleX />
                    Ops...
                </CardTitle>
                <CardDescription>Ocorreu um Erro</CardDescription>
            
            </CardHeader>
            <CardContent className="underline">{ errorMessage}</CardContent>
            <CardFooter className="flex justify-center">
                <Button variant={'outline'} onClick={reset}>
                    Tentar Novamente?
                </Button>
            </CardFooter>

        </Card>
        <Link className={cn(buttonVariants({ variant: 'link'}), 'mt-8')}
        href={"/"}> Home</Link>
        </>
    );

}