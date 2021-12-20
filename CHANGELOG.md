# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

- Fix the SideMenu component subitems prefix;

## [0.50.3] - 2021-12-14

- Rewrite the PageSection component in typescript;

- Add property `titleCounter` to the PageSection component;

- Fix buttons type in the Tabbed component;

## [0.50.2] - 2021-11-24

- Rewrite the SideMenu component in typescript;

- Make the SideMenu component controllable;

## [0.50.1] - 2021-10-26

- Fixed colors of the UriLabel component;

- Fixed some types;

## [0.50.0] - 2021-10-20

- Update the colors for a new brand style;

- Update the logotype icon of the tarantool;

## [0.42.0] - 2021-09-10

- Update rollup, eslint and styleguide configurations to support typescript;

- Update `Alert`, `Button` and `Text` components in typescript;

- Fix the "sticky" problem in the `Table` component in Safari;

- Minor improvement in Table component performance;

- Fixed disabled field color in `Input`;

- Deprecate `Scrollbar` component;

- Use styled scrollbars instead Scrollbar component;

- Enable prettier and change some code style rules;

- Update dependencies;

- Lock `react` and `react-dom` to `^16.14.0` version;

## [0.41.0] - 2021-08-05

- Add new icon `IconEmptyData`;

- Add new prop `imageClassName` in `NonIdealState` component;

- Add new prop `className` in `Spin` component;

- Update component `Table`:
    
    - Remove props: `codeClassName`, `onCodeRowClick`, `codeRowKey`;
    
    - Update no data state. Use new icon `IconEmptyData`.

## [0.40.1] - 2021-08-02

- Fix svg, optimize svg 

## [0.40.0] - 2021-07-29

- Remove components `SplashErrorFatal` and `SplashErrorNetwork`

- Update default icon component `SplashError`

- Update styles component `NonIdealState`. Remove `isError` prop

- Update component `UploadZone` use new icon

## [0.39.1] - 2021-07-12

- Update prop `handleTabChange` in `Tabbed` component;

- Add new prop `inputClassName` in `Select` component.

## [0.39.0] - 2021-07-07

- Update Dropdown:
        
    - Add new props: `onDropdownVisibleChange`, `autoFocus`;

- Add new component `Select`;

- Update Tabbed component:
    
    - Add new prop `size`.
    
## [0.38.0] - 2021-06-28

- Update PopupNotificationList:
    
    - Closing the notification by clicking on the entire area;
    
    - Add new props for notification: `onMouseEnter`, `onMouseLeave`.

## [0.37.0] - 2021-05-26

- Fixed bug in CopyToClipboard with lost indentations.

- Fixed wrong color in ProgressBar.

## [0.36.0] - 2021-04-07

- Fixes in Tooltip:

  - Won't show tooltip without content;

  - Creation of new instance of popover on every render.

- Improves in components display:

  - Updated `styleguidist` from 10 to 11.

  - Individual page per component instead of one long page.

  - Fast copyable code to import component.

  - Actual external import paths in code examples.

- Add new components:

  - DraggableList
  - DraggableTable

- Added control state from parent component in Tabbed.

- Added PopupNotification component.

## [0.35.0] - 2021-03-11

- Added IconHelperClose component.

- Changed FlatList and TiledList props (Breaking change).

- Fixed close icon in PageCard.

- Fixed bug in CheckBox with scrollable containers.

## [0.34.0] - 2021-01-27

- Changed Popover API: prop `popoverContent` accepts function,
  which returns `React.Node` instead of plain `React.Node`.

- Focusing popups box element (dropdowns, modals)
  instead of first interactive element.

- Autofocus OK button when ConfirmModal opened.

- Use native styled scrollbars in TextArea and SideMenu.

- New branded preloader instead of spinner.

- Added SectionPreloader component.

- Fixed copy button background and position in CodeBlock.

## [0.33.0] - 2021-01-13

- Fixed PageLayout heading shrinking bug.

- Fixed horizontal scrolling bug with copy button in CodeBlock.

- Updated Markdown text styles.

- Added ref-forwarding support in PageLayout.

- Added "copy to clipboard" feature in ExpandableBlock.

