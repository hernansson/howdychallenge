export const getKey: (routeWithKey: string) => string = routeWithKey => {
  return routeWithKey.split('-')[0];
};
