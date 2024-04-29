import { atom, map } from 'nanostores';

export interface CheckMap {
    [key:string|number]:{
        [key:string|number]:boolean;
    };
}
export const isChecked = atom(false);

export const checkMap = map<CheckMap>();