"use client"

import { MobileMenu } from "./MobileMenu"
import { Bell, Search } from "lucide-react"
import { ThemeToggle } from "./ThemeToggle"

export const Header = () => {
    return (
        <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 border-b bg-white dark:bg-gray-950 dark:border-gray-800 shadow-sm lg:static lg:shadow-none">
            <div className="flex flex-1 items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-4 lg:hidden">
                    <MobileMenu />
                    <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">AdminProp</span>
                </div>

                <div className="flex flex-1 justify-end px-4 sm:px-6 lg:ml-6 lg:justify-end">
                    {/* Placeholder for search if needed */}
                    <div className="hidden lg:block lg:w-80">
                        <div className="relative">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <Search className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="search"
                                placeholder="Search..."
                                className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-900 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                </div>

                <div className="ml-4 flex items-center space-x-4 sm:ml-6">
                    <ThemeToggle />
                    <button className="relative rounded-full bg-white dark:bg-gray-800 p-1 text-gray-400 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition">
                        <span className="sr-only">View notifications</span>
                        <Bell className="h-6 w-6" />
                        <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
                    </button>

                    <div className="relative">
                        <button className="flex items-center gap-2 rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            <span className="sr-only">Open user menu</span>
                            <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-medium">
                                JD
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
