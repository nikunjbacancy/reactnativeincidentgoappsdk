import replace from 'lodash/replace';
import RNFetchBlob from 'rn-fetch-blob';

import { isIos } from '../device';

const deleteLocalVideo = (filePath: string): Promise<void> => {
  const path = isIos ? replace(filePath, 'file://', '') : filePath;
  return RNFetchBlob.fs.unlink(path);
};

export default deleteLocalVideo;
