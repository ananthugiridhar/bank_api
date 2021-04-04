const { query } = require("express");
const pool = require("./db");




async function getBanksForAutocompleteQuery(q, limit,offset) {
    let s=q+"%";
    let querys = "";
  
    if (!q) {
      querys = "SELECT ifsc, branch, address, city, district, state, id, name from branches FULL OUTER JOIN banks on branches.bank_id = banks.id WHERE branch LIKE "+ s +" ORDER BY ifsc LIMIT 10 OFFSET 0";
    } 
    else {
      
      querys = "SELECT ifsc, branch, address, city, district, state, id, name from branches FULL OUTER JOIN banks on branches.bank_id = banks.id WHERE branch LIKE '"+ s +"' ORDER BY ifsc LIMIT "+ limit +" OFFSET "+ offset;
            
    }
  
    const result = await pool.query(querys);
    return result;
  }
  
 async function getBanksForQuery(
    q = "",
    limit= 100,
    offset = 0
  ) {
    let querys= "";
  
    if (!q) {
      querys = `SELECT ifsc, branch, address, city, district, state, id, name from branches
                FULL OUTER JOIN banks on branches.bank_id = banks.id
                ORDER BY ifsc
                LIMIT ${limit ? limit : 100}
                OFFSET ${offset ? offset : 0};`;
    }
    // else {
    //   const qParam = sanitize(q);
  
    //   query = `SELECT ifsc, branch, address, city, district, state, id, name from branches, banks 
    //                         WHERE (branches.doc_vectors @@ to_tsquery('${qParam}') 
    //                                 OR  banks.doc_vectors @@ to_tsquery('${qParam}'))
    //                         AND banks.id = branches.bank_id
    //                         ORDER BY ifsc
    //                         LIMIT ${limit}
    //                         OFFSET ${offset};
    //               `;
    // }
  
    const result = await query(querys);
    return result && result.rows;
  }


//   module.exports = getBanksForQuery;
  module.exports = getBanksForAutocompleteQuery;