"use client";

import { Workflow } from '@prisma/client';
import { Background, BackgroundVariant, Controls, ReactFlow, useEdgesState, useNodesState } from '@xyflow/react';
import React from 'react'
import "@xyflow/react/dist/style.css"
import { CreateFlowNode } from '@/lib/workflow/creatFlowNode';
import { TaskType } from '@/types/task';
import NodeComponent from './nodes/NodeComponent';

const nodeTypes = {
  FloNode: NodeComponent,
}

const snapGrid: [number , number] = [50 , 50];
const fitViewOptions = { padding : 2}

const FlowEditor = ({workflow} : {workflow: Workflow}) => {
    const[nodes , setNodes , onNodesChange] = useNodesState([
       CreateFlowNode(TaskType.LAUNCH_BROWSER)
    ]);
    
    const [edges , setEdges , onEdgesChange] = useEdgesState([]);

  return (
    <main className='w-full h-full'>
        <ReactFlow
           nodes={nodes}
           edges={edges}
           onEdgesChange={onEdgesChange}
           onNodesChange={onNodesChange}
           nodeTypes={nodeTypes}
           snapToGrid={true}
           snapGrid={snapGrid}
           fitView
           fitViewOptions={fitViewOptions}
        >
               <Controls position='top-left' className='text-black' fitViewOptions={fitViewOptions}/>
               <Background variant={BackgroundVariant.Dots} gap={12} size={2 }/>
        </ReactFlow>
    </main>
  )
}

export default FlowEditor