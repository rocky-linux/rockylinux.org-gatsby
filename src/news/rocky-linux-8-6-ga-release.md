---
title: Rocky Linux 8.6 Available Now
date: '2022-05-11'
description: 'We are pleased to announce the general availability of Rocky Linux 8.6. Read to learn more!'
posttype: 'news'
---

# Rocky Linux 8.6 Available Now

We are pleased to announce the general availability of Rocky Linux 8.6. This
release is available for the x86_64 and aarch64 architectures. Release notes
are available in the Rocky Linux Documentation - These notes contain important
information including known bugs and more comprehensive details about changes
in this version.

## Highlights

### Support for newer versions of language runtimes

* PHP 8.0 provides bug fixes and enhancements, namely to the use of structured
  metadata syntax, newly named arguments that are order-independent, and
  improved performance for Just-In-Time compilation.
* Perl 5.32 provides a number of bug fixes and enhancements, including support
  for Unicode version 13, a new experimental infix operator, and faster feature
    checks.

### New system roles
* High availability (HA) cluster system role: This role helps create and manage
  secure, stable HA clusters. It also enables better control when managing
  multiple clusters.
* Enhanced network system role: This role helps users create secure connections
  (including over Wi-Fi) along with robust firewall rules.
* WebConsole role: This role automates the installation and configuration of
  the Rocky Linux web console, including installing the web console package,
  starting and enabling the web console, and configuring its settings.

### Miscellaneous
* Stratis Storage support in the web console

## Upgrading to Rocky Linux 8.6

Current users of Rocky Linux 8 can upgrade via dnf update -y.

Users of other Enterprise Linux 8 distributions can upgrade to Rocky Linux 8.6
via the migrate2rocky conversion script.

## Thanks

We are grateful to the many Rocky Linux project volunteers and leaders for
producing, testing, and documenting this release, as well as our Sponsors and
Partners who provide the resources to build, test, and produce Rocky.

The Release Engineering and Testing teams bear the brunt of the workload for
new releases, and in particular for the release of Rocky Linux 8.6:

* Al Bowles
* Chris Stackpole
* Louis Abel
* Lukas Magauer
* Mustafa Gezen
* Neil Hanlon
* Scott Shinn
* Sherif Nagy
* Skip Grube
* Steven Spencer
* Taylor Goodwill
* Trevor Cooper

We are thankful for the development work in Fedora Linux, the curation efforts
in CentOS Stream, and the countless developers and their projects from which
these distributions are built.
