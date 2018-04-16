import axios from 'axios';
import localforage from 'localforage';
import memoryDriver from 'localforage-memoryStorageDriver';
import { setup } from 'axios-cache-adapter';

const store = localforage.createInstance({
  driver: [localforage.INDEXEDDB, localforage.LOCALSTORAGE],
  name: 'my-cache'
});

const api = setup({
  cache: {
    maxAge: 15 * 60 * 1000,
    store
  }
});

export function getPokemons(params = {}) {
  return api.get('https://pokeapi.co/api/v2/pokemon/', { params });
}
