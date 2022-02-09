import React from 'react';
import type { FileItem, TreeFileItem } from './types';
export interface FileTreeProps {
    className?: string;
    filePaths: Array<string>;
    fileOperation?: 'rename' | 'createFile' | 'createFolder' | 'delete' | null;
    operationObject?: string | null | undefined;
    tree: Array<TreeFileItem>;
    selectedFile?: FileItem | null | undefined;
    initiallyExpanded?: boolean;
    onFileCreate: (parentPath: string) => void;
    onDelete: (id: string) => void;
    onFileOpen: (id: string) => void;
    onFolderCreate: (parentPath: string) => void;
    onRename: (id: string) => void;
    onOperationConfirm: (value: string) => void;
    onOperationCancel: () => void;
}
export declare type FileTreeState = {
    collapsedEntries: string[];
    expandedEntries: string[];
};
export declare class FileTree extends React.Component<FileTreeProps, FileTreeState> {
    state: FileTreeState;
    expandEntry: (id: string, expand?: boolean | undefined) => void;
    handleFolderCreate: (file: TreeFileItem) => void;
    handleFileCreate: (file: TreeFileItem) => void;
    render(): JSX.Element;
}
