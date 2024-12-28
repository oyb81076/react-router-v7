import { atom } from 'jotai';

import { getUserSession, UserSession } from '~/apis/sessionApi';

const wrap = atom<{ data: UserSession | null } | null>(null);

export const sessionAtom = atom((get) => {
  const s = get(wrap);
  if (s) return s.data;
  return getUserSession();
}, (_, set, data: UserSession | null) => {
  set(wrap, { data });
});
