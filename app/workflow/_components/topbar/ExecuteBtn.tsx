"use client";

import { Button } from '@/components/ui/button';
import { PlayIcon } from 'lucide-react';
import React from 'react'

const ExecuteBtn = ({workflowId}: {workflowId: string}) => {
  return (
    <Button variant={"outline"} className='flex irens-center gap-2'>
        <PlayIcon size={16} className='dark:stroke-white stroke-black'/>
    </Button>
  )
}

export default ExecuteBtn