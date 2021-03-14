---
title: Community Update - February 2021
date: '2021-02-22'
description: 'Release engineering is on pace with the timelines previously documented to provide a release of Rocky Linux by Q2 2021. Read our latest update to find out more!'
posttype: 'news'
---

## Summary

Release engineering is on pace with the timelines previously documented to provide a release of Rocky Linux by Q2 2021. The infrastructure team is working on automation in their area to facilitate the deployment of build infrastructure in additional regions. We’ve finalized our sponsorship model, and are as well open to partnerships for deeper collaboration. We’ve drafted our organizational structure, as well as our community charter. Finally, we’ve secured authorization from The Linux Foundation to license Rocky Linux under the Rocky Software Enterprise Foundation, which is the official legal entity that represents Rocky Linux and fosters its growth.

### Timeline

In our previous update, we listed a number of items and gave dates to them. We remain committed to delivering an initial release of Rocky Linux by Q2. Here are what we listed previously, and where we stand with each:

- Build systems and infrastructure readiness - January 31 [DONE]
- Automatic package build infrastructures - January 31 [DONE]
- Testing package repository made public - February 28 [In progress]
- Installer testing readiness - February 28 [In progress]
- ETA for length of time needed for community testing - March 31 [In progress]
- Release candidate availability - March 31 [On Pace]

---

## Legal

The Linux Foundation has granted us a sub-license to legally use “Linux'' in the distribution’s name “Rocky Linux.” We have renamed the “Rocky Linux Foundation'' (RESF) to the “Rocky Enterprise Software Foundation” and changed it to a Public Benefits Organization in Delaware.

## Infrastructure

The build infrastructure for our first deployment in us-east-2 was completed and handed off to the Development team.

The next steps for the Infrastructure team is to ensure documentation (both internal and external) is accurate and up-to-date, and then to finalize the translation of the current infrastructure to automation tooling so we can replicate deployments to additional regions. These regions include Development, us-west-2, and GovCloud. Alerting automation is also in progress, so not only are we monitoring our metrics and syslogs, but when issues arise we are receiving the appropriate notifications to enable the team to respond accordingly in a timely manner. We continue to make progress toward an alternate build infrastructure to AWS and hope to have an announcement by the March community update.

## Release Engineering and Packaging