- Scrollbars component marked as deprecated.

- Added native scrollbars styles.

## [0.32.0] - 2020-12-30

- Fixed disabled state in Input and TextArea components.

- Overriding built-in components in Markdown.

- Removed duplicate color `baseHeading`.

- Fixed Markdown layout for images and code blocks.

## [0.31.0] - 2020-12-17

- Added `name` prop to Switcher.

- Updated ExpandableBlock.

- Fix Table bugs:
  - borders in Safari;
  - position sticky row in safari.

- Fixed copying to clipboard in Popover.

## [0.30.0] - 2020-12-08

- Updated IconRefresh.

- Added IconBoldArrowRight.

- Added z-index value for notifications in global vars.

- Added weAreHere prop to UriLabel.

- Add extra row "topRow" before some in Table component, which have "topRowKey".

- Add new component ExpandableBlock.

## [0.29.0] - 2020-11-30

- Hiding table head, when Table is empty.

- Updated Pagination styles.

- Added intentWarningAccent color.

- PageLayout fix for percent height layouts.

- Popover closing on click fix.

## [0.28.0] - 2020-10-29

- Fixed `className` prop in Table.

- Updated dependencies:
  - `react`,
  - `react-dom`,
  - `react-styleguidist`.

- Added iconic style for large Button.

- Added Popover component.

## [0.27.0] - 2020-10-14

- Couple of small updates in Tooltip and Modal.

- Updated Scrollbar block styles.

- Icon IconWindow replaced with IconCopy.

- Added "copy to clipboard" feature in CodeBlock and Markdown code blocks.

- Updated Table and Link components styles.

- Improved PageLayout behavior for vertical-stretched pages.

## [0.26.1] - 2020-10-05

- Hotfix for tooltip in withCopyToClipboard HOC.

- Fix unexpected wrapping in Button.

## [0.26.0] - 2020-10-05

- Updated dependencies.

- Added default sorting in Table, improved table sorting UX.

- Updated IconDownload.

- withCopyToClipboard HOC always shows tooltip.

## [0.25.1] - 2020-09-29

- LabeledInput hotfix.

## [0.25.0] - 2020-09-24

- Updated components & improved documentation in:

  - Tabbed
  - LabeledInput
  - FormField
  - InputGroup

- Added left controls bar to heading panel in PageLayout.
  Prop `controls` replaced with `topLeftControls` and `topRightControls`.
  Also added `aboveComponent` to show panels above heading.

- Added UploadZone.

## [0.24.0] - 2020-09-18

- Added Tarantool compact logo image.

- Added AppLayout, AppHeader components.

- Updated components:

  - Alert
  - Input
  - InputPassword
  - TextArea
  - Breadcrumbs

- Updated icons:

  - IconEyeClosed
  - IconEyeOpened
  - IconBell
  - IconBox

## [0.23.0] - 2020-09-01

- Global updates in Button styles.

- Got rid of transparency in Icon.

- Updated PageLayout controls.

- Updated SplashModal.

- Updated sort icons for table.

- IconHelper components group is separated into a discrete entity.

- Add component SideMenu.

## [0.22.0] - 2020-08-25

- Update IconClose.

- Update Modal styles.

- Updated styles in Breadcrumbs.

- Added orange LeaderFlag.

- Fixed bug in PageLayout with `wide` prop.

## [0.21.0] - 2020-08-11

- Fix crashes in Chromium when checkbox was clicked fast three times in a row.

- Fix passing `indeterminate` prop to input element in Checkbox.

- Add new components:
  - ResizeSensor
  - OverflowList
  - Breadcrumbs

- Update styles in following components:
  - UriLabel
  - TiledList
  - PageSection
  - PageLayout
  - LabeledInput
  - FormField

## [0.20.1] - 2020-07-15

- Table hotfix

## [0.20.0] - 2020-07-13

- Table component changes:

  - add loading state
  - add table row key
  - add initial selected state
  - add manual pagination

- Add controlled simple pagination.

- Update spinner icon for component Spin.

- Add keyboard control to Dropdown.

## [0.19.1] - 2020-06-30

- Table hotfix.

