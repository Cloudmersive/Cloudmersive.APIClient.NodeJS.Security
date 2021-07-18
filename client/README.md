# cloudmersive-security-api-client

CloudmersiveSecurityApiClient - JavaScript client for cloudmersive-security-api-client
The security APIs help you detect and block security threats.
[Cloudmersive Security API](https://www.cloudmersive.com/security-threat-detection-api) helps you detect and block security threats.

- API version: v1
- Package version: 1.2.0


## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install cloudmersive-security-api-client --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your cloudmersive-security-api-client from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('cloudmersive-security-api-client')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var CloudmersiveSecurityApiClient = require('cloudmersive-security-api-client');

var defaultClient = CloudmersiveSecurityApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix['Apikey'] = "Token"

var api = new CloudmersiveSecurityApiClient.ContentThreatDetectionApi()

var value = "value_example"; // {String} User-facing text input.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.contentThreatDetectionAutomaticThreatDetectionString(value, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.cloudmersive.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CloudmersiveSecurityApiClient.ContentThreatDetectionApi* | [**contentThreatDetectionAutomaticThreatDetectionString**](docs/ContentThreatDetectionApi.md#contentThreatDetectionAutomaticThreatDetectionString) | **POST** /security/threat-detection/content/automatic/detect/string | Automatically detect threats in an input string
*CloudmersiveSecurityApiClient.ContentThreatDetectionApi* | [**contentThreatDetectionCheckSqlInjectionString**](docs/ContentThreatDetectionApi.md#contentThreatDetectionCheckSqlInjectionString) | **POST** /security/threat-detection/content/sql-injection/detect/string | Check text input for SQL Injection (SQLI) attacks
*CloudmersiveSecurityApiClient.ContentThreatDetectionApi* | [**contentThreatDetectionCheckXxe**](docs/ContentThreatDetectionApi.md#contentThreatDetectionCheckXxe) | **POST** /security/threat-detection/content/xxe/detect/xml/string | Protect text input from XML External Entity (XXE) attacks
*CloudmersiveSecurityApiClient.ContentThreatDetectionApi* | [**contentThreatDetectionDetectInsecureDeserializationJsonString**](docs/ContentThreatDetectionApi.md#contentThreatDetectionDetectInsecureDeserializationJsonString) | **POST** /security/threat-detection/content/insecure-deserialization/json/detect/string | Detect Insecure Deserialization JSON (JID) attacks in a string
*CloudmersiveSecurityApiClient.ContentThreatDetectionApi* | [**contentThreatDetectionProtectXss**](docs/ContentThreatDetectionApi.md#contentThreatDetectionProtectXss) | **POST** /security/threat-detection/content/xss/detect/string | Protect text input from Cross-Site-Scripting (XSS) attacks through normalization
*CloudmersiveSecurityApiClient.NetworkThreatDetectionApi* | [**networkThreatDetectionDetectSsrfUrl**](docs/NetworkThreatDetectionApi.md#networkThreatDetectionDetectSsrfUrl) | **POST** /security/threat-detection/network/url/ssrf/detect | Check a URL for Server-side Request Forgery (SSRF) threats
*CloudmersiveSecurityApiClient.NetworkThreatDetectionApi* | [**networkThreatDetectionIsBot**](docs/NetworkThreatDetectionApi.md#networkThreatDetectionIsBot) | **POST** /security/threat-detection/network/ip/is-bot | Check if IP address is a Bot client threat
*CloudmersiveSecurityApiClient.NetworkThreatDetectionApi* | [**networkThreatDetectionIsThreat**](docs/NetworkThreatDetectionApi.md#networkThreatDetectionIsThreat) | **POST** /security/threat-detection/network/ip/is-threat | Check if IP address is a known threat
*CloudmersiveSecurityApiClient.NetworkThreatDetectionApi* | [**networkThreatDetectionIsTorNode**](docs/NetworkThreatDetectionApi.md#networkThreatDetectionIsTorNode) | **POST** /security/threat-detection/network/ip/is-tor-node | Check if IP address is a Tor node server


## Documentation for Models

 - [CloudmersiveSecurityApiClient.IPThreatDetectionResponse](docs/IPThreatDetectionResponse.md)
 - [CloudmersiveSecurityApiClient.StringAutomaticThreatDetection](docs/StringAutomaticThreatDetection.md)
 - [CloudmersiveSecurityApiClient.StringInsecureDeserializationJsonDetection](docs/StringInsecureDeserializationJsonDetection.md)
 - [CloudmersiveSecurityApiClient.StringSqlInjectionDetectionResult](docs/StringSqlInjectionDetectionResult.md)
 - [CloudmersiveSecurityApiClient.StringXssProtectionResult](docs/StringXssProtectionResult.md)
 - [CloudmersiveSecurityApiClient.StringXxeDetectionResult](docs/StringXxeDetectionResult.md)
 - [CloudmersiveSecurityApiClient.ThreatDetectionBotCheckResponse](docs/ThreatDetectionBotCheckResponse.md)
 - [CloudmersiveSecurityApiClient.ThreatDetectionTorNodeResponse](docs/ThreatDetectionTorNodeResponse.md)
 - [CloudmersiveSecurityApiClient.UrlSsrfThreatDetectionRequestFull](docs/UrlSsrfThreatDetectionRequestFull.md)
 - [CloudmersiveSecurityApiClient.UrlSsrfThreatDetectionResponseFull](docs/UrlSsrfThreatDetectionResponseFull.md)


## Documentation for Authorization


### Apikey

- **Type**: API key
- **API key parameter name**: Apikey
- **Location**: HTTP header

