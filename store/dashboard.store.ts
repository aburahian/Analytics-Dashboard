
import { create } from 'zustand'

export type DateFilter = '7d' | '30d' | '12m'

interface DashboardState {
    dateRange: DateFilter
    userType: 'all' | 'free' | 'premium' | 'enterprise'
    setDateRange: (v: DateFilter) => void
    setUserType: (v: DashboardState['userType']) => void
}

export const useDashboardStore = create<DashboardState>((set) => ({
    dateRange: '30d',
    userType: 'all',
    setDateRange: (v) => set({ dateRange: v }),
    setUserType: (v) => set({ userType: v }),
}))
