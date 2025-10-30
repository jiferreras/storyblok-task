import { Menu } from 'lucide-react';
import { Button } from './ui/button';
import {
	Sheet,
	SheetTrigger,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetDescription,
} from './ui/sheet';

export type ArticleLink = {
	id: string;
	title: string;
	slug: string;
};

export default function SidePanel({ articles }: { articles: ArticleLink[] }) {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="outline" className="md:hidden">
					<Menu className="mr-2 h-4 w-4" />
					Articles
				</Button>
			</SheetTrigger>
			<SheetContent side="left">
				<SheetHeader>
					<SheetTitle>Articles</SheetTitle>
					<SheetDescription>Select a post to read.</SheetDescription>
				</SheetHeader>
				<div className="mt-4 space-y-1">
					{articles.map((a) => (
						<a key={a.id} href={`/${a.slug}`} className="block rounded-md px-3 py-2 text-sm hover:bg-accent">
							{a.title}
						</a>
					))}
				</div>
			</SheetContent>
		</Sheet>
	);
}
