import { StoryblokComponent, storyblokEditable } from '@storyblok/react';
import { BlokData, Components } from './utils';

export default function Page({ blok }: BlokData<Components.Page>) {
    return (
        <main {...storyblokEditable(blok)}>
            {blok.body?.map((nestedBlok, index) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid || index} />
            ))}
        </main>
    );
}
