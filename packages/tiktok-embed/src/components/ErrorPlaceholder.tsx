import * as React from 'react';

type Props = {
  url: string;
};

const ErrorPlaceholder: React.FC<Props> = React.memo<Props>((props) => {
  const {url} = props;

  return (
    <div
      style={{
        backgroundColor: '#f7f7f7',
        padding: 20,
        textAlign: 'center',
        border: '1px solid #eeeeee',
        borderRadius: 8,
      }}
    >
      <p style={{margin: 0, marginBottom: 10}}>Failed on loading embed for:</p>
      <a href={url} target="_blank">
        {url}
      </a>
    </div>
  );
});

export default ErrorPlaceholder;