## [0.19.0] - 2020-06-29

- Fixed Markdown code blocks layout.

- Added icons:

  - IconStopped
  - IconTrash

- Updated focus state in Tabbed component.

- Added TextArea component.

- Updated Table props. Added new props for onCLick on table row.

## [0.18.1] - 2020-06-17

- Dropdown hotfix.

## [0.18.0] - 2020-06-16

- Primary font family changed to Inter.

- Added new npm package [react-table](https://github.com/tannerlinsley/react-table).

- Added new component Table.

- Added icons:

  - IconSuccess
  - IconFailed
  - IconPlay
  - IconStop
  - IconTask
  - IconCalendar
  - IconClock
  - IconMoreBurger

- Added new component Pagination.

- Usage Pagination in table.

- Improve Icon's readme.

- Add indeterminate state to Checkbox.

- Fix Dropdown issues:

  - Popover's min width won't be less than toggler width.

  - Popover's max width won't be more than window width.

  - Recalculating popover position on document scroll.

  - Clicking on toggler when popover is open will close popover.

  - Scrollbars inside popover.

- Fix Modal border width.

## [0.17.0] - 2020-05-25

- Testing with jest snapshots

- Refactor Dropdown using react portal. Added `withDropdown` HOC.

- Added DropdownDivider

- Added preloader in ConfirmModal

- Added `leftElement` & `rightElement` props to Input

- Added `rightIcon` prop to Button

## [0.16.0] - 2020-04-24

- Update letter spacing in Text styles

- Fixed flow typing for SVG images and some other cases

- Added details prop to SplashError

- Improved LabeledInput component

- Updated readme

- Styleguide improvements: updated config, added open sans font

## [0.15.1] - 2020-04-09

- Loading Button state looks more disabled than before

- Added icons:
  - IconAttention
  - IconChipWarning
  - IconChipDanger
  - IconEyeClosed
  - IconEyeOpened

- Added `onSubmit` prop to Modal component

- Added InputPassword component

- Added collection of svg images

- Added group of SplashError components

## [0.14.0] - 2020-03-20

- Added IconGeoPin

- Customizable fill color in icons

- Passing custom icon to UriLabel

- Pass className to popover in Tooltip

## [0.13.1] - 2020-03-04

- Hotfix for modals

## [0.13.0] - 2020-03-04

- Added withTooltip HOC

- Added CopyToClipboard component and copyToClipboard function

- Added Dropdown component

- Added SplashModal component

- Removed Divider component

## [0.12.0] - 2020-02-10

- Updated Markdown styles

- Updated IconBucket, IconChip

- Updated FlatList styles

- Added syntax highlight in markdown code blocks

- Added NonIdealState component

- Added autoFocus prop to Button

## [0.11.0] - 2020-01-17

- Links in Markdown have a target='\_blank' attribute.

- Added unsorted list in Markdown

## [0.10.0] - 2020-01-17

- Added NotificationSplashFixed, Markdown and Link components

- Z-indexes of all components moved to variables file

## [0.9.0] - 2019-12-27

- Added DocumentCodeIcon

- Added title prop to many components

## [0.8.0] - 2019-12-09

- Added IconSpinner

- Added loading state to Button

## [0.7.0] - 2019-12-09

- Added keyboard events to Input

## [0.6.0] - 2019-12-05

- Updates in Modal: new `fit` prop, new behavior with content overload and scrollbars

- Added Tooltip component

- Export text styles from Text component

- FormField and LabeledInput moved from cartridge

## [0.5.0] - 2019-11-27

- Icons:
  - IconCode
  - IconCreateFile
  - IconCreateFolder
  - IconDelete
  - IconEdit
  - IconFile
  - IconFolder
  - IconNewWindow
  - IconRefresh
  - IconSchema

- Update Alert styles

## [0.4.0] - 2019-10-04

- Add NotificationSplash component

- Fix components which uses ControlsPanel

## [0.3.1] - 2019-10-02

- Fix ControlsPanel

## [0.3.0] - 2019-09-27

- Button: add 'sx' size and 'plain' color scheme

## [0.2.0]

- Downgrade to emotion 9 instead of 10
