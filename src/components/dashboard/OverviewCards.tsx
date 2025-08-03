// src/components/dashboard/OverviewCards.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Clock, Calendar, DollarSign } from "lucide-react";

interface OverviewCardsProps {
	totalEmployees: number;
	presentToday: number;
	pendingLeaves: number;
	monthlyPayroll: number;
}

export function OverviewCards({ totalEmployees, presentToday, pendingLeaves, monthlyPayroll }: OverviewCardsProps) {
	const cards = [
		{
			title: "Total Employees",
			value: totalEmployees.toString(),
			icon: Users,
			color: "text-blue-600",
		},
		{
			title: "Present Today",
			value: presentToday.toString(),
			icon: Clock,
			color: "text-green-600",
		},
		{
			title: "Pending Leaves",
			value: pendingLeaves.toString(),
			icon: Calendar,
			color: "text-orange-600",
		},
		{
			title: "Monthly Payroll",
			value: `$${monthlyPayroll.toLocaleString()}`,
			icon: DollarSign,
			color: "text-purple-600",
		},
	];

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
			{cards.map((card, index) => (
				<Card key={index}>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">{card.title}</CardTitle>
						<card.icon className={`h-4 w-4 ${card.color}`} />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{card.value}</div>
					</CardContent>
				</Card>
			))}
		</div>
	);
}
