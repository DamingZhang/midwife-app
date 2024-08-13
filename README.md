midwife:
• npx create-next-app@latest

midwife-app:
• npm install -g npm
n
upgrade your Next.js form 12 to 13 to fix “You are using Node.js 16.17.0. For Next.js, Node.js version >= v18.17.0 is required.”
• npm i next@13 react@latest react-dom@latest eslint-config-next@13

npm run dev (Note: it should under midwife-app folder path)

npm install clsx tailwind-merge

npm install clsx tailwindcss-animate

fix nvm:
https://github.com/nvm-sh/nvm

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash

touch ~/.bash_profile or touch ~/.bashrc
touch ~/.zshrc

bash: source ~/.bashrc
zsh: source ~/.zshrc
ksh: . ~/.profile

nvm install node --latest-npm
