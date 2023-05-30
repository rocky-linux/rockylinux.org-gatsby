---
title: Rocky Linux 9.2 for PowerPC (ppc64le) is now available
date: '2023-05-30'
description: 'After thorough testing and analysis, we are pleased to release Rocky 9.2 for the ppc64le architecture. Read to learn more!'
posttype: 'news'
---

After additional testing and thorough investigation into the
architecture-specific bug we discovered, the Rocky Linux team is pleased to
announce the availability of Rocky 9.2 for the PowerPC (LE) or ppc64le
architecture. Before upgrading your ppc64le machine to Rocky 9.2, make sure to
review the section below on upgrading.

The result of our investigation has revealed that the environments under which
our tests were performed were running a "pre-production" revision to the Power 9
CPU architecture, leading to the segmentation faults we are able to reproduce
both in emulated and physical environments with affected processor revisions
(steppings). For a more detailed explanation, please read below.

## Additional Technical Details

The PowerPC POWER 9 architecture has had multiple revisions to the physical CPU
prior to being "Generally Available". Namely, the Design Document version 2.2
for Power 9 ISA (Power 9 DD2.2) was the first revision of the processor which
Red Hat considers to be production ready, and thus supportable from a software
perspective. In fact, there are many issues with both the 2.0 and 2.1 Design
Document specifications which are at this time quite old.

During our investigation and collaboration with Red Hat on this issue, we
discovered that on some of our testing machines, we were unable to reproduce the
issue directly on the virtual machines, and upon inspection we discovered that
the unaffected machines were all using version 2.2 or 2.3 of the POWER 9
specification. These VMs are ones which we use to perform native package and
image builds, and are KVM guests provided to us via the Oregon State University
Open Source Lab.

For our image builds, we utilize our Empanadas toolkit which uses ImageFactory
and Oz to orchestrate image production inside qemu. Due to the nested nature of
the ppc64le virtualization environment for building images, we must use qemu
without KVM acceleration and rely on the emulation provided by QEMU--this is not
ideal for a number of reasons. Firstly, it is slow, and takes a lot of time to
iterate and test changes to see if they will resolve issues. Secondly, due to
this bug, we have discovered a deficiency in QEMU in that it is only able to
emulate the POWER 9 DD2.0 specification. Due to this, qemu is currently an
unreliable test platform for us to conduct our testing and image building.

In order to resolve these issues, we are working both with QEMU upstream to
investigate emulating the POWER 9 DD2.2 (and higher) steppings in QEMU, as well
as to build our container and cloud images for ppc64le in an alternative fashion
such that they can be released.

The team is thankful for your patience and consideration as we have worked to
identify, scope, and work to resolve these issues while ensuring that the
release as a whole is nominally safe for most users to upgrade to if they are
using the ppc64le architecture. Regardless of the upstream bug status, the Rocky
Linux team does consider this a regression between 9.0, 9.1, and 9.2, as we are
able to reliably reproduce the failure in 9.2, as well as very occasionally
under 9.1. The failure has not been experienced under 9.0 to date, though
extensive testing has not been performed.

## Upgrading

Before upgrading to Rocky Linux 9.2 on the ppc64le architecture, inspect the
contents of `/proc/cpuinfo` on your physical and virtual machines. Some early
models of POWER 9 processors are "pre production" silicon and are possibly
vulnerable to many bugs preventing the stable usage of the system. There is no
way to patch these issues in microcode as they are physical revisions to the CPU
die to resolve these flaws.

If the below command returns a revision greater than or equal to 2.2, your
system is supported. If it reports version 2.0 or 2.1, you will experience
faults due to the regression in support for processor revisions.

```
$ grep -i revision /proc/cpuinfo
revision    : 2.3 (pvr 004e 1203)
```

In virtualized environments, your hypervisor host may be able to be configured
to present the proper revision to the guest using libvirt, but if a physical
system reports a POWER 9 Design Document revision below version 2.2, the only
mitigation is to replace the CPU itself with one having a newer revision of the
CPU steppings for POWER 9.

We are thankful for the upstream development work in Fedora Linux, the curation
efforts in CentOS Stream, and the countless developers and projects from which
these distributions are built.
