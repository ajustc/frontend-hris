// src/components/payroll/PayrollOverview.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Download, Eye } from "lucide-react";
import type { PayrollRecord, Employee } from "../../types";

interface PayrollOverviewProps {
	payrollRecords: PayrollRecord[];
	employees: Employee[];
}

export function PayrollOverview({ payrollRecords, employees }: PayrollOverviewProps) {
	const getStatusColor = (status: string) => {
		switch (status) {
			case "paid":
				return "bg-green-100 text-green-800";
			case "processed":
				return "bg-blue-100 text-blue-800";
			case "draft":
				return "bg-gray-100 text-gray-800";
			default:
				return "bg-gray-100 text-gray-800";
		}
	};

	const getEmployeeName = (employeeId: string) => {
		const employee = employees.find((emp) => emp.id === employeeId);
		return employee ? `${employee.firstName} ${employee.lastName}` : "Unknown";
	};

	const totalPayroll = payrollRecords.reduce((sum, record) => sum + record.netSalary, 0);

	return (
		<div className="space-y-6">
			<Card>
				<CardHeader>
					<div className="flex items-center justify-between">
						<CardTitle>Payroll Summary</CardTitle>
						<div className="flex items-center gap-2">
							<DollarSign className="h-5 w-5 text-green-600" />
							<span className="text-2xl font-bold text-green-600">${totalPayroll.toLocaleString()}</span>
						</div>
					</div>
				</CardHeader>
			</Card>

			<Card>
				<CardHeader>
					<div className="flex items-center justify-between">
						<CardTitle>Payroll Records</CardTitle>
						<Button>
							<Download className="h-4 w-4 mr-2" />
							Export
						</Button>
					</div>
				</CardHeader>
				<CardContent>
					<div className="overflow-x-auto">
						<table className="w-full">
							<thead>
								<tr className="border-b">
									<th className="text-left py-3 px-4">Employee</th>
									<th className="text-left py-3 px-4">Period</th>
									<th className="text-left py-3 px-4">Basic Salary</th>
									<th className="text-left py-3 px-4">Net Salary</th>
									<th className="text-left py-3 px-4">Status</th>
									<th className="text-left py-3 px-4">Actions</th>
								</tr>
							</thead>
							<tbody>
								{payrollRecords.map((record) => (
									<tr key={record.id} className="border-b hover:bg-gray-50">
										<td className="py-3 px-4 font-medium">{getEmployeeName(record.employeeId)}</td>
										<td className="py-3 px-4">{record.period}</td>
										<td className="py-3 px-4">${record.basicSalary.toLocaleString()}</td>
										<td className="py-3 px-4 font-medium">${record.netSalary.toLocaleString()}</td>
										<td className="py-3 px-4">
											<Badge className={getStatusColor(record.status)}>{record.status}</Badge>
										</td>
										<td className="py-3 px-4">
											<Button variant="outline" size="sm">
												<Eye className="h-4 w-4 mr-2" />
												View
											</Button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
