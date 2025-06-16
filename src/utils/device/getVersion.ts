import { sdkConfigs } from '../../sdkConfigs'

const getVersion = () =>
  `${sdkConfigs.configs.version_name}-${"1.0.1"}`;

export default getVersion;
