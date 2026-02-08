
"use client"

import { useEffect, useState, useMemo } from "react"
import dynamic from "next/dynamic"
import { useDashboardStore, type DateFilter } from "@/store/dashboard.store"
import { fetchStats } from "@/lib/api"
import { KPICard } from "@/components/kpi/KPICard"
import { Dropdown } from "@/components/ui/Dropdown"
import { type DashboardData } from "@/data/mockData"
import { Skeleton } from "@/components/ui/Skeleton"
import { exportToCSV } from "@/lib/csvExport"
import { Download } from "lucide-react"

// Lazy load heavy chart components
const RevenueLineChart = dynamic(() => import("@/components/charts/RevenueLineChart").then(mod => mod.RevenueLineChart), {
    loading: () => <Skeleton className="h-[400px] w-full rounded-xl" />,
})
const OrdersBarChart = dynamic(() => import("@/components/charts/OrdersBarChart").then(mod => mod.OrdersBarChart), {
    loading: () => <Skeleton className="h-[400px] w-full rounded-xl" />,
})
const UsersPieChart = dynamic(() => import("@/components/charts/UsersPieChart").then(mod => mod.UsersPieChart), {
    loading: () => <Skeleton className="h-[400px] w-full rounded-xl" />,
})
const TrafficSourceChart = dynamic(() => import("@/components/charts/TrafficSourceChart").then(mod => mod.TrafficSourceChart), {
    loading: () => <Skeleton className="h-[400px] w-full rounded-xl" />,
})

export default function DashboardPage() {
    const { dateRange, userType, setDateRange, setUserType } = useDashboardStore()
    const [data, setData] = useState<DashboardData | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadData = async () => {
            setLoading(true)
            try {
                const stats = await fetchStats(dateRange, userType)
                setData(stats)
            } catch (error) {
                console.error("Failed to fetch data", error)
            } finally {
                setLoading(false)
            }
        }
        loadData()
    }, [dateRange, userType])

    const dateOptions = [
        { label: "Last 7 Days", value: "7d" },
        { label: "Last 30 Days", value: "30d" },
        { label: "Last 12 Months", value: "12m" },
    ]

    const userTypeOptions = [
        { label: "All Users", value: "all" },
        { label: "Free", value: "free" },
        { label: "Premium", value: "premium" },
        { label: "Enterprise", value: "enterprise" },
    ]

    const handleExport = () => {
        if (data) {
            exportToCSV(data.revenue, "revenue_data")
            exportToCSV(data.kpi, "kpi_metrics")
        }
    }

    const filteredData = useMemo(() => {
        if (!data) return null
        return data
    }, [data])

    if (loading || !filteredData) {
        return <DashboardLoading />
    }

    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Dashboard</h1>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                    <button
                        onClick={handleExport}
                        className="flex items-center justify-center gap-2 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                    >
                        <Download className="h-4 w-4" />
                        Export CSV
                    </button>
                    <Dropdown
                        options={userTypeOptions}
                        value={userType}
                        onChange={(e) => setUserType(e.target.value as any)}
                        className="w-full sm:w-[150px]"
                    />
                    <Dropdown
                        options={dateOptions}
                        value={dateRange}
                        onChange={(e) => setDateRange(e.target.value as DateFilter)}
                        className="w-full sm:w-[150px]"
                    />
                </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {filteredData.kpi.map((kpi) => (
                    <KPICard
                        key={kpi.title}
                        title={kpi.title}
                        value={kpi.value}
                        change={kpi.change}
                    />
                ))}
            </div>

            <div className="grid gap-6 lg:grid-cols-7">
                <div className="lg:col-span-4">
                    <RevenueLineChart data={filteredData.revenue} />
                </div>
                <div className="lg:col-span-3">
                    <UsersPieChart data={filteredData.userDistribution} />
                </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
                <OrdersBarChart data={filteredData.orders} />
                <TrafficSourceChart data={filteredData.trafficSource} />
            </div>
        </div>
    )
}

function DashboardLoading() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between">
                <Skeleton className="h-8 w-32" />
                <div className="flex gap-2">
                    <Skeleton className="h-10 w-[150px]" />
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
