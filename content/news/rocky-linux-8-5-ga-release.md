---
title: Rocky Linux 8.5 Available Now
date: '2021-11-15'
description: 'We are pleased to announce the general availability of Rocky Linux 8.5. Read to learn more!'
posttype: 'news'
---

Hello everyone. I am pleased to announce the general availability of Rocky Linux 8.5. This release is for the x86_64 and aarch64 architectures and is derived from Red Hat Enterprise Linux 8.5.

Please read through the release notes at: https://docs.rockylinux.org/release_notes/8.5/ - These notes contain important information about the release, details about some of the content inside the release (such as newer modules or updates throughout the distribution).

# Secure Boot

## x86_64

Secure boot is now officially supported starting with Rocky Linux 8.5.

### Rescue Kernel

If you are updating from an 8.4 machine running on UEFI and you enable secure boot, the rescue kernel will no longer work. You will need to regenerate the necessary components.

If you updated to 8.5 and rebooted into the latest kernel, run the following:

```
% rm /boot/vmlinuz-0-rescue-* /boot/initramfs-0-rescue-*.img
% /usr/lib/kernel/install.d/51-dracut-rescue.install add $(uname -r) \
% rm /boot/vmlinuz-0-rescue-* /boot/initramfs-0-rescue-*.img
% /usr/lib/kernel/install.d/51-dracut-rescue.install add $(uname -r) \
  "" /lib/modules/$(uname -r)/vmlinuz

  "" /lib/modules/$(uname -r)/vmlinuz
```

It may be possible to remove the rescue files like above and run a dnf update to regenerate the kernel and initramfs in a single step.

### EFI MOKvar

You may also see a mokvar message in dmesg: EFI MOKvar config table is not in EFI runtime memory - We determined that this does not affect the functionality of secure boot and this message can be safely ignored. We will be looking into this in a future update of packages surrounding secure boot.

## AARCH64

At this time we do not have a signing system for this architecture. More information will be available soon.

# Known Issues

## .NET

