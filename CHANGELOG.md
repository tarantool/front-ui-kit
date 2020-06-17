# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

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
