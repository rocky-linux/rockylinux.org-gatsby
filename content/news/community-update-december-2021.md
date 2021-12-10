---
title: Community Update - December 2021 - Q4
date: '2021-12-10'
description: "It's been a while--come check what we've been up to. This time we're talking about Secure Boot, 8.5, and
our Anniversary Party on December 11th!"
posttype: 'news'
---

## Highlights

### Rocky Linux 8.5

The latest minor release of Rocky Linux was released on November 15, 2021. The speed at which the latest release was built is a testament to the dedication of the Rocky Linux Release Engineering team. Their maturing procedures, home-grown tools, and lengthy preparations enabled them to deliver testing assets within hours of upstream source availability. Likewise, the Testing team’s improvement efforts over the past months was validated by their speedy discovery and resolution of issues.

### 1st Anniversary Party

We are hosting a party to celebrate our first year! Please join us on December 11th at 15:00 PST. A link to the meeting room and more details are available at https://rockylinux.org/news/event-20211211-anniversary.

### New Members

Since June, we’ve added four new members to the Rocky Linux leadership team:

- Scott Shinn, @atomicturtle, Security Team Deputy

- Sherif Nagy, @sherif, Release Engineering Team Deputy

- Skip Grube, @skip77, Release Engineering Team Deputy

- Steven Spencer, @sspencerwire, Documentation Team Deputy

Participation is always welcome in the Rocky Linux project. If you would like to help, please get in touch with a Team Lead or e-mail [hello@rockylinux.org](mailto:hello@rockylinux.org) if you cannot determine a relevant one.

### Secure Boot

The Rocky Linux bootloader shim has been validated and signed by all necessary parties, enabling Rocky Linux to use secure boot without configuration. This is the culmination of months of work by the Release Engineering team and Sherif Nagy in particular. Secure Boot is a common (and often requested) requirement for many scenarios, including OEMs that have expressed interest in shipping systems with Rocky Linux pre-installed. This is a huge milestone for Rocky Linux as it is the culmination of many months of effort to become validated as a vendor in our own right by Microsoft.

### Mailing Lists

Mailing lists are an irreplaceable fixture in open source projects. To support Rocky Linux and other RESF projects, the Infrastructure Team has deployed and configured a mailing list solution. We encourage you to subscribe to the Rocky Linux announcements list at https://lists.resf.org/mailman3/lists/rocky-announce.lists.resf.org.

## Team Updates

### Community

We need you! The Community Team is seeking volunteers to help us grow community facing initiatives Please email [community@rockylinux.org](mailto:community@rockylinux.org) if you’d like to help.

- The Community Team is now holding meetings every Wednesday at 10:00 PST. Please see the community team channel for more information.

- We held a very successful “Ask Me Anything” interview on the /r/linux subreddit. We would like to thank everyone who participated, especially the moderator /u/purpleidea who helped to coordinate and run the event.

- RockyCon 2022 is now being planned! Please look forward to a day of workshops, presentations, and socializing with the Rocky Linux community within the next few months.

- We have selected and configured a social media management solution to coordinate the publication of news across all social platforms where Rocky Linux has a presence.

### Design

- We have planned a wallpaper design contest for the community to incorporate their own designs into the distribution. Winners will get Rocky Linux swag with custom (not-generally-available) designs!

- Finalized designs have been made for the RESF’s logo. A sneak peek is available on the web and forum versions of this announcement.

### Documentation

- Our documentation has been reorganized into intuitive categories. The documentation landing page has also seen many enhancements to usability. The Documentation Team would like to especially thank Patrick (@justasojourner), Steven Spencer (@sspencerwire) and others who have championed, led and implemented these changes.

- We are making great progress in our translation efforts with help from new contributors such as Tianci Li (@jimcat8), Antoine Le Morvan (@alemorvan), Franco Colussi (@ambaradan), and many others.

- After evaluating and testing several platforms, the Documentation Team has selected Crowdin to scale translation efforts and is beginning to onboard translators.

### Infrastructure

