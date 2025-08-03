// src/components/attendance/AttendanceCalendar.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Attendance } from "../../types";

interface AttendanceCalendarProps {
	attendance: Attendance[];
	month: number;
	year: number;
}

export function AttendanceCalendar({ attendance, month, year }: AttendanceCalendarProps) {
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

	// Generate calendar days for the month
	const daysInMonth = new Date(year, month + 1, 0).getDate();
	const firstDayOfMonth = new Date(year, month, 1).getDay();

	const calendarDays = [];

	// Add empty cells for days before the first day of the month
	for (let i = 0; i < firstDayOfMonth; i++) {
		calendarDays.push(null);
	}

	// Add days of the month
	for (let day = 1; day <= daysInMonth; day++) {
		const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
		const dayAttendance = attendance.find((a) => a.date === dateStr);
		calendarDays.push({ day, attendance: dayAttendance });
	}

	return (
		<Card>
			<CardHeader>
				<CardTitle>Attendance Calendar</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="grid grid-cols-7 gap-2 mb-4">
					{["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
						<div key={day} className="text-center font-medium text-sm text-gray-500 py-2">
							{day}
						</div>
					))}
				</div>
				<div className="grid grid-cols-7 gap-2">
					{calendarDays.map((dayData, index) => (
						<div key={index} className="aspect-square border rounded p-2">
							{dayData && (
								<>
									<div className="text-sm font-medium">{dayData.day}</div>
									{dayData.attendance && <Badge className={`text-xs ${getStatusColor(dayData.attendance.status)}`}>{dayData.attendance.status}</Badge>}
								</>
							)}
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
