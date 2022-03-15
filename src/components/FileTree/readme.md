```jsx
import { FileTree } from '@tarantool.io/ui-kit';

const filePaths = [];
const tree = [
  {
    fileId: '01',
    path: 'folder',
    parentPath: '',
    fileName: 'folder',
    initialContent: null,
    saved: true,
    type: 'folder',
    items: [
      {
        fileId: '01-01',
        path: 'folder/file.ext',
        parentPath: 'folder',
        fileName: 'file.ext',
        initialContent: null,
        saved: true,
        type: 'file',
        items: [],
      },
    ],
  },
  {
    fileId: '02',
    path: 'empty-folder',
    parentPath: '',
    fileName: 'empty-folder',
    initialContent: null,
    saved: true,
    type: 'folder',
    items: [],
  },
  {
    fileId: '02',
    path: 'file.ext',
    parentPath: '',
    fileName: 'file.ext',
    initialContent: null,
    saved: false,
    type: 'file',
    items: [],
  },
];
const selectedFile = null;
const noop = () => void 0;

<FileTree
  filePaths={filePaths}
  tree={tree}
  selectedFile={selectedFile}
  onDelete={noop}
  onFileCreate={noop}
  onFileOpen={noop}
  onFolderCreate={noop}
  onOperationCancel={noop}
  onOperationConfirm={noop}
  onRename={noop}
/>
```
