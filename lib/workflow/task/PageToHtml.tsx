import { TaskParamsType, TaskType } from "@/types/task";
import { CodeIcon, GlobeIcon, LucideProps } from "lucide-react";

export const PageToHtml = {
    type: TaskType.PAGE_TO_HTML,
    label: "Get html from page",
    icon: (props: LucideProps) => (
        <CodeIcon className="stroke-white" {...props} />
    ),
    isEntryPoint: false,
    inputs: [
        {
            name: "Web page",
            type: TaskParamsType.BROWSER_INSTANCE,
            required: true,
         }
    ],
    outputs: [
        {
            name: "Html",
            type: TaskParamsType.STRING,
        },
        {
            name: "Web page",
            type: TaskParamsType.BROWSER_INSTANCE,
        }
    ]
};
