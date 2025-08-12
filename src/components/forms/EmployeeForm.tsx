// src/components/forms/EmployeeForm.tsx
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface EmployeeFormData {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	department: string;
	position: string;
	hireDate: string;
	salary: string;
	status: string;
	manager: string;
	street: string;
	city: string;
	state: string;
	zipCode: string;
	country: string;
}

interface EmployeeFormProps {
	onSubmit?: (data: EmployeeFormData) => void;
	onCancel?: () => void;
	initialData?: Partial<EmployeeFormData>;
}

export function EmployeeForm({ onSubmit, onCancel, initialData }: EmployeeFormProps) {
	const [formData, setFormData] = useState<EmployeeFormData>({
		firstName: initialData?.firstName || "",
		lastName: initialData?.lastName || "",
		email: initialData?.email || "",
		phone: initialData?.phone || "",
		department: initialData?.department || "",
		position: initialData?.position || "",
		hireDate: initialData?.hireDate || "",
		salary: initialData?.salary || "",
		status: initialData?.status || "active",
		manager: initialData?.manager || "",
		street: initialData?.street || "",
		city: initialData?.city || "",
		state: initialData?.state || "",
		zipCode: initialData?.zipCode || "",
		country: initialData?.country || "USA",
	});

	const handleChange = (field: keyof EmployeeFormData, value: string) => {
		setFormData((prev) => ({ ...prev, [field]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit?.(formData);
	};

	return (
		<Card className="max-w-4xl mx-auto">
			<CardHeader>
				<CardTitle>{initialData ? "Edit Employee" : "Add New Employee"}</CardTitle>
			</CardHeader>
			<CardContent>
				<form onSubmit={handleSubmit} className="space-y-6">
					{/* Personal Information */}
					<div className="space-y-4">
						<h3 className="text-lg font-semibold border-b pb-2">Personal Information</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div>
								<Label htmlFor="firstName">First Name *</Label>
								<Input id="firstName" value={formData.firstName} onChange={(e) => handleChange("firstName", e.target.value)} placeholder="Enter first name" required />
							</div>
							<div>
								<Label htmlFor="lastName">Last Name *</Label>
								<Input id="lastName" value={formData.lastName} onChange={(e) => handleChange("lastName", e.target.value)} placeholder="Enter last name" required />
							</div>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div>
								<Label htmlFor="email">Email *</Label>
								<Input id="email" type="email" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} placeholder="Enter email" required />
							</div>
							<div>
								<Label htmlFor="phone">Phone</Label>
								<Input id="phone" value={formData.phone} onChange={(e) => handleChange("phone", e.target.value)} placeholder="Enter phone number" />
							</div>
						</div>
					</div>

					{/* Employment Information */}
					<div className="space-y-4">
						<h3 className="text-lg font-semibold border-b pb-2">Employment Information</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div>
								<Label htmlFor="department">Department *</Label>
								<Select value={formData.department} onValueChange={(value) => handleChange("department", value)}>
									<SelectTrigger>
										<SelectValue placeholder="Select Department" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="Engineering">Engineering</SelectItem>
										<SelectItem value="Sales">Sales</SelectItem>
										<SelectItem value="Marketing">Marketing</SelectItem>
										<SelectItem value="HR">Human Resources</SelectItem>
										<SelectItem value="Finance">Finance</SelectItem>
									</SelectContent>
								</Select>
							</div>
							<div>
								<Label htmlFor="position">Position *</Label>
								<Input id="position" value={formData.position} onChange={(e) => handleChange("position", e.target.value)} placeholder="Enter position" required />
							</div>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
							<div>
								<Label htmlFor="hireDate">Hire Date *</Label>
								<Input id="hireDate" type="date" value={formData.hireDate} onChange={(e) => handleChange("hireDate", e.target.value)} required />
							</div>
							<div>
								<Label htmlFor="salary">Annual Salary *</Label>
								<Input id="salary" type="number" value={formData.salary} onChange={(e) => handleChange("salary", e.target.value)} placeholder="Enter salary" required />
							</div>
							<div>
								<Label htmlFor="status">Status</Label>
								<Select value={formData.status} onValueChange={(value) => handleChange("status", value)}>
									<SelectTrigger>
										<SelectValue placeholder="Select Status" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="active">Active</SelectItem>
										<SelectItem value="inactive">Inactive</SelectItem>
										<SelectItem value="terminated">Terminated</SelectItem>
									</SelectContent>
								</Select>
							</div>
						</div>

						<div>
							<Label htmlFor="manager">Manager</Label>
							<Input id="manager" value={formData.manager} onChange={(e) => handleChange("manager", e.target.value)} placeholder="Enter manager name" />
						</div>
					</div>

					{/* Address Information */}
					<div className="space-y-4">
						<h3 className="text-lg font-semibold border-b pb-2">Address Information</h3>
						<div>
							<Label htmlFor="street">Street Address</Label>
							<Input id="street" value={formData.street} onChange={(e) => handleChange("street", e.target.value)} placeholder="Enter street address" />
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
							<div>
								<Label htmlFor="city">City</Label>
								<Input id="city" value={formData.city} onChange={(e) => handleChange("city", e.target.value)} placeholder="Enter city" />
							</div>
							<div>
								<Label htmlFor="state">State</Label>
								<Input id="state" value={formData.state} onChange={(e) => handleChange("state", e.target.value)} placeholder="Enter state" />
							</div>
							<div>
								<Label htmlFor="zipCode">ZIP Code</Label>
								<Input id="zipCode" value={formData.zipCode} onChange={(e) => handleChange("zipCode", e.target.value)} placeholder="Enter ZIP code" />
							</div>
							<div>
								<Label htmlFor="country">Country</Label>
								<Input id="country" value={formData.country} onChange={(e) => handleChange("country", e.target.value)} placeholder="Enter country" />
							</div>
						</div>
					</div>

					{/* Form Actions */}
					<div className="flex gap-4 pt-6 border-t">
						<Button type="submit" className="flex-1">
							{initialData ? "Update Employee" : "Add Employee"}
						</Button>
						<Button type="button" variant="outline" className="flex-1" onClick={onCancel}>
							Cancel
						</Button>
					</div>
				</form>
			</CardContent>
		</Card>
	);
}
