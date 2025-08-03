// src/components/layout/Sidebar.tsx
import { Users, Clock, Calendar, DollarSign, BarChart3, UserPlus, FileText, Settings, Home } from "lucide-react";

const navigation = [
	{ name: "Dashboard", href: "/dashboard", icon: Home },
	{ name: "Employees", href: "/employees", icon: Users },
	{ name: "Attendance", href: "/attendance", icon: Clock },
	{ name: "Leave Management", href: "/leave", icon: Calendar },
	{ name: "Payroll", href: "/payroll", icon: DollarSign },
	{ name: "Recruitment", href: "/recruitment", icon: UserPlus },
	{ name: "Reports", href: "/reports", icon: FileText },
	{ name: "Analytics", href: "/analytics", icon: BarChart3 },
	{ name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
	return (
		<div className="bg-white w-64 min-h-screen shadow-lg">
			<div className="p-6">
				<h1 className="text-2xl font-bold text-gray-800">HRIS Dashboard</h1>
			</div>
			<nav className="mt-6">
				{navigation.map((item) => (
					<a key={item.name} href={item.href} className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors">
						<item.icon className="h-5 w-5 mr-3" />
						{item.name}
					</a>
				))}
			</nav>
		</div>
	);
}
