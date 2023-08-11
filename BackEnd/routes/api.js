const express = require('express');
require('dotenv').config();
const connection = require('../connection');
const { log } = require('console');
const router = express.Router();


//ANC ELA
router.get('/anc-ela', (req, res) => {

    let query="select district,ancela from district_percentage_data ";
    connection.query(query,(err,result)=>{
        if(!err){
            return res.json(result);
        }else{
            return res.json(err);
        }
    })
})


//ANC FIRST
router.get('/anc-first', (req, res) => {

    let query="select district,ancfirst from district_percentage_data ";
    connection.query(query,(err,result)=>{
        if(!err){
            return res.json(result);
        }else{
            return res.json(err);
        }
    })
    // let data = [{ value: 48, id: 1, dist: 'A' }, { value: 43, id: 1, dist: 'B' },
    // { value: 77, id: 1, dist: 'D' }, { value: 45, id: 1, dist: 'E' }, { value: 123, id: 1, dist: 'G' },
    // { value: 90, id: 1, dist: 'S' }, { value: 89, id: 1, dist: 'W' },
    // { value: 67, id: 1, dist: 'Q' }, { value: 102, id: 1, dist: 'R' }]

    // return res.json(data);
})


//PWRFOMANC
router.get('/pwrfomanc', (req, res) => {

    let query="select district,pwrfomanc from district_percentage_data ";
    connection.query(query,(err,result)=>{
        if(!err){
            return res.json(result);
        }else{
            return res.json(err);
        }
    })
    // let data = [{ value: 48, id: 1, dist: 'A' }, { value: 43, id: 1, dist: 'B' },
    // { value: 77, id: 1, dist: 'D' }, { value: 45, id: 1, dist: 'E' }, { value: 123, id: 1, dist: 'G' },
    // { value: 90, id: 1, dist: 'S' }, { value: 89, id: 1, dist: 'W' },
    // { value: 67, id: 1, dist: 'Q' }, { value: 102, id: 1, dist: 'R' }]
    // return res.json(data);
})


//TOSAAD
router.get('/tosaad', (req, res) => {
    let query="select district,tosaad from district_percentage_data ";
    connection.query(query,(err,result)=>{
        if(!err){
            return res.json(result);
        }else{
            return res.json(err);
        }
    })
    // let data = [{ value: 48, id: 1, dist: 'A' }, { value: 43, id: 1, dist: 'B' },
    // { value: 77, id: 1, dist: 'D' }, { value: 45, id: 1, dist: 'E' }, { value: 123, id: 1, dist: 'G' },
    // { value: 90, id: 1, dist: 'S' }, { value: 89, id: 1, dist: 'W' },
    // { value: 67, id: 1, dist: 'Q' }, { value: 102, id: 1, dist: 'R' }]
    // return res.json(data);
})


//IFAD
router.get('/ifad', (req, res) => {

    let query="select district,ifad from district_percentage_data ";
    connection.query(query,(err,result)=>{
        if(!err){
            return res.json(result);
        }else{
            return res.json(err);
        }
    })
    // let data = [{ value: 48, id: 1, dist: 'A' }, { value: 43, id: 1, dist: 'B' },
    // { value: 77, id: 1, dist: 'D' }, { value: 45, id: 1, dist: 'E' }, { value: 123, id: 1, dist: 'G' },
    // { value: 90, id: 1, dist: 'S' }, { value: 89, id: 1, dist: 'W' },
    // { value: 67, id: 1, dist: 'Q' }, { value: 102, id: 1, dist: 'R' }]
    // return res.json(data);
})


//PWGOATAFT
router.get('/pwgoataft', (req, res) => {

    let query="select district,pwgoataft from district_percentage_data ";
    connection.query(query,(err,result)=>{
        if(!err){
            return res.json(result);
        }else{
            return res.json(err);
        }
    })
    // let data = [{ value: 48, id: 1, dist: 'A' }, { value: 43, id: 1, dist: 'B' },
    // { value: 77, id: 1, dist: 'D' }, { value: 45, id: 1, dist: 'E' }, { value: 123, id: 1, dist: 'G' },
    // { value: 90, id: 1, dist: 'S' }, { value: 89, id: 1, dist: 'W' },
    // { value: 67, id: 1, dist: 'Q' }, { value: 102, id: 1, dist: 'R' }]
    // return res.json(data);
})


//PWR360C
router.get('/pwr360c', (req, res) => {

    let query="select district,pwrc from district_percentage_data ";
    connection.query(query,(err,result)=>{
        if(!err){
            return res.json(result);
        }else{
            return res.json(err);
        }
    })
    // let data = [{ value: 48, id: 1, dist: 'A' }, { value: 43, id: 1, dist: 'B' },
    // { value: 77, id: 1, dist: 'D' }, { value: 45, id: 1, dist: 'E' }, { value: 123, id: 1, dist: 'G' },
    // { value: 90, id: 1, dist: 'S' }, { value: 89, id: 1, dist: 'W' },
    // { value: 67, id: 1, dist: 'Q' }, { value: 102, id: 1, dist: 'R' }]
    // return res.json(data);
})


//SOIDAPELA
router.get('/soidapela', (req, res) => {

    let query="select district,soidapela from district_percentage_data ";
    connection.query(query,(err,result)=>{
        if(!err){
            return res.json(result);
        }else{
            return res.json(err);
        }
    })
    // let data = [{ value: 48, id: 1, dist: 'A' }, { value: 43, id: 1, dist: 'B' },
    // { value: 77, id: 1, dist: 'D' }, { value: 45, id: 1, dist: 'E' }, { value: 123, id: 1, dist: 'G' },
    // { value: 90, id: 1, dist: 'S' }, { value: 89, id: 1, dist: 'W' },
    // { value: 67, id: 1, dist: 'Q' }, { value: 102, id: 1, dist: 'R' }]
    // return res.json(data);
})


//SOANCVSID
router.get('/soancvsid', (req, res) => {

    let query="select district,soancvsid from district_percentage_data ";
    connection.query(query,(err,result)=>{
        if(!err){
            return res.json(result);
        }else{
            return res.json(err);
        }
    })
    // let data = [{ value: 48, id: 1, dist: 'A' }, { value: 43, id: 1, dist: 'B' },
    // { value: 77, id: 1, dist: 'D' }, { value: 45, id: 1, dist: 'E' }, { value: 123, id: 1, dist: 'G' },
    // { value: 90, id: 1, dist: 'S' }, { value: 89, id: 1, dist: 'W' },
    // { value: 67, id: 1, dist: 'Q' }, { value: 102, id: 1, dist: 'R' }]
    //     return res.json(data);
})


//SOCSAID
router.get('/socsaid', (req, res) => {

    let query="select district,socsaid from district_percentage_data ";
    connection.query(query,(err,result)=>{
        if(!err){
            return res.json(result);
        }else{
            return res.json(err);
        }
    })
    // let data = [{ value: 13, id: 1, dist: 'A' }, { value: 43, id: 1, dist: 'B' },
    // { value: 17, id: 1, dist: 'D' }, { value: 5, id: 1, dist: 'E' }, { value: 12, id: 1, dist: 'G' },
    // { value: 14, id: 1, dist: 'S' }, { value: 9, id: 1, dist: 'W' },
    // { value: 7, id: 1, dist: 'Q' }, { value: 12, id: 1, dist: 'R' }]
    //     return res.json(data);
})


//HRP
router.get('/hrp', (req, res) => {

    let query="select * from hrp ";
    connection.query(query,(err,result)=>{
        if(!err){
            return res.json(result);
        }else{
            return res.json(err);
        }
    })
   
    // let data = [
    //     { "district": "BALOD", "pmsma": 2239, "hrp": 259, "perhrp": 77.12, "tmr": 205, "pertmr": 79.15, "nottmr": 54 },
    //     {'district':'BALODA BAZAR ','pmsma':  1111,'hrp': 85,'perhrp': 51.01,'tmr': 82,'pertmr': 96.47,'nottmr': 3},
    //     {'district':'BALRAMPUR','pmsma':  1638,'hrp':  20,'perhrp': 8.14,'tmr': 15,'pertmr':  75.00,'nottmr':  5},
    //     {'district':'BASTAR','pmsma':  878 ,'hrp': 86 ,'perhrp':65.30 ,'tmr':74 ,'pertmr': 86.05 ,'nottmr': 12},
    //     {'district':'BEMETARA','pmsma':  1382,'hrp':  203 ,'perhrp':97.93,'tmr': 169 ,'pertmr': 83.25,'nottmr':  34},
    //     {'district':'BIJAPUR','pmsma':  733,'hrp':  86,'perhrp': 78.22 ,'tmr':86,'pertmr':  100.00,'nottmr':  0},
    //     {'district':'BILASPUR','pmsma':  1652,'hrp':  240,'perhrp': 96.85,'tmr': 170,'pertmr':  70.83,'nottmr':  70},
    //     {'district':'DANTEWADA','pmsma':  0 ,'hrp': 0 ,'perhrp':0.00,'tmr': 0,'pertmr':  0.00,'nottmr':  0},
    //     {'district':'DHAMTARI','pmsma':  1677,'hrp':  197,'perhrp': 78.31,'tmr': 138,'pertmr':  70.05,'nottmr':  59},
    //     {'district':'DURG','pmsma':  3310,'hrp':  732 ,'perhrp':147.43 ,'tmr':626 ,'pertmr': 85.52 ,'nottmr': 106},
    //     {'district':'GARIYABAND','pmsma':  996,'hrp':  162,'perhrp': 108.43,'tmr': 142,'pertmr':  87.65,'nottmr':  20},
    // ]
    // return res.json(data);
})
 

//HRPI
router.get('/hrpi', (req, res) => {

    let query="select district,hrpi from district_percentage_data ";
    connection.query(query,(err,result)=>{
        if(!err){
            return res.json(result);
        }else{
            return res.json(err);
        }
    })
    // let data = [{ value: 8, id: 1, dist: 'A' }, { value: 4, id: 1, dist: 'B' },
    // { value: 7, id: 1, dist: 'D' }, { value: 45, id: 1, dist: 'E' }, { value: 13, id: 1, dist: 'G' },
    // { value: 23, id: 1, dist: 'S' }, { value: 9, id: 1, dist: 'W' },
    // { value: 6, id: 1, dist: 'Q' }, { value: 1, id: 1, dist: 'R' }, { value: 43, id: 1, dist: 'Q' }, { value: 76, id: 1, dist: 'R' }]
    // return res.json(data);
})


//SOHRPS
router.get('/sohrps', (req, res) => {


    let query="select * from status_hrp_reports ";
    connection.query(query,(err,result)=>{
        if(!err){
            return res.json(result);
        }else{
            return res.json(err);
        }
    })
    // let data = [
    //     { "district": "Jashpur", "pwr": 2779, "pwrft": 2404, "pertpwr": 86.5, "hrpwr": 731, "perhrpratpwr": 26.3, "sapwr": 23, "md": 0 },
    //     {'district':'Kabeerdham','pwr':4255,'pwrft': 3811,'pertpwr': 89.6,'hrpwr': 683,'perhrpratpwr': 16.1,'sapwr': 6 ,'md':0},
    //     {'district':'Raipur','pwr': 8354,'pwrft': 6323 ,'pertpwr':75.7,'hrpwr': 1053 ,'perhrpratpwr': 12.6 ,'sapwr':15 ,'md':0},
    //     {'district':'Koriya ','pwr':1784,'pwrft': 1615 ,'pertpwr':90.5,'hrpwr': 169 ,'perhrpratpwr': 9.5 ,'sapwr':11 ,'md':0},
    //     {'district':'Mahasamund','pwr': 3371,'pwrft': 3116,'pertpwr': 92.4,'hrpwr': 278 ,'perhrpratpwr': 8.2,'sapwr': 9 ,'md':0},
    //     {'district':'Raigarh','pwr': 2838,'pwrft': 2206 ,'pertpwr':77.7,'hrpwr': 226 ,'perhrpratpwr': 8.0,'sapwr': 5 ,'md':0},
    //     {'district':'Rajnandgaon ','pwr':5311,'pwrft': 4602 ,'pertpwr':86.7,'hrpwr': 372,'perhrpratpwr':  7.0 ,'sapwr':11 ,'md':0},
    //     {'district':'Dantewada','pwr': 979,'pwrft': 931 ,'pertpwr':95.1 ,'hrpwr':66 ,'perhrpratpwr': 6.7,'sapwr': 4 ,'md':0},
    //     {'district':'Kanker','pwr': 2020 ,'pwrft':1906 ,'pertpwr':94.4,'hrpwr': 134 ,'perhrpratpwr': 6.6,'sapwr': 4 ,'md':0},
    //     {'district':'Janjgir - Champa ','pwr':3929,'pwrft': 2911,'pertpwr': 74.1,'hrpwr': 249,'perhrpratpwr':  6.3 ,'sapwr':12 ,'md':0},
    //     {'district':'BALODA BAJAR','pwr': 2988,'pwrft': 2313,'pertpwr': 77.4 ,'hrpwr':177,'perhrpratpwr':  5.9,'sapwr': 5 ,'md':0},
    //     {'district':'Durg ','pwr':5036,'pwrft': 4062 ,'pertpwr':80.7,'hrpwr': 262 ,'perhrpratpwr': 5.2,'sapwr': 6 ,'md':0},
    //     {'district':'BEMETARA','pwr': 2911 ,'pwrft':2361,'pertpwr': 81.1 ,'hrpwr':149 ,'perhrpratpwr': 5.1,'sapwr': 3 ,'md':0},
    //     {'district':'Dhamtari','pwr': 2301,'pwrft': 2111 ,'pertpwr':91.7,'hrpwr': 114,'perhrpratpwr':  5.0,'sapwr': 1 ,'md':0},
    //     {'district':'BALOD','pwr': 1913 ,'pwrft':1691,'pertpwr': 88.4 ,'hrpwr':93,'perhrpratpwr': 4.9,'sapwr': 5 ,'md':0},
    //     {'district':'Korba','pwr': 4588,'pwrft': 3890 ,'pertpwr':84.8 ,'hrpwr':210 ,'perhrpratpwr': 4.6 ,'sapwr':12 ,'md':0},
    //     {'district':'Narayanpur','pwr': 568,'pwrft': 462,'pertpwr': 81.3,'hrpwr': 25 ,'perhrpratpwr': 4.4,'sapwr': 0 ,'md':0},
    //     {'district':'Bilaspur','pwr': 6151,'pwrft': 4299,'pertpwr': 69.9,'hrpwr': 255 ,'perhrpratpwr': 4.1,'sapwr': 8 ,'md':0},
    //     {'district':'MUNGELI','pwr': 2187 ,'pwrft':1409 ,'pertpwr':4.4,'hrpwr': 85 ,'perhrpratpwr': 3.9,'sapwr': 0 ,'md':0},
    //     {'district':'GARIYABANDH ','pwr':2282 ,'pwrft':2109 ,'pertpwr':92.4,'hrpwr': 85 ,'perhrpratpwr': 3.7,'sapwr': 1 ,'md':1},
    //     {'district':'Bastar','pwr': 2408 ,'pwrft':2147,'pertpwr': 89.2,'hrpwr': 86 ,'perhrpratpwr': 3.6,'sapwr': 1 ,'md':0},
    // ];

    // return res.json(data);
})


//HRPBSL
router.get('/hrplbsl', (req, res) => {

    let query="select * from hrp_b";
    connection.query(query,(err,result)=>{
        if(!err){
            return res.json(result);
        }else{
            return res.json(err);
        }
    })

    // let data = [{ "Criteria": "Previous LSCS", "Number": 1183, "percentage": 22.3 },
    // { "Criteria": "High BP ", "Number": 1073, "percentage": 20.2 },
    // { "Criteria": "Anemia cases", "Number": 537, "percentage": 10.1 },
    // { "Criteria": "Abortion ", "Number": 447, "percentage": 8.4, },
    // { "Criteria": "Multigravida", "Number": 444, "percentage": 8.4 },
    // { "Criteria": "out of which severe anemia", "Number": 290, "percentage": 5.5 },
    // { "Criteria": "Diabetic ", "Number": 278, "percentage": 5.2 },
    // { "Criteria": "Sickling", "Number": 185, "percentage": 3.5 },
    // { "Criteria": "Short stature", "Number": 182, "percentage": 3.4 },
    // { "Criteria": "Low weight", "Number": 168, "percentage": 3.2 },
    // { "Criteria": "AGE ABOVE 35 YEARS ", "Number": 145, "percentage": 2.7 },
    // { "Criteria": "Still birth", "Number": 109, "percentage": 2.1 },
    // { "Criteria": "AGE <18", "Number": 108, "percentage": 2.0 },
    // { "Criteria": "Overweight ", "Number": 46, "percentage": 0.9 },
    // { "Criteria": "Low BP ", "Number": 33, "percentage": 0.6 },
    // { "Criteria": "Gap more than 3 yrs", "Number": 27, "percentage": 0.5 },
    // { "Criteria": "Thyorid ", "Number": 50, "percentage": 0.9 }]
    // return res.json(data);
})


