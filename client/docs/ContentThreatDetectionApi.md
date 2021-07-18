# CloudmersiveSecurityApiClient.ContentThreatDetectionApi

All URIs are relative to *https://api.cloudmersive.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**contentThreatDetectionAutomaticThreatDetectionString**](ContentThreatDetectionApi.md#contentThreatDetectionAutomaticThreatDetectionString) | **POST** /security/threat-detection/content/automatic/detect/string | Automatically detect threats in an input string
[**contentThreatDetectionCheckSqlInjectionString**](ContentThreatDetectionApi.md#contentThreatDetectionCheckSqlInjectionString) | **POST** /security/threat-detection/content/sql-injection/detect/string | Check text input for SQL Injection (SQLI) attacks
[**contentThreatDetectionCheckXxe**](ContentThreatDetectionApi.md#contentThreatDetectionCheckXxe) | **POST** /security/threat-detection/content/xxe/detect/xml/string | Protect text input from XML External Entity (XXE) attacks
[**contentThreatDetectionDetectInsecureDeserializationJsonString**](ContentThreatDetectionApi.md#contentThreatDetectionDetectInsecureDeserializationJsonString) | **POST** /security/threat-detection/content/insecure-deserialization/json/detect/string | Detect Insecure Deserialization JSON (JID) attacks in a string
[**contentThreatDetectionProtectXss**](ContentThreatDetectionApi.md#contentThreatDetectionProtectXss) | **POST** /security/threat-detection/content/xss/detect/string | Protect text input from Cross-Site-Scripting (XSS) attacks through normalization


<a name="contentThreatDetectionAutomaticThreatDetectionString"></a>
# **contentThreatDetectionAutomaticThreatDetectionString**
> StringAutomaticThreatDetection contentThreatDetectionAutomaticThreatDetectionString(value)

Automatically detect threats in an input string

Auto-detects a wide range of threat types in input string, including Cross-Site Scripting (XSS), SQL Injection (SQLI), XML External Entitites (XXE), Server-side Request Forgeries (SSRF), and JSON Insecure Deserialization (JID).

### Example
```javascript
var CloudmersiveSecurityApiClient = require('cloudmersive-security-api-client');
var defaultClient = CloudmersiveSecurityApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveSecurityApiClient.ContentThreatDetectionApi();

var value = "value_example"; // String | User-facing text input.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.contentThreatDetectionAutomaticThreatDetectionString(value, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | **String**| User-facing text input. | 

### Return type

[**StringAutomaticThreatDetection**](StringAutomaticThreatDetection.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="contentThreatDetectionCheckSqlInjectionString"></a>
# **contentThreatDetectionCheckSqlInjectionString**
> StringSqlInjectionDetectionResult contentThreatDetectionCheckSqlInjectionString(value)

Check text input for SQL Injection (SQLI) attacks

Detects SQL Injection (SQLI) attacks from text input.

### Example
```javascript
var CloudmersiveSecurityApiClient = require('cloudmersive-security-api-client');
var defaultClient = CloudmersiveSecurityApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveSecurityApiClient.ContentThreatDetectionApi();

var value = "value_example"; // String | User-facing text input.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.contentThreatDetectionCheckSqlInjectionString(value, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | **String**| User-facing text input. | 

### Return type

[**StringSqlInjectionDetectionResult**](StringSqlInjectionDetectionResult.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="contentThreatDetectionCheckXxe"></a>
# **contentThreatDetectionCheckXxe**
> StringXxeDetectionResult contentThreatDetectionCheckXxe(value)

Protect text input from XML External Entity (XXE) attacks

Detects XXE (XML External Entity) attacks from XML text input.

### Example
```javascript
var CloudmersiveSecurityApiClient = require('cloudmersive-security-api-client');
var defaultClient = CloudmersiveSecurityApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveSecurityApiClient.ContentThreatDetectionApi();

var value = "value_example"; // String | User-facing text input.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.contentThreatDetectionCheckXxe(value, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | **String**| User-facing text input. | 

### Return type

[**StringXxeDetectionResult**](StringXxeDetectionResult.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="contentThreatDetectionDetectInsecureDeserializationJsonString"></a>
# **contentThreatDetectionDetectInsecureDeserializationJsonString**
> StringInsecureDeserializationJsonDetection contentThreatDetectionDetectInsecureDeserializationJsonString(value)

Detect Insecure Deserialization JSON (JID) attacks in a string

Detects Insecure Deserialization JSON (JID) attacks from text input.

### Example
```javascript
var CloudmersiveSecurityApiClient = require('cloudmersive-security-api-client');
var defaultClient = CloudmersiveSecurityApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveSecurityApiClient.ContentThreatDetectionApi();

var value = "value_example"; // String | User-facing text input.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.contentThreatDetectionDetectInsecureDeserializationJsonString(value, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | **String**| User-facing text input. | 

### Return type

[**StringInsecureDeserializationJsonDetection**](StringInsecureDeserializationJsonDetection.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="contentThreatDetectionProtectXss"></a>
# **contentThreatDetectionProtectXss**
> StringXssProtectionResult contentThreatDetectionProtectXss(value)

Protect text input from Cross-Site-Scripting (XSS) attacks through normalization

Detects and removes XSS (Cross-Site-Scripting) attacks from text input through normalization.  Returns the normalized result, as well as information on whether the original input contained an XSS risk.

### Example
```javascript
var CloudmersiveSecurityApiClient = require('cloudmersive-security-api-client');
var defaultClient = CloudmersiveSecurityApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveSecurityApiClient.ContentThreatDetectionApi();

var value = "value_example"; // String | User-facing text input.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.contentThreatDetectionProtectXss(value, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | **String**| User-facing text input. | 

### Return type

[**StringXssProtectionResult**](StringXssProtectionResult.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json, application/xml, text/xml

