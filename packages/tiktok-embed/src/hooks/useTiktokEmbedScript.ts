import * as React from 'react';

const TIKTOK_EMBED_SCRIPT = 'https://www.tiktok.com/embed.js';
const EMBED_SCRIPT_ID = 'tiktok-embed-script';

const injectEmbedScript = (args: {
  onLoad: () => void;
  onLoadStart: () => void;
  onError: () => void;
}) => {
  if (typeof document !== 'undefined') {
    let titkokScript = document.getElementById(
      EMBED_SCRIPT_ID
    ) as HTMLScriptElement | null;

    if (!titkokScript) {
      titkokScript = document.createElement('script');
      titkokScript.id = EMBED_SCRIPT_ID;
      titkokScript.src = TIKTOK_EMBED_SCRIPT;
      titkokScript.async = true;
    }

    titkokScript.onload = () => {
      console.log('loaded');
      args.onLoad();
    };

    titkokScript.onloadstart = () => {
      console.log('load start');
      args.onLoadStart();
    };

    titkokScript.onerror = () => {
      console.log('load error');
      args.onError();
    };

    document.head.appendChild(titkokScript);
  }
};

type Props = {
  when?: boolean | (() => boolean);
};

const useTiktokEmbedscript = (props?: Props) => {
  const [loaded, setLoaded] = React.useState(false);

  const shouldInject = props?.when
    ? typeof props.when === 'boolean'
      ? props.when
      : props.when()
    : false;

  React.useEffect(() => {
    if (shouldInject) {
      injectEmbedScript({
        onLoad: () => {
          setLoaded(true);
        },
        onLoadStart: () => {},
        onError: () => {
          setLoaded(false);
        },
      });
    }
  }, [shouldInject]);

  return [loaded];
};

export default useTiktokEmbedscript;
