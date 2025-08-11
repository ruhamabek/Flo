"use client";
import { cn } from '@/lib/utils';
import { useReactFlow } from '@xyflow/react';
import React, { ReactNode } from 'react'

const NodeCard = ({children , nodeId , isSelected} : {
    nodeId: string;
    isSelected: boolean;
    children: ReactNode;
}) => {
  const {getNode} = useReactFlow();

  return (
    <div onDoubleClick={() => {
          const node = getNode(nodeId);

          if(!node){
            return;
          }
          const {position , measured} = node;
          if(!position || !measured) return ;
          
          const {width , height} = measured;
          const x = position.x;
          const y = position.y;

    }}
    
    className={cn("rounded-md cursor-pointer bg-background border-2 border-separate w-[420px] text-xs gap-1 flex flex-col" , isSelected && "border-primary")}>{children}</div>
  )
}

export default NodeCard