import {TiktokOembedResponse} from './tiktok.types';

export const getTiktokOembed = async (
  url: string
): Promise<TiktokOembedResponse> => {
  try {
    const resp = await fetch(`https://www.tiktok.com/oembed?url=${url}`);
    if (!resp.ok) {
      throw Error(resp.statusText);
    }
    const oembed: TiktokOembedResponse = await resp.json();
    return oembed;
  } catch (err) {
    throw err;
  }
};
