import { postInternal } from '../common.js';

class userApi {
  static requestHeaders(extra = {}) {
    return Object.assign(extra, {
      'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`,
    });
  }

  static requestConfig(extraconf = {}, extrahead = {}) {
    return Object.assign(extraconf, {
      headers: requestHeaders(extrahead);
    });
  }

  static createLoanRequest(data) {
    postInternal('loans', data, requestConfig());
  }
}
