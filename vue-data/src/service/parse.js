import Parse from 'parse';

Parse.initialize('123456');
Parse.serverURL = 'http://portal.xiandusi.com:1337/example';
/* eslint-disable */
window.Parse = Parse;
export default Parse;
