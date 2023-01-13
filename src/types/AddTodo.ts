import { FormEvent } from "react";

export interface AddTodo {
    handleAddTdodo: (e: FormEvent<HTMLFormElement>) => void
}