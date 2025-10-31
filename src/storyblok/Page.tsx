import { StoryblokComponent, storyblokEditable } from '@storyblok/react';
import { BlokData, Components } from './utils';

export default function Page({ blok }: BlokData<Components.Page>) {
    return (
        <main {...storyblokEditable(blok)} className="container lg:max-w-1/2 max-w-full mx-auto px-4 py-6">
            {blok.body?.map((nestedBlok, index) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid || index} />
            ))}
        </main>
    );
}
