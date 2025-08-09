"use client";

import React, { useState } from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
 } from "@/components/ui/alert-dialog"
import { AlertDescription } from '@/components/ui/alert';
import { Input } from '@/components/ui/input';
import { AlertDialogCancel } from '@radix-ui/react-alert-dialog';

interface Props{
  open: boolean;
  setOpen: (open: boolean) => void;
  workflowName: string;
}

const DeleteWorkflowsDialog = ({open, setOpen, workflowName}: Props) => {
      const [confirmText, setConfirmText] = useState("");
  
  return (
           <AlertDialog open={open} onOpenChange={setOpen}> 
                      <AlertDialogContent>
                           <AlertDialogHeader>
                               <AlertDialogTitle>
                                   Are you sure?
                               </AlertDialogTitle>
                               <AlertDescription>
                                    If you delete this workflow, you will not be able to recover it.
                                    <p>
                                       If you are sure, enter <b>{workflowName}</b> to confirm:
                                    </p>
                                    <Input 
                                         value={confirmText}
                                         onChange={(e) => setConfirmText(e.target.value)}
                                    />
                               </AlertDescription>
                           </AlertDialogHeader>
                           <AlertDialogFooter>
                                 <AlertDialogCancel>
                                       Cancel
                                  </AlertDialogCancel> 
                                  <AlertDialogAction disabled={confirmText !== workflowName} className='bg-destructive text-destructive-foreground hover:bg-destructive/90'>
                                           Delete
                                  </AlertDialogAction>
                           </AlertDialogFooter>
                      </AlertDialogContent>
           </AlertDialog>
  )
}

export default DeleteWorkflowsDialog