//T15DWMT100HRPR
router.get('/t15dwmt100hrpr', (req, res) => {

    let query="select district,hrpwr from status_hrp_reports order by hrpwr desc ;";
    connection.query(query,(err,result)=>{
        if(!err){
            return res.json(result);
        }else{
            return res.json(err);
        }
    })
    // let data = [
    //     { "district": "Raipur", "hrpwr": 1053 },
    //     { "district": "Jashpur", "hrpwr": 731 },
    //     { "district": "Kabeerdham", "hrpwr": 683 },
    //     { "district": "Rajnandgaon", "hrpwr": 372 },
    //     { "district": "Mahasamund", "hrpwr": 278 },
    //     { "district": "Durg", "hrpwr": 262 },
    //     { "district": "Bilaspur", "hrpwr": 255 },
    //     { "district": "Janjgir - Champa", "hrpwr": 249 },
    //     { "district": "Raigarh", "hrpwr": 226 },
    //     { "district": "Korba", "hrpwr": 210 },
    //     { "district": "BALODA BAJAR", "hrpwr": 177 },
    //     { "district": "Koriya", "hrpwr": 169 },
    //     { "district": "BEMETARA", "hrpwr": 149 },
    //     { "district": "Kanker", "hrpwr": 134 },
    //     { "district": "Dhamtari", "hrpwr": 114 },
    //     { "district": "BALOD", "hrpwr": 93 },
    //     { "district": "Bastar", "hrpwr": 86 },
    //     { "district": "MUNGELI", "hrpwr": 85 },
    //     { "district": "GARIYABANDH", "hrpwr": 85 },
    //     { "district": "Dantewada", "hrpwr": 66 },
    //     { "district": "BALRAMPUR", "hrpwr": 66 },
    //     { "district": "KONDAGAON", "hrpwr": 47 },
    //     { "district": "Surguja", "hrpwr": 41 },
    //     { "district": "Bijapur", "hrpwr": 29 },
    //     { "district": "SURAJPUR", "hrpwr": 26 },
    //     { "district": "Narayanpur", "hrpwr": 25 },
    //     { "district": "SUKMA", "hrpwr": 13 }]
    // return res.json(data);
})


//FRU
router.get('/fru', (req, res) => {

    let data = [
        {'facilities':'DH FRU','designated':24,'functional':24,'fapc':'19'},
        {'facilities':'Civil Hospital FRU','designated':3,'functional':2,'fapc':'2(Nagri, Kharsia)'},
        {'facilities':'CHC FRU','designated':24,'functional':24,'fapc':'9(Baghbahara, Manendragarh, Pithora, Lormi, Lailunga, Tilda, Chhuikhadan, Pali, Katghora)'}
    ]
    return res.json(data);
})


//MCHW
router.get('/mchw', (req, res) => {

    let data = [
        {'facilities':'50 bedded','number':19,'functional':18,'remark':'Korea – Approved in 2020-21, under process'},
        {'facilities':'100 bedded','number':10,'functional':10,'remark':' None '},
        {'facilities':'300 bedded','number':1,'functional':0,'remark':'Raipur Medical college - Approved in 2020-21, construction Not yet started '}
    ]

    return res.json(data);
})


//SJSYPAROPPELA
router.get('/sjsyparoppela', (req, res) => {

    let query="select district,sjsyparoppela from district_percentage_data ";
    connection.query(query,(err,result)=>{
        if(!err){
            return res.json(result);
        }else{
            return res.json(err);
        }
    })
    // let data = [{ value: 48, id: 1, dist: 'A' }, { value: 43, id: 1, dist: 'B' },
    // { value: 77, id: 1, dist: 'D' }, { value: 45, id: 1, dist: 'E' }, { value: 123, id: 1, dist: 'G' },
    // { value: 90, id: 1, dist: 'S' }, { value: 89, id: 1, dist: 'W' },
    // { value: 67, id: 1, dist: 'Q' }, { value: 102, id: 1, dist: 'R' }]
    //     return res.json(data);
})


//SJSSKDAROPPELA
router.get('/sjsskdaroppela', (req, res) => {

    let query="select district,sjsskdaroppela from district_percentage_data ";
    connection.query(query,(err,result)=>{
        if(!err){
            return res.json(result);
        }else{
            return res.json(err);
        }
    })
    // let data = [{ value: 48, id: 1, dist: 'A' }, { value: 43, id: 1, dist: 'B' },
    // { value: 77, id: 1, dist: 'D' }, { value: 45, id: 1, dist: 'E' }, { value: 123, id: 1, dist: 'G' },
    // { value: 90, id: 1, dist: 'S' }, { value: 89, id: 1, dist: 'W' },
    // { value: 67, id: 1, dist: 'Q' }, { value: 102, id: 1, dist: 'R' }]
    //     return res.json(data);
})


//SMDSRR
router.get('/sdmsrr', (req, res) => {


    
    let query="select * from status_mdsr_review";
    connection.query(query,(err,result)=>{
        if(!err){
            return res.json(result);
        }else{
            return res.json(err);
        }
    })
    // let data = [{ "district": "RAIPUR", "TotalDeath": 9, "ReviewCMHO": 9, "ReviewDM": 0 },
    // { "district": "SURGUJA", "TotalDeath": 5, "ReviewCMHO": 5, "ReviewDM": 5 },
    // { "district": "KORBA", "TotalDeath": 4, "ReviewCMHO": 4, "ReviewDM": 0 },
    // { "district": "JASHPUR", "TotalDeath": 3, "ReviewCMHO": 3, "ReviewDM": 1 },
    // { "district": "DURG", "TotalDeath": 2, "ReviewCMHO": 2, "ReviewDM": 3 },
    // { "district": "KAWARDHA", "TotalDeath": 2, "ReviewCMHO": 2, "ReviewDM": 2 },
    // { "district": "MAHASAMUND", "TotalDeath": 2, "ReviewCMHO": 2, "ReviewDM": 0 },
    // { "district": "RAJNANDGAON", "TotalDeath": 2, "ReviewCMHO": 2, "ReviewDM": 0 },
    // { "district": "DANTEWADA", "TotalDeath": 1, "ReviewCMHO": 1, "ReviewDM": 0 },
    // { "district": "KANKER", "TotalDeath": 1, "ReviewCMHO": 1, "ReviewDM": 0 },
    // { "district": "KONDAGAON", "TotalDeath": 1, "ReviewCMHO": 0, "ReviewDM": 0 },
    // { "district": "SURAJPUR", "TotalDeath": 1, "ReviewCMHO": 1, "ReviewDM": 1 }]
    // return res.json(data);
})


//BTSSF
router.get('/btssf', (req, res) => {

    let data = [
{'activity':'Total no. of Blood Banks','achiev':'120'},
{'activity':'Total Govt. Blood Banks','achiev':' 33'},
{'activity':'Total Non. Govt. Blood Banks','achiev':' 87'},
{'activity':'Government facilities','achiev':''},
{'activity':'District Hospital Blood Bank','achiev':' 22'},
{'activity':'Medical College Blood Banks*','achiev':' 9'},
{'activity':'Red Cross Blood Bank','achiev':' 01'},
{'activity':'CHC Blood Bank ','achiev':'01'},
{'activity':'Transportation & Collection facility -','achiev':''},
{'activity':'Blood Mobile Van ','achiev':'2'},
{'activity':'Blood Transportation Van ','achiev':'4 '},
    ]

    return res.json(data);
})


//SSBC
router.get('/ssbc', (req, res) => {

    let data = [
{'head':'1 % of total population requires blood','lastyear':' 2.55 lakh units','thisyear':' 24578 units for 2 months '},
{'head':'Total no. of Blood banks','lastyear':' 120 ','thisyear':'120'},
{'head':'Government','lastyear':' 33','thisyear':' 33'},
{'head':'Non-Government ','lastyear':'87','thisyear':' 87'},
{'head':'Total blood collection','lastyear':' 234480','thisyear':' 34259'},
{'head':'Government Collection','lastyear':' 113568 Unit ','thisyear':'18898 units'},
{'head':'Non-Government Collection','lastyear':' 120912 Unit ','thisyear':'15361 units'},
{'head':'Percentage Collection','lastyear':' 92 % ','thisyear':'139 %'},
{'head':'GAP units required to fulfill','lastyear':' 7344(8%)','thisyear':' 0'},
    ]

    return res.json(data);
})


//BCCSL
router.get('/bccsl', (req, res) => {

    let data = [{ "district": "Raipur", "target": 25443, "TVCollection": 27938, "TRCollection": 36445, "GTBCollection": 64383, "percentage": 253 },
    { "district": "Surguja", "target": 8947, "TVCollection": 4800, "TRCollection": 15487, "GTBCollection": 20287, "percentage": 227 },
    { "district": "Bilaspur", "target": 20866, "TVCollection": 11741, "TRCollection": 14835, "GTBCollection": 26576, "percentage": 127 },
    { "district": "Rajnandgaon", "target": 15375, "TVCollection": 11038, "TRCollection": 8440, "GTBCollection": 19478, "percentage": 127 },
    { "district": "Dantewada", "target": 2640, "TVCollection": 985, "TRCollection": 1959, "GTBCollection": 2944, "percentage": 112 },
    { "district": "Kanker", "target": 7486, "TVCollection": 2101, "TRCollection": 6081, "GTBCollection": 8182, "percentage": 109 },
    { "district": "Dhamtari", "target": 7992, "TVCollection": 5567, "TRCollection": 3003, "GTBCollection": 8570, "percentage": 107 },
    { "district": "Narayanpur", "target": 1402, "TVCollection": 608, "TRCollection": 876, "GTBCollection": 1484, "percentage": 106 },
    { "district": "Durg", "target": 19210, "TVCollection": 6953, "TRCollection": 11466, "GTBCollection": 18419, "percentage": 96 },
    { "district": "Kondagaon", "target": 5203, "TVCollection": 785, "TRCollection": 3447, "GTBCollection": 4233, "percentage": 81 },
    { "district": "Bastar", "target": 8913, "TVCollection": 77, "TRCollection": 7142, "GTBCollection": 7219, "percentage": 81 },
    { "district": "Mahasamund", "target": 10323, "TVCollection": 4122, "TRCollection": 2882, "GTBCollection": 7004, "percentage": 68 },
    { "district": "Bijapur", "target": 2552, "TVCollection": 184, "TRCollection": 1518, "GTBCollection": 1702, "percentage": 67 },]
    return res.json(data);
})


//BCCST
router.get('/bccst', (req, res) => {

    let data = [
        { "district": "Raipur", "pp": 2617678, "tbcpprb": 26177, "targettwo": 2181, "tcgovt": 2758, "tcprivate": 6020, "GTcollection": 8778, "percentage": 402 },
        { "district": "Surguja", "pp": 943322, "tbcpprb": 9433, "targettwo": 786, "tcgovt": 1848, "tcprivate": 1282, "GTcollection": 3130, "percentage": 398 },
        { "district": "Narayanpur", "pp": 156374, "tbcpprb": 1564, "targettwo": 130, "tcgovt": 299, "tcprivate": 0, "GTcollection": 299, "percentage": 229 },
        { "district": "Bilaspur", "pp": 2371523.1, "tbcpprb": 23715, "targettwo": 1976, "tcgovt": 1313, "tcprivate": 3039, "GTcollection": 4352, "percentage": 220 },
        { "district": "Rajnandgaon", "pp": 1745841, "tbcpprb": 17458, "targettwo": 1455, "tcgovt": 1070, "tcprivate": 1813, "GTcollection": 2883, "percentage": 198 },
        { "district": "Dantewada", "pp": 315827.03, "tbcpprb": 3158, "targettwo": 263, "tcgovt": 490, "tcprivate": 0, "GTcollection": 490, "percentage": 186 },
        { "district": "Kanker", "pp": 1033736, "tbcpprb": 10337, "targettwo": 861, "tcgovt": 960, "tcprivate": 536, "GTcollection": 1496, "percentage": 174 },
        { "district": "Sukma", "pp": 262243, "tbcpprb": 2622, "targettwo": 219, "tcgovt": 327, "tcprivate": 0, "GTcollection": 327, "percentage": 150 },
        { "district": "Durg", "pp": 1891770.8, "tbcpprb": 18918, "targettwo": 1576, "tcgovt": 1322, "tcprivate": 934, "GTcollection": 2256, "percentage": 143 },
    ]
    return res.json(data);
})


//SBSUFRUCHCS
router.get('/sbsufruchcs', (req, res) => {

    let data = [
        {'district':'Baloda Bazar','facilities':' CHC Kasdoal','tf': 0},
        {'district':'Balrampur','facilities':' CHC Wadrafnagar','tf': 0},
        {'district':'Bastar','facilities':' CHC Bakawand','tf': 0},
        {'district':'Kabirdham ','facilities':'CHC Pandariya','tf': 0},
        {'district':'Kanker','facilities':' CHC Pakhanjur','tf': 0},
        {'district':'Rajanandgaon ','facilities':'CHC Chhuriya','tf': 0},
        {'district':'Manpur-Mohela-Chouki','facilities':' CHC Manpur','tf': 0},
        {'district':'Rajnandgaon','facilities':' CHC Dongargarh','tf': 0},
        {'district':'Janjgir-Champa','facilities':' CHC Sakti','tf': 0},
        
    ]

    return res.json(data);
})


//GBCCC
router.get('/cbccc', (req, res) => {

    let data = [
        { "district": "Raipur", "tcapm": 140, "capmcollection": 7977, "avgper": 57 },
        { "district": "Korba", "tcapm": 33, "capmcollection": 1884, "avgper": 57 },
        { "district": "Mahasamund ", "tcapm": 42, "capmcollection": 1858, "avgper": 44 },
        { "district": "Durg ", "tcapm": 52, "capmcollection": 2220, "avgper": 43 },
        { "district": "Rajnandgaon", "tcapm": 55, "capmcollection": 2299, "avgper": 42 },
        { "district": "Bilaspur ", "tcapm": 45, "capmcollection": 1843, "avgper": 41 },
        { "district": "Jagdalpur", "tcapm": 25, "capmcollection": 919, "avgper": 36 },
        { "district": "Dantewara", "tcapm": 12, "capmcollection": 413, "avgper": 34 },
        { "district": "Dhamtari ", "tcapm": 14, "capmcollection": 473, "avgper": 33 },
        { "district": " Kanker", "tcapm": 24, "capmcollection": 752, "avgper": 31 },
        { "district": " Surguja", "tcapm": 45, "capmcollection": 1302, "avgper": 29 },
        { "district": " Mungeli ", "tcapm": 12, "capmcollection": 320, "avgper": 26 },
        { "district": " Janjgir ", "tcapm": 32, "capmcollection": 811, "avgper": 25 },
        { "district": " Balrampur", "tcapm": 4, "capmcollection": 98, "avgper": 22 },
    ]
    return res.json(data);
})


//SCSSCP
router.get('/scsscp', (req, res) => {

    let data = [
        { "district": "Bastar", "total": 2189, "aa": 1749, "as": 389, "ss": 50, "totalpd": 45, "dfupss": 114, "thnew": 23, "thold": 37, "totalcbc": 63, "totalbt": 4 },
        { "district": "Durg", "total": 1956, "aa": 1427, "as": 436, "ss": 43, "totalpd": 28, "dfupss": 388, "thnew": 32, "thold": 272, "totalcbc": 1886, "totalbt": 60 },
        { "district": "Raigarh", "total": 1715, "aa": 1397, "as": 221, "ss": 96, "totalpd": 8, "dfupss": 207, "thnew": 39, "thold": 176, "totalcbc": 133, "totalbt": 1 },
        { "district": "Surajpur ", "total": 1689, "aa": 1240, "as": 340, "ss": 24, "totalpd": 284, "dfupss": 128, "thnew": 5, "thold": 114, "totalcbc": 120, "totalbt": 3 },
        { "district": "Raipur", "total": 1632, "aa": 874, "as": 603, "ss": 81, "totalpd": 17, "dfupss": 2062, "thnew": 19, "thold": 1366, "totalcbc": 1092, "totalbt": 0 },
        { "district": "Dhamtari ", "total": 1237, "aa": 1038, "as": 14, "ss": 28, "totalpd": 54, "dfupss": 61, "thnew": 30, "thold": 44, "totalcbc": 426, "totalbt": 14 }
    ]
    return res.json(data);
})


//IECE
router.get('/iece', (req, res) => {

    let query="select district,iecel,iecet from pcpndt";
    connection.query(query,(err,result)=>{
        if(!err){
            return res.json(result);
        }else{
            return res.json(err);
        }
    })
    // let data = [{ value: 48, value1: 63, id: 1, dist: 'A' }, { value: 43, value1: 29, id: 1, dist: 'B' },
    // { value: 77, value1: 34, id: 1, dist: 'D' }, { value: 45, value1: 78, id: 1, dist: 'E' }, { value: 45, value1: 48, id: 1, dist: 'G' },
    // { value: 90, value1: 56, id: 1, dist: 'S' }, { value: 89, value1: 62, id: 1, dist: 'W' },
    // { value: 67, value1: 49, id: 1, dist: 'Q' }, { value: 100, value1: 99, id: 1, dist: 'R' }]
    // return res.json(data);
})


//DACM
router.get('/dacm', (req, res) => {

    let query="select district,dacml,dacmt from pcpndt";
    connection.query(query,(err,result)=>{
        console.log(result);
        if(!err){
            return res.json(result);
        }else{
            return res.json(err);
        }
    })
    // let data = [{ value: 48, value1: 63, id: 1, dist: 'A' }, { value: 43, value1: 29, id: 1, dist: 'B' },
    // { value: 77, value1: 34, id: 1, dist: 'D' }, { value: 45, value1: 78, id: 1, dist: 'E' }, { value: 45, value1: 48, id: 1, dist: 'G' },
    // { value: 90, value1: 56, id: 1, dist: 'S' }, { value: 89, value1: 62, id: 1, dist: 'W' },
    // { value: 67, value1: 49, id: 1, dist: 'Q' }, { value: 100, value1: 99, id: 1, dist: 'R' }]
    // return res.json(data);
})

//CDP
router.get('/cdp', (req, res) => {

    let data = [
        {label:'HIE / Moderate-Severe Birth Asphyxia',data:42},{label:'Meconium Aspiration Syndrome',data:4},{label:'Respiratory Distress Syndrome',data:22},{label:'Major Congenital Malformation',data:1},{label:'Prematurity ( <28 weeks of Gestation)',data:4},{label:'E.L.B.W. (Wt. less than 1000g)',data:12},{label:'Sepsis',data:15}
    ]

    return res.json(data);
})



