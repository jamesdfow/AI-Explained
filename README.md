# AI-Explained Development Guide

This guide walks through how to apply changes from a pull request (PR) to your local clone of the repository and manually verify the updates in a browser.

## 1. Sync the latest main branch
Make sure you start from an up-to-date `main` branch:

```bash
git checkout main
git pull origin main
```

## 2. Fetch the PR branch
Use the PR number (replace `<pr-number>` with the actual value) to fetch the corresponding branch from GitHub:

```bash
git fetch origin pull/<pr-number>/head:pr-<pr-number>
```

This command creates a local branch named `pr-<pr-number>` that mirrors the PR's contents.

## 3. Review the changes
Switch to the fetched branch and review the modifications:

```bash
git checkout pr-<pr-number>
git status
git diff main
```

Inspect the HTML and CSS files locally to confirm the differences and ensure that no unexpected files were changed.

## 4. Test the site locally
Because this project is a static site, you can test by serving the files with a simple HTTP server. From the repository root, run one of the following commands:

```bash
# Option A: Python 3
python3 -m http.server 5500

# Option B: Node.js
npx serve .
```

Then open `http://localhost:5500` (or the port indicated by your server) in your browser. Navigate through the homepage, Learn, Use Cases, and Newsletter pages to confirm that the layout renders correctly on desktop and mobile screen widths. Use your browser's responsive design mode or resize the window to validate the responsive behavior.

## 5. Merge or revert as needed
If the changes look good, merge the PR branch into `main`:

```bash
git checkout main
git merge pr-<pr-number>
```

If you need to discard the branch after review, simply delete it:

```bash
git branch -D pr-<pr-number>
```

## 6. Optional: Run a quick HTML/CSS lint check
To catch simple syntax issues, you can run a lightweight validation tool such as [`htmlhint`](https://github.com/htmlhint/HTMLHint) or [`stylelint`](https://stylelint.io/):

```bash
# Example using npx htmlhint
npx htmlhint "**/*.html"

# Example using npx stylelint
npx stylelint "**/*.css"
```

These commands are optional but can help detect problems before merging.

## 7. Commit and push follow-up fixes
If you make local tweaks while testing, commit them on a new branch and push the branch to GitHub:

```bash
git checkout -b my-fixes
# (edit files as needed)
git add .
git commit -m "Describe your fixes"
git push origin my-fixes
```

Open a new PR describing the follow-up adjustments so the changes can be reviewed and merged separately.

