window.$ = window.jQuery = require('jquery')
require('./jquery.signalR.js')

module.exports = {
    connection: $.connection,
    hubConnection: $.hubConnection
}
