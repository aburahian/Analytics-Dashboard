
"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, BarChart3, FileText, Settings, Menu, X, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
    { name: "Reports", href: "/dashboard/reports", icon: FileText },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
]

export const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    const toggle = () => setIsOpen(!isOpen)

    return (
        <>
            <button
                type="button"
                className="-ml-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 lg:hidden transition-colors"
                onClick={toggle}
            >
                <span className="sr-only">Open sidebar</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-40 flex lg:hidden">
                    <div
                        className="fixed inset-0 bg-gray-600/75 dark:bg-gray-900/80 backdrop-blur-sm transition-opacity"
                        onClick={() => setIsOpen(false)}
                    />

                    <div className="relative flex w-full max-w-xs flex-1 flex-col bg-white dark:bg-gray-950 pt-5 pb-4 transition-colors duration-300">
                        <div className="flex items-center justify-between px-4">
                            <div className="flex h-16 items-center">
                                <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">AdminProp</span>
                            </div>
                            <button
                                type="button"
                                className="-mr-2 ml-auto flex h-10 w-10 items-center justify-center rounded-full p-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                <span className="sr-only">Close sidebar</span>
                                <X className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>

                        <div className="mt-5 h-0 flex-1 overflow-y-auto">
                            <nav className="space-y-1 px-2">
                                {navigation.map((item) => {
                                    const isActive = pathname === item.href
                                    return (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className={cn(
                                                "group flex items-center rounded-md px-2 py-2 text-base font-medium transition-all duration-200",
                                                isActive
                                                    ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
                                                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900 hover:text-gray-900 dark:hover:text-gray-200"
                                            )}
                                        >
                                            <item.icon
                                                className={cn(
                                                    "mr-4 h-6 w-6 flex-shrink-0 transition-colors",
                                                    isActive ? "text-indigo-600 dark:text-indigo-400" : "text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300"
                                                )}
                                                aria-hidden="true"
                                            />
                                            {item.name}
                                        </Link>
                                    )
                                })}
                            </nav>
                        </div>

                        <div className="mt-auto border-t border-gray-200 dark:border-gray-800 p-4">
                            <button className="group flex w-full items-center rounded-md px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 hover:text-red-600 dark:hover:text-red-400 transition-all duration-200">
                                <LogOut className="mr-3 h-6 w-6 text-gray-400 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors" />
                                Sign out
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
