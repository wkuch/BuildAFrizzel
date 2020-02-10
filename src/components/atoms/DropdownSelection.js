import React from 'react';
import { Pane, Button, Heading, SelectMenu } from 'evergreen-ui'


export const DropdownSelection = (props) => (
  <Pane display="flex" padding={8} borderRadius={3}>
    <Pane flex={1} alignItems="center" display="flex">
      <Heading>{props.label}</Heading>
    </Pane>
    <Pane>
      <Pane>
        <SelectMenu
          title={props.label}
          options={props.options}
          selected={props.selected}
          onSelect={item => props.onSelect(item.value)}
        >
          <Button>{(props.useSelectedAsButtonText && props.selected) || props.fallbackButtonText}</Button>
        </SelectMenu>
      </Pane>
    </Pane>
  </Pane>
)