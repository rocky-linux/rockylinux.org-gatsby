---
title: 'Brave New World: The Path Forward for Rocky Linux'
date: '2023-06-24'
description: 'What is the power of an open source community? It is the ability to dig deep in critical moments, to rise above and carry on. This week the greater Enterprise Linux community was gifted one such critical moment, and the Rocky Linux project has responded swiftly.'
posttype: 'news'
---

What is the power of an open source community? It is the ability to dig deep in critical moments, to rise above and carry on. This week the greater Enterprise Linux community was gifted one such critical moment, and the Rocky Linux project has responded swiftly.

Last week we had identified we were about ten updates behind. Wednesday’s announcement confirmed these missing updates had not been a simple oversight. So we have been solving immediate concerns while simultaneously developing mid- and longer term responses.

After tireless efforts by team members, we have completed update composes for Rocky Linux 8 and 9, including all the updates we were missing, also including all errata information. We have also completed test upgrades from 8 and 9 machines to staging without issue.
Updates should work as usual via:

`dnf -y update`

We further developed a process for continuing to supply updates as they are released. Fortunately we already had the Peridot build system in place to manage the additional imports and automate them.

A publicly available transparency ledger of all SRPMs and their hashes is also in the works. This ledger will show the SRPMs used, patches applied, applicable checksums and so on.

This is more manual work than our previous processes, but it does abide by licensing agreements. The process may evolve as we continually seek more efficient solutions and automation. Nevertheless, we remain fully committed to ensuring that our users are not disrupted.

Rocky Linux lives on.

Thank you for your patience as we adapt to a new paradigm.
