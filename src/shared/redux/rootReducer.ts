import { combineSlices } from '@reduxjs/toolkit';
import { LazyLoaderSlices } from './types';

export const rootReducer =
  combineSlices().withLazyLoadedSlices<LazyLoaderSlices>();
