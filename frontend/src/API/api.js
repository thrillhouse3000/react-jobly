import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${this.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes
  static async register(username, password, firstName, lastName, email) {
    let res = await this.request(`auth/register`, {username, password, firstName, lastName, email}, "post")
    this.token = res.token
    return res.token
  }

  static async getToken(username, password) {
    let res = await this.request(`auth/token`, {username, password}, "post")
    this.token = res.token
    return res.token
  }

  static async updateUser(username, data) {
    let res = await this.request(`users/${username}`, data, 'patch');
    return res.user
  }

  static async getUserInfo(username) {
    let res = await this.request(`users/${username}`)
    return res.user
  }

  static async apply(username, jobId) {
    try{
      await this.request(`users/${username}/jobs/${jobId}`, {}, "post")
    }catch (err) {
      console.log(err)
    }
    
  }

  static async getCompanies(params) {
    let res
    let keys = Object.keys(params)
    let q = []

    if (keys.length) {
      for (let key of keys) {
        if (params[key]) {
          q.push(`${key}=${params[key]}`)
        }
        let qStr = q.join('&')
        res = await this.request(`companies?${qStr}`)
      }
    } else {
      res = await this.request(`companies`)
    }
      
    return res.companies
  }

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  static async getJobs(params) {
    let res
    let keys = Object.keys(params)
    let q = []

    if (keys.length) {
      for (let key of keys) {
        if (params[key]) {
          q.push(`${key}=${params[key]}`)
        }
        let qStr = q.join('&')
        res = await this.request(`jobs?${qStr}`)
      }
    } else {
      res = await this.request(`jobs`)
    }
      
    return res.jobs
  }

  static async getJob(id) {
    let res = await this.request(`jobs/${id}`)
    return res.job
  }

  // obviously, you'll add a lot here ...
}

// for now, put token ("testuser" / "password" on class)
// JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
//     "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
//     "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

export default JoblyApi;