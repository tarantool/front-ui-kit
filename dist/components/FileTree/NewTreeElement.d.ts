import React, { ReactNode } from 'react';
declare type NewTreeElementProps = {
    active?: boolean;
    children?: ReactNode;
    className?: string;
    expanded?: boolean;
    filePaths: string[];
    parentPath?: string;
    initialValue?: string;
    level?: number;
    type: 'file' | 'folder';
    onCancel: () => void;
    onConfirm: (id: string) => void;
};
export declare type NewTreeElementState = {
    value: string;
    fileExistsError: boolean;
};
export declare class NewTreeElement extends React.Component<NewTreeElementProps, NewTreeElementState> {
    constructor(props: NewTreeElementProps);
    isFileExists: (name: string, parentPath: string | null | undefined, initial: string | null | undefined, paths: string[]) => boolean;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleBlur: () => void;
    handleKeyPress: (event: React.KeyboardEvent) => void;
    render(): JSX.Element;
}
export {};
