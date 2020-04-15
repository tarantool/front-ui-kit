// @flow
import * as React from 'react';
import { NonIdealState, NonIdealStateAction } from '../NonIdealState';
import image from '../../images/window-shocked.svg';
import { Button } from '../Button'
import { Modal } from '../Modal';


type Props = {
  title: string,
  description: string,
  details?: React.Node,
  children?: React.Node,
};

export const SplashError = (
  {
    description,
    title,
    details,
    children
  }: Props
) => {
  const [showDetails, setShowDetails] = React.useState(false);
  const onCloseClick = () => setShowDetails(false);

  const commonProps = {
    isError: true,
    image,
    title,
    description,
    children
  };
  return <>
    {showDetails &&
      <Modal
        title={title}
        onClose={onCloseClick}
        footerControls={[
          <Button intent={'primary'} onClick={onCloseClick}>Close</Button>
        ]}
      >
        {details}
      </Modal>
    }

    {details
      ? (
        <NonIdealStateAction
          {...commonProps}
          actionText="Details"
          onActionClick={() => setShowDetails(true)}
        />
      ) : (
        <NonIdealState
          {...commonProps}
        />
      )
    }
  </>;
}
