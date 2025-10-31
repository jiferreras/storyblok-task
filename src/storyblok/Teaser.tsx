import { storyblokEditable } from '@storyblok/react';
import { BlokData, Components } from './utils';

export default function Teaser({ blok }: BlokData<Components.Teaser>) {
    const imgUrl = blok.image.filename;

    return (
        <div {...storyblokEditable(blok)} className="teaser w-full md:w-auto flex flex-col items-center mb-12">
            <div
                style={{ backgroundImage: `url(${imgUrl})` }}
                className="w-full mb-4 bg-cover bg-center min-h-[200px] flex justify-center items-end mb-8"
            >
            </div>
            {blok.headline && <h2 className="text-center text-6xl font-bold">{blok.headline}</h2>}
        </div>
    );
}
