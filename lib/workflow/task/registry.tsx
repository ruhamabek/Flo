import { WorkflowTask } from "@/types/workflow"
import { ExtractTextFromElementTask } from "./ExtractTextFromElement"
import { LaunchBrowserTask } from "./LaunchBrowser"
import { PageToHtml } from "./PageToHtml"
import { TaskType } from "@/types/task"

type Registry = {
    [K in TaskType]: WorkflowTask & {type: K};
}

const TaskRegistry: Registry = {
    LAUNCH_BROWSER: LaunchBrowserTask,
    PAGE_TO_HTML: PageToHtml,
    EXTRACT_TEXT_FROM_ELEMENT: ExtractTextFromElementTask,
}

export default TaskRegistry