//SNCUABOR&O
router.get('/sncuabor&o', (req, res) => {
    let data = [
        { "district": "SNCU MC Raipur", "beds": 5, "admissions": 414, "bedOR": 103, "discharge": 60, "lama": 7, "referper": 1, "deathper": 32 },
        { "district": "SNCU DH Raigarh ", "beds": 12, "admissions": 198, "bedOR": 124, "discharge": 72, "lama": 6, "referper": 3, "deathper": 20 },
        { "district": "SNCU MC Jagdalpur", "beds": 36, "admissions": 512, "bedOR": 143, "discharge": 81, "lama": 2, "referper": 1, "deathper": 16 },
        { "district": "SNCU MC Ambikapur", "beds": 35, "admissions": 685, "bedOR": 174, "discharge": 78, "lama": 4, "referper": 3, "deathper": 15 },
        { "district": "SNCU DH Kanker", "beds": 12, "admissions": 148, "bedOR": 99, "discharge": 84, "lama": 0, "referper": 3, "deathper": 13 },
        { "district": "SNCU DH Korba", "beds": 12, "admissions": 242, "bedOR": 123, "discharge": 81, "lama": 6, "referper": 1, "deathper": 13 },
        { "district": "SNCU DH JAGDALPUR", "beds": 15, "admissions": 41, "bedOR": 3, "discharge": 80, "lama": 0, "referper": 10, "deathper": 10 },
        { "district": "SNCU DH Bijapur", "beds": 12, "admissions": 79, "bedOR": 55, "discharge": 76, "lama": 7, "referper": 7, "deathper": 10 },
        { "district": "SNCU DH Durg ", "beds": 13, "admissions": 226, "bedOR": 131, "discharge": 87, "lama": 0, "referper": 4, "deathper": 9 },
        { "district": "SNCU DH Rajnandgaon", "beds": 30, "admissions": 176, "bedOR": 96, "discharge": 86, "lama": 1, "referper": 10, "deathper": 3 }
    ]
    return res.json(data);
})


//BORNRC
router.get('/bornrc', (req, res) => {

    
    let query="select district,bornrc from chnhbncbhyc";
    connection.query(query,(err,result)=>{
        console.log(result);
        if(!err){
            return res.json(result);
        }else{
            return res.json(err);
        }
    })
    // let data = [{ value: 48, id: 1, dist: 'A' }, { value: 43, id: 1, dist: 'B' },
    // { value: 77, id: 1, dist: 'D' }, { value: 45, id: 1, dist: 'E' }, { value: 123, id: 1, dist: 'G' },
    // { value: 90, id: 1, dist: 'S' }, { value: 89, id: 1, dist: 'W' },
    // { value: 67, id: 1, dist: 'Q' }, { value: 102, id: 1, dist: 'R' }]

    // return res.json(data);
})


//SDRNRC
router.get('/sdrnrc', (req, res) => {

     
    let query="select district,sdrnrc from chnhbncbhyc";
    connection.query(query,(err,result)=>{
        console.log(result);
        if(!err){
            return res.json(result);
        }else{
            return res.json(err);
        }
    })
    // let data = [{ value: 48, id: 1, dist: 'A' }, { value: 43, id: 1, dist: 'B' },
    // { value: 77, id: 1, dist: 'D' }, { value: 45, id: 1, dist: 'E' }, { value: 123, id: 1, dist: 'G' },
    // { value: 90, id: 1, dist: 'S' }, { value: 89, id: 1, dist: 'W' },
    // { value: 67, id: 1, dist: 'Q' }, { value: 102, id: 1, dist: 'R' }]

    // return res.json(data);
})


//NRC
router.get('/nrc', (req, res) => {

    let data = [
        {'challenges':'Admission of Non-SAM/MAM children in NRCs on referral by AWW. Adds to poor management of actual SAM children • If these children are refused admissions, future referral from field stops • There are no protocols for managing non-SAM children in NRC','solutions':' Only cases of SAM certified by ANM/CHO/MO in field should be sent to NRC (This activity should be undertaken every fortnight at AWC.  In case Non-SAM child is referred to NRC, the child should not be refused admission, while should be provided investigations, multivitamin and IFA supplementation, antibiotics if any illness and admitted to NRC for couple of days where mother can be counselled for better child care practices and then discharged.  Entry of such admissions should be maintained in separate register in simple format.'},
        {'challenges':'Lost to follow up on discharge from NRC','solutions':'• Linking all children discharged from NRC with CMAM programme for admission and weekly follow up for 16 weeks. Joint guidance to be issued by Health & DWCD.'},
        {'challenges':'Data feeding difficulties in field despite of regular NRC MIS training','solutions':'• Training of Staff Nurses/FD for data entry in NRC portal – were planned.'},
    ]
    

    return res.json(data);
})


//AMBPC6M
router.get('/ambpc6m', (req, res) => {

     
    let query="select district,ambpc6m from chnhbncbhyc";
    connection.query(query,(err,result)=>{
        console.log(result);
        if(!err){
            return res.json(result);
        }else{
            return res.json(err);
        }
    })
    // let data = [{ value: 48, id: 1, dist: 'A' }, { value: 43, id: 1, dist: 'B' },
    // { value: 77, id: 1, dist: 'D' }, { value: 45, id: 1, dist: 'E' }, { value: 123, id: 1, dist: 'G' },
    // { value: 90, id: 1, dist: 'S' }, { value: 89, id: 1, dist: 'W' },
    // { value: 67, id: 1, dist: 'Q' }, { value: 102, id: 1, dist: 'R' }]

    // return res.json(data);
})


//PC5-9YG4-5T
router.get('/pc59yg45t', (req, res) => {

 
    let query="select district,pc59yg45t from chnhbncbhyc";
    connection.query(query,(err,result)=>{
        console.log(result);
        if(!err){
            return res.json(result);
        }else{
            return res.json(err);
        }
    })

    // let data = [{ value: 48, id: 1, dist: 'A' }, { value: 43, id: 1, dist: 'B' },
    // { value: 77, id: 1, dist: 'D' }, { value: 45, id: 1, dist: 'E' }, { value: 123, id: 1, dist: 'G' },
    // { value: 90, id: 1, dist: 'S' }, { value: 89, id: 1, dist: 'W' },
    // { value: 67, id: 1, dist: 'Q' }, { value: 102, id: 1, dist: 'R' }]

    // return res.json(data);
})


//CSBU
router.get('/csbu', (req, res) => {
     
    let query="select district,csbu from chnhbncbhyc";
    connection.query(query,(err,result)=>{
        console.log(result);
        if(!err){
            return res.json(result);
        }else{
            return res.json(err);
        }
    })
    // let data = [{ value: 48, id: 1, dist: 'A' }, { value: 43, id: 1, dist: 'B' },
    // { value: 77, id: 1, dist: 'D' }, { value: 45, id: 1, dist: 'E' }, { value: 123, id: 1, dist: 'G' },
    // { value: 90, id: 1, dist: 'S' }, { value: 89, id: 1, dist: 'W' },
    // { value: 67, id: 1, dist: 'Q' }, { value: 102, id: 1, dist: 'R' }]

    // return res.json(data);
})


//COSGUW
router.get('/cosguw', (req, res) => {
    let query="select district,cosguw from chnhbncbhyc";
    connection.query(query,(err,result)=>{
        console.log(result);
        if(!err){
            return res.json(result);
        }else{
            return res.json(err);
        }
    })
    // let data = [{ value: 48, id: 1, dist: 'A' }, { value: 43, id: 1, dist: 'B' },
    // { value: 77, id: 1, dist: 'D' }, { value: 45, id: 1, dist: 'E' }, { value: 123, id: 1, dist: 'G' },
    // { value: 90, id: 1, dist: 'S' }, { value: 89, id: 1, dist: 'W' },
    // { value: 67, id: 1, dist: 'Q' }, { value: 102, id: 1, dist: 'R' }]

    // return res.json(data);
})


//AMB
router.get('/amb', (req, res) => {

    let data = [
        {'challenges':'Reporting \n• Irregular and incorrect reporting in HMIS by districts • Reporting despite no submission by schools / AWCs • No reporting on stock','solutions':'• Strengthening review mechanism at district level • Strengthening coordination with Education and WCD at district level • Strengthen capacity of data entry operator'},
        {'challenges':'• Denominator mismatch with ICDS','solutions':'• Coordination with WCD for up-to-date data for current FY        '},
        {'challenges':'• Districts still following distribution and reporting channel developed during pandemic','solutions':'• Strengthening coordination with Education and WCD at district level • Regular Inter-departmental meetings at district level'},
        {'challenges':'• Poor knowledge of FLWs on program (Supplementation & reporting etc)','solutions':'• Strengthening supportive supervision • On-job capacity building'},
        {'challenges':'• No reporting on WIFS, Jr. WIFS by newly formed districts','solutions':'• Sharing of denominators and program guidelines with new districts • Handhold support from parent districts'},
        {'challenges':'Supply Chain • Stock-out at schools and AWCs instead of availability of sufficient stock at CHC (Janjgir) • No indenting from field level','solutions':'• Capacity building of Nodal teachers, FLWs on indenting, maintaining of stock and reporting • Strengthening coordination with Education and WCD at district level'},
        {'challenges':'• NO counselling by FLWs/ nodal teachers','solutions':'• Supportive supervision to strengthen counselling '},
    ]

    return res.json(data);
})


//SCSSAWC
router.get('/scssawc', (req, res) => {

    let query="select district,scssawc as data from rbskchirayu";
    connection.query(query,(err,result)=>{
        console.log(result);
        if(!err){
            return res.json(result);
        }else{
            return res.json(err);
        }
    })
    // let data = [
    //     { "district": "Raipur",  'data':100},
    //     { "district": "Korba",'data':100},
    //     { "district": "Mahasamund ", 'data':100},
    //     { "district": "Durg ",  'data':100},
    //     { "district": "Rajnandgaon", 'data':100},
    //     { "district": "Bilaspur ",  'data':100},
    //     { "district": "Jagdalpur",  'data':100},
    //     { "district": "Dantewara",  'data':97},
    //     { "district": "Dhamtari ",  'data':91},
    //     { "district": " Kanker",  'data':94},
    //     { "district": " Surguja",  'data':87},
    //     { "district": " Mungeli ",  'data':82},
    //     { "district": " Janjgir ",  'data':79},
    //     { "district": " Balrampur", 'data':75},   
    // ]
    // return res.json(data);
})


//SAWCVCS
router.get('/sawcvcs', (req, res) => {
    let query="select district,sawcvcs1 as data,sawcvcs2 as data2 from rbskchirayu";
    connection.query(query,(err,result)=>{
        console.log(result);
        if(!err){
            return res.json(result);
        }else{
            return res.json(err);
        }
    })
    // let data = [
    //     { "district": "Raipur",  'data':100,'data2':89},
    //     { "district": "Korba",'data':100,'data2':76},
    //     { "district": "Mahasamund ", 'data':100,'data2':79},
    //     { "district": "Durg ",  'data':100,'data2':65},
    //     { "district": "Rajnandgaon", 'data':97,'data2':100},
    //     { "district": "Bilaspur ",  'data':56,'data2':100},
    //     { "district": "Jagdalpur",  'data':87,'data2':100},
    //     { "district": "Dantewara",  'data':97, 'data2':74},
    //     { "district": "Dhamtari ",  'data':91, 'data2':65},
    //     { "district": " Kanker",  'data':94, 'data2':87},
    //     { "district": " Surguja",  'data':87, 'data2':90},
    //     { "district": " Mungeli ",  'data':71, 'data2':82},
    //     { "district": " Janjgir ",  'data':99, 'data2':79},
    //     { "district": " Balrampur", 'data':92,'data2':75},  
    // ]
    // return res.json(data);
})


//TSACABCDE
router.get('/tsacabcde', (req, res) => {
    let query="select district,tsacabcde as data from rbskchirayu";
    connection.query(query,(err,result)=>{
        console.log(result);
        if(!err){
            return res.json(result);
        }else{
            return res.json(err);
        }
    })
    // let data = [
    //     { "district": "Raipur",'data':97},
    //     { "district": "Korba",'data':94},
    //     { "district": "Mahasamund ", 'data':92},
    //     { "district": "Durg ",'data':90},
    //     { "district": "Rajnandgaon",'data':99},
    //     { "district": "Bilaspur ",'data':82},
    //     { "district": "Jagdalpur",'data':89},
    //     { "district": "Dantewara",  'data':97},
    //     { "district": "Dhamtari ",  'data':91},
    //     { "district": " Kanker",  'data':94},
    //     { "district": " Surguja",  'data':87},
    //     { "district": " Mungeli ",  'data':82},
    //     { "district": " Janjgir ",  'data':79},
    //     { "district": " Balrampur", 'data':75},
    // ]
    // return res.json(data);
})


//OIAR
router.get('/oiar', (req, res) => {

    let data = [
        {'challenges':'Delay in identification of birth defect or any complication in newborn leads to delay in referral & treatment.','solutions':'• All newborn should be screened at delivery points, SNCU & PNC ward for early identification, referral & treatment.'},
        {'challenges':'Poor attendance of children in School & AWCs (% of children screened is less against the target in spite of 95- 100% visit)','solutions':'• Interdepartmental meeting should be conducted in district/ block level for better implementation of program. • Every school must nominate nodal teachers for Chirayu program so that when ever team visits schools, their responsibility to ensure 100% screening of students. • Sharing of 3 month advance tour plan with education & WCD department. • Give intimation/reminder call to teacher & AWW for full attendance of children on the day of screening. • 120 screening per day/ team to be follow.'},
        {'challenges':'Unavailability of essential equipments/ medicines with RBSK team during field visit','solutions':'• Ensure availability of all essential equipments/medicines like- stethoscope, BP apparatus, stadiometer, weighing machine, torch, MUAC tap, snelllen’s chart, thermometer, HB meter, medicine box etc.'},
        {'challenges':'Many identified Childrens are pending for treatment in different categories.','solutions':'• Cat A patient may refer to DH/ MC/ Higher center. • Cat B & C patient should be treated by RBSK team/PHC/CHC/DH level • Cat D patient refer to DEIC/ District Rehabilitation Centre. • Treatment entry in Chirayu Portal'},
        {'challenges':' Incomplete HR in a team','solutions':'• Recruitment of RBSK HR on priority basis.'},
        {'challenges':'Engagement of RBSK Staff for other work','solutions':'• Ensure RBSK HR should not engaged in other work like OPD duty, Haat Bazar, recruitments etc.'},
        {'challenges':'Engagement of RBSK vehicles for other activity','solutions':'• RBSK vehicle must use only for RBSK program. • Visible RBSK IEC in Vehicle. '},
    ]

    return res.json(data);
})


//FICP
router.get('/ficp', (req, res) => {
     let query="select * from full_immunization"
     connection.query(query,(err,result)=>{
        if(!err){
            return res.json(result);
        }
        else{
            return res.json(err);
        }
     })

})


//AOVP
router.get('/atovp', (req, res) => {

    let query="select * from aovp"
     connection.query(query,(err,result)=>{
        if(!err){
            return res.json(result);
        }
        else{
            return res.json(err);
        }
     })
})


//DRIVD
router.get('/drivd', (req, res) => {

    let query="select * from drivd"
    connection.query(query,(err,result)=>{
       if(!err){
           return res.json(result);
       }
       else{
           return res.json(err);
       }
    })
})


//THAWA
router.get('/thawa', (req, res) => {

    let data = {'lastyear':[
        {'district':'Mahasamund','target':'1348','achiev':'1348 (100%)'},
        {'district':'Bastar','target':' 1630','achiev':' 832 (51%)'},
        {'district':'Rajnandgoan, (MMA,KCG)','target':' 1030','achiev':' 419 (41%)'},
        {'district':'Bilaspur   ','target':'1486','achiev':'1197 (81%)'},
        {'district':'GPM  ','target':'604','achiev':'0 (0%)'},
        {'district':'Sukma ','target':'424','achiev':' 0 (0%)'},
        {'district':'Narayanpur ','target':'338','achiev':' 0 (0%)'},
        {'district':'Total  ','target':'6860','achiev':' 3796 (55%)'},
    ],'thisyear':[
        {'district':'Kondagaon','target':' 1520','achiev':'0'},
        {'district':'Kanker ','target':'1700','achiev':'0'},
        {'district':'Korba ','target':'1396','achiev':'0'},
        {'district':'Dantewada  ','target':'578','achiev':'0'},
        {'district':'Bijapur ','target':'648','achiev':'0'},
        {'district':'Total ','target':'5842','achiev':'0'},
    ]

    }

    return res.json(data);
})


//PFPSS
router.get('/pfpss', (req, res) => {

    let query="select district,pfpss1 as value,pfpss2 as value1 from family_planning"
    connection.query(query,(err,result)=>{
       if(!err){
           return res.json(result);
       }
       else{
           return res.json(err);
       }
    })    
    // let data = [{ value: 8, value1: 43, id: 1, dist: 'A' }, { value: 12, value1: 0, id: 1, dist: 'B' },
    // { value: 7, value1: 14, id: 1, dist: 'D' }, { value: 5, value1: 18, id: 1, dist: 'E' }, { value: 0, value1: 4, id: 1, dist: 'G' },
    // { value: 9, value1: 16, id: 1, dist: 'S' }, { value: 13, value1: 26, id: 1, dist: 'W' },
    // { value: 17, value1: 8, id: 1, dist: 'Q' }, { value: 30, value1: 9, id: 1, dist: 'R' }]
    // return res.json(data);
})


//SFPSS
router.get('/sfpss', (req, res) => {
    let query="select district,sfpss1 as value,sfpss2 as value1 from family_planning "
    connection.query(query,(err,result)=>{
        if(!err){
           return res.json(result);
       }
       else{
           return res.json(err);
       }
    }) 
    // let data = [{ value: 8, value1: 43, id: 1, dist: 'A' }, { value: 12, value1: 0, id: 1, dist: 'B' },
    // { value: 7, value1: 14, id: 1, dist: 'D' }, { value: 5, value1: 18, id: 1, dist: 'E' }, { value: 0, value1: 4, id: 1, dist: 'G' },
    // { value: 9, value1: 16, id: 1, dist: 'S' }, { value: 13, value1: 26, id: 1, dist: 'W' },
    // { value: 17, value1: 8, id: 1, dist: 'Q' }, { value: 30, value1: 9, id: 1, dist: 'R' }]
    // return res.json(data);
})


