## GrowersBrains

GrowersBrains is an app designed to solve the problems that growers are globally facing, and to bring expert growing techniques to everyone. 

🌱 

### How To Contribute

#### Case 1. Once you are added as a contributor.

- Clone the repository using `git clone repo_url`
- Be sure to pull down the latest changes before creating your branch `git pull` 
- Create your branch `git checkout -b <YOUR-BRANCH-NAME>` (Ex: `git checkout -b feature/nav-bar`) (Feel free to prefix your branches with feature or bugfix)
- Commit your changes locally `git add .` (This adds all changes made)
- Add your commit message that sums up the work you have done `git commit -m "changes you made here"` (Ex: `git commit -m "added nav bar style and tests"`)
- Push up your changes `git push` usually on the first commit you'll need to run `git push -u origin <YOUR-BRANCH-NAME>`
- Create a pull request of your changes for review. Visit Github and you will now see a green "Compare & pull request" button on the repo. Check that your changes are accurate, that you are pushing to the correct branch, and include a meaningful description of your changes.

#### 2. You are not added as contributor yet.

- Fork the repository.
- After fork set upstream in you local `git remote add upstream git@github.com:nataliepina/GrowersBrains.git`
- Create your branch `git checkout -b <YOUR-BRANCH-NAME>` (Ex: `git checkout -b feature/nav-bar`) (Feel free to prefix your branches with feature or bugfix)
- Commit your changes locally `git add .` (This adds all changes made)
- Add your commit message that sums up the work you have done `git commit -m "changes you made here"` (Ex: `git commit -m "added nav bar style and tests"`)
- Push up your changes `git push` usually on the first commit you'll need to run `git push -u origin <YOUR-BRANCH-NAME>`
- Create a pull request of your changes for review from your repo to main repo. You will see a Pull button. Visit Github and you will now see a green "Compare & pull request" button on the repo. Check that your changes are accurate, that you are pushing to the correct branch, and include a meaningful description of your changes.



### How To Run
- Clone or fork the repository
- Install dependencies with NPM `npm i`
- Create a file named `.env.local` at the root of the project, and add this line to it: `PUBLIC_URL=/`
- Start the project locally `npm start`
