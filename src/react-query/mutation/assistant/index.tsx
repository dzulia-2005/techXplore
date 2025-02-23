import { useMutation } from "@tanstack/react-query"
import { acceptTerm, assistant } from "../../../api/assistant"

export const useAcceptTerm = () => {
    return useMutation({
        mutationKey:["acceptTerm"],
        mutationFn:acceptTerm
    })
}

export const useAssistant = () => {
    return useMutation({
        mutationKey:["assistant"],
        mutationFn:assistant
    })
}
