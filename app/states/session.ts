import { atom } from 'jotai';

import { getUserSession } from '~/apis/sessionApi';

export const sessionAtom = atom(getUserSession);
