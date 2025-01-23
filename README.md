# This readme shows the activities performed and the git commands executed:

## 1 - Initialized a Git repository using:

`git init`

## 2a - cloned the last weeks repo using:

`git clone git@github.com:brilliant-smart/FIP-FrontEnd.git`

## 2b - I listed the dir using ls and cd to it:

`cd FIP-FrontEnd`

## 3a - created a new brach to track week two changes:

`git branch FIP-FrontEnd-Week-Two`

## 3b - switched to the new branch

`git checkout FIP-FrontEnd-Week-Two`

## 3c - staged all the files for commit

`git add .`

## 3d - Committed -- no changes though, since nothing is added yet

`git commit -m "FIP FrontEnd Week Two Deliverables"`

## 4a - Added this "README.md" file

`git add README.md`

## 4b - add all for staging again

`git add .`

### 4c - committed again

## 4d - pushed to the week 2 branch

`git push -u origin FIP-FrontEnd-Week-Two`

## 5 - add css file

`touch style.css`

## 5b - updated the html and added some styles

## Checked the log

`git log`

## pulled

<<<<<<< HEAD
git
merge this branch to the new branch 'week-two-updates'
=======
git pull (already up to date, practiced for collaboration purpose)
create and new branch for the purpose of merging
checkout to the new branch
git checkout week-two-updates
updated some css
returned back to the previous branch
git checkout FIP-FrontEnd-Week-Two

> > > > > > > week-two-updates

### Other details are in the week-two-updates README.md
