import { StoryblokComponent, storyblokEditable } from '@storyblok/react';
import { BlokData, Components } from './utils';

export default function Grid({ blok }: BlokData<Components.Grid>) {
    return (
        <div {...storyblokEditable(blok)} className="grid flex flex-col md:flex-row">
            {blok.columns?.map((nestedBlok) => (
                <div className="w-full md:w-1/2" key={nestedBlok._uid}>
                    <StoryblokComponent blok={nestedBlok} />
                </div>
            ))}
        </div>
    );
}
