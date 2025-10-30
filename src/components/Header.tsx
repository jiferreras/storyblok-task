import { BookOpen, Search } from 'lucide-react';
import Navbar from './Navbar';
import { Button } from '@/components/ui/button';
import SidePanel, { type ArticleLink } from './SidePanel';

export default function Header({ articles = [] }: { articles?: ArticleLink[] }) {
    return (
        <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-backdrop-filter:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <div className="flex items-center gap-3">
                    <SidePanel articles={articles} />
                    <a href="/" className="flex items-center gap-2 font-semibold">
                        <BookOpen className="h-5 w-5" />
                        <span>Enterprise Blog</span>
                    </a>
                </div>

                <Navbar />

                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" aria-label="Search">
                        <Search className="h-4 w-4" />
                    </Button>
                    <Button>Subscribe</Button>
                </div>
            </div>
        </header>
    );
}
