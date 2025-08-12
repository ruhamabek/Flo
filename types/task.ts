 
export enum TaskType{
    LAUNCH_BROWSER = "LAUNCH_BROWSER",
}

export enum TaskParamsType {
    STRING = "STRING"
}

export interface TaskParam{
    name: string;
    type: TaskParamsType;
    helperText?: string;
    required?: boolean;
    hideHandle?: boolean;
    [key: string] : any;
}