import { useToast, toast } from "./use-toast";
// Add the definition and export of ToastType if it doesn't exist
export interface ToastType {
    id: string
    title?: string
    description?: string
    action?: React.ReactNode
    [key: string]: any
  }

export { useToast, toast };
