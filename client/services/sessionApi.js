import axios from 'axios';

import { API_URL, postInternal } from '../common.js';

// type is one of 'bank' or 'person'
export function login(formdata) {
    return postInternal(formdata.get('porb') + '/login', formdata);
  }
