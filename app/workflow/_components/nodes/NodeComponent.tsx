import { NodeProps } from '@xyflow/react';
import React, { memo } from 'react';
import NodeCard from './NodeCard';
import NodeHeader from './NodeHeader';
import { AppNodeData } from '@/types/appNode';
import TaskRegistry from '@/lib/workflow/task/registry';
import NodeInputs, { NodeInput } from './NodeInputs';

const NodeComponent = memo((props: NodeProps) => {
    const nodeData = props.data as AppNodeData;
    const task = TaskRegistry[nodeData.type];

    return (
        <NodeCard nodeId={props.id} isSelected={props.selected}>
            <NodeHeader taskType={nodeData.type} />
            <NodeInputs>
                {task.inputs.map((input, index) => (
                    <NodeInput key={input.name} input={input} />
                ))}
            </NodeInputs>
        </NodeCard>
    );
});

NodeComponent.displayName = 'NodeComponent';

export default NodeComponent;
