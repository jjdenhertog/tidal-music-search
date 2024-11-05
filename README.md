
# Tidal Music Search

[![Buy Me a Coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/jjdenhertog)

The `tidal-music-search` library provides an efficient way to search for tracks on Tidal. Building on [music-search](https://github.com/jjdenhertog/music-search), this library connects to Tidal's API to find tracks with configurable matching criteria, optimized for integration with Tidal’s music catalog.

## Table of Contents
- [Installation](#installation)
- [Connecting with Tidal](#connecting-with-tidal)
- [Usage](#usage)
- [Support](#support)

## Installation

Install the `tidal-music-search` library with npm:

```bash
npm install @jjdenhertog/tidal-music-search
```

## Connecting with Tidal

The library requires Tidal API credentials, which you can pass on while initializing the library.

```typescript
const tidalMusicSearch = new TidalMusicSearch({
  clientId: 'your_client_id',
  clientSecret: 'your_client_secret'
});
```

### Getting Tidal API Client ID and Secret

To obtain your Tidal API client ID and client secret, you need to register for access to the Tidal API. Visit the [Tidal Developer Portal](https://developer.tidal.com/) to apply for API access and retrieve your credentials.

## Usage

The `tidal-music-search` library provides a straightforward API to search for tracks based on specified criteria.

```typescript
import TidalMusicSearch, { TidalMusicSearchTrack } from '@jjdenhertog/tidal-music-search';

const tidalMusicSearch = new TidalMusicSearch({
  clientId: process.env.TIDAL_API_CLIENT_ID,
  clientSecret: process.env.TIDAL_API_CLIENT_SECRET
});

const searchItems: TidalMusicSearchTrack[] = [
{ id: '125', title: 'Billie Jean', album: 'Thriller', artists: ['Michael Jackson']},
  // Add more tracks as needed
];

async function searchTracks() {
  try {
    const searchResult = await tidalMusicSearch.search(searchItems);
    console.log(searchResult);
  } catch (error) {
    console.error('Error searching tracks:', error);
  }
}

searchTracks();
```

In this example, the `search` method is used to find tracks on Tidal that match the specified criteria.


### What is with the ID while searching?

You might notice that the search query must contain an ID
```typescript
const searchItems: TidalMusicSearchTrack[] = [
  { id: '125', title: 'Billie Jean', album: 'Thriller', artists: ['Michael Jackson']},
  // Add more tracks as needed
];

```

Most of the times when you're searching for a track you are doing it to match one library with the other. For example matching Spotify with Plex. The result after searching will contain the original search query including the id and the results. The results are all the tracks matching with the search query. With this approach you can trace back the results more easily.

If you do not need the id for this purpose, you can simply leave it empty: 
```typescript
{ id: '', title: 'Billie Jean', album: 'Thriller', artists: ['Michael Jackson']}
```


## Support

If this project assists you, consider supporting the developer:

[![Buy Me a Coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/jjdenhertog)

Your support helps improve and maintain this library.