//PPIUCDAP
router.get('/ppiucdap', (req, res) => {

    let query="select district,ppiucdap as ppiucda from family_planning ORDER BY ppiucdap desc"
    connection.query(query,(err,result)=>{
       if(!err){
           return res.json(result);
       }
       else{
           return res.json(err);
       }
    }) 
    // let data = [
    //     {'district':'Durg','ppiucda': 35.5},
    //     {'district':'Dhamtari','ppiucda': 35.2},
    //     {'district':'Kabirdham','ppiucda': 28.4},
    //     {'district':'Raipur','ppiucda': 25.7},
    //     {'district':'Balod','ppiucda': 23.9},
    //     {'district':'Korba','ppiucda': 23.7},
    //     {'district':'Surajpur','ppiucda': 23.2},
    //     {'district':'Mahasamund','ppiucda': 22.8},
    //     {'district':'Jashpur','ppiucda': 19.2},
    //     {'district':'Baloda Bazar','ppiucda': 17.5},
    //     {'district':'Bemetara','ppiucda': 17.2},
    //     {'district':'Dantewada','ppiucda': 16.8},
    //     {'district':'Gaurella Pendra Marwahi','ppiucda': 16.4},
    //     {'district':'Mungeli','ppiucda': 16.1},      
    // ]
    // return res.json(data);
})


//PIMPAUAEC
router.get('/pimpauaec', (req, res) => {

    let data={'pimpadata':[], 
    'timpauphnwra':[
            {'year':'2019-20','data':0.10},
            {'year':'2020-21','data':0.12},
            {'year':'2021-22','data':0.11},
            {'year':'2022-23','data':0.14}
        ]}
    let query="select district,pimpa from family_planning ORDER BY pimpa desc"
    connection.query(query,(err,result)=>{
       if(!err){
           data.pimpadata=result;
           return res.json(data);
       }
       else{
           return res.json(err);
       }
    })

//     let data = {'pimpadata':[
// {'district':'Bijapur','pimpa': 0.3},
// {'district':'Sukma','pimpa': 0.2},
// {'district':'Raigarh','pimpa': 0.2},
// {'district':'Surguja','pimpa': 0.2},
// {'district':'Mahasamund','pimpa': 0.2},
// {'district':'Jashpur','pimpa': 0.2},
// {'district':'Balrampur','pimpa': 0.2},
// {'district':'Bastar','pimpa': 0.2},
// {'district':'Dhamtari','pimpa': 0.1},
// {'district':'Baloda Bazar','pimpa': 0.1},
// {'district':'Kanker','pimpa': 0.1},
// {'district':'Balod','pimpa': 0.1},
// {'district':'Dantewada','pimpa': 0.1},],
// 'timpauphnwra':[
//     {'year':'2019-20','data':0.10},
//     {'year':'2020-21','data':0.12},
//     {'year':'2021-22','data':0.11},
//     {'year':'2022-23','data':0.14}
// ]
// }

})


//KFPP
router.get('/kfpp', (req, res) => {

    let data={ 'nfhs4':[],'nfhs5':[], 'mcpr':[
                {'label':'NFHS 4','mcpr':54.5,'un':11.1,'tm':3.2},
                {'label':'NFHS 5','mcpr':61.7,'un':8.3,'tm':6.1},
            ]}
    let query="select district,nfhs4 as data from family_planning ORDER BY nfhs4 desc"
    connection.query(query,(error,results)=>{
       if(!error){
           data.nfhs4=results
           query="select district,nfhs5 as data from family_planning ORDER BY nfhs5 desc"
           connection.query(query,(err,result)=>{
              if(!err){
                  data.nfhs5=result;
                  return res.json(data)
              }     
              else{
                  return res.json(err);
              }
           }) 
       }
       else{
           return res.json(error)
       }
    })
    // query="select district,nfhs5 as data from family_planning ORDER BY nfhs5 desc"
    // connection.query(query,(err,result)=>{
    //    if(!err){
    //        data.nfhs5=result 
    //        console.log(data);
    //        return res.json(data)
    //    }
    //    else{
    //        return res.json(err);
    //    }
    // })
    // let data ={'nfhs5':[
    //     {'district':'Bijapur','data': 87.3},
    //     {'district':'Sukma','data': 77.2},
    //     {'district':'Raigarh','data': 56.2},
    //     {'district':'Surguja','data': 78.2},
    //     {'district':'Mahasamund','data': 85.2},
    //     {'district':'Jashpur','data': 76.2},
    //     {'district':'Balrampur','data': 69.2},
    //     {'district':'Bastar','data': 72.2},
    //     {'district':'Dhamtari','data': 47.1},
    //     {'district':'Baloda Bazar','data': 75.1},
    //     {'district':'Kanker','data': 68.1},
    //     {'district':'Balod','data': 59.1},
    //     {'district':'Dantewada','data': 62.1},
    // ],'nfhs4':[
    //     {'district':'Bijapur','data': 87.3},
    //     {'district':'Sukma','data': 77.2},
    //     {'district':'Raigarh','data': 56.2},
    //     {'district':'Surguja','data': 78.2},
    //     {'district':'Mahasamund','data': 85.2},
    //     {'district':'Jashpur','data': 76.2},
    //     {'district':'Balrampur','data': 69.2},
    //     {'district':'Bastar','data': 72.2},
    //     {'district':'Dhamtari','data': 47.1},
    //     {'district':'Baloda Bazar','data': 75.1},
    //     {'district':'Kanker','data': 68.1},
    //     {'district':'Balod','data': 59.1},
    //     {'district':'Dantewada','data': 62.1},
    // ],
    //     'mcpr':[
    //         {'label':'NFHS 4','mcpr':54.5,'un':11.1,'tm':3.2},
    //         {'label':'NFHS 5','mcpr':61.7,'un':8.3,'tm':6.1},
    //     ]
    //     }

    // return res.json(data);
})


//SER
router.get('/ser', (req, res) => {

    let query="select district as dist,ser as value from ntep"
    connection.query(query,(err,result)=>{
       if(!err){
           return res.json(result);
       }
       else{
           return res.json(err);
       }
    })
    // let data = [{ value: 1448, id: 1, dist: 'A' }, { value: 1143, id: 1, dist: 'B' },
    // { value: 2477, id: 1, dist: 'D' }, { value: 1945, id: 1, dist: 'E' }, { value: 2123, id: 1, dist: 'G' },
    // { value: 1790, id: 1, dist: 'S' }, { value: 1889, id: 1, dist: 'W' },
    // { value: 1567, id: 1, dist: 'Q' }, { value: 2102, id: 1, dist: 'R' }]
    // //   
    // return res.json(data);
})


//PNAAT
router.get('/pnaat', (req, res) => {
    let query="select district as dist,pnaat as value from ntep "
    connection.query(query,(err,result)=>{
       if(!err){
           return res.json(result);
       }
       else{
           return res.json(err);
       }
    })
//     let data = [{ value: 48, id: 1, dist: 'A' }, { value: 43, id: 1, dist: 'B' },
//     { value: 77, id: 1, dist: 'D' }, { value: 45, id: 1, dist: 'E' }, { value: 23, id: 1, dist: 'G' },
//     { value: 90, id: 1, dist: 'S' }, { value: 89, id: 1, dist: 'W' },
//     { value: 67, id: 1, dist: 'Q' }, { value: 83, id: 1, dist: 'R' }]
//     return res.json(data);

})


//SRT
router.get('/srt', (req, res) => {
    let query="select district as dist,srt as value from ntep"
    connection.query(query,(err,result)=>{
       if(!err){
           return res.json(result);
       }
       else{
           return res.json(err);
       }
    })
    // let data = [{ value: 48, id: 1, dist: 'A' }, { value: 83, id: 1, dist: 'B' },
    // { value: 77, id: 1, dist: 'D' }, { value: 95, id: 1, dist: 'E' }, { value: 97, id: 1, dist: 'G' },
    // { value: 90, id: 1, dist: 'S' }, { value: 99, id: 1, dist: 'W' },
    // { value: 87, id: 1, dist: 'Q' }, { value: 88, id: 1, dist: 'R' }]
    // return res.json(data);
})


//NPYPT
router.get('/npypt', (req, res) => {

    let query="select district as dist,npypt as value from ntep "
    connection.query(query,(err,result)=>{
       if(!err){
           return res.json(result);
       }
       else{
           return res.json(err);
       }
    })
    // let data = [{ value: 48, id: 1, dist: 'A' }, { value: 43, id: 1, dist: 'B' },
    // { value: 77, id: 1, dist: 'D' }, { value: 45, id: 1, dist: 'E' }, { value: 23, id: 1, dist: 'G' },
    // { value: 70, id: 1, dist: 'S' }, { value: 89, id: 1, dist: 'W' },
    // { value: 67, id: 1, dist: 'Q' }, { value: 73, id: 1, dist: 'R' }]
    // return res.json(data);
})


//ASTBPN
router.get('/astbpn', (req, res) => {

    let query="select district as dist,astbpn as value from ntep"
    connection.query(query,(err,result)=>{
       if(!err){
           return res.json(result);
       }
       else{
           return res.json(err);
       }
    })
    // let data = [{ value: 48, id: 1, dist: 'A' }, { value: 43, id: 1, dist: 'B' },
    // { value: 77, id: 1, dist: 'D' }, { value: 45, id: 1, dist: 'E' }, { value: 123, id: 1, dist: 'G' },
    // { value: 90, id: 1, dist: 'S' }, { value: 89, id: 1, dist: 'W' },
    // { value: 67, id: 1, dist: 'Q' }, { value: 102, id: 1, dist: 'R' }]
    // return res.json(data);
})


//NEWCASE
router.get('/newcase', (req, res) => {

    let data={data1:[],data2:[]}
    let query="select district,newcase from nlep ORDER BY newcase desc"
    connection.query(query,(error,results)=>{
       if(!error){
           data.data1=results
           query="select district,newcasedata as data from nlep ORDER BY newcasedata desc"
           connection.query(query,(err,result)=>{
              if(!err){
                  data.data2=result;
                  return res.json(data)
              }     
              else{
                  return res.json(err);
              }
           }) 
       }
       else{
           return res.json(error)
       }
    })
    // let data = {data1:[
    //     { "district": "Mahasamund ", "newcase": 157 },
    //     { "district": "Raipur ", "newcase": 147 },
    //     { "district": "Raigarh", "newcase": 91 },
    //     { "district": "Bilaspur", "newcase": 90 },
    //     { "district": "Durg", "newcase": 78 },
    //     { "district": "Sarangarh", "newcase": 72 },
    //     { "district": "Sakti", "newcase": 50 },
    //     { "district": "Balodabazar", "newcase": 48 },
    //     { "district": "Korba", "newcase": 46 },
    // ],data2:[
    //     {'district':'Bijapur','data': 7.3},
    //     {'district':'Sukma','data': 7.2},
    //     {'district':'Raigarh','data': 6.2},
    //     {'district':'Surguja','data': 8.2},
    //     {'district':'Mahasamund','data': 5.2},
    //     {'district':'Jashpur','data': 6.2},
    //     {'district':'Balrampur','data': 9.2},
    //     {'district':'Bastar','data': 2.2},
    //     {'district':'Dhamtari','data': 7.1},
    //     {'district':'Baloda Bazar','data': 5.1},
    //     {'district':'Kanker','data': 8.1},
    //     {'district':'Balod','data': 9.1},
    //     {'district':'Dantewada','data': 2.1},
    // ]}
    // return res.json(data);
})


//PG2DANC
router.get('/pg2danc', (req, res) => {
    let query="select district as dist,pg2danc1 as value,pg2danc2 as value1 from nlep "
    connection.query(query,(err,result)=>{
       if(!err){
           return res.json(result);
       }
       else{
           return res.json(err);
       }
    })
    // let data = [{ value: 0.3, value1: 63, id: 1, dist: 'A' }, { value: 43, value1: 2, id: 1, dist: 'B' },
    // { value: 0.7, value1: 3, id: 1, dist: 'D' }, { value: 45, value1: 0.8, id: 1, dist: 'E' }, { value: 9, value1: 48, id: 1, dist: 'G' },
    // { value: 50, value1: 0.6, id: 1, dist: 'S' }, { value: 5, value1: 2, id: 1, dist: 'W' },
    // { value: 3, value1: 0.9, id: 1, dist: 'Q' }, { value: 0, value1: 9, id: 1, dist: 'R' }]

    // return res.json(data);
})


//PCCANC
router.get('/pccanc', (req, res) => {
    let query="select district as dist,pccanc1 as value,pccanc2 as value1 from nlep "
    connection.query(query,(err,result)=>{
       if(!err){
           return res.json(result);
       }
       else{
           return res.json(err);
       }
    })
    // let data = [{ value: 0.3, value1: 63, id: 1, dist: 'A' }, { value: 43, value1: 2, id: 1, dist: 'B' },
    // { value: 0.7, value1: 3, id: 1, dist: 'D' }, { value: 7, value1: 0.8, id: 1, dist: 'E' }, { value: 9, value1: 48, id: 1, dist: 'G' },
    // { value: 50, value1: 0.6, id: 1, dist: 'S' }, { value: 5, value1: 2, id: 1, dist: 'W' },
    // { value: 3, value1: 0.9, id: 1, dist: 'Q' }, { value: 0, value1: 9, id: 1, dist: 'R' }]

    // return res.json(data);
})


//PMBCANC
router.get('/pmbcanc', (req, res) => {
    let query="select district as dist,pmbcanc1 as value,pmbcanc2 as value1 from nlep "
    connection.query(query,(err,result)=>{
       if(!err){
           return res.json(result);
       }
       else{
           return res.json(err);
       }
    })
    // let data = [{ value: 63, value1: 63, id: 1, dist: 'A' }, { value: 43, value1: 2, id: 1, dist: 'B' },
    // { value: 77, value1: 83, id: 1, dist: 'D' }, { value: 45, value1: 48, id: 1, dist: 'E' }, { value: 69, value1: 48, id: 1, dist: 'G' },
    // { value: 50, value1: 86, id: 1, dist: 'S' }, { value: 85, value1: 22, id: 1, dist: 'W' },
    // { value: 76, value1: 49, id: 1, dist: 'Q' }, { value: 60, value1: 79, id: 1, dist: 'R' }]

    // return res.json(data);
})


//SECAFRCSARCSP
router.get('/secafrcsarcsp', (req, res) => {

    let query="select district, ERCS,RCSdone, pending from nlep ORDER BY ERCS  desc"
    connection.query(query,(err,result)=>{
       if(!err){
           return res.json(result);
       }
       else{
           return res.json(err);
       }
    })
//     let data = [
//         { "district": "Raipur ", "ERCS": 9, "RCSdone": 3, "pending": 6 },
//         { "district": "Bastar ", "ERCS": 4, "RCSdone": 0, "pending": 4 },
//         { "district": "Sarangarh ", "ERCS": 2, "RCSdone": 0, "pending": 2 },
//         { "district": "Janjgir ", "ERCS": 2, "RCSdone": 0, "pending": 2 },
//         { "district": "Khairagarh-Chhuikhadan ", "ERCS": 2, "RCSdone": 2, "pending": 0 },
//         { "district": "Balodabazar ", "ERCS": 2, "RCSdone": 2, "pending": 0 },
//         { "district": "Raigarh ", "ERCS": 1, "RCSdone": 1, "pending": 0 },
//         { "district": "Sakti ", "ERCS": 1, "RCSdone": 0, "pending": 1 },
//         { "district": "Durg ", "ERCS": 1, "RCSdone": 0, "pending": 1 },
//     ]
//     return res.json(data);
})


//TABSRDT
router.get('/tabsrdt', (req, res) => {
    let query="select district as dist,tabsrdt  from nvbdcp ORDER BY tabsrdt  desc"
    connection.query(query,(err,result)=>{
       if(!err){
           return res.json(result);
       }
       else{
           return res.json(err);
       }
    })
    // let data = [{ value: 163, value1: 63, id: 1, dist: 'A' }, { value: 143, value1: 2, id: 1, dist: 'B' },
    // { value: 177, value1: 183, id: 1, dist: 'D' }, { value: 145, value1: 48, id: 1, dist: 'E' }, { value: 69, value1: 48, id: 1, dist: 'G' },
    // { value: 150, value1: 86, id: 1, dist: 'S' }, { value: 185, value1: 22, id: 1, dist: 'W' },
    // { value: 176, value1: 49, id: 1, dist: 'Q' }, { value: 160, value1: 79, id: 1, dist: 'R' }]

    // return res.json(data);
})


//IRSPC
router.get('/irspc', (req, res) => {

    let query="select district as dist,irspc as value  from nvbdcp ORDER BY tabsrdt  desc"
    connection.query(query,(err,result)=>{
       if(!err){
           return res.json(result);
       }
       else{
           return res.json(err);
       }
    })
    let data = [{ value: 98, id: 1, dist: 'A' }, { value: 43, id: 1, dist: 'B' },
    { value: 77, id: 1, dist: 'D' }, { value: 45, id: 1, dist: 'E' }, { value: 123, id: 1, dist: 'G' },
    { value: 90, id: 1, dist: 'S' }, { value: 91, id: 1, dist: 'W' },
    { value: 97, id: 1, dist: 'Q' }, { value: 100, id: 1, dist: 'R' }]
    return res.json(data);
})


