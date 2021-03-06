import React, { Component } from 'react';


const poolOfArbiters = [{"firstname":"Emil","surname":"Zachar","birthdate":"1846-01-18","wallet":"LRyLqfxH7dPYWmSjDqtnKhHNazdfu1p7zK","state":"SK","language":["cs","sk"]},{"firstname":"Aladár","surname":"Wahlner","birthdate":"1861-02-01","wallet":"LLURMmaVHnN8b1afbW9Wci4hMNPqKTbzcH","state":"SK","language":["cs","sk"]},{"firstname":"František","surname":"Hánrich","birthdate":"1800-09-15","wallet":"LaifQQoNFMkKizNoc5rrUShymBSLBdHpxW","state":"SK","language":["en","sk"]},{"firstname":"Alois","surname":"Rašín","birthdate":"1867-10-18","wallet":"LULzbuU5BRo5pcP17HEnPZZKEiTbFMu2KG","state":"CZ","language":["cs","sk"]},{"firstname":"Vladimír","surname":"Fajnor","birthdate":"1980-01-01","wallet":"LYRXVgjRae9BjjpAfp3KpVFTmem51muDfJ","state":"SK","language":["cs","sk"]},{"firstname":"Štefan","surname":"Luby","birthdate":"1980-01-01","wallet":"LXCyJaVdbka1LEXFp7rDWxzTWTHrMUGBom","state":"SK","language":["cs","sk"]},{"firstname":"Adolf","surname":"Záturecký","birthdate":"1980-01-01","wallet":"LV6ACXPbof6sAV89gPHkQonfkpzVBVAbqd","state":"SK","language":["en","cs","sk"]},{"firstname":"Emil","surname":"Svoboda","birthdate":"1878-10-02","wallet":"LgFyQ9yL67DPRcH9oXQnGof9uT8uzuBd8W","state":"CZ","language":["en","cs","sk"]},{"firstname":"Emil","surname":"Stodola","birthdate":"1862-03-22","wallet":"LTVQi4Zckc1jacEyZBs8x3ADH8hRo8yoBR","state":"SK","language":["en","cs","sk"]},{"firstname":"Augustín","surname":"Ráth","birthdate":"1873-06-02","wallet":"LYS1pzYyNjKfEgnc1WKaZoTix9vj1afgn9","state":"SK","language":["en","cs","sk"]}]




class Users extends Component {

  render() {


  	const arbiters = poolOfArbiters.map((artbiter,index) =>
	  <li key={index}>
	    {artbiter.firstname} {artbiter.surname} | {artbiter.wallet}
	  </li>
	);
    return (
      <div>
      <h1 className="display-4">Arbiters PoC</h1>
      <ol>{arbiters}</ol>
      </div>
    );
  }
}


export default Users;
