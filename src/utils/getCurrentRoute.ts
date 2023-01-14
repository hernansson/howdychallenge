import { getKey } from './getKey';

export const getCurrentRoute: (navigation) => string = navigation => {
  const history = navigation.getState().history?.filter(r => r.type == 'route');
  const lastIndex = history?.length - 1;
  const currentRoute = lastIndex ? getKey(history[lastIndex]['key']) : '';
  return currentRoute;
};
