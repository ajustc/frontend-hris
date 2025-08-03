// src/types/index.ts
export interface Employee {
	id: string;
	employeeId: string;
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	department: string;
	position: string;
	hireDate: string;
	salary: number;
	status: "active" | "inactive" | "terminated";
	avatar?: string;
	manager?: string;
	address: {
		street: string;
		city: string;
		state: string;
		zipCode: string;
		country: string;
	};
}

export interface Attendance {
	id: string;
	employeeId: string;
	date: string;
	checkIn: string;
	checkOut: string;
	hoursWorked: number;
	status: "present" | "absent" | "late" | "half-day";
	notes?: string;
}

export interface LeaveRequest {
	id: string;
	employeeId: string;
	type: "vacation" | "sick" | "personal" | "maternity" | "paternity";
	startDate: string;
	endDate: string;
	days: number;
	reason: string;
	status: "pending" | "approved" | "rejected";
	approvedBy?: string;
	appliedDate: string;
}

export interface PayrollRecord {
	id: string;
	employeeId: string;
	period: string;
	basicSalary: number;
	allowances: number;
	deductions: number;
	netSalary: number;
	payDate: string;
	status: "draft" | "processed" | "paid";
}

export interface Department {
	id: string;
	name: string;
	manager: string;
	employeeCount: number;
	budget: number;
}
