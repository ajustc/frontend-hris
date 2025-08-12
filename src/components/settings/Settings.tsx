// src/components/settings/Settings.tsx
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings as SettingsIcon, User, Building, Bell, Shield } from "lucide-react";

export function Settings() {
	return (
		<div className="space-y-6">
			{/* Header */}
			<div>
				<h1 className="text-2xl font-bold">Settings</h1>
				<p className="text-gray-600">Manage your HRIS system settings</p>
			</div>

			<Tabs defaultValue="general" className="w-full">
				<TabsList className="grid w-full grid-cols-4">
					<TabsTrigger value="general">General</TabsTrigger>
					<TabsTrigger value="company">Company</TabsTrigger>
					<TabsTrigger value="notifications">Notifications</TabsTrigger>
					<TabsTrigger value="security">Security</TabsTrigger>
				</TabsList>

				<TabsContent value="general">
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<SettingsIcon className="h-5 w-5" />
								General Settings
							</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div>
									<Label htmlFor="timezone">Timezone</Label>
									<Input id="timezone" value="UTC-5 (Eastern Time)" readOnly />
								</div>
								<div>
									<Label htmlFor="currency">Currency</Label>
									<Input id="currency" value="USD ($)" readOnly />
								</div>
							</div>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div>
									<Label htmlFor="dateFormat">Date Format</Label>
									<Input id="dateFormat" value="MM/DD/YYYY" readOnly />
								</div>
								<div>
									<Label htmlFor="workingDays">Working Days</Label>
									<Input id="workingDays" value="Monday - Friday" readOnly />
								</div>
							</div>
							<Button>Save Changes</Button>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="company">
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<Building className="h-5 w-5" />
								Company Information
							</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
							<div>
								<Label htmlFor="companyName">Company Name</Label>
								<Input id="companyName" value="Acme Corporation" />
							</div>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div>
									<Label htmlFor="companyEmail">Company Email</Label>
									<Input id="companyEmail" value="info@acmecorp.com" />
								</div>
								<div>
									<Label htmlFor="companyPhone">Company Phone</Label>
									<Input id="companyPhone" value="+1 (555) 123-4567" />
								</div>
							</div>
							<div>
								<Label htmlFor="companyAddress">Company Address</Label>
								<Input id="companyAddress" value="123 Business Ave, New York, NY 10001" />
							</div>
							<Button>Update Company Info</Button>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="notifications">
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<Bell className="h-5 w-5" />
								Notification Settings
							</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="flex items-center justify-between">
								<div>
									<div className="font-medium">Email Notifications</div>
									<div className="text-sm text-gray-600">Receive email alerts for important events</div>
								</div>
								<Button variant="outline" size="sm">
									Enable
								</Button>
							</div>
							<div className="flex items-center justify-between">
								<div>
									<div className="font-medium">Leave Request Alerts</div>
									<div className="text-sm text-gray-600">Get notified when employees request leave</div>
								</div>
								<Button variant="outline" size="sm">
									Enable
								</Button>
							</div>
							<div className="flex items-center justify-between">
								<div>
									<div className="font-medium">Attendance Alerts</div>
									<div className="text-sm text-gray-600">Alerts for late arrivals and absences</div>
								</div>
								<Button variant="outline" size="sm">
									Enable
								</Button>
							</div>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="security">
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<Shield className="h-5 w-5" />
								Security Settings
							</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
							<div>
								<Label htmlFor="currentPassword">Current Password</Label>
								<Input id="currentPassword" type="password" placeholder="Enter current password" />
							</div>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div>
									<Label htmlFor="newPassword">New Password</Label>
									<Input id="newPassword" type="password" placeholder="Enter new password" />
								</div>
								<div>
									<Label htmlFor="confirmPassword">Confirm Password</Label>
									<Input id="confirmPassword" type="password" placeholder="Confirm new password" />
								</div>
							</div>
							<div className="flex items-center justify-between">
								<div>
									<div className="font-medium">Two-Factor Authentication</div>
									<div className="text-sm text-gray-600">Add an extra layer of security</div>
								</div>
								<Button variant="outline" size="sm">
									Setup
								</Button>
							</div>
							<Button>Update Password</Button>
						</CardContent>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	);
}
