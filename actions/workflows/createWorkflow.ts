"use server";

import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { createWorkflowSchema, createWorkflowtype } from "@/schema/workflow";
import { WorkflowStatus } from "@/types/workflow";
import { headers } from "next/headers";
import { z } from "zod";

export async function CreateWorkflow(
    form: createWorkflowtype
) {
    const {success , data} = createWorkflowSchema.safeParse(form);
           
    if(!success){
        throw new Error("invalid form data");
    }

    const session = await auth.api.getSession({
        headers: await headers()
    })    
     
    const userId = session?.user.id;

    if(!userId){
        throw new Error("unauthenticated");
    }

    const result = await prisma.workflow.create({
        data:{
            userId,
            status: WorkflowStatus.DRAFT,
            definition: "TODO",
            description:"",
            ...data,
        },
    });

    if(!result){
        throw new Error("Failed to create workflow");
    }
     
    return result;
}