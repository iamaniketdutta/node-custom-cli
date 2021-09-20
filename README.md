<p align="center">
  <h3 align="center">Notes CLI</h3>
  <p align="center">A CLI to store, remove, find notes in the terminal.<p>
  <p align="center">
    <img  src="https://img.shields.io/badge/license-MIT-green">
   <img  src="https://img.shields.io/badge/build-passing-brightgreen">
   <img  src="https://img.shields.io/badge/version-1.0.0-orange">
   <img  src="https://img.shields.io/badge/npm-v6.12.1-blue">
   <img  src="https://img.shields.io/badge/node-v12.13.1-yellow">
    <a href="https://www.linkedin.com/in/iamaniketdutta/"><img src="https://img.shields.io/badge/chat-LinkedIn-blue"></a>
  </p>
  <br>
</p>


---

## Status

node-custom-cli is a bit mature now, yet missing several important features:

 - Improved user-interface.
 - Security Layer.
 - More interactive features.

## Installation

**Requirements**

* The latest version of [Node.js](https://nodejs.org/en/download/) and [MongoDB](https://www.mongodb.com/try/download/community).

**Steps**

1. Clone the repo: `git clone https://github.com/iamaniketdutta/node-custom-cli.git`
2. Switch to repo-directory: `cd node-custom-cli`
3. Create a new mongoDB database and update the configuration inside configs/dev.json
4. Install the dependencies: `npm install`
5. Install the CLI globally: `npm install -g`

## Usage
### CLI

Currently the command-line interface supports command: `notes`.

```
~$ notes --help
Usage: app [options] [command]

Options:
  -V, --version                 output the version number
  -h, --help                    display help for command

Commands:
  select|s [options]            List the notes with particular field
  list|li [options]             List all the notes
  add|a [options]               Add a note
  delete|del [options] [multi]  Delete note/s
  help [command]                display help for command

~$ notes add --name myNote --notes="Need to go prepare estimation before the meeting tomorrow"
Notes has been added successfully!

~$ notes list --name="my"
NAME: myNote
NOTES: Need to go prepare estimation before the meeting tomorrow
STATUS: 10
CREATEDAT: 1632127860807
UPDATEDAT: 1632127860807

~$ notes del --name myNote
Single notes with name: 'myNote' has been deleted successfully!

~$ notes list --name myNote
You don't have any notes.

```
### Commands

List of available commands for Notes CLI

|Command|Description|Params|Example|Return|
|---|---|---|---|---|
|add| sets a key with the key and value  | name, notes  | `notes add --name myNote --notes="Notes body"`  | Successful message if added to database else throws error  |
|delete| deletes the note with name key, value | multi(optional), name | `notes delete --name myNote, notes delete multi --name myNote` | Successful message if deleted from database else throws error  |
|list| find all the notes with given key and value  | name | `notes list --name="my"` | display all the documents having name alike with all fields in the cli |
|select| find a single notes with given key and value  | field(optional), name | `notes select --field notes status updatedAt --name MyNote, notes select --name MyNote` | display all the documents having name alike, default to all fields if no field has been given through cli |


## 💵 Support
> If you found this project helpful or you learned something from the source code and want to thank me, consider buying me a cup of :coffee:

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://paypal.me/iamaniketdutta)


## 🐛 Bugs or Requests

If you encounter any problems feel free to open an [issue](https://github.com/iamaniketdutta/node-custom-cli/issues/new) on GitHub and I'll look into it. Pull request are also welcome.

## 🗒️ License

**Notes CLI** is licensed under `MIT license`.

## 👦🏼 Find me here
* [Linkedin](https://www.linkedin.com/in/iamaniketdutta)
