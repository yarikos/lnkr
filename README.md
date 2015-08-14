# lnkr
The utility allows to create and manage several versions (editions) of some file or directory and simply substitute it and quick change substitutions like nvm allows to deal with several versions of node engine.

# Not implemented even anything here yet. Just todo notes for now.


## Instalation
```bash
npm i -g lnkr
```


## Usages
```bash
# Init lnkr for filename
linker init <filename>

# Add first edition (or version or substition)
linker <filename> add <filename-source-1> [as <tag-1>]

# Add second edition
#linker <filename> add <filename-source-2> [as <tag-2>]

# Switching between edititoins
linker filename use <tag-1>
linker filename use <tag-2>

# Add third edition from same name from git 
# (Sort of alias to git checkout branch -- filename_path)
linker filename add --git <git branch or commit>

# Reset all lnkr stuff, restore to initial state of filename
linker filename reset

# Show all editions
linker filename list

# Hide temporary lnkr dir (Actualy it moves from ./.lnkr to ~/.lnkr)
linker hide
# Move lnkr stuff back from ~/.lnkr to ./.lnkr
linker unhide
```


## License

  [MIT](LICENSE)
