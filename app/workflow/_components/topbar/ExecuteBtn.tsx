"use client";

import useExecutionPlan from '@/components/hooks/useExecutionPlan';
import { Button } from '@/components/ui/button';
import { PlayIcon } from 'lucide-react';
import React from 'react'

const ExecuteBtn = ({workflowId}: {workflowId: string}) => {
  const generate = useExecutionPlan();

  return (
    <Button variant={"outline"} className='flex irens-center gap-2' onClick={() => {
      const plan = generate();
      console.log("====plan====");
      console.table(plan);
    }}>
        <PlayIcon size={16} className='dark:stroke-white stroke-black'/>
    </Button>
  )
}

export default ExecuteBtn