//DC
router.get('/dc', (req, res) => {

    let query="select district,Dcase  from nvbdcp ORDER BY Dcase  desc"
    connection.query(query,(err,result)=>{
       if(!err){
           return res.json(result);
       }
       else{
           return res.json(err);
       }
    })
    let data = [
        { "district": "Bijapur ", "Dcase": 7 },
        { "district": "Bastar ", "Dcase": 5 },
        { "district": "Kawardha ", "Dcase": 3 },
        { "district": "Baloda Bazar ", "Dcase": 2 },
        { "district": "Balod ", "Dcase": 2 },
        { "district": "Bemetara ", "Dcase": 2 },
        { "district": "Durg ", "Dcase": 2 },
        { "district": "Sukma ", "Dcase": 1 },
        { "district": "Dhamtari ", "Dcase": 1 },
        { "district": "Gariaband ", "Dcase": 1 },
        { "district": "Raipur ", "Dcase": 1 },
        { "district": "Rajnadgaon ", "Dcase": 1 },
        { "district": "Bilaspur ", "Dcase": 1 },
        { "district": "Janjgir ", "Dcase": 1 },
        { "district": "Korba ", "Dcase": 1 },
        { "district": "Mungeli ", "Dcase": 1 }
    ]

    return res.json(data);
})


//MMDPSFLC
router.get('/mmdpsflc', (req, res) => {

    let query="select district as dist,mmdpsflc as value from nvbdcp ORDER BY mmdpsflc  desc"
    connection.query(query,(err,result)=>{
       if(!err){
           return res.json(result);
       }
       else{
           return res.json(err);
       }
    })
    let data = [{ value: 48, id: 1, dist: 'A' }, { value: 43, id: 1, dist: 'B' },
    { value: 77, id: 1, dist: 'D' }, { value: 45, id: 1, dist: 'E' }, { value: 123, id: 1, dist: 'G' },
    { value: 90, id: 1, dist: 'S' }, { value: 89, id: 1, dist: 'W' },
    { value: 67, id: 1, dist: 'Q' }, { value: 102, id: 1, dist: 'R' }]

    return res.json(data);
})


//MMS
router.get('/mms', (req, res) => {
    let query="select district as dist,mms as dist from nvbdcp ORDER BY mms  desc"
    connection.query(query,(err,result)=>{
       if(!err){
           return res.json(result);
       }
       else{
           return res.json(err);
       }
    })
    let data = [{ value: 163, value1: 100, id: 1, dist: 'A' }, { value: 143, value1: 0, id: 1, dist: 'B' },
    { value: 177, value1: 100, id: 1, dist: 'D' }, { value: 145, value1: 100, id: 1, dist: 'E' }, { value: 69, value1: 48, id: 1, dist: 'G' },
    { value: 150, value1: 86, id: 1, dist: 'S' }, { value: 185, value1: 0, id: 1, dist: 'W' },
    { value: 176, value1: 0, id: 1, dist: 'Q' }, { value: 160, value1: 79, id: 1, dist: 'R' }]

    return res.json(data);
})


//HS
router.get('/hs', (req, res) => {
    let query="select district as dist,hs as value  from nvbdcp ORDER BY hs  desc"
    connection.query(query,(err,result)=>{
       if(!err){
           return res.json(result);
       }
       else{
           return res.json(err);
       }
    })
    let data = [{ value: 0, value1: 0, id: 1, dist: 'A' }, { value: 143, value1: 0, id: 1, dist: 'B' },
    { value: 17, value1: 63, id: 1, dist: 'D' }, { value: 45, value1: 48, id: 1, dist: 'E' }, { value: 69, value1: 48, id: 1, dist: 'G' },
    { value: 50, value1: 0, id: 1, dist: 'S' }, { value: 0, value1: 22, id: 1, dist: 'W' },
    { value: 176, value1: 49, id: 1, dist: 'Q' }, { value: 160, value1: 79, id: 1, dist: 'R' }]

    return res.json(data);
})


//AESJE
router.get('/aesje', (req, res) => {

    let query="select *  from aesje ORDER BY district "
    connection.query(query,(err,result)=>{
       if(!err){
           return res.json(result);
       }
       else{
           return res.json(err);
       }
    })
    let data = [
        { "district": "Bastar ", "laescase": 111, "ljecase": 15, "ldeath": 1, "taescase": 32, "tjecase": 0, "tdeath": 0 },
        { "district": "Bijapur ", "laescase": 20, "ljecase": 2, "ldeath": 0, "taescase": 12, "tjecase": 0, "tdeath": 0 },
        { "district": "Dantewada ", "laescase": 16, "ljecase": 1, "ldeath": 1, "taescase": 15, "tjecase": 0, "tdeath": 0 }
    ]
    return res.json(data);
})


//IHIPRS
router.get('/ihiprs', (req, res) => {
    let query="select *  from idsp_ihiprs ORDER BY district "
    connection.query(query,(err,result)=>{
       if(!err){
           return res.json(result);
       }
       else{
           return res.json(err);
       }
    })
    // let data = [
    //     {'district':'Bijapur','ss': 7.3,'ps':2,'ls':6},
    //     {'district':'Sukma','ss': 7.2,'ps':2,'ls':6},
    //     {'district':'Raigarh','ss': 6.2,'ps':2,'ls':6},
    //     {'district':'Surguja','ss': 8.2,'ps':2,'ls':6},
    //     {'district':'Mahasamund','ss': 5.2,'ps':2,'ls':6},
    //     {'district':'Jashpur','ss': 6.2,'ps':2,'ls':6},
    //     {'district':'Balrampur','ss': 9.2,'ps':2,'ls':6},
    //     {'district':'Bastar','ss': 2.2,'ps':2,'ls':6},
    //     {'district':'Dhamtari','ss': 7.1,'ps':2,'ls':6},
    //     {'district':'Baloda Bazar','ss': 5.1,'ps':2,'ls':6},
    //     {'district':'Kanker','ss': 8.1,'ps':2,'ls':6},
    //     {'district':'Balod','ss': 9.1,'ps':2,'ls':6},
    //     {'district':'Dantewada','ss': 2.1,'ps':2,'ls':6},
    // ]

    // return res.json(data);
})


//CSPS&PSAELAL
router.get('/csps&pselal', (req, res) => {

    // let query="select district as dist,cspspslg as govt,cspspslp as pvt,cspspslper as value  from npcbvi ORDER BY district "
    // connection.query(query,(err,result)=>{
    //    if(!err){
    //        return res.json(result);
    //    }
    //    else{
    //        return res.json(err);
    //    }
    // })

    let data = [
        { 'dist': 'A', 'value': 92, 'govt': 542, 'pvt': 5 },
        { 'dist': 'B', 'value': 230, 'govt': 1234, 'pvt': 543 },
        { 'dist': 'C', 'value': 123, 'govt': 432, 'pvt': 655 },
        { 'dist': 'D', 'value': 34, 'govt': 245, 'pvt': 325 },
        { 'dist': 'E', 'value': 87, 'govt': 653, 'pvt': 215 },
        { 'dist': 'F', 'value': 56, 'govt': 434, 'pvt': 645 },
        { 'dist': 'G', 'value': 67, 'govt': 124, 'pvt': 245 },
        { 'dist': 'H', 'value': 43, 'govt': 56, 'pvt': 175 },
        { 'dist': 'I', 'value': 76, 'govt': 87, 'pvt': 355 },
        { 'dist': 'J', 'value': 46, 'govt': 28, 'pvt': 65 },
    ]

    return res.json(data);
})


//SESPFGSAL
router.get('/sespfgsal', (req, res) => {

    
    // let query="select district as dist,sesl as value  from npcbvi ORDER BY district "
    // connection.query(query,(err,result)=>{
    //    if(!err){
    //        return res.json(result);
    //    }
    //    else{
    //        return res.json(err);
    //    }
    // })
    let data = [
        { 'dist': 'A', 'value': 92, 'govt': 542, 'pvt': 5 },
        { 'dist': 'B', 'value': 230, 'govt': 1234, 'pvt': 543 },
        { 'dist': 'C', 'value': 123, 'govt': 432, 'pvt': 655 },
        { 'dist': 'D', 'value': 34, 'govt': 245, 'pvt': 325 },
        { 'dist': 'E', 'value': 87, 'govt': 653, 'pvt': 215 },
        { 'dist': 'F', 'value': 56, 'govt': 434, 'pvt': 645 },
        { 'dist': 'G', 'value': 67, 'govt': 124, 'pvt': 245 },
        { 'dist': 'H', 'value': 43, 'govt': 56, 'pvt': 175 },
        { 'dist': 'I', 'value': 76, 'govt': 87, 'pvt': 355 },
        { 'dist': 'J', 'value': 46, 'govt': 28, 'pvt': 65 },
    ];  
    return res.json(data);
})


//CSPS&PSAELAT
router.get('/csps&psaelat', (req, res) => {

    
    // let query="select district as dist,cspspstg as govt,cspspstp as pvt,cspspstper as value,cspspstt as target,cspspsta as total  from npcbvi ORDER BY district "
    // connection.query(query,(err,result)=>{
    //    if(!err){
    //        return res.json(result);
    //    }
    //    else{
    //        return res.json(err);
    //    }
    // })
    let data = [
        { 'total':4322,'target':2000,'dist': 'A', 'value': 92, 'govt': 542, 'pvt': 5 },
        { 'total':4529,'target':2000,'dist': 'B', 'value': 230, 'govt': 1234, 'pvt': 543 },
        { 'total':2507,'target':2000,'dist': 'C', 'value': 123, 'govt': 432, 'pvt': 655 },
        { 'total':1238,'target':2000,'dist': 'D', 'value': 34, 'govt': 245, 'pvt': 325 },
        { 'total':3446,'target':2000,'dist': 'E', 'value': 87, 'govt': 653, 'pvt': 215 },
        { 'total':4437,'target':2000,'dist': 'F', 'value': 56, 'govt': 434, 'pvt': 645 },
        { 'total':1341,'target':2000,'dist': 'G', 'value': 67, 'govt': 124, 'pvt': 245 },
        { 'total':1421,'target':2000,'dist': 'H', 'value': 43, 'govt': 56, 'pvt': 175 },
        { 'total':325,'target':2000,'dist': 'I', 'value': 76, 'govt': 87, 'pvt': 355 },
        { 'total':654,'target':2000,'dist': 'J', 'value': 46, 'govt': 28, 'pvt': 65 },
    ];
    return res.json(data);
})


//SESPFGT
router.get('/sespfgt', (req, res) => {
    
    // let query="select district as dist,sest as value  from npcbvi ORDER BY district "
    // connection.query(query,(err,result)=>{
    //    if(!err){
    //        return res.json(result);
    //    }
    //    else{
    //        return res.json(err);
    //    }
    // })
    let data = [{ value: 48, id: 1, dist: 'A' }, { value: 2, id: 1, dist: 'B' },
    { value: 7, id: 1, dist: 'D' }, { value: 85, id: 1, dist: 'E' }, { value: 73, id: 1, dist: 'G' },
    { value: 90, id: 1, dist: 'S' }, { value: 0, id: 1, dist: 'W' },
    { value: 17, id: 1, dist: 'Q' }, { value: 100, id: 1, dist: 'R' }]

    return res.json(data);
})


//CBFDY
router.get('/cbfdy', (req, res) => {

    let data = [
        {'year':'2022-23','indicator':'No. of Districts Certified as Cataract backlog Free','target':'5','district':'Kabirdham, Raipur, Balodabazar,Balod, Rajnandgaon, Dhamtari,Raigarh','achiev':'7',},
        {'year':'2023-24','indicator':'No. of Districts Certified as Cataract backlog Free','target':'10','district':'Nil','achiev':'Nil',},
    ]

    return res.json(data);
})


//NNCDPAUS
router.get('/nncdpaus', (req, res) => {

    let data = [
{'district':'BALOD ','dhau':'100% ','chcau':'100%' ,'phcau':'69%' ,'shchwcau':'36%'},
{'district':'Baloda Bazar','dhau':' 100%','chcau':' 36%' ,'phcau':'33%' ,'shchwcau':'31%'},
{'district':'Bastar','dhau':' 100%','chcau':' 45%' ,'phcau':'61%' ,'shchwcau':'52%'},
{'district':'BEMETARA','dhau':' 100%','chcau':' 56%' ,'phcau':'76%' ,'shchwcau':'26%'},
{'district':'Bijapur ','dhau':'100% ','chcau':'100%' ,'phcau':'33%' ,'shchwcau':'54%'},
{'district':'Dantewada','dhau':' 100%','chcau':' 50%' ,'phcau':'27%' ,'shchwcau':'28%'},
{'district':'Dhamtari','dhau':' 100%','chcau':' 50%' ,'phcau':'81%' ,'shchwcau':'71%'},
{'district':'Durg','dhau':' 100%','chcau':' 94%' ,'phcau':'52%' ,'shchwcau':'25%'},
{'district':'GARIYABANDH','dhau':' 100%','chcau':' 75%' ,'phcau':'47%' ,'shchwcau':'43%'},
{'district':'GPM','dhau':' 100%','chcau':' 71%' ,'phcau':'65%' ,'shchwcau':'51%'},
{'district':'Kabeerdham','dhau':' 100%','chcau':' 50%' ,'phcau':'69%' ,'shchwcau':'48%'},
{'district':'Kanker ','dhau':'100% ','chcau':'100%' ,'phcau':'67%' ,'shchwcau':'69%'},
{'district':'KONDAGAON','dhau':' 100%','chcau':' 67%' ,'phcau':'85%' ,'shchwcau':'69%'},
    ]

    return res.json(data);
})


//NEST
router.get('/nest', (req, res) => {

    let data = [{ value: 48, id: 1, dist: 'A' }, { value: 43, id: 1, dist: 'B' },
    { value: 17, id: 1, dist: 'D' }, { value: 45, id: 1, dist: 'E' }, { value: 23, id: 1, dist: 'G' },
    { value: 40, id: 1, dist: 'S' }, { value: 29, id: 1, dist: 'W' },
    { value: 37, id: 1, dist: 'Q' }, { value: 45, id: 1, dist: 'R' }]

    return res.json(data);
})


//AIDS
router.get('/aids', (req, res) => {

    let data = [
{'district':'GARIYABANDH' ,'abhaidt':104431 ,'abhan':8017 ,'percentage':7.7},
{'district':'Raipur' ,'abhaidt': 170718  ,'abhan':5421 ,'percentage':3.2},
{'district':'BALRAMPUR' ,'abhaidt': 148580  ,'abhan':3074 ,'percentage':2.1},
{'district':'Kabeerdham' ,'abhaidt': 185852 ,'abhan': 2348 ,'percentage':1.3},
{'district':'BALOD' ,'abhaidt': 162508 ,'abhan': 2275 ,'percentage':1.4},
{'district':'Jashpur' ,'abhaidt': 181150 ,'abhan': 1687 ,'percentage':0.9},
{'district':'Bastar' ,'abhaidt': 80439 ,'abhan': 1562 ,'percentage':1.9},
{'district':'Dhamtari' ,'abhaidt': 127754 ,'abhan': 1175 ,'percentage':0.9},
{'district':'Bilaspur' ,'abhaidt': 413834 ,'abhan': 824 ,'percentage':0.2},
{'district':'SAKTI' ,'abhaidt': 148132,'abhan': 563 ,'percentage':0.4},
{'district':'MUNGELI' ,'abhaidt': 160880 ,'abhan':526 ,'percentage':0.3},
{'district':'Raigarh' ,'abhaidt': 227477,'abhan': 490 ,'percentage':0.2},
{'district':'Bijapur' ,'abhaidt': 41135 ,'abhan':485 ,'percentage':1.2},
{'district':'Surguja' ,'abhaidt': 155188,'abhan': 428 ,'percentage':0.3},
{'district':'Durg' ,'abhaidt': 424409 ,'abhan':152,'percentage': 0.},
    ]

    return res.json(data);
})


//NNCDPSS
router.get('/nncdpss', (req, res) => {

    let data = [{ value: 48, id: 1, dist: 'A' }, { value: 14, id: 1, dist: 'B' },
    { value: 17, id: 1, dist: 'D' }, { value: 45, id: 1, dist: 'E' }, { value: 23, id: 1, dist: 'G' },
    { value: 24, id: 1, dist: 'S' }, { value: 59, id: 1, dist: 'W' },
    { value: 27, id: 1, dist: 'Q' }, { value: 39, id: 1, dist: 'R' }]

    return res.json(data);
})


//NNCDPRS
router.get('/nncdprs', (req, res) => {

    let data =[{ value: 48, id: 1, dist: 'A' }, { value: 14, id: 1, dist: 'B' },
    { value: 17, id: 1, dist: 'D' }, { value: 45, id: 1, dist: 'E' }, { value: 23, id: 1, dist: 'G' },
    { value: 24, id: 1, dist: 'S' }, { value: 59, id: 1, dist: 'W' },
    { value: 27, id: 1, dist: 'Q' }, { value: 39, id: 1, dist: 'R' }]

    return res.json(data);
})


//NNCDPNDTS
router.get('/nncdpndts', (req, res) => {

    let data = [{ value: 48, id: 1, dist: 'A' }, { value: 14, id: 1, dist: 'B' },
    { value: 17, id: 1, dist: 'D' }, { value: 45, id: 1, dist: 'E' }, { value: 23, id: 1, dist: 'G' },
    { value: 24, id: 1, dist: 'S' }, { value: 59, id: 1, dist: 'W' },
    { value: 27, id: 1, dist: 'Q' }, { value: 39, id: 1, dist: 'R' }]

    return res.json(data);
})


//NNCDPDFUS
router.get('/nncdpdfus', (req, res) => {

    let data = [{ value: 48, id: 1, dist: 'A' }, { value: 14, id: 1, dist: 'B' },
    { value: 17, id: 1, dist: 'D' }, { value: 45, id: 1, dist: 'E' }, { value: 23, id: 1, dist: 'G' },
    { value: 24, id: 1, dist: 'S' }, { value: 59, id: 1, dist: 'W' },
    { value: 27, id: 1, dist: 'Q' }, { value: 39, id: 1, dist: 'R' }]

    return res.json(data);
})