- A pastebin application has been created to facilitate exchange of text files and long messages on our IRC channels, available at [https://rpa.st](https://rpa.st/) / [https://paste.resf.org](https://paste.resf.org/) / [https://paste.rockylinux.org](https://paste.rockylinux.org/). It can be used easily with the rpaste package available in the Rocky-Extras repository.

- We completed many projects to support other teams, including deploying PowerPC build platforms and deploying the highly secure infrastructure necessary for building secure boot components.

- Mirror infrastructure has been updated and improved.

- Mattermost has been updated several times, including a major version.

### Release Engineering

- Alongside the regular Enterprise Linux kernel, a realtime kernel has been built and is now available in the Rocky-RT repo.

- We have developed and deployed an application to show live differences between Rocky Linux and RHEL, available at [https://repocompare.rockylinux.org](https://repocompare.rockylinux.org/).

- Security advisories, known bugs, and feature information is now available, both baked into our repositories and as a web page. Try it out with “dnf update info --list” or visit [https://errata.rockylinux.org](https://errata.rockylinux.org/).

- Skip Grube (Team Deputy) is sharing some of his release engineering knowledge in a new blog. We encourage anyone interested in helping the team to check it out at https://skip.linuxdn.org/blog.html.

- The infrastructure for building a PowerPC version of Rocky Linux has been setup, and builds are underway. This is a fairly involved process and will take some time before it is ready for public consumption.

- We have begun initializing the foundation (release and core packages) needed to start on Rocky Linux 9. We have begun importing the RHEL 9 beta sources as well as CentOS Stream 9 sources. In the coming days, we plan on bootstrapping the necessary components for 9. We look forward to sharing more about this with you very soon.

### Security

- Thanks to efforts by Scott Shinn (@atomicturtle), OpenSCAP automated security compliance and remediation is now fully functional on Rocky Linux.

- The Center for Internet Security (CIS) is targeting a benchmark for Rocky Linux in early 2022. Thank you to community member mmackenzie for opening up the Workbench request.

- We supported the Release Engineering and Infrastructure Teams in their efforts to attain secure boot functionality.

### Testing

- A primary focus for the Testing Team this quarter has been work on openQA test suites allowing automated testing of the Rocky Linux release media and installer. Special thanks to Al B. (@raktajino) for work on Ansible playbooks, Lukas M. (@lumarel) for multi-host openQA configuration and Russ B. (@Russ Butler) for aarch64 test suite validation.
- Lukas has also been heavily involved with testing of Secure Boot working closely with Release Engineering to help bring SB to Rocky Community.
- In the next quarter we hope to move openQA testing to Rocky Linux hosted infrastructure and begin direct integration with Release Engineering to support fully automated build testing.

### Web

- We are working on a UI toolkit which will replace all of the existing Tailwind CSS-based theming across the RESF’s web presence. This is to ensure consistency in design between all Rocky Linux experiences, and will have its debut on the main Rocky Linux website. More sites will follow, but for now it will just be the main website.

- We have implemented Fathom Analytics on both the main website, as well as the Documentation website. Fathom is an open-source, privacy-friendly, cookie-less analytics solution. You can view our analytics publicly at the links below.

- Main Website: https://app.usefathom.com/share/qdepahys/website/

- Documentation Website: https://app.usefathom.com/share/ktsptdwy/documentation/

## Special Interest Groups

As mentioned above, we are now moving forward with SIGs. We started this process by integrating the CentOS SIGs which will bring in some collaborative effort and avoid any redundant efforts. These can be installed via release packages with the nomenclature of “centos-release-\*” and will help ease the transition from CentOS to Rocky Linux as well as help foster collaboration between all of the Enterprise Linux variants. Building off of the existing CentOS SIGs, we are be developing the foundation to empower the Rocky Linux community with our own SIGs which we will ensure are completely compatible with all Enterprise Linux family of distributions. We have a number of SIG ideas already developing in Mattermost and we are working on the template SIG charter now.

There are three SIGs which have already been started:

- SIG/Kernel which is being led by Greg Kroah-Hartman (lead maintainer of the stable main-line Linux kernel) and will include an optional enhanced kernel for Rocky Linux

- SIG/Cloud will provide cloud optimizations, packages, and universal base container images to support all clouds and typical use-cases

- SIG/AltArch which has already built Raspberry Pi images for testing (more information can be found here: https://wiki.rockylinux.org/en/special-interest-groups/alt-arch/raspberry-pi).

We look forward to working with others interested in leading SIGs.

## Partners & Sponsors

We would like to thank our existing partners and sponsors for their support, and we’re pleased to announce a few new ones:

- Crowdin

- Equinix

- [ProComputers.com](http://procomputers.com/)

- Seagate Government Solutions

- Supermicro

- VMware

If you have any comments, questions, concerns, suggestions, or would like to help out, send a note to [hello@rockylinux.org](mailto:hello@rockylinux.org).

Sincerely,

The Rocky Enterprise Software Foundation
[https://rockylinux.org](https://rockylinux.org/)
