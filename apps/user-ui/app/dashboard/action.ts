"use server"

import {prisma} from "@ukmersid/prisma"

export async function createTicket(formData : FormData) {
    const title = formData.get('title');
    const description = formData.get('description');
    
    const createNewTicket = await prisma.ticket.create({
        data:{
            id:'2',
            title: title as string ,
            description: description as string,
            status: 'OPEN',
            priority: 'LOW',
        },
    });
    console.log(createNewTicket);
}
