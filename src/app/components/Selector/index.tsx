import React from 'react';
import { Button, ButtonGroup } from '@material-ui/core';
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
  <ButtonGroup color="primary" aria-label="outlined primary button group">
    {items?.map(item => <Button key={item.id} onClick={onClick} value={item.uri}>{item.label}</Button>)}
  </ButtonGroup>
);

