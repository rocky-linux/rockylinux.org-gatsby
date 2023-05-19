---
title: Rocky Linux 8.8 Available Now
date: '2023-05-20'
description: 'We are pleased to announce the general availability of Rocky Linux 8.8. Read to learn more!'
posttype: 'news'
---

We are pleased to announce the general availability of Rocky Linux 8.8. This release is currently available for the x86-64 and aarch64 architectures. Please review the release notes in the [Rocky Linux Documentation](https://docs.rockylinux.org/release_notes/8_8) - These notes contain important information including known bugs and more comprehensive details about changes in this version.

### Breaking Changes

* The Container Universal Base Image `rockylinux/rockylinux:8-ubi` has been changed to be more similar to the RHEL UBI images:
    * Replaced packages: `libcurl` -> `curl-minimal`, `libcurl-minimal`
    * Added packages: `gdb-gdbserver`, `gzip`
    * Removed packages: `binutils`, `brotli`, `dmidecode`
    * network config cleanup added
* Microsoft Azure images are now published in the Shared Galleries. This provides a direct way to consume Rocky Linux images without subscribing to the image via the marketplace.
* LVM cloud image variants now remove `/etc/lvm/devices/system.devices` to resolve issues with PV/VG/LVs upon installation of the images due to being hardcoded to a specific device.

## Highlights

### Notable New Features and Changes

* Intel Arc GPU support has been added.
* Git has been updated to 2.39.1, enabling support of commit signing with SSH keys
* FIPS mode settings in the kernel have been adjusted to conform to the Federal Information Processing Standard (FIPS) 140-3.
* Podman's [Quadlet](https://www.redhat.com/sysadmin/quadlet-podman) feature is now available.

A more complete list of new features and changes is available in the [Rocky Linux 8.8 Release Notes](https://docs.rockylinux.org/release_notes/8_8)

### Testing

Rocky Linux releases are put through thorough testing to ensure correctness and stability. Testing consists of hundreds of manual and automated checks covering all manner of environments and configurations.

Testing logs, discussion, and the release checklist can be viewed [here](https://chat.rockylinux.org/rocky-linux/channels/rocky-release-v88).

We encourage users interested in the process to join the team on [chat.rockylinux.org](https://chat.rockylinux.org/rocky-linux/channels/testing).

## Upgrades and Conversions

Current users of Rocky Linux 8 can upgrade to 8.8 from the terminal via `dnf update`, or from the desktop with GNOME Software, KDE Discover, etc.

Users of other Enterprise Linux 8 distributions can upgrade and convert to Rocky Linux 8.8 via the [migrate2rocky](https://github.com/rocky-linux/rocky-tools/blob/main/migrate2rocky/migrate2rocky.sh) conversion script.

## Thanks

We are forever grateful to the many Rocky Linux project volunteers and leaders for producing, testing, and documenting this release. We are thankful for our [sponsors](/sponsors) and [partners](/partners) who provide the resources to build, test, and produce Rocky.

We would like to thank the following individuals in particular for their contributions to this release:

* Al Bowles
* Alan Marshall
* Brian Clemens
* Chris Stackpole
* David H
* Louis Abel
* Lukas Magauer
* Mustafa Gezen
* Neil Hanlon
* Sherif Nagy
* Skip Grube
* Steven Spencer
* Taylor Goodwill
* Trevor Cooper

We are thankful for the upstream development work in Fedora Linux, the curation efforts in CentOS Stream and RHEL, and the countless developers and projects from which these distributions are built.