//NNCDPNHOTS
router.get('/nncdpnhots', (req, res) => {

    let data = [{ value: 48, id: 1, dist: 'A' }, { value: 14, id: 1, dist: 'B' },
    { value: 17, id: 1, dist: 'D' }, { value: 45, id: 1, dist: 'E' }, { value: 23, id: 1, dist: 'G' },
    { value: 24, id: 1, dist: 'S' }, { value: 59, id: 1, dist: 'W' },
    { value: 27, id: 1, dist: 'Q' }, { value: 39, id: 1, dist: 'R' }]
    return res.json(data);
})


//NNCDPHFUS
router.get('/nncdphfus', (req, res) => {

    let data = [{ value: 48, id: 1, dist: 'A' }, { value: 14, id: 1, dist: 'B' },
    { value: 17, id: 1, dist: 'D' }, { value: 45, id: 1, dist: 'E' }, { value: 23, id: 1, dist: 'G' },
    { value: 24, id: 1, dist: 'S' }, { value: 59, id: 1, dist: 'W' },
    { value: 27, id: 1, dist: 'Q' }, { value: 39, id: 1, dist: 'R' }]

    return res.json(data);
})


//SDCF
router.get('/sdcf', (req, res) => {

    let data = [{
        'dcfd':'Balod, Balrampur, Bastar,Bilaspur, Janjgir-Champa, Jashpur,Kanker, Mahamasund, Narayanpur,Raipur, Surajpur, Dhamtari and Sarguja Raigarh, Kawardha, Rajnandgaon,Balodabazzar recently made functional ',
        'nfddnam':'Durg, Kondagaon, Korba, Korea, Mungeli, Sukma,Dantewada ',
        'nfdor':'GPM and Gariyaband don’t have dedicated ward for daycare chemotherapy. Bemetra and Bijapur Mo to be trained by state nomination awaited from district'
        }
    ]

    return res.json(data);
})


//DAYCAREC
router.get('/daycarec', (req, res) => {

    let data = [
{'district':'Mahasamund','npsc': 736 ,'ct':80},
{'district':'Bastar','npsc': 294 ,'ct':78},
{'district':'Janjgir','npsc': 23 ,'ct':19},
{'district':'Jashpur','npsc': 18 ,'ct':18},
{'district':'Sarguja','npsc': 356 ,'ct':17},
{'district':'Dhamtari','npsc': 1054 ,'ct':16},
{'district':'Kanker ','npsc':67 ,'ct':13},
{'district':'Raigarh','npsc': 22 ,'ct':12},
{'district':'Raipur','npsc': 54,'ct': 8},
{'district':'Surajpur','npsc': 34,'ct': 6},
{'district':'Balod','npsc': 154,'ct': 4},
{'district':'Rajnandgaon','npsc': 439,'ct': 2},
    ]

    return res.json(data);
})


//CCSIDHAPT
router.get('/ccsidhapt', (req, res) => {

    let data = [{
        'ccsptfdh':'BASTAR,KANKER, KONDAGAON, NARAYANPUR, JANJGIRCHAMPA, BALOD, BALODABAZZAR, BEMETRA, DURG, RAJNANGAON, DHAMTARI, GARIYABAND, MAHASAMUND, RAIPUR, BALRAMPUR, SARGUJA',
        'nfd':'BIJAPUR, DANTEWADA, SUKMA, BILASPUR, GPM, KORBA, MUNGELI, RAIGARH,KAWARDHA,JASHPUR, KOREA, SURAJPUR'
    }]

    return res.json(data);
})


//CCSAPT
router.get('/ccsapt', (req, res) => {

    let data = [
{'district':'Gariyaband ','vias':17 ,'pctt':0},
{'district':'Rajnandgaon','vias': 8 ,'pctt':0},
{'district':'Kanker ','vias':25 ,'pctt':2},
{'district':'Surajpur ','vias':606 ,'pctt':3},
{'district':'Balodabazzar ','vias':48 ,'pctt':0},
{'district':'Mahasamund ','vias':15 ,'pctt':0},
{'district':'Dhamtari ','vias':11 ,'pctt':0},
{'district':'bastar ','vias':88 ,'pctt':1},
{'district':'Raipur ','vias':29 ,'pctt':2},
    ]

    return res.json(data);
})


//HASTEMITTAS
router.get('/hastemittas', (req, res) => {

    let data = [
        {
            'fd':'Bastar, Bemetra, Bijapur, Bilaspur,Dantewada, Durg, Janjgir Champa, Kanker, Kondagaon,Korba,Narayanpur',
            'nfd':'Balod, Balodabazzar, Balrampur,Dhamtari, gariyaband, GPM, Jashpur, Kawardha, korea,Mahasamund, Mungeli,Raigarh,Raipur,Rajnandagon, Sukma, Surajpur, Surguja'
        }
        ]

    return res.json(data);
})


//DHMHOPD
router.get('/dhmhopd', (req, res) => {

    let data = [{ value: 48, id: 1, dist: 'A' }, { value: 43, id: 1, dist: 'B' },
    { value: 77, id: 1, dist: 'D' }, { value: 45, id: 1, dist: 'E' }, { value: 123, id: 1, dist: 'G' },
    { value: 90, id: 1, dist: 'S' }, { value: 89, id: 1, dist: 'W' },
    { value: 67, id: 1, dist: 'Q' }, { value: 102, id: 1, dist: 'R' }]

    return res.json(data);
})


//NMHPDHIPD/DF
router.get('/nmhpdhipddf', (req, res) => {

    let data = [{ value: 48, id: 1, dist: 'A' }, { value: 43, id: 1, dist: 'B' },
    { value: 77, id: 1, dist: 'D' }, { value: 45, id: 1, dist: 'E' }, { value: 123, id: 1, dist: 'G' },
    { value: 90, id: 1, dist: 'S' }, { value: 89, id: 1, dist: 'W' },
    { value: 67, id: 1, dist: 'Q' }, { value: 102, id: 1, dist: 'R' }]

    return res.json(data);
})


//CHCAPHCMHOPD
router.get('/chcphcmhopd', (req, res) => {

    let data = [ 
{'district':' Balod','target':8977,'total':465,'percentage': 5.18},
{'district':' Balodabazar','target': 15469,'total': 1846 ,'percentage':11.93},
{'district':' Balrampur','target': 8591 ,'total':25,'percentage': 0.29},
{'district':' Bastar ','target':9768 ,'total':411,'percentage': 4.21},
{'district':' Bemetara ','target':10177,'total': 635,'percentage': 6.24},
{'district':' Bijapur ','target':2789 ,'total':0,'percentage': 0.00},
{'district':' Bilaspur','target': 20282 ,'total':278,'percentage': 1.37},
{'district':' Dantewada','target': 3003,'total': 0,'percentage': 0.00},
{'district':' Dhamtari','target': 8867 ,'total':1051 ,'percentage':11.85},
    ]

    return res.json(data);
})


//MHSAHWC
router.get('/mhsahwc', (req, res) => {

    let data = [
{'district':'BALOD','nmhpsthwc': 72540,'npsmhihwc': 527 ,'pachiev':0.7,'tnppmhi': 82},
{'district':'BALODA BAJAR','nmhpsthwc':  125003,'npsmhihwc': 9604 ,'pachiev': 7.7 ,'tnppmhi':1015},
{'district':'BALRAMPUR ','nmhpsthwc': 69425,'npsmhihwc': 1029 ,'pachiev': 1.5 ,'tnppmhi':100},
{'district':'BASTAR','nmhpsthwc':  78934,'npsmhihwc': 65496  ,'pachiev':83.0 ,'tnppmhi':531},
{'district':'BEMETARA','nmhpsthwc':  82239,'npsmhihwc': 814  ,'pachiev':1.0 ,'tnppmhi':128},
{'district':'BIJAPUR','nmhpsthwc':  22536,'npsmhihwc': 6  ,'pachiev':0.0 ,'tnppmhi':0},
{'district':'BILASPUR','nmhpsthwc':  163895,'npsmhihwc': 299  ,'pachiev':0.2 ,'tnppmhi':53},
{'district':'DANTEWADA','nmhpsthwc':  24270,'npsmhihwc': 64 ,'pachiev': 0.3 ,'tnppmhi':19},
{'district':'DHAMTARI','nmhpsthwc':  71650,'npsmhihwc': 3879  ,'pachiev':5.4 ,'tnppmhi':732},
{'district':'DURG ','nmhpsthwc':65922 ,'npsmhihwc':  3253 ,'pachiev':4.9 ,'tnppmhi':501},
{'district':'GARIYABANDH','nmhpsthwc':  63371,'npsmhihwc': 95 ,'pachiev': 0.1 ,'tnppmhi':21},
{'district':'Gaurella Pendra Marwahi','nmhpsthwc':  32821,'npsmhihwc': 0  ,'pachiev':0.0,'tnppmhi': 0},
{'district':'JANJGIR-CHAMPA','nmhpsthwc':  143624,'npsmhihwc': 1397 ,'pachiev': 1.0 ,'tnppmhi':328},
{'district':'JASHPUR','nmhpsthwc':  77519,'npsmhihwc': 2098  ,'pachiev':2.7 ,'tnppmhi':394},
    ]

    return res.json(data);
})


//RODUUPMNDP
router.get('/roduupmndp', (req, res) => {

    let data = [
{'district': 'SARGUJA','tdma': 4,'psd': 'Jun-21','iumspmpd': 720,'tds': 1125 ,'pachiev':156.3},
{'district': 'BILASPUR','tdma':  5,'psd':  'Mar-20','iumspmpd': 900 ,'tds':1225 ,'pachiev':136.1},
{'district': 'MUNGELI','tdma':  3,'psd':  'Aug-22','iumspmpd': 540,'tds': 674 ,'pachiev':124.8},
{'district': 'JANJGIRCHAMPA','tdma':5,'psd':'Apr-22','iumspmpd': 900 ,'tds':966 ,'pachiev':107.3},
{'district': 'KORBA','tdma':  7,'psd':  'Mar-20','iumspmpd': 1260 ,'tds':1165,'pachiev': 92.5},
{'district': 'KAWARDHA','tdma':  4,'psd':  'Sep-22','iumspmpd': 720,'tds': 630,'pachiev': 87.5},
{'district': 'KANKER','tdma':  5 ,'psd': 'Mar-20','iumspmpd': 900 ,'tds':754,'pachiev': 83.8},
{'district': 'GARIABAND','tdma':  4,'psd':  'Mar-20','iumspmpd': 720 ,'tds':588,'pachiev': 81.7},
{'district': 'DURG','tdma':  5,'psd':  'Mar-20','iumspmpd': 900,'tds': 687,'pachiev': 76.3},
{'district': 'RAJNANDGAON','tdma':  3,'psd':  'Apr-18','iumspmpd': 540,'tds': 408,'pachiev': 75.6},
    ] 
    return res.json(data); 
})


//PMNDPPESDW
router.get('/pmndppesdw', (req, res) => {

    let data = [
{'district': 'Surajpur','hspr': 647,'dsmr': 698,'gap': 51 ,'pachiev':92.7},
{'district': 'Bastar','hspr': 1184,'dsmr': 1556,'gap': 372 ,'pachiev':76.1},
{'district': 'Rajnandgaon','hspr': 636,'dsmr': 872,'gap': 236 ,'pachiev':72.9},
{'district': 'Raipur','hspr': 2433,'dsmr': 3352 ,'gap':919 ,'pachiev':72.6},
{'district': 'Durg','hspr': 2972,'dsmr': 4284,'gap': 1312 ,'pachiev':69.4},
{'district': 'Balod','hspr': 458,'dsmr': 677,'gap': 219 ,'pachiev':67.7},
{'district': 'Bilaspur','hspr': 4076,'dsmr': 6057,'gap': 1981 ,'pachiev':67.3},
{'district': 'Baloda Bazar','hspr': 864,'dsmr': 1371,'gap': 507 ,'pachiev':63.0},
{'district': 'Gariyabandh','hspr': 1036,'dsmr': 1848,'gap': 812 ,'pachiev':56.1},
    ]

    return res.json(data);
})


//PMNDP
router.get('/pmndp', (req, res) => {

    let data = [
        {'indicator':'Districts Covered under PMNDP ','tlfy':'28','achievl':'22','ttfy':'33','achievt':'22'},
        {'indicator':'Number of Hemodialysis session','tlfy':'57600','achievl':'46679 (81%)','ttfy':'62,425','achievt':'12569 (20%)'}
    ]

    return res.json(data);
})


//SODUIOS
router.get('/sdouios', (req, res) => {

    let data = [
{'district':'Dantewada','tdma' :4 ,'psd':'Dec-17' ,'ai':'DMF' },
{'district':'Kondagaon','tdma': 1,'psd' :'Jul-21','ai': 'DMF'},
{'district':'Narayanpur','tdma': 2 ,'psd':'Jul-22','ai': 'JDS'},
{'district':'Balrampur','tdma': 3 ,'psd':'OCT-21','ai':'DMF' },
{'district':'Gourela-Pendra-Marwahi','tdma' :2 ,'psd':'Feb-21','ai': 'DMF'},
{'district':'Raigarh','tdma' :2,'psd': 'Oct-14' ,'ai':'JDS' },
    ]

    return res.json(data);
})


//NOHSOOPDTP
router.get('/nohsoopdtp', (req, res) => {

    let data = [
{'district':'Dhamtari ','yt':28500 ,'pt':4750 ,'achievn':5022 ,'pyachiev':18 ,'ppachiev':106},
{'district':'Bilaspur ','yt':45600 ,'pt':7600 ,'achievn':7890 ,'pyachiev':17 ,'ppachiev':104},
{'district':'Koriya','yt': 17100,'pt': 2850,'achievn': 2690,'pyachiev': 16,'ppachiev': 94},
{'district':'Balrampur','yt': 45600,'pt': 7600,'achievn': 6230,'pyachiev': 14,'ppachiev': 82},
{'district':'Jashpur ','yt':62700 ,'pt':10450,'achievn': 8249,'pyachiev': 13,'ppachiev': 79},
{'district':'Kanker','yt': 57000,'pt': 9500,'achievn': 7409,'pyachiev': 13,'ppachiev': 78},
{'district':'Mahasamund','yt': 34200,'pt': 5700,'achievn': 4418,'pyachiev': 13,'ppachiev': 78},
{'district':'Sarangarh','yt': 17100,'pt': 2850,'achievn': 2221,'pyachiev': 13,'ppachiev': 78},
{'district':'Kawardha','yt': 39900,'pt': 6650,'achievn': 4960,'pyachiev': 12,'ppachiev': 75},

    ]

    return res.json(data);
})


//SODPTTP
router.get('/sopdttp', (req, res) => {

    let data = [
{'district':'Bilaspur','yt': 18240,'pt': 3040,'achievn':  4221 ,'pyachiev':23 ,'ppachiev': 139},
{'district':'Kawardha ','yt':15960 ,'pt':2660,'achievn':  2671,'pyachiev': 17  ,'ppachiev':100},
{'district':'Balrampur','yt': 18240 ,'pt':3040,'achievn':  2999,'pyachiev': 16  ,'ppachiev':99},
{'district':'Sukma','yt': 11400 ,'pt':1900 ,'achievn': 1691,'pyachiev': 15 ,'ppachiev': 89},
{'district':'Koriya','yt': 6840 ,'pt':1140,'achievn':  964,'pyachiev': 14 ,'ppachiev': 85},
{'district':'Durg ','yt':36480,'pt': 6080,'achievn':  4883,'pyachiev': 13  ,'ppachiev':80},
{'district':'MMC','yt': 6840,'pt': 1140,'achievn':  886 ,'pyachiev':13 ,'ppachiev': 78},
{'district':'Dhamtari ','yt':11400 ,'pt':1900,'achievn':  1352,'pyachiev': 12 ,'ppachiev': 71},
{'district':'Surguja','yt': 25080,'pt': 4180,'achievn':  2962,'pyachiev': 12 ,'ppachiev': 71},
{'district':'Mahasamund ','yt':13680,'pt': 2280,'achievn':  1619,'pyachiev': 12 ,'ppachiev': 71},
{'district':'Rajnandgaon','yt': 15960,'pt': 2660,'achievn':  1879 ,'pyachiev':12 ,'ppachiev': 71},
    ]

    return res.json(data);
})


//GEWS
router.get('/gews', (req, res) => {

    let data = [
        {'status':'Functional','district':'Gariyaband , Jashpur, Mungeli , Rajnandgaon , Raipur'},
        {'status':'Using for other Program','district':'Dhamtari (Dialysis center)'},
        {'status':'Currently using for COVID Pandemic Emergency','district':'Balodabazar , Bilaspur , Durg '},
        {'status':'Under Process','district':'Dantewada, Kondagaon, Kawardha, Mahasamund, Surajpur'},
        {'status':'10 bed reserved (5-5 at M-F Ward)','district':'Balod, Balrampur, Bastar, Bemetra, Balodabazar, Bijapur, GPM, Kanker, Korba, Koriya, Narayanpur, Sukma, Surguja'}
    ]

    return res.json(data);
})


//ATCCOPD
router.get('/atccopd', (req, res) => {

    let data = [
        {'label':'100 percentage Target','data1':'50','data2':'45'},
        {'label':'More than 50%','data1':'32','data2':'43'},
        {'label':'Below 50%','data1':'18','data2':'12'},
        
    ]

    return res.json(data);
})


//TCCOPDT
router.get('/tccopdt', (req, res) => {

    let data = [
{'district':'Raipur ','tccopdt':2994},
{'district':'Bastar ','tccopdt':1567},
{'district':'Jashpur ','tccopdt':1252},
{'district':'Rajnandgaon ','tccopdt':1219},
{'district':'Durg ','tccopdt':1106}, 
{'district':'Kanker','tccopdt': 903},
{'district':'Koriya','tccopdt': 840},
{'district':'Balrampur','tccopdt': 768},
{'district':'Bilaspur','tccopdt': 759},
{'district':'Mahasamund','tccopdt': 649},
{'district':'Baloda Bazar','tccopdt': 583},
{'district':'Kondagaon','tccopdt': 377},
    ]

    return res.json(data);
})


