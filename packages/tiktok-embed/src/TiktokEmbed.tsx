import * as React from 'react';
import useTiktokOembed from './useTiktokOembed';

export type Props = {
  url: string;
};

const TiktokEmbed: React.FC<Props> = (props) => {
  const {loading, data, error} = useTiktokOembed({url: props.url});

  return null;
};

export default TiktokEmbed;
