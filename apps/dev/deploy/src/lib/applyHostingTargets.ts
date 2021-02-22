import { ensureParam, exec } from '@seed/dev/utils';
import { getFirebaseDeployAuthParams } from '../+utils/getFirebaseDeployAuthParams';

export const applyHostingTargets = (affectedApps: string[]): void => {
  const map: { [key: string]: string } = {
    'front-admin-panel': ensureParam(
      'FIREBASE_HOSTING_TARGET_ADMIN_PANEL',
      process.env.FIREBASE_HOSTING_TARGET_ADMIN_PANEL,
    ),
    'front-web-client': ensureParam(
      'FIREBASE_HOSTING_TARGET_WEB_CLIENT',
      process.env.FIREBASE_HOSTING_TARGET_WEB_CLIENT,
    ),
  };

  const auth = getFirebaseDeployAuthParams();

  affectedApps.forEach((appName: string) => {
    const target = map[appName];
    if (target) {
      const applyTargetCommand = `firebase target:apply hosting ${appName} ${target} ${auth}`;
      exec(applyTargetCommand);
    }
  });
};
