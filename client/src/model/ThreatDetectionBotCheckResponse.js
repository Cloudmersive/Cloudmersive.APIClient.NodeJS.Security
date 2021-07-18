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
    root.CloudmersiveSecurityApiClient.ThreatDetectionBotCheckResponse = factory(root.CloudmersiveSecurityApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ThreatDetectionBotCheckResponse model module.
   * @module model/ThreatDetectionBotCheckResponse
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>ThreatDetectionBotCheckResponse</code>.
   * Result of performing a Bot check on an IP address
   * @alias module:model/ThreatDetectionBotCheckResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ThreatDetectionBotCheckResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ThreatDetectionBotCheckResponse} obj Optional instance to populate.
   * @return {module:model/ThreatDetectionBotCheckResponse} The populated <code>ThreatDetectionBotCheckResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('IsBot')) {
        obj['IsBot'] = ApiClient.convertToType(data['IsBot'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * True if the input IP address is a Bot or Robot, false otherwise
   * @member {Boolean} IsBot
   */
  exports.prototype['IsBot'] = undefined;



  return exports;
}));