During 8.3 and 8.4, our dotnet packages had stated the RID as rocky. For now, most dotnet packages will state "rhel" as the RID. This is temporary until we work out the plan to become part of the .NET ecosystem like our upstreams RHEL and Fedora. Please join us in ~Development on our [mattermost](https://chat.rockylinux.org) or #rockylinux-devel if you would like to help us with this effort.

# Updates

Updates released since upstream are posted across our current architectures. We strongly recommend that all users apply _all_ updates, including the content released today on your existing Rocky Linux machines. This can be done by running `dnf update`.

All Rocky Linux components are built from the sources hosted at git.rockylinux.org. In addition, SRPMs are being published alongside the repositories in a corresponding "source" directory. You can find these on any of our mirrors. These source packages match every binary RPM we release.

Note that this release supersedes all previously released content for Rocky Linux 8. You are encouraged to update your system. Older content, such as those obsoleted from the previous release will not be available. While we keep older content around for historical purposes, it is recommended that you use the latest updates available to you.

# Download

Rocky Linux can be downloaded in different ways. There are ISO images as well as torrents available.

### Standard Downloads

| Architecture | ISOs                                                                                                                                                                                                                                                                                                    | Torrents                                                                                                                                                                                                                                                                                                            | Verification                                                                                                                                                                 |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| x86_64       | [Boot](https://download.rockylinux.org/pub/rocky/8.5/isos/x86_64/Rocky-8.5-x86_64-boot.iso)<br> [Minimal](https://download.rockylinux.org/pub/rocky/8.5/isos/x86_64/Rocky-8.5-x86_64-minimal.iso) <br> [DVD](https://download.rockylinux.org/pub/rocky/8.5/isos/x86_64/Rocky-8.5-x86_64-dvd1.iso)       | [Boot](https://download.rockylinux.org/pub/rocky/8.5/isos/x86_64/Rocky-8.5-x86_64-boot.torrent)<br> [Minimal](https://download.rockylinux.org/pub/rocky/8.5/isos/x86_64/Rocky-8.5-x86_64-minimal.torrent) <br> [DVD](https://download.rockylinux.org/pub/rocky/8.5/isos/x86_64/Rocky-8.5-x86_64-dvd1.torrent)       | [CHECKSUM](https://download.rockylinux.org/pub/rocky/8.5/isos/x86_64/CHECKSUM) <br> [CHECKSUM.sig](https://download.rockylinux.org/pub/rocky/8.5/isos/x86_64/CHECKSUM.sig)   |
| aarch64      | [Boot](https://download.rockylinux.org/pub/rocky/8.5/isos/aarch64/Rocky-8.5-aarch64-boot.iso)<br> [Minimal](https://download.rockylinux.org/pub/rocky/8.5/isos/aarch64/Rocky-8.5-aarch64-minimal.iso) <br> [DVD](https://download.rockylinux.org/pub/rocky/8.5/isos/aarch64/Rocky-8.5-aarch64-dvd1.iso) | [Boot](https://download.rockylinux.org/pub/rocky/8.5/isos/aarch64/Rocky-8.5-aarch64-boot.torrent)<br> [Minimal](https://download.rockylinux.org/pub/rocky/8.5/isos/aarch64/Rocky-8.5-aarch64-minimal.torrent) <br> [DVD](https://download.rockylinux.org/pub/rocky/8.5/isos/aarch64/Rocky-8.5-aarch64-dvd1.torrent) | [CHECKSUM](https://download.rockylinux.org/pub/rocky/8.5/isos/aarch64/CHECKSUM) <br> [CHECKSUM.sig](https://download.rockylinux.org/pub/rocky/8.5/isos/aarch64/CHECKSUM.sig) |

### Live Images (x86_64 only)

| Architecture | Variant           | ISOs                                                                                                                               | Verification                                                                                                                                                               |
| ------------ | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| x86_64       | Gnome Workstation | [Rocky-8.5-Workstation-20211114.iso](https://download.rockylinux.org/pub/rocky/8.5/live/x86_64/Rocky-8.5-Workstation-20211114.iso) | [CHECKSUM](https://download.rockylinux.org/pub/rocky/8.5/live/x86_64/CHECKSUM) <br> [CHECKSUM.sig](https://download.rockylinux.org/pub/rocky/8.5/live/x86_64/CHECKSUM.sig) |
| x86_64       | XFCE              | [Rocky-8.5-Workstation-20211114.iso](https://download.rockylinux.org/pub/rocky/8.5/live/x86_64/Rocky-8.5-XFCE-20211115.iso)        | [CHECKSUM](https://download.rockylinux.org/pub/rocky/8.5/live/x86_64/CHECKSUM) <br> [CHECKSUM.sig](https://download.rockylinux.org/pub/rocky/8.5/live/x86_64/CHECKSUM.sig) |

KDE live image is not available. The KDE packages in EPEL rely on an older
version of Qt5. 8.5 rebased the base Qt5 packages to 5.15. A KDE live image will
be released upon a KDE rebuild in EPEL.

### Additional Images

| Architecture | Variant       | Download                                                                                                                                                 | Verification                                                                                                                                               |
| ------------ | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| x86_64       | Generic Cloud | [Rocky-8-GenericCloud-8.5-20211114.2.x86_64.qcow2](http://download.rockylinux.org/pub/rocky/8/images/Rocky-8-GenericCloud-8.5-20211114.2.x86_64.qcow2)   | [CHECKSUM](http://download.rockylinux.org/pub/rocky/8/images/CHECKSUM) <br> [CHECKSUM.sig](http://download.rockylinux.org/pub/rocky/8/images/CHECKSUM.sig) |
| aarch64      | Generic Cloud | [Rocky-8-GenericCloud-8.5-20211114.1.aarch64.qcow2](http://download.rockylinux.org/pub/rocky/8/images/Rocky-8-GenericCloud-8.5-20211114.1.aarch64.qcow2) | [CHECKSUM](http://download.rockylinux.org/pub/rocky/8/images/CHECKSUM) <br> [CHECKSUM.sig](http://download.rockylinux.org/pub/rocky/8/images/CHECKSUM.sig) |

# Getting Help / Engaging with the Community

The Rocky Linux ecosystem is sustained by community-driven help, guidance, and love of RPM distributions, Enterprise Linux and its ecosystem. The best place to start for new users is at https://docs.rockylinux.org.

You can communicate with us and other community members on various mediums:

Mattermost: https://chat.rockylinux.org
Reddit: https://reddit.com/r/rockylinux
Forums: https://forums.rockylinux.org
Mail list: https://lists.resf.org
Libera IRC: #rockylinux

Bug Tracker: https://bugs.rockylinux.org

Thank you, and enjoy the release!

Louis Abel<br>
Release Engineering
