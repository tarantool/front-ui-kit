import { ReactNode } from 'react';
import { TreeFileItem } from './types';
declare type FileTreeElementProps = {
    active?: boolean;
    children?: ReactNode;
    className?: string;
    expanded?: boolean;
    file: TreeFileItem;
    level?: number;
    onDelete: (id: string) => void;
    onExpand: (id: string) => void;
    onFileCreate: (file: TreeFileItem) => void;
    onFileOpen: (id: string) => void;
    onFolderCreate: (file: TreeFileItem) => void;
    onRename: (id: string) => void;
};
export declare const FileTreeElement: ({ active, className, children, expanded, file, level, onDelete, onExpand, onFileCreate, onFileOpen, onFolderCreate, onRename, }: FileTreeElementProps) => JSX.Element;
export {};
