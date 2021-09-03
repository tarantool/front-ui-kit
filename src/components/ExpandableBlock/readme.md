```jsx
const content =
`Pipeline execution failed: Function "bad_task" in pipeline "bad_task":
function_call_error: [string "bad_task"]:1: failure
stack traceback:
	[string "bad_task"]:1: in main chunk
	[C]: in function 'xpcall'
	.../errors.lua:148: in function 'pcall'
	.../init.lua:109: in function 'call'
	.../pipeline/init.lua:21: in function 'call_function'
	.../pipeline/init.lua:63: in function 'run'
	.../runner/server.lua:70: in function <.../runner/server.lua:68>
stack traceback:
	.../pipeline/init.lua:25: in function 'call_function'
	.../pipeline/init.lua:63: in function 'run'
	.../runner/server.lua:70: in function <...s/runner/server.lua:68>`;

<>
  <ExpandableBlock
    visibleLines={4}
    content={content}
  />
  <br />
  <br />
  <br />
  <ExpandableBlock
    visibleLines={4}
    content={content}
    showCopyBtn={true}
  />
</>
```
