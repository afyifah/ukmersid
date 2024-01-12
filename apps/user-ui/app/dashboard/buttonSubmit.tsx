'use client'

import { Button, Input } from "@ukmersid/uikit";
import { useFormStatus } from "react-dom";
import { Loader } from 'lucide-react';

export const ButtonSubmit = () => {
    // Hook is only works in client components
    const { pending, } = useFormStatus();
    return (
        <>
            <Input name="title" placeholder="title" />
            <Input name="description" placeholder="description" />
            <Button disabled={pending} type="submit">
                {pending ? (
                    <div className="flex gap-2 items-center">
                        <Loader size={14} className="animate-spin" />
                        <p>Submitting</p>
                    </div>
                ) : ('Submit')}
            </Button>

        </>
    );
};