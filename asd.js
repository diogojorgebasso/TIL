export default function core(configuration = {}) {
  function start() {
    console.log("[Initializing] core...");
    //const database = configuration.db ? require('./database') : console.log('No db')
  }
  function end() {
    console.log("[Closing core] ");

    console.log("[Closing app] database.js");
  }
}
