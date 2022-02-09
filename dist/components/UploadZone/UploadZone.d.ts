import { DropzoneOptions } from 'react-dropzone';
export declare type UploadZoneHandler = DropzoneOptions['onDrop'];
export interface UploadZoneProps {
    accept?: string;
    handler?: UploadZoneHandler;
    name: string;
    multiple?: boolean;
    className?: string;
    title?: string;
    subTitle?: string;
    loading?: boolean;
}
export declare const UploadZone: ({ accept, handler, name, multiple, className, title, subTitle, loading, }: UploadZoneProps) => JSX.Element;
