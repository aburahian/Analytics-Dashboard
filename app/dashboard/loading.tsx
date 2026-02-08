
import { Skeleton } from "@/components/ui/Skeleton"

export default function Loading() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between">
                <Skeleton className="h-8 w-32" />
                <div className="flex gap-2">
                    <Skeleton className="h-10 w-[150px]" />
                    <Skeleton className="h-10 w-[150px]" />
                </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[1, 2, 3, 4].map((i) => (
                    <Skeleton key={i} className="h-32 w-full rounded-xl" />
                ))}
            </div>
            <div className="grid gap-6 lg:grid-cols-7">
                <Skeleton className="lg:col-span-4 h-[400px] rounded-xl" />
                <Skeleton className="lg:col-span-3 h-[400px] rounded-xl" />
            </div>
        </div>
    )
}
