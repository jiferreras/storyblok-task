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
import { Link } from 'react-router';
import { useState } from 'react';

export type ArticleLink = {
    id: number;
    title: string;
    slug: string;
};

export default function SidePanel({ articles }: { articles: ArticleLink[] }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Sheet open={isOpen} onOpenChange={o => setIsOpen(o)}>
            <SheetTrigger asChild>
                <Button variant="outline">
                    <Menu className="mr-2 h-4 w-4" />
                    Articles
                </Button>
            </SheetTrigger>
            <SheetContent side="left">
                <SheetHeader>
                    <SheetTitle>Articles</SheetTitle>
                    <SheetDescription></SheetDescription>
                </SheetHeader>
                <div className="mt-4 space-y-1">
                    {articles.map((a) => (
                        <Link key={a.id} to={`/${a.slug}`} onClick={() => setIsOpen(false)} className="block rounded-md px-3 py-2 text-sm hover:bg-accent">
                            {a.title}
                        </Link>
                    ))}
                </div>
            </SheetContent>
        </Sheet>
    );
}
