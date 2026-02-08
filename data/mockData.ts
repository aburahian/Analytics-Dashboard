
export const kpiData = [
  {
    title: 'Total Revenue',
    value: '$54,230',
    change: 12.5,
  },
  {
    title: 'Total Users',
    value: '1,245',
    change: 8.2,
  },
  {
    title: 'Orders',
    value: '342',
    change: -2.4,
  },
  {
    title: 'Conversion Rate',
    value: '4.3%',
    change: 4.1,
  },
]

export const revenueData = [
  { month: 'Jan', revenue: 4000 },
  { month: 'Feb', revenue: 3500 },
  { month: 'Mar', revenue: 5200 },
  { month: 'Apr', revenue: 4800 },
  { month: 'May', revenue: 6100 },
  { month: 'Jun', revenue: 5700 },
  { month: 'Jul', revenue: 7200 },
  { month: 'Aug', revenue: 6800 },
  { month: 'Sep', revenue: 8100 },
  { month: 'Oct', revenue: 7500 },
  { month: 'Nov', revenue: 9200 },
  { month: 'Dec', revenue: 8800 },
]

export const ordersData = [
  { month: 'Jan', orders: 240 },
  { month: 'Feb', orders: 210 },
  { month: 'Mar', orders: 350 },
  { month: 'Apr', orders: 310 },
  { month: 'May', orders: 420 },
  { month: 'Jun', orders: 380 },
  { month: 'Jul', orders: 510 },
  { month: 'Aug', orders: 460 },
  { month: 'Sep', orders: 580 },
  { month: 'Oct', orders: 530 },
  { month: 'Nov', orders: 650 },
  { month: 'Dec', orders: 610 },
]

export const userDistributionData = [
  { type: 'Free', value: 4500, fill: '#94a3b8' }, // slate-400
  { type: 'Premium', value: 2100, fill: '#6366f1' }, // indigo-500
  { type: 'Enterprise', value: 800, fill: '#1e293b' }, // slate-800
]

export const trafficSourceData = [
  { name: 'Organic', value: 400, fill: '#6366f1' },
  { name: 'Paid', value: 300, fill: '#3b82f6' },
  { name: 'Social', value: 200, fill: '#10b981' },
  { name: 'Referral', value: 100, fill: '#f59e0b' },
]

export interface DashboardData {
  kpi: typeof kpiData
  revenue: typeof revenueData
  orders: typeof ordersData
  userDistribution: typeof userDistributionData
  trafficSource: typeof trafficSourceData
}

export const mockData: DashboardData = {
  kpi: kpiData,
  revenue: revenueData,
  orders: ordersData,
  userDistribution: userDistributionData,
  trafficSource: trafficSourceData,
}
