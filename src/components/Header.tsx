import { BookOpen, Search } from 'lucide-react';
import Navbar from './Navbar';
import { Button } from '@/components/ui/button';
import SidePanel, { type ArticleLink } from './SidePanel';

export default function Header({ articles = [] }: { articles?: ArticleLink[] }) {
    return (
        <header className="sticky z-40 w-full border-b bg-background/80 backdrop-blur supports-backdrop-filter:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <div className="flex items-center gap-3">
                    <SidePanel articles={articles} />
                </div>
                <Navbar />
            </div>
        </header>
    );
}
