import { storyblokEditable } from '@storyblok/react';
import { BlokData, Components } from './utils';

export default function TextBlock({ blok }: BlokData<Components.TextBlock>) {
    if (!blok.content) {
        return null;
    }

    const content = blok.content.content.map((item) => (
        item.content?.map((item, index) => (
            <p key={index} {...item.attrs} className='mb-4 max-w-none mx-auto text-justify p-4 -mt-6'>{item.text}</p>
        )) || null
    ));

    return (
        <div {...storyblokEditable(blok)} className="textblock">
            <div className="prose max-w-none">
                {content}
            </div>
        </div>
    );
}

