// src/components/reports/Reports.tsx
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, BarChart3, Users, Calendar } from "lucide-react";

const reportTypes = [
	{
		id: "employee-report",
		title: "Employee Report",
		description: "Complete employee information and status",
		icon: Users,
	},
	{
		id: "attendance-report",
		title: "Attendance Report",
		description: "Monthly attendance summary",
		icon: Calendar,
	},
	{
		id: "payroll-report",
		title: "Payroll Report",
		description: "Salary and compensation details",
		icon: BarChart3,
	},
	{
		id: "leave-report",
		title: "Leave Report",
		description: "Leave requests and approvals",
		icon: FileText,
	},
];

export function Reports() {
	return (
		<div className="space-y-6">
			{/* Header */}
			<div>
				<h1 className="text-2xl font-bold">Reports</h1>
				<p className="text-gray-600">Generate and download various HR reports</p>
			</div>

			{/* Report Cards */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{reportTypes.map((report) => (
					<Card key={report.id}>
						<CardHeader>
							<div className="flex items-center gap-3">
								<report.icon className="h-8 w-8 text-blue-600" />
								<div>
									<CardTitle>{report.title}</CardTitle>
									<p className="text-sm text-gray-600">{report.description}</p>
								</div>
							</div>
						</CardHeader>
						<CardContent>
							<div className="flex gap-2">
								<Button className="flex-1">
									<Download className="h-4 w-4 mr-2" />
									Download PDF
								</Button>
								<Button variant="outline" className="flex-1">
									<Download className="h-4 w-4 mr-2" />
									Download Excel
								</Button>
							</div>
						</CardContent>
					</Card>
				))}
			</div>

			{/* Quick Stats */}
			<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
				<Card>
					<CardContent className="p-4">
						<div className="text-center">
							<div className="text-2xl font-bold text-blue-600">156</div>
							<div className="text-sm text-gray-500">Total Employees</div>
						</div>
					</CardContent>
				</Card>
				<Card>
					<CardContent className="p-4">
						<div className="text-center">
							<div className="text-2xl font-bold text-green-600">142</div>
							<div className="text-sm text-gray-500">Present Today</div>
						</div>
					</CardContent>
				</Card>
				<Card>
					<CardContent className="p-4">
						<div className="text-center">
							<div className="text-2xl font-bold text-yellow-600">8</div>
							<div className="text-sm text-gray-500">Pending Leaves</div>
						</div>
					</CardContent>
				</Card>
				<Card>
					<CardContent className="p-4">
						<div className="text-center">
							<div className="text-2xl font-bold text-purple-600">$120K</div>
							<div className="text-sm text-gray-500">Monthly Payroll</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
