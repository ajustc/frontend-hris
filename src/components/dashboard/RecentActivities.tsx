// src/components/dashboard/RecentActivities.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Activity {
	id: string;
	type: "leave" | "attendance" | "payroll" | "employee";
	description: string;
	timestamp: string;
	status?: string;
}

interface RecentActivitiesProps {
	activities: Activity[];
}

export function RecentActivities({ activities }: RecentActivitiesProps) {
	const getStatusColor = (status?: string) => {
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

	return (
		<Card>
			<CardHeader>
				<CardTitle>Recent Activities</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					{activities.map((activity) => (
						<div key={activity.id} className="flex items-center justify-between">
							<div className="flex-1">
								<p className="text-sm font-medium">{activity.description}</p>
								<p className="text-xs text-gray-500">{activity.timestamp}</p>
							</div>
							{activity.status && <Badge className={getStatusColor(activity.status)}>{activity.status}</Badge>}
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
