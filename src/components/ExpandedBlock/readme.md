```js
const content = "Pipeline execution failed: Function \"bad_task\" in pipeline \"bad_task\":\nfunction_call_error: [string \"bad_task\"]:1: failure\nstack traceback:\n\t[string \"bad_task\"]:1: in main chunk\n\t[C]: in function 'xpcall'\n\t...\/errors.lua:148: in function 'pcall'\n\t...\/init.lua:109: in function 'call'\n\t...\/pipeline\/init.lua:21: in function 'call_function'\n\t...pipeline\/init.lua:63: in function 'run'\n\t...\/runner\/server.lua:70: in function <...\/runner\/server.lua:68>\nstack traceback:\n\t...\/pipeline\/init.lua:25: in function 'call_function'\n\t...\/pipeline\/init.lua:63: in function 'run'\n\t...\/runner\/server.lua:70: in function <...s\/runner\/server.lua:68>";
<>
  <ExpandedBlock
    visibleLines={4}
    content={content}
 />
</>
```
