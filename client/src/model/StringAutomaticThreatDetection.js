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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveSecurityApiClient) {
      root.CloudmersiveSecurityApiClient = {};
    }
    root.CloudmersiveSecurityApiClient.StringAutomaticThreatDetection = factory(root.CloudmersiveSecurityApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The StringAutomaticThreatDetection model module.
   * @module model/StringAutomaticThreatDetection
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>StringAutomaticThreatDetection</code>.
   * Result of performing an Insecure Deserialization JSON protection operation
   * @alias module:model/StringAutomaticThreatDetection
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>StringAutomaticThreatDetection</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StringAutomaticThreatDetection} obj Optional instance to populate.
   * @return {module:model/StringAutomaticThreatDetection} The populated <code>StringAutomaticThreatDetection</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('CleanResult')) {
        obj['CleanResult'] = ApiClient.convertToType(data['CleanResult'], 'Boolean');
      }
      if (data.hasOwnProperty('ContainedJsonInsecureDeserializationAttack')) {
        obj['ContainedJsonInsecureDeserializationAttack'] = ApiClient.convertToType(data['ContainedJsonInsecureDeserializationAttack'], 'Boolean');
      }
      if (data.hasOwnProperty('ContainedXssThreat')) {
        obj['ContainedXssThreat'] = ApiClient.convertToType(data['ContainedXssThreat'], 'Boolean');
      }
      if (data.hasOwnProperty('ContainedXxeThreat')) {
        obj['ContainedXxeThreat'] = ApiClient.convertToType(data['ContainedXxeThreat'], 'Boolean');
      }
      if (data.hasOwnProperty('ContainedSqlInjectionThreat')) {
        obj['ContainedSqlInjectionThreat'] = ApiClient.convertToType(data['ContainedSqlInjectionThreat'], 'Boolean');
      }
      if (data.hasOwnProperty('ContainedSsrfThreat')) {
        obj['ContainedSsrfThreat'] = ApiClient.convertToType(data['ContainedSsrfThreat'], 'Boolean');
      }
      if (data.hasOwnProperty('IsXML')) {
        obj['IsXML'] = ApiClient.convertToType(data['IsXML'], 'Boolean');
      }
      if (data.hasOwnProperty('IsJSON')) {
        obj['IsJSON'] = ApiClient.convertToType(data['IsJSON'], 'Boolean');
      }
      if (data.hasOwnProperty('IsURL')) {
        obj['IsURL'] = ApiClient.convertToType(data['IsURL'], 'Boolean');
      }
      if (data.hasOwnProperty('OriginalInput')) {
        obj['OriginalInput'] = ApiClient.convertToType(data['OriginalInput'], 'String');
      }
    }
    return obj;
  }

  /**
   * True if the operation was successful, false otherwise
   * @member {Boolean} Successful
   */
  exports.prototype['Successful'] = undefined;
  /**
   * @member {Boolean} CleanResult
   */
  exports.prototype['CleanResult'] = undefined;
  /**
   * True if the input contained Insecure Deserialization JSON, false otherwise
   * @member {Boolean} ContainedJsonInsecureDeserializationAttack
   */
  exports.prototype['ContainedJsonInsecureDeserializationAttack'] = undefined;
  /**
   * True if the input contained XSS attack, false otherwise
   * @member {Boolean} ContainedXssThreat
   */
  exports.prototype['ContainedXssThreat'] = undefined;
  /**
   * True if the input contained XXE attack, false otherwise
   * @member {Boolean} ContainedXxeThreat
   */
  exports.prototype['ContainedXxeThreat'] = undefined;
  /**
   * True if the input contained SQL Injection attack, false otherwise
   * @member {Boolean} ContainedSqlInjectionThreat
   */
  exports.prototype['ContainedSqlInjectionThreat'] = undefined;
  /**
   * True if the input contained an Server-Side Request Forgery (SSRF) URL attack, false otherwise
   * @member {Boolean} ContainedSsrfThreat
   */
  exports.prototype['ContainedSsrfThreat'] = undefined;
  /**
   * True if the input string is XML, false otherwise
   * @member {Boolean} IsXML
   */
  exports.prototype['IsXML'] = undefined;
  /**
   * True if the input string is JSON, false otherwise
   * @member {Boolean} IsJSON
   */
  exports.prototype['IsJSON'] = undefined;
  /**
   * True if the input string is a URL, false otherwise
   * @member {Boolean} IsURL
   */
  exports.prototype['IsURL'] = undefined;
  /**
   * Original input string
   * @member {String} OriginalInput
   */
  exports.prototype['OriginalInput'] = undefined;



  return exports;
}));


