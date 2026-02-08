
"use client"

import { useEffect, useState } from "react"
import { fetchStats } from "@/lib/api"
import { RevenueLineChart } from "@/components/charts/RevenueLineChart"
import { OrdersBarChart } from "@/components/charts/OrdersBarChart"
import { type DashboardData } from "@/data/mockData"
import { Skeleton } from "@/components/ui/Skeleton"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card"

export default function AnalyticsPage() {
    const [data, setData] = useState<DashboardData | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadData = async () => {
            setLoading(true)
            try {
                const stats = await fetchStats()
                setData(stats)
            } catch (error) {
                console.error("Failed to fetch analytics data", error)
            } finally {
                setLoading(false)
            }
        }
        loadData()
    }, [])

    if (loading || !data) {
        return (
            <div className="space-y-6">
                <Skeleton className="h-8 w-48" />
                <div className="grid gap-6 lg:grid-cols-2">
                    <Skeleton className="h-[400px] rounded-xl" />
                    <Skeleton className="h-[400px] rounded-xl" />
                </div>
            </div>
        )
    }

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">Analytics</h1>

            <div className="grid gap-6 lg:grid-cols-2">
                <RevenueLineChart data={data.revenue} />
                <OrdersBarChart data={data.orders} />
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Detailed Insights</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-gray-500">
                        This page provides a deeper dive into your business metrics. You can track performance trends
                        over time and identify growth opportunities for your premium and enterprise segments.
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}
