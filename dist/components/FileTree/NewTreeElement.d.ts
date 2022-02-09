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
    inputRef: React.RefObject<any>;
    componentDidMount(): void;
    isFileExists: (name: string, parentPath: string | null | undefined, initial: string | null | undefined, paths: string[]) => boolean;
    handleChange: (event: InputEvent) => void;
    handleBlur: () => void;
    handleKeyPress: (event: KeyboardEvent) => void;
    render(): JSX.Element;
}
export {};