The team is working on building packages and getting the processes ready to assemble the final release. This includes things like validating the operation of Pungi (repo/image compositions), and nailing the package build order. An [overview of the build process](https://wiki.rockylinux.org/en/team/development/build_steps) can be found on our wiki. We’re seeking volunteers that can assist with debranding, so if this is an area you’d like to contribute, please reach out! An [overview of the steps for debranding](https://wiki.rockylinux.org/en/team/development/debranding/how-to) is on the wiki, with a more detailed guide to shortly follow.

## Merchandise

Muckles Inc has begun shipping orders that have been placed, and people have started to receive those items. They were a little surprised by the huge amount of orders that were placed, so it has taken them a little bit longer to process those requests. We’re thankful for your patience, and of course they are still accepting new orders for [Rocky Linux merch](https://www.mucklesu.com/collections/rocky-linux). Please share photos of your Rocky Linux merchandise with us on [Twitter](https://twitter.com/rocky_linux), the [forums](https://forums.rockylinux.org), or [Mattermost](https://chat.rockylinux.org)!

## Community

### Community Charter

Responsibility to the community is critical to our success. To that end, we’ve published The Rocky Enterprise Software Foundation Community Charter, and you can read that [here](https://forums.rockylinux.org/t/community-charter/1933). We consider our community charter one of our most important documents, as it communicates to the community what our principles, values, and intentions are. Our responsibility to the community is outlined in our charter; the community’s responsibility is to hold us accountable. We will be embedding this charter in the distribution of the core Rocky Linux operating system, ensuring the longevity and persistence of these principles.

### FAQ

We’ve expanded upon and published a [FAQ](https://rockylinux.org/faq/) which addresses a number of questions that we’ve received. Questions such as “If Rocky Linux is just a respin of RHEL, what’s taking so long for a release candidate?” and “If you’re not just repackaging RHEL, then what exactly are you doing?” and more are all addressed. We will be adding to the FAQ over time based on questions the community surfaces.

### Mattermost

The migration from Slack to Mattermost has been completed, and all of the legacy Slack channels have been archived. We’ve also set up a bridge from Mattermost to IRC, so if you’re in a Mattermost channel and you see [freenode] BOT <user>, that’s what that’s about. On IRC, Mattermost messages will come from the rlf user, a username subject to change.

Lastly, be sure to check out the [latest episode](https://mattermost.com/blog/what-matters-episode-12-rocky-linux-with-jordan-pisaniello/) of “What Matters” a podcast by Mattermost where Community Manager Jordan Pisaniello sits down to discuss Rocky Linux.

## Documentation

The Documentation team has been rapidly growing and has made great progress toward putting forward documentation of the highest quality, with a number of community members stepping up and taking ownership of the massive effort. The team is organizing around a number of topics, such as:

- Translation
- Security
- Packaging
- Editorial
- Administration

and more. For the translation effort, we’re looking for volunteers to support the localization effort into non-English languages.

The team meets virtually once a month to plan and review progress, with scheduling discussed in advance in the [Documentation channel](https://chat.rockylinux.org/rocky-linux/channels/documentation).

[Please join us](https://chat.rockylinux.org/rocky-linux/channels/documentation) on Mattermost and indicate the language or subject area you can assist with. You can also create [an issue or pull request on Github](https://github.com/rocky-linux/documentation) to propose a new documentation topic or to help fix existing documentation.

Finally, we would like a special recognition of the Documentation Admin team—Calder Sheagren and Ezequiel Bruni—for helping to keep us organized and on-task.

## Sponsors and Donations

We’ve finalized the levels for sponsorships, which provide various benefits based on annual commitments. The tiers and benefits are as follows:

#### Tier 1 - Principal Sponsors

- “Principal Sponsor” level media kit and rights to use trademarks
- Top placement of Company Logo on Sponsorship page
- Includes a link to company’s website
- 180 character summary of company
- Rotating logo/link featured on our main landing page
- Quote from the RESF leadership team to be included in companies marketing collateral about support for RESF
- Collaboration with the RESF team on individualized case studies, white papers, webinars, or other material

#### Tier 2

- “Tier 2” level media kit and rights to use trademarks
- Inclusion of Company Logo on Sponsorship page
- Includes a link to company’s website
- 90 character company tagline
- Quote from the RESF leadership team to be included in companies marketing collateral about support for RESF

#### Tier 3

- “Tier 3” level media kit and rights to use trademarks
- Inclusion of Company Logo on Sponsorship page
- Includes a link to company’s website

#### Tier 4

- “Tier 4” level media kit and rights to use trademarks
- Inclusion of name in dedicated section on Sponsorship page
- Includes a link to company’s website


We would also like to recognize [45drives](https://www.45drives.com/) and [OpenDrives](https://opendrives.com/), who have recently signed on to be Principal Sponsors.

If either you or your organization is interested in sponsoring The Rocky Enterprise Software Foundation, please contact us at [sponsor@rockylinux.org](mailto:sponsor@rockylinux.org).

We’d also like to send out a very special ‘thank you’ to the individuals who have donated! Your contributions are very much appreciated.

Finally, we have the option of forming partnerships with organizations. These are not based on any annual fee, but are instead geared toward ongoing collaboration and strategic initiatives. Contact us at [partners@rockylinux.org](mailto:partners@rockylinux.org) if is something your organization would like to explore.

## Organizational Structure

We believe in ensuring that all perspectives are heard and taken into consideration while maintaining a strong commitment to our vision, mission, goals, integrity, and values with the highest degree of transparency possible. We count on the community, contributors, donors, sponsors, and partners all to hold us accountable to our pledge.

The organization of RESF is composed of a tiered structure of teams, each including three primary roles: leads, deputies, and members. This ensures that all members have visibility and say into governance and decision making, ensuring equal representation across the organization. You can learn more about how we’ve structured ourselves [here](https://forums.rockylinux.org/t/organizational-structure).

As always, if you have any questions, comments, concerns, suggestions, or if you would like to help out, feel free to discuss below or send a note to [hello@rockylinux.org](mailto:hello@rockylinux.org).

<span class="mb-2">
  Sincerely,<br/>
  The Rocky Linux Foundation<br/>
  <a href="https://rockylinux.org">https://rockylinux.org</a>
</span>
