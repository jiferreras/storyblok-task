import { getStoryblokApi, StoryblokComponent, useStoryblok, useStoryblokApi, useStoryblokBridge, useStoryblokRichText } from '@storyblok/react';
import { useParams } from 'react-router';
import Header from './components/Header';
import { Suspense, useEffect, useState } from 'react';
import { ArticleLink } from './components/SidePanel';
import { ThemeProvider } from "@/components/ThemeProvider"
import React from 'react';

export default function App() {
    const currentYear = new Date().getFullYear();
    const { '*': slug } = useParams();
    const story = useStoryblok(slug || 'home', {
        version: 'draft'
    });

    const [articles, setArticles] = useState<ArticleLink[]>([]);

    useEffect(() => {
        async function getArticles() {
            const { data } = await getStoryblokApi().getStories();
            const stories: ArticleLink[] = []
            data.stories.forEach(story => {
                stories.push({
                    id: story.id,
                    title: story.name,
                    slug: story.full_slug
                })
            });
            stories.reverse()
            setArticles(stories)
        }

        getArticles();
    }, []);

    return (
        <ThemeProvider>
            <Header articles={articles} />
            <main className="container mx-auto px-4 py-6">
                {
                    story?.content ? <StoryblokComponent blok={story.content} />
                        : <div>Loading...</div>
                }
            </main>
            <footer className="border-t py-6 text-center text-sm text-muted-foreground">All rights reserved © {currentYear}</footer>
        </ThemeProvider>
    );
}
