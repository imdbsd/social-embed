# Tiktok Embed

React component for embed tiktok video.
Created based on tiktok [oembed](https://developers.tiktok.com/doc/embed-videos/) specification.

## Instalation

```
$ yarn add @imdbsd/tiktok-embed

or

$ npm install @imdbsd/tiktok-embed
```

## Usage

Using `TiktokEmbed` component

```typescript
// App.tsx

import {TiktokEmbed} from '@imdbsd/tiktok-embed';

const App = () => {
    ...

    return (
        ...
            <TiktokEmbed url="https://www.tiktok.com/@catslums/video/7201281217864535302" />
        ...
    )
}
```

Using `useTiktokOmbed` hooks

```typescript
import {useTiktokOembed} from '@imdbsd/tiktok-embed'

const App = () => {
    const url = "https://www.tiktok.com/@catslums/video/7201281217864535302"
    const {loading, data, error} = useTiktokOembed({ url });
    ...
}
```

## Props / Return

- TiktokEmbed

| props | type   | required/optional | description        |
| ----- | ------ | ----------------- | ------------------ |
| url   | string | required          | Tiktok content url |

- useTiktokOembed

Props 

| props | type   | required/optional | description        |
| ----- | ------ | ----------------- | ------------------ |
| url   | string | required          | Tiktok content url |

Return

| return  | type                        | description               |
| ------- | --------------------------- | ------------------------- |
| loading | boolean                     | Tiktok content url        |
| data    | TiktokOembedResponse / null | Tiktok oembed return type |
| error   | unknown                     | Error Response            |
