---
title: Community Update - March 2021
date: '2021-03-31'
description: 'In our March update, we have news regarding our updated release candidate availability timeline, along with news about new partnerships.'
posttype: 'news'
---


## Summary

This month’s community update is being released a little bit later than the previous updates, as we had hoped to have additional information to announce regarding an initial build image for testing. Unfortunately we’ve had to revise our previous update for a release candidate from March 31 to April 30, due to complications in the build efforts. We continue to make steady progress, and are optimistic about our revised timeline.

With respect to our build infrastructure, we’re pleased to announce a partnership with [Fosshost](https://fosshost.org/) as an alternate build environment. This partnership will allow us to maintain independence in accordance with our core value of remaining free of any single entity’s control or influence. We’re excited to work with Fosshost, and are grateful for their enthusiastic support.

Finally, we’re happy to announce that [MontaVista](https://www.mvista.com/) has not only signed on as a Principal Sponsor, but as a partner as well, leading the effort on an embedded Special Interest Group (SIG).

## Timeline

In our previous update, we listed a number of items and gave dates to them. Here are what we listed previously, and where we stand with each:

-   Build systems and infrastructure readiness - January 31 [DONE]
-   Automatic package build infrastructures - January 31 [DONE]
-   Testing package repository made public - February 28 [DONE]
-   Installer testing readiness - February 28 [In progress]
-   ETA for length of time needed for community testing - April 30 [In progress]
-   Release candidate availability - April 30 [In progress]

We have updated our goals for community testing and our release candidate availability from March 31 to April 30. While slipping on this date from our previous estimate will come as a disappointment to many, we feel it’s important to inform the community why we’ve had to take additional time for our release.

While repackaging and building the core operating system takes significant time and effort, this is not the largest effort we’ve been driving toward. Instead, it has been the establishment of more foundational structures that underpin everything we do here at the Rocky Enterprise Software Foundation (RESF).


Here are some of the questions we’ve been asking ourselves, and some of the challenges we’ve set about to solve:
-   How do we include as wide a developer community as possible?
-   How do we ensure that everyone who wants to contribute is able to do so?
-   How do we organize such a large community toward common goals?
-   How do we build the necessary infrastructure to facilitate all of the above?
-   How do we protect the future of Rocky Linux, enabling those who come after us, and ensuring that Rocky stays free and open source long into the future?

Right away, we’ve gone about things differently. If all we were looking to do was to repackage the operating system, we would have done so already. But we felt the problems that needed to be addressed were bigger than that, and so that’s what we’ve set about addressing. In doing that, we’ve created an infrastructure similar to Fedora so we can allow many developers to be part of the development, responsibility, and future of Rocky Linux.

Rocky Linux is more than just an operating system, and the RESF is more than just a legal entity. It’s a community, a vision, and a commitment to an ideal. That takes time to get right, and is critical to ensuring we all have the foundation of stability for decades to come.


We’re grateful for your patience, support, enthusiasm, and generosity. We’re dedicated to ensuring the long-term growth and prosperity of the community and its projects, and we’re excited for the dividends that will pay.

---
  

## Community

-   Thanks to all that came out to our first Live Q&A session on YouTube! As promised, the session was recorded and available on our [YouTube channel](https://www.youtube.com/watch?v=ULPGVBLLGuc). Feedback is strongly encouraged, so please let us know what you thought on the forums or Mattermost.
    
-   We have scheduled a live Q&A session with the UK Linux User’s Group, set for [date=2021-04-28 time=15:30:00 timezone="America/New_York" timezones="UTC"] . You can view scheduling and additional information for that on [meetup](https://www.meetup.com/novalug/events/276971015/).
    

## Infrastructure

-   We have partnered with [Fosshost](https://fosshost.org/) as an alternate platform for our build infrastructure.
-   Documentation and automation efforts make progress with help from a number of contributors. We are looking for more ways to expand community involvement in infrastructure operations overall.
-   We are beginning to build out our tier-0 mirror infrastructure in preparation for onboarding community mirrors.

## Legal

-   Our Contributor’s Agreement has been finalized, and is available for review at [https://accounts.rockylinux.org](https://accounts.rockylinux.org). Anyone wishing to contribute must create an account, read, and agree to the Contributor’s Agreement.

## Release Engineering and Packaging

Here’s how things stand with the build efforts, with some detail on the kinds of problems we’ve been working through:

-   The BaseOS repository has been resolved and a majority of it can be built
-   Huge thanks to Skip Grube and the others in [~Dev/Packaging](https://chat.rockylinux.org/rocky-linux/channels/dev-packaging) that stepped up to resolve the random problems
-   We’re still working on AppStream and PowerTools
-   Repositories that rely on other repositories have introduced complexity
-   The installer (Anaconda) lives in AppStream and relies on other modules

Want to help out with the effort? Join [~Dev/Packaging](https://chat.rockylinux.org/rocky-linux/channels/dev-packaging) on Mattermost and get involved!

---

As always, if you have any comments, questions, concerns, suggestions, or would like to help out, send a note to [hello@rockylinux.org](mailto:hello@rockylinux.org).

Sincerely,

The Rocky Enterprise Software Foundation
[https://rockylinux.org](https://rockylinux.org)
