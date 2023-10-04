---
title: 'Special Interest Group Announcement - Security'
date: '2023-10-04'
description: 'The Rocky Linux Project announces the general availability of the Security Special Interest Group (SIG) packages and wiki.'
posttype: 'news'
---

# Special Interest Group Announcement - Security

The Rocky Linux Project announces the general availability of the Security Special Interest Group (SIG) packages and wiki, which provide extra security-related packages and security-hardened override packages (replacing those from the main distribution) for Rocky Linux and other Enterprise Linux (EL) distributions.

## Responsibilities

The Security SIG's mission is to: 

* Develop and maintain various security related packages that are not in upstream EL. 
* Identify, develop, and maintain security hardening changes relative to upstream EL packages. 
* Include/backport additional security fixes that are not yet in upstream EL packages.
* Contribute to the respective upstreams where practical.

Use `dnf install rocky-release-security` to enable the Security SIG repositories containing several overrides for packages in the main distribution.

## Packages

Extra packages include (for EL8 and EL9) <code>[lkrg](https://lkrg.org/)</code> (Linux Kernel Runtime Guard) and <code>[passwdqc](https://www.openwall.com/passwdqc/)</code> (Password/passphrase strength checking and policy enforcement), while override packages (currently for EL9) include <code>glibc</code> (adds many security-hardening changes originating from Owl and ALT Linux on top of EL package) and <code>openssh</code> (fewer shared libraries exposed in sshd processes while otherwise fully matching EL package's functionality). More packages are planned.

Security SIG contributor Solar Designer [reassured](https://twitter.com/solardiz/status/1709574519688487374) the community that these repos already include “security-hardened `glibc` for EL9 distros (EL8 soon) with a mitigation effective against CVE-2023-4911.”

## Contributing

If anyone else wants to join this effort - in any capacity including development, maintenance, testing, documentation, user support, spreading the word, or something else - please join the [Mattermost channel](https://chat.rockylinux.org/rocky-linux/channels/security) and let us know!

All this information and more can be found at the [SIG Wiki](https://sig-security.rocky.page/). Thanks to the team for pulling it together.
