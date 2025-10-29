import { storyblokEditable } from '@storyblok/react';
import { BlokData, Components } from './utils';

export default function Teaser({ blok }: BlokData<Components.Teaser>) {
    return (
        <div {...storyblokEditable(blok)} className="teaser">
            <h2>{blok.headline}</h2>
        </div>
    );
}
