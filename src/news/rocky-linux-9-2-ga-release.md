---
title: Rocky Linux 9.2 Available Now
date: '2023-05-16'
description: 'We are pleased to announce the general availability of Rocky Linux 9.2. Read to learn more!'
posttype: 'news'
---

We are pleased to announce the general availability of Rocky Linux 9.2. This release is currently available for the x86-64, aarch64, and s390x architectures. Please review the release notes in the [Rocky Linux Documentation](https://docs.rockylinux.org/release_notes/9_2) - These notes contain important information including known bugs and more comprehensive details about changes in this version.

## Important Notices

### 9.2 Release for PowerPC (ppc64le) architecture held back

During testing, we discovered an architecture-specific issue on ppc64le systems with the bundled version of Python 3.9. This issue not only prevents installing, but may break existing installations.

This issue is reproducible on CentOS Stream 9 and RHEL 9.2. We have opened a bug report upstream at [rhbz#2203919](https://bugzilla.redhat.com/show_bug.cgi?id=2203919) and are working to fix the issue.

The release of Rocky Linux 9.2 for ppc64le has been delayed until this issue is fixed. The release candidates for x86_64, aarch64, and s390x passed all testing procedures, and thus will be released as normal.

#### Workaround for DNF on ppc64le

Because the ppc64le artifacts are unavailable, running DNF from a ppc64le Rocky 9 system that is configured to use the mirrorlist and/or is configured with the dnf variable `releasever` set to `9` will result in failed DNF metadata transactions as our mirrorlist is unable to hold back a single architecture. To work around this, please set the `releasever` variable to `9.1`. This can be done by using the `--releasever 9.1` argument to your DNF command, or by editing or creating the file `/etc/dnf/vars/releasever` with the content `9.1`. Once 9.2 for Power is released, you will need to undo this change and setting releasever will no longer be necessary.

### Breaking Changes

* centos-release-nfv now provides content built on RHEL 9 buildroots.
* The Container Universal Base Image `rockylinux/rockylinux:9-ubi` has been changed to be more similar to the RHEL UBI images:
    * Replaced packages: `libcurl` -> `curl-minimal`, `libcurl-minimal`
    * Added packages: `gdb-gdbserver`, `gzip`
    * Removed packages: `binutils`, `brotli`, `dmidecode`
    * network config cleanup added
* Microsoft Azure images are now published in the Shared Galleries. This provides a direct way to consume Rocky Linux images without subscribing to the image via the marketplace.
* LVM cloud image variants now remove `/etc/lvm/devices/system.devices` to resolve issues with PV/VG/LVs upon installation of the images due to being hardcoded to a specific device.

## Highlights

### Notable New Features and Changes

* An aarch64 kernel with a 64kb page size is now available via the package `kernel-64k`.
* `nfsrahead`, a tool to configure the readahead for NFS mounts, was added.
* Intel Arc GPU support has been added.
* The infamous Flatpak bug that breaks all fonts in applications using the default font (Cantarell) has been fixed!
* Wireguard once again works with SELinux enabled.

A more complete list of new features and changes is available in the [Rocky Linux 9.2 Release Notes](https://docs.rockylinux.org/release_notes/9_2)

### Special Interest Group Notes

* A [Cinnamon](https://github.com/linuxmint/Cinnamon) Desktop based live image is now available in [Alternate Downloads](https://rockylinux.org/alternative-images).

### Testing

Rocky Linux releases are put through thorough testing to ensure correctness and stability. Testing consists of hundreds of manual and automated checks covering all manner of environments and configurations.

Rocky Linux 9.2 was subjected to a week of testing before receiving the team's approval. Testing logs, discussion, and the release checklist can be viewed [here](https://chat.rockylinux.org/rocky-linux/channels/rocky-release-v92).

We encourage users interested in the process to join the team on [chat.rockylinux.org](https://chat.rockylinux.org/rocky-linux/channels/testing).

## Upgrades and Conversions

Current users of Rocky Linux 9 can upgrade to 9.2 from the terminal via `dnf update`, or from the desktop with GNOME Software, KDE Discover, etc.

Users of other Enterprise Linux 9 distributions can upgrade and convert to Rocky Linux 9.2 via the [migrate2rocky](https://github.com/rocky-linux/rocky-tools/blob/main/migrate2rocky/migrate2rocky9.sh) conversion script.

## Thanks

We are forever grateful to the many Rocky Linux project volunteers and leaders for producing, testing, and documenting this release. We are thankful for our [sponsors](/sponsors) and [partners](/partners) who provide the resources to build, test, and produce Rocky.

We would like to thank the following individuals in particular for their contributions to this release:

* Al Bowles
* Alan Marshall
* Boris Reisig
* Brian Clemens
* Chris Stackpole
* David H
* Louis Abel
* Lukas Magauer
* Marie Loise Nolden
* Mustafa Gezen
* Neil Hanlon
* Pratham Patel
* Sherif Nagy
* Skip Grube
* Steven Spencer
* Taylor Goodwill
* Todd Zullinger
* Trevor Cooper

We are thankful for the upstream development work in Fedora Linux, the curation efforts in CentOS Stream, and the countless developers and projects from which these distributions are built.
