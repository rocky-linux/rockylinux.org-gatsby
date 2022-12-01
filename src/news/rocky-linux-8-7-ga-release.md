---
title: Rocky Linux 8.7 Available Now
date: '2022-11-14'
description: 'We are pleased to announce the general availability of Rocky Linux 8.7. Read to learn more!'
posttype: 'news'
---

We are pleased to announce the general availability of Rocky Linux 8.7. This release is currently available for the x86-64 and AArch64 architectures. Please review the release notes in the [Rocky Linux Documentation](https://docs.rockylinux.org/release_notes/8_7) - These notes contain important information including known bugs and more comprehensive details about changes in this version.

## Highlights

### Testing

Rocky Linux releases are put through thorough testing to ensure correctness and stability. Testing consists of hundreds of manual and automated checks covering all manner of environments and configurations.

Rocky Linux 8.7 was subjected to over 5 days of testing before receiving the team's approval. Testing logs, discussion, and the release checklist can be viewed [here](https://chat.rockylinux.org/rocky-linux/channels/rocky-release-v87).

We encourage users interested in the process to join the team on [chat.rockylinux.org](https://chat.rockylinux.org/rocky-linux/channels/testing).

### Notable Changes

- NetworkManager has been rebased to 1.40. Notes for this version of NetworkManager are available [here](https://github.com/NetworkManager/NetworkManager/blob/nm-1-40/NEWS).
- New module stream versions include node.js 18, mercurial:6.2, maven:3.8, and ruby:3.1.
- New compiler toolset versions include GCC 12, LLVM 14.0.6, Rust 1.62, and Go 1.18.
- The default value of the LimitRequestBody directive in httpd has been changed from unlimited to 1GiB to fix CVE-2022-29404.
- SSSD now supports direct integration with Windows Server 2022.

### Cloud Images

- Official Rocky Linux images are now available on Oracle Cloud Platform.
- Artifacts behind all images built are now exported for development use.
- LVM variants of the generic, EC2, and Azure images are now available.

## Upgrades and Conversions

Current users of Rocky Linux 8 can upgrade to 8.7 via `dnf update` or via PackageKit and it's interfaces (GNOME Software, etc).

Users of other Enterprise Linux 8 distributions can upgrade and convert to Rocky Linux 8.7 via the [migrate2rocky](https://github.com/rocky-linux/rocky-tools/tree/main/migrate2rocky) conversion script.

## Thanks

We are forever grateful to the many Rocky Linux project volunteers and leaders for producing, testing, and documenting this release. We are thankful for our [sponsors](/sponsors) and [partners](/partners) who provide the resources to build, test, and produce Rocky.

We would like to thank the following individuals in particular for their contributions to this release:

- Al Bowles
- Alan Marshall
- Chris Stackpole
- David Roth
- Louis Abel
- Lukas Magauer
- Mustafa Gezen
- Neil Hanlon
- Rich Alloway
- Sherif Nagy
- Skip Grube
- Steven Spencer
- Taylor Goodwill
- Trevor Cooper

We are thankful for the upstream development work in Fedora Linux, the curation efforts in CentOS Stream, and the countless developers and projects from which these distributions are built.
