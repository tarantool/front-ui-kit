import type { GenericIconProps } from '../../Icon';
declare type IconFolderProps = GenericIconProps & {
    opened?: boolean;
};
export declare const IconFolder: ({ className, onClick, opened }: IconFolderProps) => JSX.Element;
export declare const IconFolderOpened: (props: GenericIconProps) => JSX.Element;
export {};
