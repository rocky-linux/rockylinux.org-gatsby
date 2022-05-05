# Contributing

First of all, thanks for contributing to the rockylinux.org website! We're happy you've decided to help make our site & its content better, and we hope you'd like to keep doing so in the future.

However, to the ends of keeping everything manageable and reducing stress on every project member and collaborator, we need to set some policies on contributions.

## UI Kit

We use [Tailwind UI](https://tailwindui.com) as a base for all of the components on the site. If you are going to add components, be sure to reference this UI Kit to make your changes consistent with the design style. We realize that not everyone will have the ability to access Tailwind UI components, so do your best to make new components you contribute fit in with the rest of the site.

## Visual Studio Code Dev Container

This project contains a Visual Studio Code `.devcontainer` configuration folder. This [Dev Container](https://code.visualstudio.com/docs/remote/containers) will install Node.Js, pre-commit (and install the hooks), and run npm install for you, so the image is ready to go after building. It also installs HomeBrew.

## Linting & Commit Hooks

We use [pre-commit](https://pre-commit.com/) for our linting and quality control tooling, so it is required that you install the pre-commit hooks (normal and commit-msg stages) so that your PR meets our quality control standards. If you fail to do this, we have [pre-commit.ci](https://pre-commit.ci/) configured on all PRs, and it will flag up any errors there may be.

There is also commitlint (which is included in our pre-commit config) in place, which is configured to use the [conventional commit](https://www.conventionalcommits.org/) standard. If your PR does not meet the specified standard, changes may be requested or your changes may be rejected.

```bash
# After installing pre-commit...
$ pre-commit install
$ pre-commit install --hook-type commit-msg
```

## Merge Commits

Merge commits must be styled as follows:

```
chore(merge): from_branch -> to_branch
```

For example, if you had merged `main` into `develop`:

```
chore(merge): main -> develop
```

## Pull Requests

Allow us to preface this by saying: All bug fixes, feature implementations, documentation improvements, issues, etc. are all _very_ much welcome. We don't wish to discourage any such contributions, quite the opposite. With that said, we must ask that:

- Pull requests must be linked to an issue and must be made against the `develop` branch. If there is no issue currently open describing the issue/feature request you are contributing as a solution to, open one yourself first, _before_ you make a PR. This is to ensure that we know every part of our project is organized well, and makes sure that we are able to track every problem and enhancement the community would like to raise with us.
- Once an issue has been created, you wait until we have evaluated the impact of the issue, or the priority of the feature request, before creating your PR. By all means, make your changes preemptively in your own fork, but don't create a PR for any issues before a PR has been requested by maintainers.

Finally, you must understand & acknowledge that any changes you submit into our project's version control history are licensed under the BSD 3-clause license, the terms of which are described fully in the [LICENSE](https://github.com/rocky-linux/rockylinux.org/blob/main/LICENSE) file, located at the root of this repository.

## Translations

Translations should be submitted through [Crowdin](https://crwd.in/rockylinuxorg), not through this repository. For documentation on Crowdin and how to contribute, please check out [their documentation](https://support.crowdin.com/crowdin-intro/). Any contributions not made with Crowdin will be rejected and this section will be referenced as the reason for such rejection.
