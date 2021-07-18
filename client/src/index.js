/**
 * securityapi
 * The security APIs help you detect and block security threats.
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/IPThreatDetectionResponse', 'model/StringAutomaticThreatDetection', 'model/StringInsecureDeserializationJsonDetection', 'model/StringSqlInjectionDetectionResult', 'model/StringXssProtectionResult', 'model/StringXxeDetectionResult', 'model/ThreatDetectionBotCheckResponse', 'model/ThreatDetectionTorNodeResponse', 'model/UrlSsrfThreatDetectionRequestFull', 'model/UrlSsrfThreatDetectionResponseFull', 'api/ContentThreatDetectionApi', 'api/NetworkThreatDetectionApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/IPThreatDetectionResponse'), require('./model/StringAutomaticThreatDetection'), require('./model/StringInsecureDeserializationJsonDetection'), require('./model/StringSqlInjectionDetectionResult'), require('./model/StringXssProtectionResult'), require('./model/StringXxeDetectionResult'), require('./model/ThreatDetectionBotCheckResponse'), require('./model/ThreatDetectionTorNodeResponse'), require('./model/UrlSsrfThreatDetectionRequestFull'), require('./model/UrlSsrfThreatDetectionResponseFull'), require('./api/ContentThreatDetectionApi'), require('./api/NetworkThreatDetectionApi'));
  }
}(function(ApiClient, IPThreatDetectionResponse, StringAutomaticThreatDetection, StringInsecureDeserializationJsonDetection, StringSqlInjectionDetectionResult, StringXssProtectionResult, StringXxeDetectionResult, ThreatDetectionBotCheckResponse, ThreatDetectionTorNodeResponse, UrlSsrfThreatDetectionRequestFull, UrlSsrfThreatDetectionResponseFull, ContentThreatDetectionApi, NetworkThreatDetectionApi) {
  'use strict';

  /**
   * The_security_APIs_help_you_detect_and_block_security_threats_.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var CloudmersiveSecurityApiClient = require('index'); // See note below*.
   * var xxxSvc = new CloudmersiveSecurityApiClient.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new CloudmersiveSecurityApiClient.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new CloudmersiveSecurityApiClient.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new CloudmersiveSecurityApiClient.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.2.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The IPThreatDetectionResponse model constructor.
     * @property {module:model/IPThreatDetectionResponse}
     */
    IPThreatDetectionResponse: IPThreatDetectionResponse,
    /**
     * The StringAutomaticThreatDetection model constructor.
     * @property {module:model/StringAutomaticThreatDetection}
     */
    StringAutomaticThreatDetection: StringAutomaticThreatDetection,
    /**
     * The StringInsecureDeserializationJsonDetection model constructor.
     * @property {module:model/StringInsecureDeserializationJsonDetection}
     */
    StringInsecureDeserializationJsonDetection: StringInsecureDeserializationJsonDetection,
    /**
     * The StringSqlInjectionDetectionResult model constructor.
     * @property {module:model/StringSqlInjectionDetectionResult}
     */
    StringSqlInjectionDetectionResult: StringSqlInjectionDetectionResult,
    /**
     * The StringXssProtectionResult model constructor.
     * @property {module:model/StringXssProtectionResult}
     */
    StringXssProtectionResult: StringXssProtectionResult,
    /**
     * The StringXxeDetectionResult model constructor.
     * @property {module:model/StringXxeDetectionResult}
     */
    StringXxeDetectionResult: StringXxeDetectionResult,
    /**
     * The ThreatDetectionBotCheckResponse model constructor.
     * @property {module:model/ThreatDetectionBotCheckResponse}
     */
    ThreatDetectionBotCheckResponse: ThreatDetectionBotCheckResponse,
    /**
     * The ThreatDetectionTorNodeResponse model constructor.
     * @property {module:model/ThreatDetectionTorNodeResponse}
     */
    ThreatDetectionTorNodeResponse: ThreatDetectionTorNodeResponse,
    /**
     * The UrlSsrfThreatDetectionRequestFull model constructor.
     * @property {module:model/UrlSsrfThreatDetectionRequestFull}
     */
    UrlSsrfThreatDetectionRequestFull: UrlSsrfThreatDetectionRequestFull,
    /**
     * The UrlSsrfThreatDetectionResponseFull model constructor.
     * @property {module:model/UrlSsrfThreatDetectionResponseFull}
     */
    UrlSsrfThreatDetectionResponseFull: UrlSsrfThreatDetectionResponseFull,
    /**
     * The ContentThreatDetectionApi service constructor.
     * @property {module:api/ContentThreatDetectionApi}
     */
    ContentThreatDetectionApi: ContentThreatDetectionApi,
    /**
     * The NetworkThreatDetectionApi service constructor.
     * @property {module:api/NetworkThreatDetectionApi}
     */
    NetworkThreatDetectionApi: NetworkThreatDetectionApi
  };

  return exports;
}));