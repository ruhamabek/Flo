import { auth } from '@/lib/auth';
import prisma from '@/lib/prisma';
import { headers } from 'next/headers';
import React from 'react'
 
const page = async ({params}: {params: {workflowId : string}}) => {
    const {workflowId} = await params; 
     const session = await auth.api.getSession({
        headers: await headers()
    })  

    const userId = session?.user.id;

    if(!userId) return <div>unauthenticated</div>

    const workflow = await prisma.workflow.findUnique({
        where: {
            id: workflowId,
            userId
         }
    })
     
    if(!workflow){
        return <div>Workflow not found.</div>
    }

  return (
    <pre>{JSON.stringify(workflow , null , 4)}</pre>
  )
}

export default page