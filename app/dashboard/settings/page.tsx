
"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"

export default function SettingsPage() {
    return (
        <div className="mx-auto max-w-4xl space-y-8">
            <div>
                <h1 className="text-2xl font-bold tracking-tight text-gray-900">Settings</h1>
                <p className="mt-1 text-sm text-gray-500">
                    Manage your account settings and set your dashboard preferences.
                </p>
            </div>

            <div className="space-y-6">
                {/* Profile Section */}
                <Card>
                    <CardHeader>
                        <CardTitle>Profile</CardTitle>
                        <CardDescription>Your personal information and how it will be displayed.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="h-16 w-16 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xl">
                                JD
                            </div>
                            <div>
                                <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                                    Change photo
                                </button>
                                <p className="text-xs text-gray-500 mt-1">JPG, GIF or PNG. Max size of 800K</p>
                            </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-1">
                                <label className="text-sm font-medium">Full Name</label>
                                <input
                                    type="text"
                                    defaultValue="John Doe"
                                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-medium">Email Address</label>
                                <input
                                    type="email"
                                    defaultValue="john.doe@example.com"
                                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
                                />
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="border-t bg-gray-50 px-6 py-3 justify-end">
                        <button className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
                            Save changes
                        </button>
                    </CardFooter>
                </Card>

                {/* Preferences Section */}
                <Card>
                    <CardHeader>
                        <CardTitle>Preferences</CardTitle>
                        <CardDescription>Customize your dashboard experience.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium">Email Notifications</p>
                                <p className="text-xs text-gray-500">Receive weekly summaries and critical alerts.</p>
                            </div>
                            <Badge variant="success">Enabled</Badge>
                        </div>

                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium">Dark Mode</p>
                                <p className="text-xs text-gray-500">Automatic switching based on system preferences.</p>
                            </div>
                            <button className="text-sm text-gray-400 font-medium">Configure</button>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t">
                            <div>
                                <p className="text-sm font-medium text-red-600">Delete Account</p>
                                <p className="text-xs text-gray-500">Permanently remove your account and all data.</p>
                            </div>
                            <button className="text-sm font-semibold text-red-600 hover:text-red-500">
                                Delete
                            </button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
