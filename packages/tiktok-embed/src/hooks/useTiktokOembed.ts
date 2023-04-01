import * as React from 'react';
import {getTiktokOembed} from '../getTiktokOembed';
import {TiktokOembedResponse} from '../tiktok.types';

type Args = {
  url: string;
};

type Response = {
  loading: boolean;
  data: TiktokOembedResponse | null;
  error: unknown;
};

const useTiktokOembed = (args: Args): Response => {
  const {url: urlArg} = args;
  const [loading, setLoading] = React.useState<boolean>(false);
  const [data, setData] = React.useState<TiktokOembedResponse | null>(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    //
    if (typeof window !== 'undefined') {
      setLoading(true);
      getTiktokOembed(urlArg)
        .then((oembed) => {
          setLoading(false);
          setData(oembed);
          setError(null);
        })
        .catch((err) => {
          setLoading(false);
          setData(null);
          setError(err);
        });
    }
  }, [urlArg]);

  return {loading, data, error};
};

export default useTiktokOembed;
