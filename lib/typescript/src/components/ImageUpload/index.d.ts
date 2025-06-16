import { FC } from 'react';
export declare enum PortraitMessageType {
    UploadSuccess = 1,
    UploadFail = 2,
    DeleteSuccess = 3,
    DeleteFail = 4
}
interface Props {
    portraitUrl?: string;
    onUpload: any;
    onDelete?: any;
    actionInfoType: PortraitMessageType | undefined;
}
declare const ImageUpload: FC<Props>;
export default ImageUpload;
