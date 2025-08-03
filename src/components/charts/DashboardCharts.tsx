// src/components/charts/DashboardCharts.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";

interface DashboardChartsProps {
	attendanceData: any[];
	departmentData: any[];
	leaveData: any[];
}

export function DashboardCharts({ attendanceData, departmentData, leaveData }: DashboardChartsProps) {
	const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
			{/* Attendance Trend */}
			<Card>
				<CardHeader>
					<CardTitle>Attendance Trend</CardTitle>
				</CardHeader>
				<CardContent>
					<ResponsiveContainer width="100%" height={300}>
						<LineChart data={attendanceData}>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="date" />
							<YAxis />
							<Tooltip />
							<Legend />
							<Line type="monotone" dataKey="present" stroke="#8884d8" strokeWidth={2} />
							<Line type="monotone" dataKey="absent" stroke="#82ca9d" strokeWidth={2} />
						</LineChart>
					</ResponsiveContainer>
				</CardContent>
			</Card>

			{/* Department Distribution */}
			<Card>
				<CardHeader>
					<CardTitle>Department Distribution</CardTitle>
				</CardHeader>
				<CardContent>
					<ResponsiveContainer width="100%" height={300}>
						<PieChart>
							<Pie data={departmentData} cx="50%" cy="50%" labelLine={false} label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} outerRadius={80} fill="#8884d8" dataKey="value">
								{departmentData.map((entry, index) => (
									<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
								))}
							</Pie>
							<Tooltip />
						</PieChart>
					</ResponsiveContainer>
				</CardContent>
			</Card>

			{/* Leave Statistics */}
			<Card>
				<CardHeader>
					<CardTitle>Leave Statistics</CardTitle>
				</CardHeader>
				<CardContent>
					<ResponsiveContainer width="100%" height={300}>
						<BarChart data={leaveData}>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="month" />
							<YAxis />
							<Tooltip />
							<Legend />
							<Bar dataKey="approved" fill="#8884d8" />
							<Bar dataKey="pending" fill="#82ca9d" />
							<Bar dataKey="rejected" fill="#ffc658" />
						</BarChart>
					</ResponsiveContainer>
				</CardContent>
			</Card>

			{/* Monthly Payroll */}
			<Card>
				<CardHeader>
					<CardTitle>Monthly Payroll Trend</CardTitle>
				</CardHeader>
				<CardContent>
					<ResponsiveContainer width="100%" height={300}>
						<LineChart data={attendanceData}>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="month" />
							<YAxis />
							<Tooltip />
							<Legend />
							<Line type="monotone" dataKey="payroll" stroke="#8884d8" strokeWidth={2} />
						</LineChart>
					</ResponsiveContainer>
				</CardContent>
			</Card>
		</div>
	);
}
