# Contributing

A guide for developers to contribute to this project.

## Pull Request Process

We are accepting pull requests.

### Getting Started

For _first-time_ contributors, please fork this repository to submit your pull request. If you are a member of the [ca-cwds](https://github.com/ca-cwds) organization, you may request access by submitting a slack request in `#component-library`. Once you've been granted access as a _repeat-contributor_ you can push your topic branches to this repo. 

### Naming your Topic Branch

The CWDS organization uses [Jira Software](https://osi-cwds.atlassian.net) for project management. An integration exists to associate _GitHub Pull Requests_ with _JIRA Issues_. You just need to include the issue reference in your branch name. (We've elected to suffix the Jira reference to keep branch navigation intuitive for humans)

```yml

<meaningful-name>[__<jira-ref>]

# examples:
#
#   add-instant-coffee-widget__CL-456
#   fix-typo
```

### Commit Messages Guidelines

We use [Conventional Commits](https://www.conventionalcommits.org) guidelines to manage [SemVer](https://semver.org/) and generate our [Changelog](https://github.com/ca-cwds/design-system/blob/master/CHANGELOG.md). Since we use a [`squash-and-merge`](https://help.github.com/en/articles/about-pull-request-merges#squash-and-merge-your-pull-request-commits) strategy, incremental commit messages aren't critically important (though are helpful to collaborators). The onus is on the maintainers to ensure the merge-commit message is properly formatted.

### Pull Request Formatting

Now that [Draft Pull Request](https://github.blog/2019-02-14-introducing-draft-pull-requests/) feature has been added to GitHub, we don't need to continue our system of `WiP` labels and custom 🚧 emoji... Just use them!

### Pull Request Templates

We are using Jira as the source of truth for project management (often a simple link to the Jira issue in the Pull Request body will suffice).

However if you'd like to provide additional context for the **implementation detail** or helpful reference info to maintainers, we love seeing screenshots and LICEcaps:

![demo](https://user-images.githubusercontent.com/30477263/53765737-ba60f680-3e85-11e9-9e14-58f1f2ff00a7.gif)

Helpful utilities for PRs: 

- [LICEcap](LICEcap) a tool for creating animated screen captures (Windows and OS X)
- [KeyCastr](https://github.com/keycastr/keycastr) an open-source keystroke visualizer
