---
title: "Linux 学习记录"
date: "2021-02-28"
description: "记录我所有不知道的基础"
---

> Things I don't konw - updating

## 1. 什么是脚本

1. 它是一个文本文件
2. 它具有可执行权限

它会调用解释器执行程序

```shell 
# test.sh

#! /bin/sh
echo "hello, world"
```

其中 `#! /bin/sh` 声明解释器 

- `chmod +x test.sh` 添加执行权限