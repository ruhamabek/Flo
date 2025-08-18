"use client";

import { BaseEdge, EdgeProps, getSmoothStepPath } from "@xyflow/react";

export default function DeletableEdge(props: EdgeProps){
    const [edgePath] = getSmoothStepPath(props);

    return( <>
       <BaseEdge path={edgePath} markerEnd={props.markerEnd} style={props.style}/>
     </>)
}