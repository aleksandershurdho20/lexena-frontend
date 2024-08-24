import { Auth } from "src/pages"

import { FC } from 'react';

type Routes = {
  path: string;
  component: FC;
}
export const routes: Routes[] = [
    {
      path: '/',
      component: Auth,
    },
  ];