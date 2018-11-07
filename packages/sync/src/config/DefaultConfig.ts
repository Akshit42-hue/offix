import { INSTANCE, ServiceConfiguration } from "@aerogear/core";
import { ConfigError } from "./ConfigError";
import { IDataSyncConfig } from "./DataSyncClientConfig";

declare var window: any;

// Legacy platform configuration that needs to be merged into sync configuration
const TYPE: string = "sync";

/**
 * Class for managing user and default configuration.
 * Default config is applied on top of user provided configuration
 */
export class SyncConfig implements IDataSyncConfig {
  // Explicitly use id as id field :)
  public dataIdFromObject = "id";
  // Use browser storage by default
  public storage = window.localStorage;

  constructor() {
    // Default config can depend on parameters
  }

  /**
   * Method used to join user configuration with defaults
   */
  public merge(clientOptions?: IDataSyncConfig): IDataSyncConfig {
    return Object.assign(this, clientOptions);
  }

  /**
   * Platform configuration that is generated and supplied by OpenShift
   *
   * @param config user supplied configuration
   */
  public applyPlatformConfig(config: IDataSyncConfig) {
    const configuration = INSTANCE.getConfigByType(TYPE);
    if (configuration && configuration.length > 0) {
      const serviceConfiguration: ServiceConfiguration = configuration[0];
      config.httpUrl = serviceConfiguration.url;
    }
  }

  public validate(userConfig: IDataSyncConfig) {
    if (userConfig.httpUrl) {
      throw new ConfigError("Missing server URL", "httpUrl");
    }
  }
}
