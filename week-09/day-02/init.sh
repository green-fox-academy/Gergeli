mkdir iamgroot && cd iamgroot
touch .gitignore
echo "node_modules" > ./.gitignore
mkdir test && touch test/test-routes.js
npm init -f
npm install tape supertest --save-dev
npm install express --save
touch server.js routes.js