"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, BarChart3, FileText, Settings, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"

export const Sidebar = () => {
    const pathname = usePathname()

    const navigation = [
        { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
        { name: 'Analytics', href: '/dashboard/analytics', icon: BarChart3 },
        { name: 'Reports', href: '/dashboard/reports', icon: FileText },
        { name: 'Settings', href: '/dashboard/settings', icon: Settings },
    ]

    return (
        <div className="hidden lg:flex lg:flex-shrink-0">
            <div className="flex w-64 flex-col border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 px-4 pt-5 pb-4 transition-colors duration-300">
                <div className="flex flex-shrink-0 items-center px-4 mb-8">
                    <span className="text-2xl font-bold tracking-tight text-indigo-600 dark:text-indigo-400">AdminProp</span>
                </div>
                <nav className="flex-1 space-y-1">
                    {navigation.map((item) => {
                        const isActive = pathname === item.href
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "group flex items-center rounded-md px-3 py-2 text-sm font-medium transition-all duration-200",
                                    isActive
                                        ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
                                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900 hover:text-gray-900 dark:hover:text-gray-200"
                                )}
                            >
                                <item.icon
                                    className={cn(
                                        "mr-3 h-5 w-5 flex-shrink-0 transition-colors",
                                        isActive ? "text-indigo-600 dark:text-indigo-400" : "text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300"
                                    )}
                                />
                                {item.name}
                            </Link>
                        )
                    })}
                </nav>
                <div className="mt-auto border-t border-gray-200 dark:border-gray-800 pt-4">
                    <div className="flex items-center px-4">
                        <div className="flex-shrink-0">
                            <div className="h-10 w-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold">
                                JD
                            </div>
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-gray-700 dark:text-gray-200">John Doe</p>
                            <p className="text-xs font-medium text-gray-500 dark:text-gray-400">Admin</p>
                        </div>
                        <button className="ml-auto text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition-colors">
                            <LogOut className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