//TFEITOFEIS
router.get('/tfeitofeis', (req, res) => {

    let data = [{ value: 48, id: 1, dist: 'A' }, { value: 43, id: 1, dist: 'B' },
    { value: 77, id: 1, dist: 'D' }, { value: 45, id: 1, dist: 'E' }, { value: 123, id: 1, dist: 'G' },
    { value: 90, id: 1, dist: 'S' }, { value: 89, id: 1, dist: 'W' },
    { value: 67, id: 1, dist: 'Q' }, { value: 102, id: 1, dist: 'R' }]

    return res.json(data);
})


//AF
router.get('/af', (req, res) => {

    let data = [{ value: 48, id: 1, dist: 'A' }, { value: 43, id: 1, dist: 'B' },
    { value: 77, id: 1, dist: 'D' }, { value: 45, id: 1, dist: 'E' }, { value: 123, id: 1, dist: 'G' },
    { value: 90, id: 1, dist: 'S' }, { value: 89, id: 1, dist: 'W' },
    { value: 67, id: 1, dist: 'Q' }, { value: 102, id: 1, dist: 'R' }]

    return res.json(data);
})


//NOCI
router.get('/noci', (req, res) => {

    let data = [
{'distrct':'Balod','opdl': 7207,'opdt': 891,'esl': 20 ,'est':1 ,'hal':26 ,'hat':9},
{'distrct':'Baloda Bazar ','opdl':20563 ,'opdt': 2591,'esl':  0,'est': 0 ,'hal':75,'hat': 6},
{'distrct':'Balrampur','opdl': 7212,'opdt':  1254,'esl':  0,'est': 0,'hal': 64 ,'hat':4},
{'distrct':'Bastar','opdl': 5769,'opdt':  830 ,'esl': 0,'est': 0 ,'hal':230,'hat': 4},
{'distrct':'Bemetra','opdl': 938,'opdt':  219 ,'esl': 4,'est': 1 ,'hal':16,'hat': 11},
{'distrct':'Bijapur','opdl': 2118,'opdt':  0 ,'esl': 109,'est': 0 ,'hal':0 ,'hat':0},
{'distrct':'Bilaspur ','opdl':15937,'opdt':  3624,'esl':  51 ,'est':117,'hal': 684,'hat': 130},
{'distrct':'Dantewada','opdl': 3003,'opdt':  614 ,'esl': 104 ,'est':27 ,'hal':21,'hat': 0},
{'distrct':'Dhamtari','opdl': 7240,'opdt':  1044 ,'esl': 107,'est': 23,'hal': 77,'hat': 40},
{'distrct':'Durg','opdl': 15099,'opdt':  1968 ,'esl': 325 ,'est':33,'hal': 483,'hat': 26},
{'distrct':'Gariyaband','opdl': 6248,'opdt':  1035 ,'esl': 69,'est': 22,'hal': 102,'hat': 16},
{'distrct':'GPM','opdl': 5969,'opdt':  1760 ,'esl': 51 ,'est':0,'hal': 157,'hat': 0},
{'distrct':'Janjgir','opdl': 2229,'opdt':  486,'esl':  51 ,'est':13,'hal': 29,'hat': 7},

    ]

    return res.json(data);
})


//HWCSOS
router.get('/hwcsos', (req, res) => {

    let data = [
        {'district':'Bijapur','tf': 87,'cshchwc': 0,'nef': 23,'cshchwcnef':23,'ftfd': 64,'osn': 80 ,'hwcsop':'125%'},
        {'district':'Kondagaon','tf': 195,'cshchwc':  9,'nef': 13,'cshchwcnef': 22,'ftfd':  173,'osn': 195 ,'hwcsop':'113%'},
        {'district':'Sukma','tf': 98 ,'cshchwc': 6 ,'nef':5,'cshchwcnef': 11 ,'ftfd': 87,'osn': 94 ,'hwcsop':'108%'},
        {'district':'Surajpur','tf': 245,'cshchwc':  40 ,'nef':14,'cshchwcnef': 54,'ftfd':  191,'osn': 206 ,'hwcsop':'108%'},
        {'district':'Jashpur','tf': 293,'cshchwc':  27,'nef': 0 ,'cshchwcnef':27,'ftfd':  266,'osn': 284 ,'hwcsop':'107%'},
        {'district':'Surguja','tf': 226 ,'cshchwc': 9,'nef': 17,'cshchwcnef': 26,'ftfd':  200,'osn': 207 ,'hwcsop':'104%'},
        {'district':'Mungeli','tf': 151,'cshchwc':  26,'nef': 4,'cshchwcnef': 30 ,'ftfd': 121,'osn': 125 ,'hwcsop':'103%'},
        {'district':'Mahasamund','tf': 257,'cshchwc':  27,'nef': 15,'cshchwcnef': 42,'ftfd':  215 ,'osn':221 ,'hwcsop':'103%'},
        {'district':'Kanker','tf': 280,'cshchwc':  46,'nef': 0,'cshchwcnef': 46,'ftfd':  234 ,'osn':238 ,'hwcsop':'102%'},
        {'district':'Balrampur','tf': 220,'cshchwc':  27,'nef': 9,'cshchwcnef': 36 ,'ftfd': 184,'osn': 187 ,'hwcsop':'102%'},
        {'district':'Balod','tf': 226,'cshchwc':  6,'nef': 0,'cshchwcnef': 6 ,'ftfd': 220,'osn': 222 ,'hwcsop':'101%'},
        {'district':'Bemetara','tf': 147,'cshchwc':  10 ,'nef':19,'cshchwcnef': 29,'ftfd':  118,'osn': 119 ,'hwcsop':'101%'},
        {'district':'Raigarh','tf': 399,'cshchwc':  35,'nef': 0 ,'cshchwcnef':35,'ftfd':  364,'osn': 367 ,'hwcsop':'101%'},
    ]

    return res.json(data);
})


//ANMASHCHWC
router.get('/anmashchwc', (req, res) => {

    let data = [
        {'district':'Rajnandgaon ','nom':114},
        {'district':'Dhamtari ','nom':100},
        {'district':'Mohla Manpur Ambagarh Chouki ','nom':100},
        {'district':'Mungeli ','nom':100},
        {'district':'Narayanpur ','nom':100},
        {'district':'Balod','nom': 98},
        {'district':'Baloda bazar','nom': 98},
        {'district':'Bemetara','nom': 98},
        {'district':'Kabeerdham','nom': 98},
        {'district':'Korba','nom': 98},
        {'district':'Raigarh','nom': 98},
        {'district':'Surguja','nom': 98},
        {'district':'Sukma','nom': 94},
        {'district':'Jashpur','nom': 93},
        {'district':'Koriya','nom': 93},
        {'district':'Mahasamund','nom': 93},
        {'district':'Manendragarh Chirimiri Bharatpur','nom': 93},
    ]

    return res.json(data);
})


//ANMAPHCHWC
router.get('/anmaphchwc', (req, res) => {

    let data = [
        {'district':'Balod ','nom':172},
        {'district':'Dhamtari ','nom':154},
        {'district':'Mungeli ','nom':151},
        {'district':'Raigarh ','nom':151},
        {'district':'Raipur ','nom':144},
        {'district':'Narayanpur ','nom':139},
        {'district':'Mahasamund ','nom':138},
        {'district':'Kondagaon ','nom':136},
        {'district':'Baloda bazar ','nom':135},
        {'district':'Bemetara ','nom':135},
        {'district':'Bijapur ','nom':135},
        {'district':'Gariyabandh ','nom':134},
        {'district':'Mohla Manpur Ambagarh Chouki ','nom':134},
        {'district':'Surajpur ','nom':134},
        {'district':'Sarangarh Bilaigarh ','nom':133},
        {'district':'Kabeerdham ','nom':132},
        {'district':'Koriya ','nom':132},
        {'district':'Manendragarh Chirimiri Bharatpur ','nom':132},
        {'district':'Surguja ','nom':132},
        {'district':'Sukma ','nom':130},
        {'district':'Janjgir - champa ','nom':126},
        {'district':'Jashpur ','nom':122},
        {'district':'Korba ','nom':122},
    ]

    return res.json(data);
})


//ANDASHCHWC
router.get('/andashchwc', (req, res) => {

    let data = [
        {'district':'Rajnandgaon ','nom':14},
        {'district':'Janjgir - champa ','nom':14},
        {'district':'Kondagaon ','nom':14},
        {'district':'Mahasamund ','nom':14},
        {'district':'Mohla Manpur Ambagarh Chouki ','nom':14},
        {'district':'Mungeli ','nom':14},
        {'district':'Raigarh ','nom':14},
        {'district':'Raipur ','nom':14},
        {'district':'Balod','nom': 9},
        {'district':'Balrampur','nom': 9},
        {'district':'Gaurella Pendra Marwahi','nom': 8},
        {'district':'Kabeerdham','nom': 8},
        {'district':'Durg','nom': 7},
        {'district':'Khairgarh Chhuikhadan Gandai','nom': 7},
        {'district':'Sakti ','nom':13},
        {'district':'Baloda bazar ','nom':12},
        {'district':'Bemetara ','nom':12},
        {'district':'Dantewada ','nom':12},
        {'district':'Dhamtari ','nom':12},
        {'district':'Gariyabandh ','nom':12},
        {'district':'Jashpur ','nom':12},
        {'district':'Kanker ','nom':12},
        {'district':'Korba ','nom':12},
        {'district':'Koriya ','nom':12},
        {'district':'Manendragarh Chirimiri Bharatpur ','nom':12},
        {'district':'Narayanpur ','nom':12},
        {'district':'Sarangarh Bilaigarh ','nom':12},
        {'district':'Sukma ','nom':12},
        {'district':'Bijapur ','nom':11},
        {'district':'Bilaspur ','nom':11},
        {'district':'Surguja ','nom':11},
        {'district':'Bastar ','nom':10},
        {'district':'Surajpur ','nom':10},
    ]

    return res.json(data);
})


//ANDAPHCHWC
router.get('/andaphchwc', (req, res) => {

    let data = [
        {'district':'Raipur ','nom':63},
        {'district':'Narayanpur ','nom':62},
        {'district':'Raigarh ','nom':56},
        {'district':'Mungeli ','nom':50},
        {'district':'Bemetara ','nom':48},
        {'district':'Bijapur ','nom':48},
        {'district':'Dhamtari ','nom':48},
        {'district':'Baloda bazar ','nom':46},
        {'district':'Sarangarh Bilaigarh ','nom':46},
        {'district':'Surguja ','nom':46},
        {'district':'Bilaspur ','nom':45},
        {'district':'Kanker ','nom':45},
        {'district':'Mahasamund ','nom':44},
        {'district':'Mohla Manpur Ambagarh Chouki ','nom':44},
        {'district':'Surajpur ','nom':44},
        {'district':'Koriya ','nom':42},
        {'district':'Manendragarh Chirimiri Bharatpur ','nom':42},
        {'district':'Dantewada ','nom':41},
        {'district':'Jashpur 4','nom':1 },
        {'district':'Korba ','nom':39},
        {'district':'Sukma ','nom':39},
        {'district':'Gaurella Pendra Marwahi ','nom':36},
        {'district':'Balrampur ','nom':35},
        {'district':'Gariyabandh ','nom':35},
        {'district':'Janjgir - champa ','nom':35},
        {'district':'Kondagaon ','nom':34},
        {'district':'Sakti ','nom':30},
        {'district':'Balod ','nom':29},
        {'district':'Bastar ','nom':24},
        {'district':'Durg ','nom':23},
        {'district':'Rajnandgaon ','nom':23},
        {'district':'Kabeerdham ','nom':15},
        {'district':'Khairgarh Chhuikhadan Gandai ','nom':11},
    ]

    return res.json(data);
})


//WAAPHWC
router.get('/waaphwc', (req, res) => {

    let data = [
        {'district':'Kabeerdham','osn':138,'tmt': 6900,'teo': 7193,'ad': 7411,'tea': 14604 ,'eadp':'212%'},
        {'district':'Narayanpur','osn': 38 ,'tmt': 1900,'teo': 884,'ad': 898,'tea':  1782 ,'eadp':'94%'},
        {'district':'Bemetara','osn': 119,'tmt':  5950,'teo': 2636,'ad': 2803,'tea':  5439 ,'eadp':'91%'},
        {'district':'Mungeli','osn': 125,'tmt':  6250,'teo': 2635,'ad': 2855,'tea':  5490 ,'eadp':'88%'},
        {'district':'Korba ','osn':243,'tmt': 12150 ,'teo': 5051,'ad': 5347,'tea':  10398 ,'eadp':'86%'},
        {'district':'Rajnandgaon','osn': 147,'tmt':  7350,'teo': 2364 ,'ad':3876,'tea':  6240 ,'eadp':'85%'},
        {'district':'Gaurella Pendra Marwahi','osn': 65,'tmt':  3250,'teo': 1222,'ad': 1263,'tea':  2485 ,'eadp':'76%'},
        {'district':'Baloda Bazar','osn': 183 ,'tmt': 9150,'teo': 3204 ,'ad':3311,'tea':  6515 ,'eadp':'71%'},
        {'district':'Dhamtari','osn': 190,'tmt':  9500,'teo': 3353,'ad': 3409,'tea':  6762 ,'eadp':'71%'},
        {'district':'Kanker ','osn':238,'tmt':  11900,'teo': 4098,'ad': 4306,'tea':  8404 ,'eadp':'71%'},
        {'district':'Raipur','osn': 229,'tmt':  11450,'teo': 3691,'ad': 3912,'tea':  7603 ,'eadp':'66%'},
        {'district':'Bastar','osn': 264 ,'tmt': 13200,'teo': 4178,'ad': 4571,'tea':  8749 ,'eadp':'66%'},
        {'district':'Sarangarh-bilaigarh','osn': 116 ,'tmt': 5800,'teo': 1868 ,'ad':1912,'tea':  3780 ,'eadp':'65%'},
        {'district':'Balod','osn': 222,'tmt':  11100,'teo': 3326 ,'ad':3464,'tea':  6790 ,'eadp':'61%'},
        
    ]

    return res.json(data);
})


//FYES2CC50CPFP
router.get('/fyes2cc50cpfp', (req, res) => {

    let data = [
        {'district':'Narayanpur','osn': 38,'tesc': 3800,'cunsu': 4261 ,'cdp':'112%'},
        {'district':'Bemetara','osn': 119 ,'tesc':11900 ,'cunsu':8042 ,'cdp':'68%'},
        {'district':'Mungeli','osn': 125,'tesc': 12500,'cunsu': 6325 ,'cdp':'51%'},
        {'district':'Balod','osn': 222 ,'tesc':22200,'cunsu': 10313 ,'cdp':'46%'},
        {'district':'Janjgir-Champa ','osn':276 ,'tesc':27600 ,'cunsu':11335 ,'cdp':'41%'},
        {'district':'Bastar ','osn':264 ,'tesc':26400,'cunsu': 9856 ,'cdp':'37%'},
        {'district':'Baloda Bazar','osn': 219 ,'tesc':21900,'cunsu': 8140 ,'cdp':'37%'},
        {'district':'Rajnandgaon','osn': 313,'tesc': 31300,'cunsu': 10647 ,'cdp':'34%'},
        {'district':'Gaurella Pendra Marwahi','osn': 65 ,'tesc':6500,'cunsu': 2059 ,'cdp':'32%'},
        {'district':'Korea','osn': 179,'tesc': 17900,'cunsu': 5479 ,'cdp':'31%'},
        {'district':'Raipur','osn': 230,'tesc': 23000 ,'cunsu':7039 ,'cdp':'31%'},
        {'district':'Balrampur','osn': 187,'tesc': 18700 ,'cunsu':5191 ,'cdp':'28%'},
        {'district':'Dhamtari','osn': 190 ,'tesc':19000,'cunsu': 5231 ,'cdp':'28%'},
        {'district':'Bilaspur','osn': 221,'tesc': 22100,'cunsu': 5720 ,'cdp':'26%'},
    ]

    return res.json(data);
})


//UHWCOS
router.get('/uhwcos', (req, res) => {

    let data = [{ value: 48, id: 1, dist: 'A' }, { value: 43, id: 1, dist: 'B' },
    { value: 77, id: 1, dist: 'D' }, { value: 45, id: 1, dist: 'E' }, { value: 123, id: 1, dist: 'G' },
    { value: 90, id: 1, dist: 'S' }, { value: 89, id: 1, dist: 'W' },
    { value: 67, id: 1, dist: 'Q' }, { value: 102, id: 1, dist: 'R' }]

    return res.json(data);
})


//UHWCHRS
router.get('/uhwchrs', (req, res) => {

    let data = [{ value: 48, id: 1, dist: 'A' }, { value: 43, id: 1, dist: 'B' },
    { value: 77, id: 1, dist: 'D' }, { value: 45, id: 1, dist: 'E' }, { value: 123, id: 1, dist: 'G' },
    { value: 90, id: 1, dist: 'S' }, { value: 89, id: 1, dist: 'W' },
    { value: 67, id: 1, dist: 'Q' }, { value: 102, id: 1, dist: 'R' }]

    return res.json(data);
})


