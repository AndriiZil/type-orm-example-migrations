# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. Run `npm start` command

Migrations
1. Generate new migration `typeorm migration:generate` 
or if error `./node_modules/.bin/ts-node ./node_modules/.bin/typeorm migration:generate -n AddCityColumnToCompany`
2. Run migration `./node_modules/.bin/ts-node ./node_modules/.bin/typeorm migration:run`
3. Revert migrations `./node_modules/.bin/ts-node ./node_modules/.bin/typeorm migration:revert`