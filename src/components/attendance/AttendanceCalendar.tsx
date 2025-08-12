// src/components/attendance/AttendanceManagement.tsx
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, Filter, Download, Plus, Search, User } from "lucide-react";
import type { Attendance, Employee } from "../../types";

interface AttendanceManagementProps {
	attendance: Attendance[];
	employees: Employee[];
}

export function AttendanceManagement({ attendance, employees }: AttendanceManagementProps) {
	const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);
	const [selectedDepartment, setSelectedDepartment] = useState("all");
	const [searchTerm, setSearchTerm] = useState("");

	const getStatusColor = (status: string) => {
		switch (status) {
			case "present":
				return "bg-green-100 text-green-800";
			case "absent":
				return "bg-red-100 text-red-800";
			case "late":
				return "bg-yellow-100 text-yellow-800";
			case "half-day":
				return "bg-blue-100 text-blue-800";
			default:
				return "bg-gray-100 text-gray-800";
		}
	};

	const getEmployeeName = (employeeId: string) => {
		const employee = employees.find((emp) => emp.id === employeeId);
		return employee ? `${employee.firstName} ${employee.lastName}` : "Unknown";
	};

	const getEmployeeDepartment = (employeeId: string) => {
		const employee = employees.find((emp) => emp.id === employeeId);
		return employee?.department || "";
	};

	const filteredAttendance = attendance.filter((record) => {
		const employee = employees.find((emp) => emp.id === record.employeeId);
		const matchesSearch = employee ? `${employee.firstName} ${employee.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) : false;
		const matchesDepartment = selectedDepartment === "all" || employee?.department === selectedDepartment;
		const matchesDate = record.date === selectedDate;

		return matchesSearch && matchesDepartment && matchesDate;
	});

	const departments = [...new Set(employees.map((emp) => emp.department))];

	const attendanceStats = {
		total: filteredAttendance.length,
		present: filteredAttendance.filter((a) => a.status === "present").length,
		absent: filteredAttendance.filter((a) => a.status === "absent").length,
		late: filteredAttendance.filter((a) => a.status === "late").length,
		halfDay: filteredAttendance.filter((a) => a.status === "half-day").length,
	};

	return (
		<div className="space-y-6">
			{/* Quick Stats */}
			<div className="grid grid-cols-2 md:grid-cols-5 gap-4">
				<Card>
					<CardContent className="p-4">
						<div className="text-center">
							<div className="text-2xl font-bold text-gray-900">{attendanceStats.total}</div>
							<div className="text-sm text-gray-500">Total</div>
						</div>
					</CardContent>
				</Card>
				<Card>
					<CardContent className="p-4">
						<div className="text-center">
							<div className="text-2xl font-bold text-green-600">{attendanceStats.present}</div>
							<div className="text-sm text-gray-500">Present</div>
						</div>
					</CardContent>
				</Card>
				<Card>
					<CardContent className="p-4">
						<div className="text-center">
							<div className="text-2xl font-bold text-red-600">{attendanceStats.absent}</div>
							<div className="text-sm text-gray-500">Absent</div>
						</div>
					</CardContent>
				</Card>
				<Card>
					<CardContent className="p-4">
						<div className="text-center">
							<div className="text-2xl font-bold text-yellow-600">{attendanceStats.late}</div>
							<div className="text-sm text-gray-500">Late</div>
						</div>
					</CardContent>
				</Card>
				<Card>
					<CardContent className="p-4">
						<div className="text-center">
							<div className="text-2xl font-bold text-blue-600">{attendanceStats.halfDay}</div>
							<div className="text-sm text-gray-500">Half Day</div>
						</div>
					</CardContent>
				</Card>
			</div>

			{/* Filters and Actions */}
			<Card>
				<CardHeader>
					<div className="flex items-center justify-between">
						<CardTitle>Attendance Records</CardTitle>
						<div className="flex gap-2">
							<Button variant="outline" size="sm">
								<Download className="h-4 w-4 mr-2" />
								Export
							</Button>
							<Button size="sm">
								<Plus className="h-4 w-4 mr-2" />
								Mark Attendance
							</Button>
						</div>
					</div>
				</CardHeader>
				<CardContent>
					{/* Filters */}
					<div className="flex flex-wrap gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
						<div className="flex-1 min-w-[200px]">
							<Label htmlFor="search">Search Employee</Label>
							<div className="relative">
								<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
								<Input id="search" placeholder="Search by name..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10" />
							</div>
						</div>
						<div>
							<Label htmlFor="date">Date</Label>
							<Input id="date" type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
						</div>
						<div>
							<Label htmlFor="department">Department</Label>
							<Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
								<SelectTrigger className="w-[200px]">
									<SelectValue placeholder="All Departments" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="all">All Departments</SelectItem>
									{departments.map((dept) => (
										<SelectItem key={dept} value={dept}>
											{dept}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>
					</div>

					{/* Attendance Table */}
					<div className="overflow-x-auto">
						<table className="w-full">
							<thead>
								<tr className="border-b">
									<th className="text-left py-3 px-4">Employee</th>
									<th className="text-left py-3 px-4">Department</th>
									<th className="text-left py-3 px-4">Check In</th>
									<th className="text-left py-3 px-4">Check Out</th>
									<th className="text-left py-3 px-4">Hours</th>
									<th className="text-left py-3 px-4">Status</th>
									<th className="text-left py-3 px-4">Actions</th>
								</tr>
							</thead>
							<tbody>
								{filteredAttendance.length > 0 ? (
									filteredAttendance.map((record) => (
										<tr key={record.id} className="border-b hover:bg-gray-50">
											<td className="py-3 px-4">
												<div className="flex items-center gap-2">
													<User className="h-4 w-4 text-gray-400" />
													<span className="font-medium">{getEmployeeName(record.employeeId)}</span>
												</div>
											</td>
											<td className="py-3 px-4 text-gray-600">{getEmployeeDepartment(record.employeeId)}</td>
											<td className="py-3 px-4">
												<div className="flex items-center gap-1">
													<Clock className="h-4 w-4 text-gray-400" />
													{record.checkIn || "-"}
												</div>
											</td>
											<td className="py-3 px-4">
												<div className="flex items-center gap-1">
													<Clock className="h-4 w-4 text-gray-400" />
													{record.checkOut || "-"}
												</div>
											</td>
											<td className="py-3 px-4 font-medium">{record.hoursWorked > 0 ? `${record.hoursWorked}h` : "-"}</td>
											<td className="py-3 px-4">
												<Badge className={getStatusColor(record.status)}>{record.status}</Badge>
											</td>
											<td className="py-3 px-4">
												<Button variant="outline" size="sm">
													Edit
												</Button>
											</td>
										</tr>
									))
								) : (
									<tr>
										<td colSpan={7} className="py-8 px-4 text-center text-gray-500">
											No attendance records found for the selected criteria.
										</td>
									</tr>
								)}
							</tbody>
						</table>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
