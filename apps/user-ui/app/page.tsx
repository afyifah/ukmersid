import { Button } from "@ukmersid/uikit";
import { prisma } from "libs/prisma/src/lib/prisma";


export default async function Index() {
 const ticket = await prisma.ticket.findMany();

 console.log(ticket);
 
return (
    <div>
    <Button>Primary</Button>
    <Button variant="secondary">Secondary</Button>
    </div>
    );
}
