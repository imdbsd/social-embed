import * as React from 'react';
import useTiktokEmbedscript from '../hooks/useTiktokEmbedScript';
import useTiktokOembed from '../hooks/useTiktokOembed';
import ErrorPlaceholder from './ErrorPlaceholder';

export type Props = {
  url: string;
};

const TiktokEmbed: React.FC<Props> = (props) => {
  const {loading, data, error} = useTiktokOembed({url: props.url});
  useTiktokEmbedscript({
    when: Boolean(!loading && data),
  });

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
