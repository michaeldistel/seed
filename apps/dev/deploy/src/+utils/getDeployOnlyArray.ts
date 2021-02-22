export const getDeployOnlyArray = (affectedApps: string[]): string[] => {
  const map: { [key: string]: string } = {
    'front-admin-panel': 'hosting:front-admin-panel',
    'front-web-client': 'hosting:front-web-client',
    'back-cloud-functions': 'functions',
  };
  const initialValue: string[] = [];

  return affectedApps.reduce((result: string[], appName: string) => {
    const deployItem = map[appName];

    return deployItem ? [...result, deployItem] : result;
  }, initialValue);
};
