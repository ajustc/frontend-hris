// src/data/mockData.ts
import type { Employee, Attendance, LeaveRequest, PayrollRecord, Department } from "../types";

export const mockEmployees: Employee[] = [
	{
		id: "1",
		employeeId: "EMP001",
		firstName: "John",
		lastName: "Doe",
		email: "john.doe@company.com",
		phone: "+1234567890",
		department: "Engineering",
		position: "Senior Developer",
		hireDate: "2022-01-15",
		salary: 85000,
		status: "active",
		manager: "Jane Smith",
		address: {
			street: "123 Main St",
			city: "New York",
			state: "NY",
			zipCode: "10001",
			country: "USA",
		},
	},
	// Add more mock employees...
];

export const mockAttendance: Attendance[] = [
	{
		id: "1",
		employeeId: "1",
		date: "2024-01-15",
		checkIn: "09:00",
		checkOut: "17:30",
		hoursWorked: 8.5,
		status: "present",
	},
	// Add more mock attendance...
];

export const mockLeaveRequests: LeaveRequest[] = [
	{
		id: "1",
		employeeId: "1",
		type: "vacation",
		startDate: "2024-02-01",
		endDate: "2024-02-05",
		days: 5,
		reason: "Family vacation",
		status: "pending",
		appliedDate: "2024-01-15",
	},
	// Add more mock leave requests...
];

export const mockDepartments: Department[] = [
	{
		id: "1",
		name: "Engineering",
		manager: "Jane Smith",
		employeeCount: 15,
		budget: 1200000,
	},
	// Add more departments...
];
