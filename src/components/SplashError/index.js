// @flow
import * as React from 'react';
import { NonIdealState, NonIdealStateAction } from '../NonIdealState';
import defaultImage from '../../images/window-shocked.svg';
import { Button } from '../Button'
import { Modal } from '../Modal';
import { Text } from '../Text';


export type CommonSplashErrorProps = {
  title: string,
  description: string,
  details?: React.Node,
  children?: React.Node,
};

type Props = CommonSplashErrorProps & {
  image?: SVGGlyph,
}


export const SplashError = (
  {
    description,
    title,
    details,
    image,
    children
  }: Props
) => {
  const [showDetails, setShowDetails] = React.useState(false);
  const onCloseClick = () => setShowDetails(false);

  const commonProps = {
    isError: true,
    image: image || defaultImage,
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
        {!!details && <Text tag='div'>{details}</Text>}
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
