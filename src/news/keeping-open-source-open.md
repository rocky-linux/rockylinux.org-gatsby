---
title: Keeping Open Source Open
date: '2023-06-29'
description: 'In this post, we share some information about the technical details of how we are pushing forward after RHEL source changes.'
posttype: 'news'
---

Every user of Rocky Linux is valued and their contributions matter. From software engineers to IT professionals and hobbyists, together, we are all part of the Linux and open source community. The Rocky Enterprise Software Foundation was established based on our shared vision that open source software should remain stable, accessible to all, and managed by the community.

This commitment is ingrained in everything we do. Since the inception of the Rocky project, we have prioritized reproducibility, transparency in decision-making, and that no single vendor or company can ever hold the project hostage. When we first started, we discussed our model and mission, and we decided not to bisect the Enterprise Linux community. Instead, in the spirit of open source principles and standards, we created something compatible with Red Hat Enterprise Linux (RHEL). By adhering to this approach, we adhere to a single standard for Enterprise Linux and align ourselves with the original goals of CentOS.

However, Red Hat has recently expressed their perspective that they "[do not find value in a RHEL rebuild](https://www.redhat.com/en/blog/red-hats-commitment-open-source-response-gitcentosorg-changes)." While we believe this view is narrow-minded, Red Hat has taken a strong stance and limited access to the sources for RHEL to only their paying customers. These sources primarily consist of upstream open source project packages that are not owned by Red Hat.

Previously, we obtained the source code for Rocky Linux exclusively from the CentOS Git repository [as they recommended](https://developers.redhat.com/blog/2021/02/03/a-guide-for-using-centos-project-code). However, this repository no longer hosts all of the versions corresponding to RHEL. Consequently, we now have to gather the source code from multiple sources, including CentOS Stream, pristine upstream packages, and RHEL SRPMs.

Moreover, Red Hat's Terms of Service (TOS) and End User License Agreements (EULA) impose conditions that attempt to hinder legitimate customers from exercising their rights as guaranteed by the GPL. While the community debates whether this violates the GPL, we firmly believe that such agreements violate the spirit and purpose of open source. As a result, we refuse to agree with them, which means we must obtain the SRPMs through channels that adhere to our principles and uphold our rights.

The latency of this status update has been due to our desire to balance the needs of the community and technical requirements, with the challenges to open source and community principles that Red Hat has created. Fortunately, there are alternative methods available to obtain source code, and we would like to highlight two examples:

One option is through the usage of UBI container images which are based on RHEL and available from multiple online sources (including Docker Hub). Using the UBI image, it is easily possible to obtain Red Hat sources reliably and unencumbered. We have validated this through OCI (Open Container Initiative) containers and it works exactly as expected.

Another method that we will leverage is pay-per-use public cloud instances. With this, anyone can spin up RHEL images in the cloud and thus obtain the source code for all packages and errata. This is the easiest for us to scale as we can do all of this through CI pipelines, spinning up cloud images to obtain the sources via DNF, and post to our Git repositories automatically.

These methods are possible because of the power of GPL. No one can prevent redistribution of GPL software. To reiterate, both of these methods enable us to legitimately obtain RHEL binaries and SRPMs without compromising our commitment to open source software or agreeing to TOS or EULA limitations that impede our rights. Our legal advisors have reassured us that we have the right to obtain the source to any binaries we receive, ensuring that we can continue advancing Rocky Linux in line with our original intentions.

While we continuously explore other options, the aforementioned approaches are subject to change. However, our unwavering dedication and commitment to open source and the Enterprise Linux community remain steadfast.

In the unfortunate event that Red Hat decides to ramp up efforts to negatively impact the community, Rocky Linux will persist to continue serving the best interests of the entire open source community.

As a reminder, we welcome everyone to contribute to our efforts. You can learn more about how you can join us and all of the various ways to contribute [on our wiki](https://wiki.rockylinux.org/contributing/). Want to voice your support for Rocky Linux? Help us spread the word by sharing with your network, engaging with or contributing to the community, or telling friends about us. Our community is vital to our success, and we value your support. Together, we can make Rocky Linux continue to thrive!
