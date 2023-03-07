import * as React from 'react';

const TIKTOK_EMBED_SCRIPT = 'https://www.tiktok.com/embed.js';
const EMBED_SCRIPT_ID = 'tiktok-embed-script';

const injectEmbedScript = () => {
  if (typeof document !== 'undefined') {
    const script = document.createElement('script');
    script.id = EMBED_SCRIPT_ID;
    script.src = TIKTOK_EMBED_SCRIPT;
    script.async = true;
  }
};

const useTiktokEmbedscript = () => {};

export default useTiktokEmbedscript;
