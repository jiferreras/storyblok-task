import {
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuTrigger,
	NavigationMenuContent,
	NavigationMenuLink,
	NavigationMenuViewport,
} from './ui/navigation-menu';

export default function Navbar() {
	return (
		<nav className="hidden w-full md:block">
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuTrigger>Products</NavigationMenuTrigger>
						<NavigationMenuContent>
							<div className="grid gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
								<a className="rounded-md border p-4 hover:bg-accent" href="#">Platform</a>
								<a className="rounded-md border p-4 hover:bg-accent" href="#">Analytics</a>
								<a className="rounded-md border p-4 hover:bg-accent" href="#">Integrations</a>
								<a className="rounded-md border p-4 hover:bg-accent" href="#">Security</a>
							</div>
						</NavigationMenuContent>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink className="rounded-md px-4 py-2 hover:bg-accent" href="#features">
							Features
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink className="rounded-md px-4 py-2 hover:bg-accent" href="#pricing">
							Pricing
						</NavigationMenuLink>
					</NavigationMenuItem>
				</NavigationMenuList>
				<NavigationMenuViewport />
			</NavigationMenu>
		</nav>
	);
}
