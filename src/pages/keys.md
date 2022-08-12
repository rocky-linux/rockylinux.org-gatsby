---
title: GPG Key Info
posttype: 'page'
---

## How Rocky Linux uses GPG keys

Each stable RPM package that is published by Rocky Linux is signed with a GPG signature. By default, `yum` and the graphical update tools will verify these signatures and refuse to install any packages that are not signed, or have an incorrect signature. You should always verify the signature of the package prior to installation. These signatures ensure that the packages you install are what was produced by Rocky Linux and have not been altered by any mirror or website providing the packages.

---

## Importing Keys

The Project GPG keys are included in the `rockylinux-release` package, and are typically found in `/etc/pki/rpm-gpg`. Please note that not all keys in this directory are used by the Rocky Linux project. Some keys may be placed in this directory by 3rd party repositories to enable the secure use of extra packages, as well. The keys used by Rocky Linux are enabled in the `yum` repository configuration, so you generally don't need to manually import them.

If you want to verify that the keys installed on your system match the keys listed here, you can use GnuPG to check that the key fingerprint matches. For example:

```
gpg --quiet --show-keys /etc/pki/rpm-gpg/RPM-GPG-KEY-rockyofficial
pub   rsa4096 2021-02-14 [SCE]
      7051C470A929F454CEBE37B715AF5DAC6D745A60
uid           Release Engineering <infrastructure@rockylinux.org>
```

---

## Project Keys

The following keys are currently in use by Rocky Linux. Please note that Rocky Linux releases may have several GPG keys assigned (depending on the release and architecture).

### Rocky Linux Release Keys

#### Rocky Linux 8

[Download Key](https://dl.rockylinux.org/pub/rocky/RPM-GPG-KEY-Rocky-8)

```
pub   rsa4096/0x15AF5DAC6D745A60 2021-02-14 Rocky Linux (Rocky Linux Official Signing Key) <releng@rockylinux.org>
Key Fingerprint = 7051 C470 A929 F454 CEBE 37B7 15AF 5DAC 6D74 5A60
```

#### Rocky Linux 9

[Download Key](https://dl.rockylinux.org/pub/rocky/RPM-GPG-KEY-Rocky-9)

```
pub   rsa4096/0x702D426D350D275D 2022-05-09 Rocky Enterprise Software Foundation - Release key 2022 <releng@rockylinux.org>
Key Fingerprint = 21CB 256A E16F C54C 6E65 2949 702D 426D 350D 275D
```

### Rocky Linux Testing Keys

#### Rocky Linux 8

[Download Key](https://dl.rockylinux.org/pub/rocky/RPM-GPG-KEY-Rocky-8-Testing)

```
pub   rsa4096/0x5489E42BBBE2C108 2021-02-14 Rocky Linux Testing (Rocky Linux Testing Key) <releng@rockylinux.org>
Key fingerprint = 091A 4404 7C3D 8B7A 331F  5E18 5489 E42B BBE2 C108
```

#### Rocky Linux 9

[Download Key](https://dl.rockylinux.org/pub/rocky/RPM-GPG-KEY-Rocky-9-Testing)

```
pub   rsa4096/0xADA2860895AE3D91 2022-04-26 Rocky Linux 9 - Beta Key V1/2022 <releng@rockylinux.org>
Key fingerprint = 0675 BD19 F4FF E3AD 0B2D 6FEB ADA2 8608 95AE 3D91
```

### Rocky Linux Infrastructure Keys

#### Rocky Linux 8

[Download Key](https://dl.rockylinux.org/pub/rocky/RPM-GPG-KEY-rockyinfra)

```
sec   ed25519/0xAA650F52D6C094FA 2021-05-17 Core Infrastructure (Compose Signing Key) <infrastructure@rockylinux.org>
Key fingerprint = BFC3 D8F2 0D15 F4FD 4628  1D7F AA65 0F52 D6C0 94FA
```

#### Rocky Linux 9

Not applicable.
