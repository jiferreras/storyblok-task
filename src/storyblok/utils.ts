import { SbBlokData } from '@storyblok/react';
import * as Components from '../.storyblok/types/288143870315239/storyblok-components';

type ComponentData<T> = SbBlokData & T;
export type BlokData<T> = { blok: ComponentData<T> };
export { Components };
