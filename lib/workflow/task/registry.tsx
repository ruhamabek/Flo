import { ExtractTextFromElementTask } from "./ExtractTextFromElement"
import { LaunchBrowserTask } from "./LaunchBrowser"
import { PageToHtml } from "./PageToHtml"

const TaskRegistry = {
    LAUNCH_BROWSER: LaunchBrowserTask,
    PAGE_TO_HTML: PageToHtml,
    EXTRACT_TEXT_FROM_ELEMENT: ExtractTextFromElementTask,
}

export default TaskRegistry