//POPDAVS
router.get('/popdavs', (req, res) => {

    let data = [
        {'district':'Bastar','np': 'UPHC Geedam Road','skin': 0,'medic': 200,'pedia': 62,'opth': 19 ,'ent':30 ,'gynec':202 ,'dental':0 ,'psych':0 ,'ortho':16 ,'surgery':0 ,'total':529},
        {'district':'Bilaspur','np': ' UPHC Rajkishor Nagar','skin': 0,'medic': 162,'pedia': 60,'opth': 15 ,'ent':30 ,'gynec':131 ,'dental':0 ,'psych':0 ,'ortho':13 ,'surgery':0 ,'total':411},
        {'district':'Durg','np': ' UPHC Charoda','skin': 0,'medic': 74,'pedia': 16,'opth': 0,'ent': 55,'gynec': 58 ,'dental':0 ,'psych':0 ,'ortho':46 ,'surgery':0 ,'total':249},
        {'district':'Durg','np': ' UPHC Baikunthdham','skin': 0,'medic': 88,'pedia': 9,'opth': 19,'ent': 30 ,'gynec': 0,'dental':0 ,'psych':0 ,'ortho':15 ,'surgery':0 ,'total':161},
        {'district':'Durg ','np': 'UPHC Baghera','skin': 0,'medic': 43,'pedia': 5,'opth': 43,'ent': 41,'gynec': 133,'dental': 0,'psych': 0,'ortho': 0 ,'surgery':0 ,'total':265},
        {'district':'Korba','np': ' UPHC Dhodhipara','skin': 15,'medic': 144,'pedia': 30,'opth': 0,'ent': 0 ,'gynec': 85,'dental': 0,'psych': 0,'ortho': 3 ,'surgery':0 ,'total':277},
        {'district':'Raigarh','np': ' UPHC Rambhata','skin': 0,'medic': 0,'pedia': 0,'opth': 46,'ent': 10,'gynec': 18 ,'dental':0 ,'psych':0 ,'ortho':57 ,'surgery':0 ,'total':131},
    ]

    return res.json(data);
})


//OPDS
router.get('/opds', (req, res) => {

    let data = [{ value: 48, id: 1, dist: 'A' }, { value: 43, id: 1, dist: 'B' },
    { value: 77, id: 1, dist: 'D' }, { value: 45, id: 1, dist: 'E' }, { value: 123, id: 1, dist: 'G' },
    { value: 90, id: 1, dist: 'S' }, { value: 89, id: 1, dist: 'W' },
    { value: 67, id: 1, dist: 'Q' }, { value: 102, id: 1, dist: 'R' }]

    return res.json(data);
})


//DS
router.get('/ds', (req, res) => {

    let data = [{ value: 8, id: 1, dist: 'A' }, { value: 33, id: 1, dist: 'B' },
    { value: 7, id: 1, dist: 'D' }, { value: 3, id: 1, dist: 'E' }, { value: 15, id: 1, dist: 'G' },
    { value: 2, id: 1, dist: 'S' }, { value: 9, id: 1, dist: 'W' },
    { value: 6, id: 1, dist: 'Q' }, { value: 12, id: 1, dist: 'R' }]

    return res.json(data);
})


//LTS
router.get('/lts', (req, res) => {

    let data = [{ value: 48, id: 1, dist: 'A' }, { value: 43, id: 1, dist: 'B' },
    { value: 77, id: 1, dist: 'D' }, { value: 45, id: 1, dist: 'E' }, { value: 23, id: 1, dist: 'G' },
    { value: 90, id: 1, dist: 'S' }, { value: 89, id: 1, dist: 'W' },
    { value: 67, id: 1, dist: 'Q' }, { value: 29, id: 1, dist: 'R' }]

    return res.json(data);
})


//CHBL&LS
router.get('/chbl&ls', (req, res) => {

    let data = [
        {'district':'Bastar','hbn':120,'llu':120,'per':'100%'},
        {'district':'Bilaspur','hbn':110,'llu':110,'per':'100%'},
        {'district':'Durg','hbn':60,'llu':45,'per':'100%'},
        {'district':'Durg','hbn':72,'llu':54,'per':'100%'},
        {'district':'Durg ','hbn':57,'llu':23,'per':'100%'},
        {'district':'Korba','hbn':23,'llu':20,'per':'100%'},
        {'district':'Raigarh','hbn':67,'llu':48,'per':'100%'},
    ]

    return res.json(data);
})


//JVPS
router.get('/jvps', (req, res) => {

    let data = [
        {'district':'Bastar','lyear':120,'tyear':120,'status':'no change'},
        {'district':'Bilaspur','lyear':110,'tyear':110,'status':'no change'},
        {'district':'Durg','lyear':60,'tyear':65,'status':'up'},
        {'district':'Durg','lyear':72,'tyear':72,'status':'down'},
        {'district':'Durg ','lyear':57,'tyear':53,'status':'down'},
        {'district':'Korba','lyear':23,'tyear':30,'status':'up'},
        {'district':'Raigarh','lyear':67,'tyear':68,'status':'up'},
    ]

    return res.json(data);
})


//JMKRAKVTS
router.get('/jmkrakvts', (req, res) => {

    let data = [
        {'district':'Bastar','lyear':120,'tyear':120,'status':'no change'},
        {'district':'Bilaspur','lyear':110,'tyear':110,'status':'no change'},
        {'district':'Durg','lyear':60,'tyear':65,'status':'up'},
        {'district':'Durg','lyear':72,'tyear':72,'status':'down'},
        {'district':'Durg ','lyear':57,'tyear':53,'status':'down'},
        {'district':'Korba','lyear':23,'tyear':30,'status':'up'},
        {'district':'Raigarh','lyear':67,'tyear':68,'status':'up'},
   ]

    return res.json(data);
})


//JPHBUMAS
router.get('/jphbumas', (req, res) => {

    let data = [
        {'district':'Bastar','lyear':120,'tyear':120,'status':'no change'},
        {'district':'Bilaspur','lyear':110,'tyear':110,'status':'no change'},
        {'district':'Durg','lyear':60,'tyear':65,'status':'up'},
        {'district':'Durg','lyear':72,'tyear':72,'status':'down'},
        {'district':'Durg ','lyear':57,'tyear':53,'status':'down'},
        {'district':'Korba','lyear':23,'tyear':30,'status':'up'},
        {'district':'Raigarh','lyear':67,'tyear':68,'status':'up'},
   ]

    return res.json(data);
})


//NHMVPR
router.get('/nhmvpr', (req, res) => {

    let data = [
{'program':'RCH Flexi Pool','rop': 33123.92,'expe' :26180.53 ,'percentage':79.04},
{'program':'Mission Flexipool','rop':  143786.46,'expe' : 126308.73 ,'percentage':87.84},
{'program':'Immunisation & Pulse Polio','rop':  4160.35,'expe' : 3134.39 ,'percentage':75.34},
{'program':'NIDDCP','rop':  13.60,'expe' : 12.66 ,'percentage':93.06},
{'program':'National Urban Health Mission','rop':  6571.04,'expe' : 5474.41 ,'percentage':83.31},
{'program':'IDSP','rop':  187.87,'expe' : 164.78 ,'percentage':87.71},
{'program':'NVBDCP','rop':  3810.77,'expe' : 3044.87 ,'percentage':79.90},
{'program':'NLEP','rop':  1614.65,'expe' : 1302.85 ,'percentage':80.69},
{'program':'RNTCP','rop':  6899.19 ,'expe' :5222.57 ,'percentage':75.70},
    ]

    return res.json(data);
})


//SJVR
router.get('/sjvr', (req, res) => {

    let data = [
{'activity':'RCH Flexi Pool','rop': 26615.37,'expe': 23484.43 ,'percentage':88.24 },
{'activity':'Imm.& Pulse Polio','rop': 3156.54,'expe':  2723.14 ,'percentage':86.27 },
{'activity':'NIDDCP','rop': 7.00,'expe':  6.60 ,'percentage':94.26 },
{'activity':'IDSP','rop': 119.15,'expe':  102.46 ,'percentage':86.00 },
{'activity':'NVBDCP','rop': 1934.67,'expe':  1843.85 ,'percentage':95.31 },
{'activity':'NLEP','rop': 1573.89,'expe':  1284.86 ,'percentage':81.64 },
{'activity':'RNTCP','rop': 3294.96,'expe':  2668.09 ,'percentage':80.98 },
{'activity':'NVHCP','rop': 232.11,'expe':  170.46 ,'percentage':73.44 },
{'activity':'NRCP','rop': 36.56,'expe':  34.38 ,'percentage':94.03 },
// TOTAL NDCP's 7,191.33 6,104.10 84.88
// TOTAL RCH 29,778.90 26,214.17 88.03     
]

    return res.json(data);
})


//NHMCRPFMRR
router.get('/nhmcrpfmrr', (req, res) => {

    let data = [
        {'district':'Balarampur ','rop':5610.41 ,'expe':5469.78, 'percentage':97.49},
        {'district':'Balod ','rop':4930.99 ,'expe':4684.86, 'percentage':95.01},
        {'district':'Dhamtari ','rop':4627.36 ,'expe':4342.32, 'percentage':93.84},
        {'district':'Raipur ','rop':8331.56 ,'expe':7627.73, 'percentage':91.55},
        {'district':'Rajnandgaon ','rop':8480.66 ,'expe':7595.27, 'percentage':89.56},
        {'district':'Korba ','rop':6405.32 ,'expe':5657.43, 'percentage':88.32},
        {'district':'Sarguja ','rop':6390.10 ,'expe':5635.60, 'percentage':88.19},
        {'district':'Kawardha ','rop':4436.64 ,'expe':3906.63, 'percentage':88.05},
        {'district':'Kondagaon ','rop':4791.78 ,'expe':4196.40, 'percentage':87.57},
    ]

    return res.json(data);
})


//NHMVPRFR
router.get('/nhmvprfr', (req, res) => {

    let data = [
        {'program':'RCH Flexi Pool','rop': 33689.16,'expe': 725.80 ,'percentage':2.15},
        {'program':'Mission Flexipool','rop': 136434.11,'expe': 7885.28 ,'percentage':5.78},
        {'program':'Immunisation & Pulse Polio','rop': 4090.24,'expe': 26.71 ,'percentage':0.65},
        {'program':'NIDDCP','rop': 13.60,'expe': 0.00 ,'percentage':0.00},
        {'program':'National Urban Health Mission','rop': 6731.51,'expe': 411.12 ,'percentage':6.11},
        {'program':'IDSP','rop': 123.73,'expe': 1.58 ,'percentage':1.28},
        {'program':'NVBDCP','rop': 2979.11,'expe': 9.27 ,'percentage':0.31},
        {'program':'NLEP','rop': 1761.57,'expe': 2.47 ,'percentage':0.14},
        {'program':'RNTCP','rop': 5989.57,'expe': 65.47 ,'percentage':1.09},
        {'program':'NVHCP','rop': 667.14,'expe': 0.01 ,'percentage':0.00},
        {'program':'NRCP','rop': 45.14,'expe': 0.77 ,'percentage':1.70},
        {'program':'NPCB','rop': 1810.75,'expe': 4.06 ,'percentage':0.22},
        
    ]

    return res.json(data);
})


//NHMCRAPFRMR
router.get('/nhmcrapfrmr', (req, res) => {

    let data = [
        {'district':'Durg ','rop':5524.90 ,'expe':478.84 ,'percentage':8.67},
        {'district':'Bemetra ','rop':4006.79 ,'expe':272.90 ,'percentage':6.81},
        {'district':'Raipur ','rop':8323.50 ,'expe':556.74 ,'percentage':6.69},
        {'district':'Surguja ','rop':6331.56 ,'expe':378.10 ,'percentage':5.97},
        {'district':'Korba ','rop':6440.95 ,'expe':325.98 ,'percentage':5.06},
        {'district':'Gariyaband ','rop':4651.98 ,'expe':220.72 ,'percentage':4.74},
        {'district':'Balod ','rop':4867.51 ,'expe':220.02 ,'percentage':4.52},
        {'district':'Baloda Bazar ','rop':5059.33 ,'expe':225.02 ,'percentage':4.45},
        {'district':'Rajnandgaon ','rop':4455.96 ,'expe':190.76 ,'percentage':4.28},
        {'district':'Sukma ','rop':2804.69 ,'expe':114.99 ,'percentage':4.10},
    ]

    return res.json(data);
})


//DWCVPUAIDSCP
router.get('/dwcvpuaidscp', (req, res) => {

    let data = [{ value: 48, id: 1, dist: 'A' }, { value: 43, id: 1, dist: 'B' },
    { value: 77, id: 1, dist: 'D' }, { value: 45, id: 1, dist: 'E' }, { value: 123, id: 1, dist: 'G' },
    { value: 90, id: 1, dist: 'S' }, { value: 89, id: 1, dist: 'W' },
    { value: 67, id: 1, dist: 'Q' }, { value: 102, id: 1, dist: 'R' }]

    return res.json(data);
})


//HIVTBCCM
router.get('/hivtbccm', (req, res) => {
   let data = [
        {
            'regular':'Bilaspur, Balodabazar, Balrampur, Dantewada, Durg , Dhamtari, Jaspurnagar, Kondagaon, Kanker, Korea, Mahasamund, Raigarh, Raipur, Rajnandgaon, Sarguja & Surajpur',
            'atfertt':'GPM, Gariyaband & Janjgir Champa, Korba, Bijapur',
            'afteret':'Balod . Mungeli, Bemetara, Kawardha & Sukma , Narayanpur',
        }
    ]

    return res.json(data);
})


//HIVTBCR
router.get('/hivtbcr', (req, res) => {

    let data = [
{'district':'Baloda Bazar','cthiv': 7723,'ncrfsn': 821,'ncrfns': 572 ,'perr':10.63},
{'district':'Mungeli','cthiv':  4831,'ncrfsn': 500,'ncrfns': 423 ,'perr':10.35},
{'district':'GPM','cthiv':  2610,'ncrfsn': 265,'ncrfns': 346 ,'perr':10.15},
{'district':'Koriya','cthiv':  7007,'ncrfsn': 692,'ncrfns': 475,'perr': 9.88},
{'district':'Surajpur','cthiv':  4982,'ncrfsn': 475,'ncrfns': 17,'perr': 9.53},
{'district':'Balrampur','cthiv':  4620,'ncrfsn': 424 ,'ncrfns':293,'perr': 9.18},
{'district':'Bemetara','cthiv':  3133,'ncrfsn': 249 ,'ncrfns':258,'perr': 7.95},
{'district':'Kondagaon','cthiv':  2920,'ncrfsn': 231 ,'ncrfns':104,'perr': 7.91},
{'district':'Rajnandgaon','cthiv':  7916,'ncrfsn': 592,'ncrfns': 675,'perr': 7.48},
{'district':'Bilaspur','cthiv':  16498,'ncrfsn': 1153,'ncrfns': 1072,'perr': 6.99},
{'district':'Kanker','cthiv':  7835,'ncrfsn': 544,'ncrfns': 231,'perr': 6.94},
{'district':'Raipur','cthiv':  28478,'ncrfsn': 1961,'ncrfns': 1183,'perr': 6.89},
{'district':'Surguja','cthiv':  6611,'ncrfsn': 431,'ncrfns': 165,'perr': 6.52},
{'district':'DHAMTARI','cthiv':  4701,'ncrfsn': 300,'ncrfns': 327,'perr': 6.38},
{'district':'Jashpur','cthiv':  7846,'ncrfsn': 465,'ncrfns': 503,'perr': 5.93},

    ]

    return res.json(data);
})


//NABLCSICTCSC
router.get('/nablcsictcsc', (req, res) => {

    let data = [
{'district':'Korba','nictc': 'ICTC DH Korba','snabl':' Certificate Issued by NABL'},
{'district':'Baloda Bazar','nictc':' ICTC CHC Simga ','snabl':'Certificate Issued by NABL'},
{'district':'Dhamtari','nictc':' ICTC CHC Nagri','snabl':' Status pending at NABL Level.'},
{'district':'Manendragarh-Chirmiri-Bharatpur','nictc': '    ICTC CHC Chirmiri','snabl':' Status pending at NABL Level.'},
    ]

    return res.json(data);
})


//DRNABLC
router.get('/drnavblc', (req, res) => {

    let data = [
        {'document':' Legal Identification of ICTC Lab','aod':' CGSACS'},
        {'document':' Refrigerator Calibration Certificate','aod':' CMHO/CS Office'},
        {'document':' Centrifuge Calibration Certificate ','aod':'CMHO/CS Office'},
        {'document':' Micropipette Calibration Certificate','aod':' CMHO/CS Office'},
        {'document':' Refrigerator Temperature Chart','aod':' ICTC'},
        {'document':' Valid Pollution Control Certificate BMW (Bio Medical Waste)','aod':' CMHO/CS Office'},
        {'document':' Valid Pollution Control Board Registration Certificate','aod':' CMHO/CS Office'},
        {'document':' Duration of Preservation of Records','aod':' CMHO/CS Office'},
        {'document':' EQA (External Quality Assurance) Report','aod':' State Reference Lab, Pt. JNM Medical College, Raipur.'},
    ]

    return res.json(data);
})


//DWLFU&VLP
router.get('/dwlfu&vlp', (req, res) => {

    let data = [
{'district':'Raipur','lfu': 484 ,'vl':223},
{'district':'Durg ','lfu':300,'vl':5},
{'district':'Bilaspur','lfu': 244 ,'vl':1228},
{'district':'Bastar ','lfu':191,'vl': 50},
{'district':'Balodabazar ','lfu':169 ,'vl':117},
{'district':'Koria ','lfu':143,'vl': 6},
{'district':'Ambikapur','lfu': 114,'vl': 2},
{'district':'Mahasamund','lfu': 106,'vl': 1},
{'district':'Kawardha ','lfu':86,'vl': 91},
{'district':'Rajnandgaon ','lfu':75 ,'vl':395},
{'district':'Bemetara ','lfu':68,'vl': 50},
{'district':'Janjgeer','lfu': 67 ,'vl':477},
{'district':'Kondagaon ','lfu':44,'vl': 10},
{'district':'Gariaband ','lfu':40,'vl': 0},
{'district':'Raigarh','lfu': 39,'vl': 75},
{'district':'Kanker ','lfu':38 ,'vl': 7},
    ]

    return res.json(data);
})











module.exports = router;
