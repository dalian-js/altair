(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{295:function(t,e,s){"use strict";s.r(e);var a=s(16),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"pre-and-post-request-scripts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pre-and-post-request-scripts"}},[t._v("#")]),t._v(" Pre and post request scripts")]),t._v(" "),s("p",[t._v("Ever wanted to use dynamic data in your request headers, URLs, before sending the request? Pre request scripts enables you do that. With pre request scripts, you can set environment variables from your cookies or create any combination of values for your environment variables. This comes in handy for environments where things like CSRF tokens are used to verify the requests sent to the server.")]),t._v(" "),s("p",[t._v("You might want to perform some extra logic with the response from a request. For example, setting an environment variable from a response header, or from the result of a query. Post request scripts enables you do just that.")]),t._v(" "),s("h3",{attrs:{id:"available-api-for-request-scripts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#available-api-for-request-scripts"}},[t._v("#")]),t._v(" Available API for request scripts")]),t._v(" "),s("p",[t._v("Request scripts support all JavaScript syntax supported in the latest "),s("a",{attrs:{href:"https://tc39.es/ecma262/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ecmascript 2019 (ES10) specification"),s("OutboundLink")],1),t._v(" (except "),s("strong",[t._v("with")]),t._v(" and "),s("strong",[t._v("label")]),t._v(" statements, but those are discouraged anyway). These include things like "),s("code",[t._v("[].flat()")]),t._v(", "),s("code",[t._v("[].flatMap()")]),t._v(", "),s("code",[t._v("Object.fromEntries()")]),t._v(", etc.")]),t._v(" "),s("p",[t._v("There is also a global object "),s("code",[t._v("altair")]),t._v(" available within the context of the request script containing helper methods for interacting with altair.")]),t._v(" "),s("h3",{attrs:{id:"altair-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#altair-data"}},[t._v("#")]),t._v(" altair.data")]),t._v(" "),s("p",[t._v("This contains data used to process your GraphQL request.")]),t._v(" "),s("p",[s("strong",[t._v("altair.data.headers")]),t._v(" - The headers sent as part of your request.")]),t._v(" "),s("p",[s("strong",[t._v("altair.data.variables")]),t._v(" - The parsed variables object sent as part of your request.")]),t._v(" "),s("p",[s("strong",[t._v("altair.data.query")]),t._v(" - The GraphQL query sent to the server.")]),t._v(" "),s("p",[s("strong",[t._v("altair.data.environment")]),t._v(" - The formatted environment object containing the serialized set of environment data before your request is sent.")]),t._v(" "),s("h3",{attrs:{id:"altair-helpers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#altair-helpers"}},[t._v("#")]),t._v(" altair.helpers")]),t._v(" "),s("p",[t._v("This contains a number of helper methods for carrying out basic tasks, like interacting with altair, making network requests, etc.")]),t._v(" "),s("p",[s("strong",[t._v("altair.helpers.getEnvironment(key: string)")]),t._v(" - Returns the environment variable for the specified key.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("altair"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("helpers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getEnvironment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'api_key'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[s("strong",[t._v("altair.helpers.setEnvironment(key: string, val: any, activeEnvironment?: boolean)")]),t._v(" - Sets the environment variable for the specified key, overriding the environment variable for the current request. You can also pass an extra boolean parameter to indicate if the environment variable should also be set in the currently active environment.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("altair"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("helpers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setEnvironment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'api_key'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a482djksd289xxxxxxxxx'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("strong",[t._v("altair.helpers.getCookie(key: string)")]),t._v(" - Retrieves a value stored in browser cookie.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" sessid "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" altair"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("helpers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCookie")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sessid'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("strong",[t._v("altair.helpers.request(...args)")]),t._v(" - "),s("em",[t._v("[Returns a promise]")]),t._v(" Makes a HTTP request using the provided options. This helper simply passes on the arguments to the "),s("a",{attrs:{href:"https://angular.io/guide/http#httpclient",target:"_blank",rel:"noopener noreferrer"}},[t._v("HttpClient"),s("OutboundLink")],1),t._v(" in angular. To know all the possible options, checkout the "),s("a",{attrs:{href:"https://angular.io/api/common/http/HttpClient#request",target:"_blank",rel:"noopener noreferrer"}},[t._v("Angular HttpClient API documentation"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" res "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" altair"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("helpers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://api.agify.io/?name=michael'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// res => {"name":"michael","age":60,"count":41938}')]),t._v("\n")])])]),s("h2",{attrs:{id:"example-use-cases"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-use-cases"}},[t._v("#")]),t._v(" Example Use Cases")]),t._v(" "),s("h3",{attrs:{id:"persisting-data-between-requests"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#persisting-data-between-requests"}},[t._v("#")]),t._v(" Persisting data between requests")]),t._v(" "),s("p",[t._v("Since altair pretty much lives in a browser environment, it does support the "),s("code",[t._v("LocalStorage")]),t._v(" feature. This is useful when you need an authentication token before each request but only requesting the token when your authentication expired.")]),t._v(" "),s("p",[t._v("Assuming you have this header in the "),s("code",[t._v("Set Headers window")]),t._v(":")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Key")]),t._v(" "),s("th",[t._v("Value")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Authorization")]),t._v(" "),s("td",[s("code",[t._v("Bearer "+t._s(t.token_env))])])])])]),t._v(" "),s("p",[t._v("Below is a working example of pre-request script for persisting data between requests (token, token_expiry):")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("nowInSeconds")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" Date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" tokenExpiry "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" localStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"token_expiry"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("nowInSeconds")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tokenExpiry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If the token expiry time has passed, fetch a new token from your auth server again (take note of the await)")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" res "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" altair"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("helpers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'POST'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://auth.example.com'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* auth payload */")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// res => { "token": "abcd", "expiry": 3600 }')]),t._v("\n  \n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Store the received token and expiry in localStorage")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Alternatively you can set this in the active environment")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// altair.helpers.setEnvironment("token", res.token);')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// altair.helpers.setEnvironment("token_expiry", nowInSeconds() + res.expiry);')]),t._v("\n  localStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"token"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("token"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  localStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"token_expiry"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("nowInSeconds")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("expiry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Retrieve the token from localStorage")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// const token = altair.helpers.getEnvironment("token");')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" token "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" localStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"token"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Set the token as the `token_env` environment variable in Altair")]),t._v("\naltair"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("helpers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setEnvironment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'token_env'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" token"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// You can use the environment variables in Altair after setting it by following this blog post: https://sirmuel.design/altair-becomes-environment-friendly-%EF%B8%8F-f9b4e9ef887c")]),t._v("\n")])])]),s("h3",{attrs:{id:"altair-response-available-in-post-request-script"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#altair-response-available-in-post-request-script"}},[t._v("#")]),t._v(" altair.response (Available in post request script)")]),t._v(" "),s("p",[t._v("This contains response from your GraphQL request. "),s("strong",[t._v("Note: This is only available in post request scripts.")])]),t._v(" "),s("p",[s("strong",[t._v("altair.response.headers")]),t._v(" - The response headers sent from the server. "),s("strong",[t._v("Note: Due to some limitations on response headers in the browser, it is advisable to use the desktop apps if you need to use the response headers")])]),t._v(" "),s("p",[s("strong",[t._v("altair.response.statusCode")]),t._v(" - The status code of the response.")]),t._v(" "),s("p",[s("strong",[t._v("altair.response.requestType")]),t._v(" - Indicates the type of request being sent. Values are "),s("code",[t._v("query")]),t._v(", "),s("code",[t._v("introspection")]),t._v(" or "),s("code",[t._v("subscription")]),t._v(".")]),t._v(" "),s("p",[s("strong",[t._v("altair.response.responseTime")]),t._v(" - The total time of the request")]),t._v(" "),s("p",[s("strong",[t._v("altair.response.body")]),t._v(" - The response body")]),t._v(" "),s("h3",{attrs:{id:"altair-importmodule"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#altair-importmodule"}},[t._v("#")]),t._v(" altair.importModule")]),t._v(" "),s("p",[t._v("This allows you to import some modules that are made available in the pre request script editor. It "),s("em",[t._v("returns a promise")]),t._v(" that resolves with the imported module.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" btoa "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" altair"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("importModule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'btoa'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" res "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("btoa")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'username:password'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("The available modules are:")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.npmjs.com/package/abab",target:"_blank",rel:"noopener noreferrer"}},[t._v("atob"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.npmjs.com/package/abab",target:"_blank",rel:"noopener noreferrer"}},[t._v("btoa"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.npmjs.com/package/crypto-js",target:"_blank",rel:"noopener noreferrer"}},[t._v("crypto-js"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=n.exports}}]);