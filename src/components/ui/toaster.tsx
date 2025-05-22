"use client"

import * as React from "react"
import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

const Toaster: React.FC = () => {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts?.map?.(({ id, title, description, action, ...props }) => {
        if (!id) return null;
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}

Toaster.displayName = 'Toaster';
export default Toaster;
