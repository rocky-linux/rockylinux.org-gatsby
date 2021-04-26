# Community Update - April 2021

## Summary

There’s been a flurry of activity this month as we approach the general availability of our release candidate for Rocky Linux 8.3. The Development team has been holding regular hack-a-thon sessions with the community in our [~Dev/Packaging channel,](https://chat.rockylinux.org/rocky-linux/channels/dev-packaging) we’re now self hosting (no longer dependent on upstream packages), and a minimal ISO was produced and tested. The Infrastructure team has been working on getting Mirror Manager stood up, and we’ve been in contact with many of the folks who’ve offered to host mirrors. The Website team has our downloads page ready to go, as well as our documentation engine, where the Docs team will be locating all the great content they’ve authored. We’ve also started a Testing team, which will be responsible for the validation and error reporting of our release candidate. Finally, we’re excited to announce that Fastly and NAVER Cloud have been onboarded as Partners (and we have a few more on the way!).

  

## Timeline

-   Build systems and infrastructure readiness - January 31 [DONE]
-   Automatic package build infrastructures - January 31 [DONE]
-   Testing package repository made public - February 28 [DONE]
-   Installer testing readiness - February 28 [DONE]
-   ETA for length of time needed for community testing - April 30 [On Pace] 
-   Release candidate availability - April 30 [On Pace]
    

# Team Updates

## Community

The [~Merchandise](https://chat.rockylinux.org/rocky-linux/channels/merchandise) channel has been created on our Mattermost server, along with the @merchcustomerservice account (also on the forums), for all merchandising related inquiries.

The community team is looking for new members! If you’re interested in engaging the community on social media, organizing events, and working with other teams to support community initiatives; look no further. Please join us on the [~Community channel](https://chat.rockylinux.org/rocky-linux/channels/community) on our Mattermost server and reach out to @jorp for more details.

### Events

-   We have added timestamps for all questions in video description from our [2021-03-26 Q&A Session](https://www.youtube.com/watch?v=ULPGVBLLGuc)
-   Wolves Linux Users Group will be hosting a talk on 2021-04-28 at 15:30 ET [19:30 UTC] with Gregory Kurtzer and R. Leigh Hennig. You can find more details about this event on Meetup [here](https://wolveslug.org.uk/event/talk-rocky-linux-28th-april-2021/).
    

## Documentation

The main documentation site is still being prepared, but for now you can find collaboration and localization for all documentation [on GitHub](https://github.com/rocky-linux/documentation/). Be sure to check out the [~Documentation channel](https://chat.rockylinux.org/rocky-linux/channels/documentation) on Mattermost and reach out to @wale if you are interested in helping this effort! Lots will be coming in the coming months, you are invited, come and help.

## Infrastructure

### Mirror Manger

If you’re interested in mirroring Rocky Linux, we’ve set up Mirror Manager, please email [infrastructure@rockylinux.org](mailto:infrastructure@rockylinux.org) or drop a line in the [~Infrastructure channel](https://chat.rockylinux.org/rocky-linux/channels/infrastructure) on Mattermost..

### Maintenance

We have successfully upgraded our Mattermost server to 5.34.2. You can find the maintenance announcement [on the forums](https://forums.rockylinux.org/t/mattermost-maintenance-2021-04-18-02-00-utc-to-2021-04-18-05-00-utc/2309), and check out Mattermost’s changelog [here](https://docs.mattermost.com/administration/changelog.html#release-v5-34-feature-release) for more details.

### status.rockylinux.org

We now have a status page available at [status.rockylinux.org](https://status.rockylinux.org/) for real time monitoring of Rocky Linux related systems.

### Bugzilla

We’re now using [Bugzilla](https://bugs.rockylinux.org/) for bug tracking. If you’re interested in how it was set up, check out [this GitHub commit](https://github.com/rocky-linux/infrastructure/commit/d532f6a28dca1682e6c8555981e1220e49d1e809) to our Ansible playbooks.

  
## Legal

-   We’ve created a privacy policy that we’ll be publishing shortly that details what we track, why, and how, which will allow us to collect basic, anonymized analytics on our website. We’ll be using Matomo for this, and will announce when that’s enabled.
-   We’ve joined the [Open Innovation Network](https://openinventionnetwork.com/), which helps us and its members protect against patent trolling.
    
## Release Engineering

We have released a [devtools](https://github.com/rocky-linux/devtools) repository to help configure a build development for Rocky Linux package maintainers. It’s a great way to [help you get started](https://github.com/rocky-linux/documentation/blob/main/en/rocky/8/guides/developer_start2.md) working on failed packages as reported in our [Koji build system](https://kojidev.rockylinux.org/koji/).
  
[Mustafa Gezen](mailto:mustafa@rockylinux.org) has also released a work-in-progress of a [distrobuild](https://github.com/rocky-linux/distrobuild) utility as well as [srpmproc](https://github.com/rocky-linux/srpmproc), which help tremendously in our build efforts. Both are licensed under MIT.

## Testing

The Testing team is growing quickly! Please make sure you join the [~Testing channel](https://chat.rockylinux.org/rocky-linux/channels/testing) on our Mattermost server if you are interested in helping get Rocky Linux released GA. The team has now met twice to discuss both human and automated testing of Rocky Linux releases as well as hardware certification. You can check out our ongoing collaboration in [this](https://docs.google.com/document/d/1wjwQCAM2wg-P_MNKXlI_LZ27TvAqKOZbloGF7Cam7rU/edit) specification document. For now we’re using Google Docs just until the wiki is ready to host the Testing team, so if you need access ping Jessica Jonutz on Mattermost (@jessjonutz).

## Special Interest Group Updates

### Images

There’s plenty of work to do around preparing and testing various virtual machine and cloud image and container formats for Rocky, and we have a new [~Images channel](https://chat.rockylinux.org/rocky-linux/channels/images) dedicated to just that. Drop in and see what’s going on!

  
## Sponsors and Donations

### Fastly

Fastly has stepped up in a huge way to help get in front of the content we need to serve. Currently fronting our Mattermost instance, they’re going to be helping out with their CDN service when we go live with the release candidate. We really can’t overstate how grateful we are for their massive support here.

### NAVER Cloud

We’re excited to announce our partnership with NAVER Cloud, whose cloud infrastructure and resources will be enormously helpful in ensuring long-term sustainability and independence for the Rocky Enterprise Software Foundation.

# Media

As we are now approaching the general availability of Rocky Linux, we welcome media inquiries and involvement! Please reach out to [media@resf.org](mailto:media@resf.org) for interviews, quotes, information, inclusion on press releases, etc.


---
Please be on the lookout for another update this Friday, April 30 with more details about our first release candidate!

If you have any comments, questions, concerns, suggestions, or would like to help out, send a note to [hello@rockylinux.org](mailto:hello@rockylinux.org).

Sincerely,

The Rocky Enterprise Software Foundation
[https://rockylinux.org](https://rockylinux.org)
