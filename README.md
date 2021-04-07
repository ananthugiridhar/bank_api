# bank_api
REST service that can fetch bank details

## Live link : [LIVE LINK](https://guarded-beach-71537.herokuapp.com/api/branches/autocomplete?q=RTGS&limit=3&offset=0)

## TECH STACK
    * backend: Node.js/express
    * database : PostgreSQL
    * server hosted: Heroku
    * Database hosted : ElephantSQL
    
### problem statement:
You can use the data available in this repository in your backend DB. Write your service in any
language of your choice. Host it on Heroku - you can signup for a free account in Heroku. E.g.
Here are steps on how you can get a Django app running in Heroku in a few minutes. Please
use PostgreSQL as your backend DB. Since the free-tier of Heroku has a limit of 10k rows, you
can use another DB provider (eg: you can use clever-cloud.com to host your Postgres DB by
following steps).
Essentials your applications should have:
1. Autocomplete API to return possible matches based on the branch name ordered by
IFSC code (ascending order) with limit and offset.
a. Endpoint: /api/branches/autocomplete?q=<>
b. Example: /api/branches/autocomplete?q=RTGS&limit=3&offset=0


### CURL
```
curl -i -H "Accept: application/json" https://guarded-beach-71537.herokuapp.com/api/branches/autocomplete?q=RTGS&limit=3&offset=0
```
c. Sample response:
```
{
"branches": [{
"ifsc": "ABHY0065001",
"bank_id": 60,
"branch": "RTGS-HO",
"address": "ABHYUDAYA BANK BLDG., B.NO.71, NEHRU NAGAR, KURLA (E), MUMBAI-400024",
"city": "MUMBAI",
"district": "GREATER MUMBAI",
"state": "MAHARASHTRA"
}, {
"ifsc": "ABNA0000001",
"bank_id": 110,
"branch": "RTGS-HO",
"address": "414 EMPIRE COMPLEX, SENAPATI BAPAT MARG LOWER PAREL WEST MUMBAI 400013",
"city": "MUMBAI",
"district": "GREATER BOMBAY",
"state": "MAHARASHTRA"
}, {
"ifsc": "ADCB0000001",
"bank_id": 143,
"branch": "RTGS-HO",
"address": "75, REHMAT MANZIL, V. N. ROAD, CURCHGATE, MUMBAI - 400020",
"city": "MUMBAI",
"district": "MUMBAI CITY",
"state": "MAHARASHTRA"
}, {
"ifsc": "ADCC0000001",

"bank_id": 61,
"branch": "RTGS-HO",
"address": "THE AKOLA DISTRICT CENTRAL COOP. BANK LTD., P.B.NO. 8, CIVIL LINES, S.A. COLLEGE
ROAD, AKOLA. 444001",
"city": "AKOLA",
"district": "AKOLA",
"state": "MAHARASHTRA"
}]
}
```


2. Search API to return possible matches across all columns and all rows, ordered by
IFSC code (ascending order) with limit and offset.
a. Endpoint: /api/branches?q=<>
b. Example: /api/branches?q=Bangalore&limit=4&offset=0

### CURL
```
curl -i -H "Accept: application/json" https://guarded-beach-71537.herokuapp.com/api/branches?q=Bangalore&limit=4&offset=0
```

c. Sample response:
```
{
"branches": [{
"ifsc": "ABNA0100318",
"bank_id": 110,
"branch": "BANGALORE",
"address": "PRESTIGE TOWERS', GROUND FLOOR, 99 & 100, RESIDENCY ROAD, BANGALORE 560
025.",
"city": "BANGALORE",
"district": "BANGALORE URBAN",
"state": "KARNATAKA"
}, {
"ifsc": "ADCB0000002",
"bank_id": 143,
"branch": "BANGALORE",
"address": "CITI CENTRE, 28, CHURCH STREET, OFF M. G. ROAD BANGALORE 560001",
"city": "BANGALORE",
"district": "BANGALORE URBAN",
"state": "KARNATAKA"
}, {
"ifsc": "ALLA0210217",
"bank_id": 11,
"branch": "K. G. ROAD",
"address": "NO. 2, FKCCI BUILDING , K G ROAD , BANGALORE",
"city": "BANGALORE",
"district": "BANGALORE URBAN",
"state": "KARNATAKA"
}, {
"ifsc": "ALLA0210326",
"bank_id": 11,
"branch": "BANGALORE BASAVANGUDI",
"address": "121, RM COMPLEX, DR.D.V.GUNDAPPA ROAD, BASAVANGUDI, BANGALORE - 560004",
"city": "BANGALORE",
"district": "BANGALORE URBAN",

"state": "KARNATAKA"
}]
}
```

## TASK DONE
   * setting nodejs server
   * setting up postgreSQL database connection
   * API 
   * deploying database in elephantSQL
   * testing API
   * deploying server in Heroku
   * tesiting of application
    
