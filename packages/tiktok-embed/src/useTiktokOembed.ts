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

const useTiktokOembed = (): Response => {
  const [loading] = React.useState<boolean>(false);
  const [data] = React.useState<TiktokOembedResponse | null>(null);
  const [error] = React.useState(null);

  return {loading, data, error};
};

export default useTiktokOembed;
