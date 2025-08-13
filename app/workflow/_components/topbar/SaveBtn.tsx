"use client";

import { Button } from '@/components/ui/button';
import { IconCheck } from '@tabler/icons-react';
import { useReactFlow } from '@xyflow/react';
import React from 'react'

const SaveBtn = ({workflowId} : {workflowId: string}) => {
    const { toObject } = useReactFlow();

  return (
    <Button variant={"outline"} className='flex items-center gap-2' onClick={()=>{
        
    }}>
        <IconCheck size={16} className='stroke-white'/>
        Save
    </Button>
  )
}

export default SaveBtn