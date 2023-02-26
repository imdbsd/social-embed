import * as React from 'react';
import {TiktokOembedResponse} from './tiktok.types';

type Args = {
  url: string;
};

type Response = {
  loading: boolean;
  data: TiktokOembedResponse | null;
  error: unknown;
};

const useTiktokOembed = (args: Args): Response => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [data, setData] = React.useState<TiktokOembedResponse | null>(null);
  const [error, setError] = React.useState(null);

  return {loading, data, error};
};

export default useTiktokOembed;
