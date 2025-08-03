// src/components/employees/EmployeeList.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Plus, Search, Filter } from "lucide-react";
import type { Employee } from "../../types";

interface EmployeeListProps {
	employees: Employee[];
}

export function EmployeeList({ employees }: EmployeeListProps) {
	const getStatusColor = (status: string) => {
		switch (status) {
			case "active":
				return "bg-green-100 text-green-800";
			case "inactive":
				return "bg-yellow-100 text-yellow-800";
			case "terminated":
				return "bg-red-100 text-red-800";
			default:
				return "bg-gray-100 text-gray-800";
		}
	};

	return (
		<Card>
			<CardHeader>
				<div className="flex items-center justify-between">
					<CardTitle>Employee Directory</CardTitle>
					<div className="flex gap-2">
						<Button variant="outline" size="sm">
							<Search className="h-4 w-4 mr-2" />
							Search
						</Button>
						<Button variant="outline" size="sm">
							<Filter className="h-4 w-4 mr-2" />
							Filter
						</Button>
						<Button size="sm">
							<Plus className="h-4 w-4 mr-2" />
							Add Employee
						</Button>
					</div>
				</div>
			</CardHeader>
			<CardContent>
				<div className="overflow-x-auto">
					<table className="w-full">
						<thead>
							<tr className="border-b">
								<th className="text-left py-3 px-4">Employee</th>
								<th className="text-left py-3 px-4">Department</th>
								<th className="text-left py-3 px-4">Position</th>
								<th className="text-left py-3 px-4">Status</th>
								<th className="text-left py-3 px-4">Actions</th>
							</tr>
						</thead>
						<tbody>
							{employees.map((employee) => (
								<tr key={employee.id} className="border-b hover:bg-gray-50">
									<td className="py-3 px-4">
										<div className="flex items-center gap-3">
											<Avatar>
												<AvatarFallback>
													{employee.firstName[0]}
													{employee.lastName[0]}
												</AvatarFallback>
											</Avatar>
											<div>
												<p className="font-medium">
													{employee.firstName} {employee.lastName}
												</p>
												<p className="text-sm text-gray-500">{employee.email}</p>
											</div>
										</div>
									</td>
									<td className="py-3 px-4">{employee.department}</td>
									<td className="py-3 px-4">{employee.position}</td>
									<td className="py-3 px-4">
										<Badge className={getStatusColor(employee.status)}>{employee.status}</Badge>
									</td>
									<td className="py-3 px-4">
										<Button variant="outline" size="sm">
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
	);
}
