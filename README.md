Step 1:
    Go to the directory that need to repostory

Step2: In the command line:
    type: git init to start git
    type: code(touch) README.md (to create file README.md) and write instruction
    type: code(touch) .gitignore (to create .gitignore to block the tracked)
            In the file write: 
                *.log
                .vscode
                DS_Store
                node_modules

Step3: In the command line:
    type: git add .
    type: git commit -m "adds initial project files"

Step4: Goto GitHub and create New repository
    -In the Repository name: make sure the path is correct.
    -Copy: git remote ...
    -Copy: push -u origin master