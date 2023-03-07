import * as React from 'react';
import useTiktokOembed from './useTiktokOembed';
import ErrorPlaceholder from './ErrorPlaceholder';

export type Props = {
  url: string;
};

const TiktokEmbed: React.FC<Props> = (props) => {
  const {loading, data, error} = useTiktokOembed({url: props.url});

  if (loading) {
    return null;
  }

  if (!data || error) {
    if (error) {
      console.error(error);
    }
    return <ErrorPlaceholder url={props.url} />;
  }

  return <div dangerouslySetInnerHTML={{__html: data.html}} />;
};

export default TiktokEmbed;
