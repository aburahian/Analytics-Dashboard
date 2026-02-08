
import { mockData, DashboardData } from '@/data/mockData' // Assuming alias is configured, otherwise '../data/mockData'

export const fetchStats = async (dateRange?: string, userType?: string): Promise<DashboardData> => {
    await new Promise((r) => setTimeout(r, 800))

    // Deeper copy to ensure React detects state change
    const data = JSON.parse(JSON.stringify(mockData))

    // Simulate data variation based on filters
    if (dateRange === '7d') {
        data.revenue = data.revenue.slice(-7)
        data.orders = data.orders.slice(-7)
    } else if (dateRange === '30d') {
        data.revenue = data.revenue.slice(-30)
    }

    if (userType !== 'all') {
        // Just vary a KPI to show it's working
        data.kpi[1].value = (parseInt(data.kpi[1].value.replace(',', '')) / 2).toLocaleString()
    }

    return data
}
