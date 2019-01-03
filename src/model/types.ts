
export interface Task {
    name: String,
    position: number
}


export interface TaskList {
    name: String,
    tasks: Task[]
}