---
title: Rocky Linux 8.9 Available Now
date: '2023-11-22'
description: 'We are pleased to announce the general availability of Rocky Linux 8.9. Read to learn more!'
posttype: 'news'
---

We are pleased to announce the general availability of Rocky Linux 8.9. This release is currently available for the x86-64 and aarch64 architectures. Please review the release notes in the [Rocky Linux Documentation](https://docs.rockylinux.org/release_notes/8_9) - These notes contain important information including known bugs and more comprehensive details about changes in this version.

## Important Notices

### Breaking Changes

- Azure images for Rocky Linux 8.9 will be published under a new publisher name: `resf`, instead of the previous long, unreadable name. These images are not published yet, but should be available by the end of the week and will be accompanied by another news post.
- The optional guest-agents group, previously available within both the Minimal Install and Custom Operating System base environments in anaconda, is no-longer available for selection as additional software for those environments. Consult release notes for more details.
- The KDE live image for Rocky Linux 8.9 had problems during the testing phase. For this, we will be providing the older 8.8 images until we can build and provide a working image.

## Highlights

### Notable New Features and Changes

- java-21-openjdk was introduced providing a new version of Java
- Node.js 20 is now available as a new module stream
- gcc-toolset-13 was introduced as a new compiler toolset

A more complete list of new features and changes is available in the [Rocky Linux 8.9 Release Notes](https://docs.rockylinux.org/release_notes/8_9)

### Special Interest Group Notes

- AWS AMI images now set the `boot-mode` parameter to `uefi-preferred` (https://bugs.rockylinux.org/view.php?id=4390)

### Testing

Rocky Linux releases are put through thorough testing to ensure correctness and stability. Testing consists of hundreds of manual and automated checks covering all manner of environments and configurations.

Rocky Linux 8.9 was subjected to a week of testing before receiving the team's approval. Testing logs, discussion, and the release checklist can be viewed [here](https://chat.rockylinux.org/rocky-linux/channels/rocky-release-v89)

We encourage users interested in the process to join the team on [chat.rockylinux.org](https://chat.rockylinux.org/rocky-linux/channels/testing).

## Upgrades and Conversions

Current users of Rocky Linux 8 can upgrade to 8.9 from the terminal via `dnf update`, or from the desktop with GNOME Software, KDE Discover, etc.

Users of other Enterprise Linux 8 distributions can upgrade and convert to Rocky Linux 8.9 via the [migrate2rocky](https://github.com/rocky-linux/rocky-tools/blob/main/migrate2rocky/migrate2rocky.sh) conversion script.

## Thanks

We are forever grateful to the many Rocky Linux project volunteers and leaders for producing, testing, and documenting this release. We are thankful for our [sponsors](/sponsors) and [partners](/partners) who provide the resources to build, test, and produce Rocky.

We would like to thank the following individuals in particular for their contributions to this release:

- Al Bowles
- Alan Marshall
- Adam Augustine
- Boris Reisig
- Brian Clemens
- Bryan (@codedude)
- Chris Stackpole
- Krista Burdine
- Louis Abel
- Lukas Magauer
- Mustafa Gezen
- Neil Hanlon
- Omer Sen
- Pratham Patel
- Sherif Nagy
- Skip Grube
- Steven Spencer
- Taylor Goodwill
- Trevor Cooper

We are thankful for the upstream development work in Fedora Linux, the curation efforts in CentOS Stream, and the countless developers and projects from which these distributions are built.
