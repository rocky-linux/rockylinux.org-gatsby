---
title: Rocky Linux 9.0 Available Now
date: '2022-07-14'
description: 'We are pleased to announce the general availability of Rocky Linux 9.0. Read to learn more!'
posttype: 'news'
---

We are pleased to announce the general availability of Rocky Linux 9.0. Release notes are available in the [Rocky Linux Documentation](https://docs.rockylinux.org/release_notes/9_0/) - these notes contain important information including known bugs and comprehensive details about changes in this version.

### Download
Rocky Linux 9.0 can be downloaded on the [Downloads](https://rockylinux.org/download) page for the x86_64, aarch64, ppc64le, and s390x architectures.

Cloud images are listed on the [Cloud Images](https://rockylinux.org/cloud-images) page.

###  Support

- Rocky Linux 9 will be supported until May 31st, 2032.
- Rocky Linux 8 continues to be supported until May 31st, 2029.

Extended support for Rocky Linux is available from a variety of [commercial support providers](https://rockylinux.org/support/).

## Highlights

### Desktop

Rocky Linux 9 ships with GNOME 40 as the default desktop environment. Redesigned core apps, settings, and UI make it easier than ever to use Rocky Linux as a desktop operating system. The Activities look and feel provides a better experience when working, launching applications and arranging your personal workspace.

Other notable improvements for desktop usage include:

- Software can be run on a separate graphics card by right-clicking and selecting the appropriate option
- The ability to mute notifications by selecting Do not disturb, which will appear as a separate button in the notification
- Each screen can use a different refresh rate
- The Activities program allows you to group application icons into folders using a drag-and-drop method
- Fractional display scaling


### File system

XFS now supports Direct Access (DAX) operations, permitting direct access to byte-addressable persistent memory, helping avoid the latency of using traditional block I/O conventions. NFS introduces the "eager write" mount option to help reduce latency.

### Language runtimes and tools

Rocky Linux 9 has many of the latest runtimes and compilers, including GCC 11.2.1, LLVM (13.0.1), Rust (1.58.1), and Go (1.17.1).

Rocky Linux 9 has updated versions of developer toolchains including GCC (11.2.1), glibc (2.34), and binutils (2.35). New features in the GCC compiler help developers better track code flow with improved debugging options, and write optimized code for efficient hardware usage.

Rocky Linux 9 extends the module packaging features available in Rocky Linux 8. All packaging methods, such as Software Collections, Flatpaks, and RPMs, have been incorporated into application streams, making it easier for developers to use their preferred packages.

- **Python 3.9** will be supported for the entire lifecycle of Rocky Linux 9 and comes with many new features, including timezone-aware timestamps, new string prefix and suffix methods, dictionary union operations, high-performance parsers, multiprocessing improvements.

- **Node.js 16** include an upgrade to the V8 engine to version 9.2, a new Timer Promises API, a new web streams API, and support for npm package manager version 7.20.3. Node.js is now compatible with OpenSSL 3.0.

- **Ruby 3.0.3** provides several performance improvements, along with bug and security fixes. Important improvements include concurrency and parallelism, static analysis, pattern matching with case/in expressions, redesigned one-line pattern matching, and find pattern matching.

- **Perl 5.32** provides bug fixes and enhancements, including Unicode version 13, a new experimental infix operator, and faster feature checks.

- **PHP 8.0** provides bug fixes and enhancements, including the use of structured metadata syntax, newly named arguments that are order-independent, and improved performance for Just-In-Time compilation.

### Security

Root user authentication with a password over SSH has been disabled by default. The OpenSSH default configuration disallows root user login with a password, thereby preventing attackers from gaining access through brute-force password attacks. Instead of using the root password, users can access remote systems using SSH keys to log in.

OpenSSL 3.0 adds a provider concept, a new versioning scheme, and improved HTTPS. Built-in utilities have been recompiled to utilize OpenSSL 3. OpenSSL 3.0's new FIPS module prevents non-FIPS algorithm use while the FIPS flag can be set in the kernel without the need to switch OpenSSL to FIPS mode.

### System monitoring

The Cockpit web console has an improved performance metrics page that helps identify causes of high CPU, memory, disk, and network resource usage spikes.

## Thanks

We are grateful to the many Rocky Linux project volunteers and leaders for producing, testing, and documenting this release, as well as our Sponsors and Partners who provide the resources to build, test, and produce Rocky.

#### Artwork Contest Contributors

- Alejandro Ramallo
- Alexander
- Ezequiel Bruni 
- Gwendolyn K
- Natalie Forde

#### Documentation

- Steven Spencer
- Wale Soyinka

#### Infrastructure

- Neil Hanlon
- Taylor Goodwill

#### Leadership

- Brian Clemens
- Gregory Kurtzer

#### Release Engineering

- Louis Abel
- Mustafa Gezen
- Sherif Nagy
- Skip Grube

#### Security

- Benjamin Agner
- Rob Felsburg
- Scott Shinn

#### Testing

- Al Bowles
- Alan Marshall
- Chris Stackpole
- Lukas Magauer
- Trevor Cooper

#### Web and Design

- Michael Kinder

### Upstream

We are thankful for the development work in Fedora Linux, the curation efforts in CentOS Stream, and the countless developers and their projects from which these distributions are built.
