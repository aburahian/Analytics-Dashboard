
import { ArrowUpRight, ArrowDownRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { cn } from "@/lib/utils"

interface KPICardProps {
    title: string
    value: string
    change: number
    className?: string
}

export const KPICard = ({ title, value, change, className }: KPICardProps) => {
    const isPositive = change >= 0

    return (
        <Card className={cn("overflow-hidden transition-all duration-300 hover:-translate-y-1", className)}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold text-gray-900 dark:text-gray-50">{value}</div>
                <div className="mt-1 flex items-center gap-1">
                    <span className={cn(
                        "flex items-center text-xs font-semibold",
                        isPositive ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"
                    )}>
                        {isPositive ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                        {Math.abs(change)}%
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-500 font-medium ml-1">vs last period</span>
                </div>
            </CardContent>
        </Card>
    )
}
