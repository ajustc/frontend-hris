// src/components/leave/LeaveRequests.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";
import type { LeaveRequest, Employee } from "../../types";

interface LeaveRequestsProps {
	leaveRequests: LeaveRequest[];
	employees: Employee[];
}

export function LeaveRequests({ leaveRequests, employees }: LeaveRequestsProps) {
	const getStatusColor = (status: string) => {
		switch (status) {
			case "approved":
				return "bg-green-100 text-green-800";
			case "pending":
				return "bg-yellow-100 text-yellow-800";
			case "rejected":
				return "bg-red-100 text-red-800";
			default:
				return "bg-gray-100 text-gray-800";
		}
	};

	const getEmployeeName = (employeeId: string) => {
		const employee = employees.find((emp) => emp.id === employeeId);
		return employee ? `${employee.firstName} ${employee.lastName}` : "Unknown";
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>Leave Requests</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					{leaveRequests.map((request) => (
						<div key={request.id} className="border rounded-lg p-4">
							<div className="flex items-center justify-between mb-3">
								<div className="flex items-center gap-2">
									<User className="h-4 w-4 text-gray-500" />
									<span className="font-medium">{getEmployeeName(request.employeeId)}</span>
								</div>
								<Badge className={getStatusColor(request.status)}>{request.status}</Badge>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
								<div className="flex items-center gap-2">
									<Calendar className="h-4 w-4 text-gray-500" />
									<span className="text-sm">
										{request.startDate} to {request.endDate}
									</span>
								</div>
								<div className="flex items-center gap-2">
									<Clock className="h-4 w-4 text-gray-500" />
									<span className="text-sm">{request.days} days</span>
								</div>
								<div className="text-sm text-gray-600">Type: {request.type}</div>
							</div>

							<p className="text-sm text-gray-700 mb-3">{request.reason}</p>

							{request.status === "pending" && (
								<div className="flex gap-2">
									<Button size="sm" variant="outline" className="text-green-600 border-green-600">
										Approve
									</Button>
									<Button size="sm" variant="outline" className="text-red-600 border-red-600">
										Reject
									</Button>
								</div>
							)}
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
