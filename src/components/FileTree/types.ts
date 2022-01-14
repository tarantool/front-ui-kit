export type FileItem = {
  fileId: string;
  path: string;
  initialPath?: string;
  parentPath: string;
  fileName: string;
  initialContent: string | null;
  saved: boolean;
  type: 'file' | 'folder';
  loading?: boolean;
  column?: 0;
  line?: 0;
  scrollPosition?: 0;
  deleted?: boolean;
};

export type TreeFileItem = FileItem & {
  items: Array<TreeFileItem>;
};
