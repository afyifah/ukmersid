"use server"

import {prisma} from "@ukmersid/prisma"
import { revalidatePath } from "next/cache";
import { customAlphabet } from 'nanoid'

export async function createTicket(formData : FormData) {
    const title = formData.get('title');
    const description = formData.get('description');
    
    const nanoid = customAlphabet('1234567890abcdefghijklmnopqrstuvwxyz_', 13);
    const id = `dv__${nanoid()}`; //=>"4f90d13a42"
    console.log(id);

    const createNewTicket = await prisma.ticket.create({
        data:{
            id,
            title: title as string ,
            description: description as string,
            status: 'OPEN',
            priority: 'LOW',
        },
    });
    console.log(createNewTicket);
    revalidatePath('/dashboard ');

    return {
        message:'Ticket created Successfully',
        status:'success ',
    };
}
