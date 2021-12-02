# Reviews


## The back end system design for a ecommerce website
*****************************************************************


## Tech Stack
**************************
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)


## Version Control and Deployment
*************************************
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)

## Testing
**************
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![Pactum](https://pactumjs.github.io/_media/logo-icon-small.svg)
![K6](https://raw.githubusercontent.com/grafana/k6/master/assets/logo.svg)
![loader.io](https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1420816527/efcb3lfvkif27xsoreye.png)


## Getting Started
**********************
#### Installation:
******************
```
git clone this_repo
```
```
npm i
```
### Database Setup:
*******************

After setting up postgres download CSV files containing the data

```
copy DataTable_Name FROM 'filepath/DataTable_Name.csv' WITH (FORMAT csv, HEADER TRUE);
```
Setup AutoIncrement
```
select setval('"FK_name"', (select MAX(FK) from "DataTable_Name"));
```
Index Foregin Keys
```
create [ unique ] index [ CONCURRENTLY ] [ columnName ] ON DataTable_Name;
```
Start PostGres DB
```
sudo service postgresql start
sudo -u postgres psql
```

### Server Setup:
*****************
```
node index.js
```

## Testing
*************
### Local Testing:
**********************
k6 testing:

can adjust VU and time constraint in reviews_k6_get.js file
```
k6 run testing/reviews_k6_get.js
```

pactum:

for unit testing
```
npm test
```
### Cloud Testing:
*******************
loader.io:

1. verify with loader.io key
2. hook nginx with loader.io api key
3. run tests make sure to use users/sec

## Optimization
*****************

## Local
***********
1. First optimization was to index all FK (from seconds to ms)
2. Second optimization was to Promise.all(queries) (30% decrease in server times)
3. Third optimization was to turn off logging in Postgres (30% decrease)

## Cloud
***************
1. Implemented a Loader Balance with nginx
2. created 2 servers to take 1000 clients/sec 1%< error rate
3. created 2 more servers to take 2000 clients/sec 1%< error rate
4. Linear relationship (500 clients/sec*server)


