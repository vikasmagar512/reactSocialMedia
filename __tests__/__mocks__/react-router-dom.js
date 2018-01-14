/**
 * Created by chetan on 15/01/18.
 */
import React from 'react';
const rrd = require('react-router-dom');
// Just render plain div with its children
rrd.BrowserRouter = ({children}) => <div>{children}</div>
module.exports = rrd;