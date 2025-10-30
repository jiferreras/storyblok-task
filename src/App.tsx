import { StoryblokComponent, useStoryblok, useStoryblokBridge } from '@storyblok/react';
import { useParams } from 'react-router';
import Header from './components/Header';

export default function App() {
    const currentYear = new Date().getFullYear();
    const { '*': slug } = useParams();
    const story = useStoryblok(slug || 'home', {
        version: 'draft'
    });
    if (!story?.content) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Header articles={[]} />
            <main className="container mx-auto px-4 py-6">
                <StoryblokComponent blok={story.content} />
            </main>
            <footer className="border-t py-6 text-center text-sm text-muted-foreground">All rights reserved © {currentYear}</footer>
        </>
    );
}
