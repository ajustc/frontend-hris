// src/components/forms/EmployeeForm.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";

export function EmployeeForm() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Add New Employee</CardTitle>
			</CardHeader>
			<CardContent>
				<form className="space-y-4">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div>
							<Label htmlFor="firstName">First Name</Label>
							<Input id="firstName" placeholder="Enter first name" />
						</div>
						<div>
							<Label htmlFor="lastName">Last Name</Label>
							<Input id="lastName" placeholder="Enter last name" />
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div>
							<Label htmlFor="email">Email</Label>
							<Input id="email" type="email" placeholder="Enter email" />
						</div>
						<div>
							<Label htmlFor="phone">Phone</Label>
							<Input id="phone" placeholder="Enter phone number" />
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div>
							<Label htmlFor="department">Department</Label>
							<Select>
								<option value="">Select Department</option>
								<option value="engineering">Engineering</option>
								<option value="sales">Sales</option>
								<option value="marketing">Marketing</option>
								<option value="hr">Human Resources</option>
							</Select>
						</div>
						<div>
							<Label htmlFor="position">Position</Label>
							<Input id="position" placeholder="Enter position" />
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div>
							<Label htmlFor="hireDate">Hire Date</Label>
							<Input id="hireDate" type="date" />
						</div>
						<div>
							<Label htmlFor="salary">Salary</Label>
							<Input id="salary" type="number" placeholder="Enter salary" />
						</div>
					</div>

					<div className="flex gap-2">
						<Button type="submit">Save Employee</Button>
						<Button type="button" variant="outline">
							Cancel
						</Button>
					</div>
				</form>
			</CardContent>
		</Card>
	);
}
