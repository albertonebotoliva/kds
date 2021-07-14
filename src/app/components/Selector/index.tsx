import React from 'react';
import { Button } from '@material-ui/core';
import { Selector as TSelector } from 'app/models';

export namespace Selector {
  export interface Props {
    items: Array<TSelector>,
    onClick: (e: React.SyntheticEvent<HTMLButtonElement>) => void
  }
}

export const Selector = ({
  items,
  onClick
}: Selector.Props): JSX.Element => (
  <div>
    {items?.map(item => <Button key={item.id} onClick={onClick} value={item.uri}>{item.label}</Button>)}
  </div>
);

