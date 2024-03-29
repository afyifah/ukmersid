import { createTicket } from "./action";
import { prisma } from "@ukmersid/prisma";
import { ButtonSubmit } from "./buttonSubmit";

export default async function Index() {
    const tickets = await prisma.ticket.findMany();

    return (
        <main className="flex justify-center items-center h-screen">
            <div className="w-[300px] space-y-2">
                <form action={createTicket}>
                    <ButtonSubmit />
                </form>
                <div>{tickets.map((ticket) => {
                    return <div key={ticket.id}>{ticket.title}</div>
                })}</div>
            </div>
        </main>
    )
}