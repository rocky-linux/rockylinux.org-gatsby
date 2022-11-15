---
title: Rocky Linux 8.7 Available Now
date: '2022-11-15'
description: 'We are pleased to announce the general availability of Rocky Linux 8.7. Read to learn more!'
posttype: 'news'
---

We are pleased to announce the general availability of Rocky Linux 8.7. This
release is available for the x86_64 and aarch64 architectures. Release notes
are available in the [Rocky Linux Documentation](https://docs.rockylinux.org/release_notes/8_7) - These notes contain important
information including known bugs and more comprehensive details about changes
in this version.

## Highlights

### Notable Changes

- NetworkManager rebased to 1.40. For notable changes see the upstream release
  notes [here](https://github.com/NetworkManager/NetworkManager/blob/nm-1-40/NEWS).
- Node.js 18, mercurial:6.2, maven:8.3, and ruby:3.1,available as module streams
- Change to the default value of the LimitRequestBody directive in httpd.
- LLVM Toolset 14.0.0 available
- SSSD now supports direct integration with Windows Server 2022

### Cloud Images

A new CSP joins the list of cloud images--Oracle Cloud Platform! In addition,
we are now exporting the image artifacts behind all the Rocky-built CSP images.
Please feel free to use these images, however they are mostly there to help
drive future automation of releases. Additionally, we have added LVM variants
of some images which should be considered 'Beta', but please provide feedback
on these, as they have been asked for frequently!

## Upgrading to Rocky Linux 8.7

Current users of Rocky Linux 8 can upgrade to 8.7 by typing:

```
dnf update
```

Users of other Enterprise Linux 8 distributions can upgrade to Rocky Linux 8.7
via the [migrate2rocky](https://github.com/rocky-linux/rocky-tools/tree/main/migrate2rocky) conversion script.

## Thanks

We are grateful to the many Rocky Linux project volunteers and leaders for
producing, testing, and documenting this release, as well as our Sponsors and
Partners who provide the resources to build, test, and produce Rocky.

The Release Engineering and Testing teams bear the brunt of the workload for
new releases, and in particular for the release of Rocky Linux 8.7:

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
- Taylor Goodwill
- Trevor Cooper

We are thankful for the development work in Fedora Linux, the curation efforts
in CentOS Stream, and the countless developers and their projects from which
these distributions are built.
