---
date: 2020-02-14
title: "Web Dasturlash Sari #2 (Terminal/GitBash va Github)"
template: post
thumbnail: "../thumbnails/git.png"
slug: terminal-gitbash-va-github
categories:
  - git
tags:
  - git
  - github
  - versiyani yangilash
  - terminal
  - gitbash

---

`Git` juda qiyinmas lekin yangi kirib kelgan odam uchun sal chalkash bo'lishi mumkin, buni osonlashtirish va eng kerakli bo'lgan qisimlarini o'rgatishga harakat qilaman.

> Men juda igaist odamman, hamma o'zim qilgan proyekt(software)larimni o'zimni ismim bilan qo'yaman. Avval "Linux" (operatsion sistema), endi esa "git".
> <cite>- Linus Torvalds, "Git" dasturini yaratgan dasturchi</cite>

#### Bilinshingiz kerak bo'lgan bilim

- 2 "Challenge" ni tugatish yoki uni o'rganishdan oldin #1 tugatishni unutmang.

#### Mundarija

- Terminal/GitBash haqida.
- "Shell" haqida qisqacha tushuncha.
- Eng ko'p qo'llaniladigan `shell command` lar.
- "git" haqida tushuncha
- Github haqida tushuncha.
- Eng ko'p qo'llaniladigan `git command` lar.

## Terminal/GitBash 

`Terminal` bu "Console" (Oynacha) dasturi u to'gridan to'gri operatsion sistemaning "kernel" (ya'ni yuragi desak ham bo'ladi) ga buyruq berib har xil amallarni (shell bilan birga) bajarishga yordam beradi.

## Shell

Terminal/GitBash ni ichida ishlab turadigan sistema/tarjimon. Foydalanuvchining buyruqlarini olib uni sistemaning "kernel" iga yo'naltiradi. `Shell` ning juda ko'p turlari mavjud, eng mashxurlari: **Bourne Again Shell** (bash), **Z Shell** (zsh).

**Shell commands** (buyruqlar)

- touch *faylIsmi* (fayl yaratish)
- rm *faylIsmi* (fayl o'chirish)
- mkdir *papkaIsmi* (papka yaratish)
- rm -rf *papkaIsmi* (papkani o'chirish)
- cd *papkaIsmi* (mavjud papkaga kirish)
- ls (turgan joyingizda qanaqa papkalar borligini ko'rish)
- cd ~ (*home* ha qaytish)

```bash
ls
Documents Desktop
```

```bash
mkdir webDasturlash
```
```bash
ls 
Documents Desktop webDasturlash
```
```bash
cd webDasturlash
```
```bash
touch index.html
```
```bash
ls
index.html
```
```bash
rm index.html
```

## Git

`code` yoki `software` ni versiyasini (qismlarini) yangilash.

**git commands** (buyruqlar)

 // Ali Abdulazeez PR
- git config --global user.name "umid" (your own GitHub account name)
- git config --global user.email "undigitals@gmail.com" (your own GitHub email)
  
  // Barkhayot PR
- git --version (`git` versiyani tekshirish)

  // Shokhrukh9801 PR
- git --version (komputerda git versiyasi bor yoki yo'qligini bilish mumkin)
  // Baxromjon PR 
- git --help (yordam kerak bo'lganda (misol uchun biror commanda esdan chiqqanda) ishlatialdi.  )

- git init (yangi `git` repo(papka) yaratish )
- git status (`git` statusni tekshirish)
- git add filename (faylni nomlash )
- git add . (`git` fayllarga uzgartirish kiritish)
- git commit -m "message" (buyruq berib ozgartirish kiritish)
- git remote -v
- git add origin 
- git push (lokal repository ni boshqa repository ga joylash)
- git pull
- git checkout branchname
