
import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "secondary" | "destructive" | "outline" | "success"
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
    const variants = {
        default: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 dark:bg-secondary/80 dark:text-secondary-foreground dark:hover:bg-secondary",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80 dark:bg-destructive/80 dark:text-destructive-foreground dark:hover:bg-destructive",
        outline: "text-foreground dark:text-foreground",
        success: "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-400",
        warning: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-400",
        error: "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-400",
        info: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-400",
    }

    return (
        <div
            className={cn(
                "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                variants[variant],
                className
            )}
            {...props}
        />
    )
}

export { Badge }
