import { storyblokEditable } from '@storyblok/react';
import { BlokData, Components } from './utils';

export default function TextBlock({ blok }: BlokData<Components.TextBlock>) {
    if (!blok.content) {
        return null;
    }

    const content = blok.content.content.map((item) => (
        item.content.map((item, index) => (
            <p key={index} {...item.attrs} className='mb-4 max-w-2/4 text-center mx-auto text-justify'>{item.text}</p>
        ))
    ));

    return (
        <div {...storyblokEditable(blok)} className="textblock">
            <div className="prose max-w-none">
                {content}
            </div>
        </div>
    );
}

