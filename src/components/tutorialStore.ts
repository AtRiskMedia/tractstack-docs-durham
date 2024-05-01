import { atom, map } from 'nanostores';
import { persistentMap } from '@nanostores/persistent'

export interface CheckMap {
    [key:string|number]:{
        [key:string|number]:{checked:boolean; itemTitle:string; tutorial:string;};
    };
}
export const isChecked = atom(false);

export const checkMap = persistentMap<CheckMap>('checkmap:', {}, {
  encode: JSON.stringify,
  decode: JSON.parse,
})