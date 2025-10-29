import { StoryblokComponent, storyblokEditable } from '@storyblok/react';
import { BlokData, Components } from './utils';

export default function Grid({ blok }: BlokData<Components.Grid>) {
    return (
        <div {...storyblokEditable(blok)} className="grid">
            {blok.columns?.map((nestedBlok) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
        </div>
    );
}
