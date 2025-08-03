// src/components/layout/Header.tsx
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bell, Menu, Search } from "lucide-react";

export function Header() {
	return (
		<header className="bg-white shadow-sm border-b px-6 py-4">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-4">
					<Button variant="ghost" size="sm" className="lg:hidden">
						<Menu className="h-5 w-5" />
					</Button>
					<div className="hidden md:flex items-center gap-2">
						<Search className="h-4 w-4 text-gray-400" />
						<input type="text" placeholder="Search..." className="border-none outline-none bg-gray-50 px-3 py-2 rounded-md" />
					</div>
				</div>

				<div className="flex items-center gap-4">
					<Button variant="ghost" size="sm">
						<Bell className="h-5 w-5" />
					</Button>
					<Avatar>
						<AvatarFallback>AD</AvatarFallback>
					</Avatar>
				</div>
			</div>
		</header>
	);
}
