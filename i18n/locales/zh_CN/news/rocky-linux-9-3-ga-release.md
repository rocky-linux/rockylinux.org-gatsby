---
title: Rocky Linux 9.3 现已发布啦
date: '2023-11-20'
description: '我们很高兴宣布 Rocky Linux 9.3 全面发布，阅读全文了解更多信息！'
posttype: 'news'
---

我们很高兴地宣布 Rocky Linux 9.3 已全面发布。此版本目前支持 x86-64、aarch 64、ppc64le 和 s390x 架构。请查阅 [Rocky Linux 文档](https://docs.rockylinux.org/release_notes/9_3)中的发布说明，里面包含了许多重要信息，包括已知问题以及此版本中更多详细的变更信息。  
   
## 重要告示  
   
### 重大变化  
   
- Rocky Linux 9.3 的 Azure 镜像将采用新的发布者名称 `resf`，取代之前的冗长且难以阅读的名称。尽管镜像尚未发布，但预计将在本周末发布，并将配备一篇新的新闻说明。  
- 以前在 anaconda 中的"最小安装"和"自定义操作系统"基本环境中可选的"guest-agents"组件已不再可供选择作为这些环境的附加软件。请参阅发布说明以获取更多详细信息。 
- Rocky Linux 9.3 的 KDE live 镜像在测试阶段出现问题。因此，我们将提供旧版本的 9.2 镜像，直到我们能够构建并提供可用的镜像。  
   
## 亮点  
   
### 显著的新功能和变化  
   
- 9.3 版本恢复了 ppc 64 le 的云和容器镜像，这些镜像在 9.2 版本中因为 QEMU 问题未能发布。新发布的 9.3 镜像可能在某些细节上与其他架构的镜像有所不同，但我们将努力在未来的版本中减少这种差异。  
- kernel-rt 包已合并到 `kernel` 子包中。  
- 作为技术预览，引入了一个新的内核 UKI 包 `kernel-uki`，提供了一个用于引导的统一内核映像变体。此 UKI 映像使用其自己的 SecureBoot 密钥进行签名。  
- 引入了 java-21-openjdk，提供了新版本的 Java。  
   
[Rocky Linux 9.3 发行说明](https://docs.rockylinux.org/release_notes/9_3)中提供了更完整的新功能和更改列表。  
   
### 特别兴趣小组  
   
- AWS AMI 镜像现在将引导模式 `boot-mode` 参数设置为 `uefi-preferred` [0004390: AWS AMI support for the UEFI - Rocky Linux BugTracker](https://bugs.rockylinux.org/view.php?id=4390)  
   
### 测试  
   
Rocky Linux 9.3 版本经过了深度测试，以确保其正确性和稳定性。这些测试包括手动和自动测试，覆盖了各种环境和配置。  
在团队批准发布之前，Rocky Linux 9.3 进行了一周的测试。[可以在此处](https://chat.rockylinux.org/rocky-linux/channels/rocky-release-v93)查看测试日志、讨论和发布清单。  
我们鼓励对此过程感兴趣的用户加入 chat.rockylinux.org [测试团队]( https://chat.rockylinux.org/rocky-linux/channels/testing )。  
   
## 升级和转换  
   
当前的 Rocky Linux 9 用户可以通过命令行终端直接使用 `dnf update` 命令升级至 Rocky Linux 9.3，或者通过 GNOME、KDE Discover 等桌面环境直接进行升级。  
其他 Enterprise Linux 9 发行版的用户可以通过 [migrate2rocky](https://github.com/rocky-linux/rocky-tools/blob/main/migrate2rocky/migrate2rocky9.sh) 转换脚本升级并转换到 Rocky Linux 9.3。  
   
## 感谢  
   
我们要对参与制作、测试和记录此版本的众多 Rocky Linux 项目志愿者和领导者表示感谢。我们也十分感谢[赞助商](https://rockylinux.org/sponsors)和[合作伙伴](https://rockylinux.org/partners)提供的资源，帮助我们构建、测试和生产 Rocky Linux。  
   
我们要特别感谢以下个人对此版本的贡献：  
   
- Al Bowles
- Alan Marshall
- Adam Augustine
- Boris Reisig
- Brian Clemens
- Bryan (@codedude)
- Chris Stackpole
- Krista Burdine
- Louis Abel
- Lukas Magauer
- Mustafa Gezen
- Neil Hanlon
- Omer Sen
- Pratham Patel
- Sherif Nagy
- Skip Grube
- Steven Spencer
- Taylor Goodwill
- Trevor Cooper
   
我们感谢 Fedora Linux 的上游开发工作、CentOS Stream 的管理工作以及参与构建这些发行版的无数开发人员和项目管理人员。