---
title: "Linux 学习记录"
date: "2021-02-28"
description: "记录我所有不知道的基础"
---


> Things I don't konw - updating


# 1. 什么是脚本
1. 它是一个文本文件
2. 它具有可执行权限

它会调用解释器执行程序

```bash 
# test.sh

#! /bin/sh
echo "hello, world"
```

其中 `#! /bin/sh` 声明解释器 

- `chmod +x test.sh` 添加执行权限



# 2. 什么是环境变量
> An environment variable is a dynamic-named value that can affect the way running processes will behave on a computer. They are part of the environment in which a process run     -- Wikipedia

- 申明一个环境变量 `export TEST_ENV = "/bin/test"`
- 查看所有环境变量 `printenv`

可以在 current terminal + shell script 中调用

- 用户环境变量
  - `source ~/.zshrc` 直接使环境变量生效 (如果使用 zsh )
- 系统环境变量
  - `/etc/profile`

> **`etc文件夹`** 
> 
> **`ETC`** is a folder which contain all your system configuration files in it. Then why the etc name? “etc” is an English word which means etcetera i.e in layman words it is “`and so on`”.

## PATH 环境变量
> 要与描述可执行程序的搜索路径
```bash
export PATH="/usr/local/bin:$PATH"
```