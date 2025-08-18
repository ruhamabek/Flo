"use client";

import { Workflow } from '@prisma/client';
import { Background, BackgroundVariant, Controls, ReactFlow, useEdgesState, useNodesState, useReactFlow } from '@xyflow/react';
import React, { useCallback, useEffect } from 'react'
import "@xyflow/react/dist/style.css"
import { CreateFlowNode } from '@/lib/workflow/creatFlowNode';
import { TaskType } from '@/types/task';
import NodeComponent from './nodes/NodeComponent';
import { AppNode } from '@/types/appNode';
 
const nodeTypes = {
  FloNode: NodeComponent,
}

const snapGrid: [number , number] = [50 , 50];
const fitViewOptions = { padding : 2}

const FlowEditor = ({workflow} : {workflow: Workflow}) => {
    const[nodes , setNodes , onNodesChange] = useNodesState<AppNode>([]);
    const [edges , setEdges , onEdgesChange] = useEdgesState([]);
    const {setViewport , screenToFlowPosition} = useReactFlow();
    
    useEffect(() => {
         try{
            const flow = JSON.parse(workflow.definition);
            if(!flow) return;
            setNodes(flow.nodes || []);
            setEdges(flow.edges || []);
            if(!flow.viewport){
                const {x = 0, y = 0 , zoom = 1} = flow.viewport;
                setViewport({x , y , zoom});;
            }
         }catch(error){

         }
    }, [workflow.definition, setEdges , setNodes , setViewport]);

    const onDragOver = useCallback((event: React.DragEvent) => {
      event.preventDefault();
      event.dataTransfer.dropEffect = "move";
    } , []);
    
    const onDrop= useCallback((event: React.DragEvent) => {
      event.preventDefault();
      const taskType = event.dataTransfer.getData("application/reactflow");
      if(typeof taskType === undefined || !taskType) return;
      
      const position = screenToFlowPosition({
         x: event.clientX,
         y: event.clientY,
      });

      const newNode = CreateFlowNode(taskType as TaskType , position);

      setNodes((nds) => nds.concat(newNode))
    } , []);

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
           onDragOver={onDragOver}
           onDrop={onDrop}
        >
               <Controls position='top-left' className='text-black' fitViewOptions={fitViewOptions}/>
               <Background variant={BackgroundVariant.Dots} gap={12} size={2 }/>
        </ReactFlow>
    </main>
  )
}

export default FlowEditor