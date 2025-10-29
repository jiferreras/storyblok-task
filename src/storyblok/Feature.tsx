import { storyblokEditable } from '@storyblok/react';
import { BlokData, Components } from './utils';

export default function Feature({ blok }: BlokData<Components.Feature>) {
    return (
        <div {...storyblokEditable(blok)} className="feature">
            <span>{blok.name}</span>
        </div>
    );
}
