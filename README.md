# Install Homebrew
If you don't have homebrew, please run [Homebrew](https://brew.sh/) please open your terminal and run this to install it.

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

## Install the following using Homebrew

### [http-server](https://github.com/http-party/http-server)

```
brew install http-server
```
### [MacDown](https://macdown.uranusjr.com/)

After this runs you can open this `README.md` file in MacDown to see the proper formatting.

```
brew cask install macdown
```

# How to git

Run

```
git version
```

This will either display your currently istalled version of git, or prompt you to install it.

## Clone the git repo to your local machine

```
git clone git@github.com:DialMForManning/dialmformanning.github.io.git
```

## Viewing the history so far

```
git log
```

Will display a log of all previous versions of the site. It looks like this.

```
commit af0b40516031d84e5faba36a2cd358bfc385f706 (HEAD -> master, origin/master, origin/HEAD)
Author: Brian Manning <dial@mformanning.tech>
Date:   Tue Oct 13 10:53:43 2020 -0400

    template
(END)
```

Each version of the site has a `commit`. There will be a separate `commit` with a unique id for each version with an author and a commit message. This first one is simply "template", but future commit messages should be a more descriptive single sentance or phrase about what is changing. If you want you could start them with `V1.0`, `V1.11`, `V2.0`, etc if you wanted.

## Making changes

When you make any changes, git will track the ways it is different from the most recent commit. If you run

```
git status
```
and a list of files that have changed since the previous commit will display like this.

```
On branch master
Untracked files:
  (use "git add <file>..." to include in what will be committed)
	README.md

nothing added to commit but untracked files present (use "git add" to track)
```

Right now this only contains `README.md`, with the changes I'm making to add this readme.

If I want to include these changes in the next commit you would run

```
git add README.md
```
If you run `git status` again you'll see this, with the filename in green rather than red. You can do this at any time to see what you have slated to be in the next version.

```
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	new file:   README.md
```

Most of the time you'll probably just want to add everything, which is as easy as

```
git add -A
```

To make a new commit, after doing a `git status` check to make sure you're including everything, run this, inserting your own commit message inside the quotes.

```
git commit -m "Add a README"
```
This makes the commit on your computer, but you haven't put those changes on the internet. To do this, run

```
git push origin master
```
### Warning:

Pushing to master directly like this can cause very confusing situations with larger teams of people, so we're not really doing best practices here. Please double check with everyone before pushing changes live. As long as you don't use the `-f` flag in any of your `git push` commands you

## Import changes from others locally

If someone else makes a change and pushes it to the github repository, before making changes on your computer you will need to run this to import those changes first.

```
git pull origin master
```


# How to view copy and design changes you've made locally

In your terminal, run

```
http-server
```

you'll see something like

```
Starting up http-server, serving ./
Available on:
  http://127.0.0.1:8080
  http://192.168.1.4:8080
```
If that is running successfully, you can `cmd + click` one of those links, or go to `localhost:8080` in your browser to see the version of the site with your local changes.