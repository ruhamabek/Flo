import { TaskParamsType, TaskType } from "@/types/task";
import { LucideProps, TextIcon } from "lucide-react";

export const ExtractTextFromElementTask = {
    type: TaskType.EXTRACT_TEXT_FROM_ELEMENT,
    label: "Extract text from element",
    icon: (props: LucideProps) => (
        <TextIcon className="stroke-white" {...props} />
    ),
    isEntryPoint: false,
    inputs: [
        {
            name: "Html",
            type: TaskParamsType.STRING,
            required: true,
            variant: "textarea"
         },
        {
            name: "Selector",
            type: TaskParamsType.STRING,
            required: true,
         },
    ],
    outputs: [
        {
            name: "Extracted text",
            type: TaskParamsType.STRING,
        },
 
    ]
};
