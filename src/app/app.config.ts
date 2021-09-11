import { InjectionToken } from '@angular/core';
import { environment } from '../environments/environment';

export class AppConfig {
  baseHref: string;
  apiUrl: string;
  version: string;
}

export const APP_WINDOW = new InjectionToken<Window>('app.window');
export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export class AppConfigService {

  loadAppConfig(): Promise<AppConfig> {
    const configJson = this.getConfigFileName(environment);
    return fetch(`assets/config/${configJson}`)
      .then(data => data.json())
      .then(data => {
        const port = Number.parseInt(location.port, 10) - 1000;
        const appConfig = data as AppConfig;
        appConfig.apiUrl = appConfig.apiUrl.replace('__mockport__', port.toString());
        return appConfig;
      });
  }

  getConfigFileName(env: { production: boolean }): string {
    const configJson = env.production ? 'config.json' : 'config.debug.json';
    return configJson;
  }
}
