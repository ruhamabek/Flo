import { TaskType } from "@/types/task";
import { GlobeIcon, LucideProps } from "lucide-react";

export const LaunchBrowserTask = {
    type: TaskType.LAUNCH_BROWSER,
    label: "Launch browser",
    icon: (props: LucideProps) => {
        <GlobeIcon className="  stroke-black" {...props}/>
    },
    isEntryPoint: true,
}