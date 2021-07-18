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
    root.CloudmersiveSecurityApiClient.StringXxeDetectionResult = factory(root.CloudmersiveSecurityApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The StringXxeDetectionResult model module.
   * @module model/StringXxeDetectionResult
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>StringXxeDetectionResult</code>.
   * Result of performing an XXE threat detection operation
   * @alias module:model/StringXxeDetectionResult
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>StringXxeDetectionResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StringXxeDetectionResult} obj Optional instance to populate.
   * @return {module:model/StringXxeDetectionResult} The populated <code>StringXxeDetectionResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('ContainedXxe')) {
        obj['ContainedXxe'] = ApiClient.convertToType(data['ContainedXxe'], 'Boolean');
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
   * True if the input contained XXE threats, false otherwise
   * @member {Boolean} ContainedXxe
   */
  exports.prototype['ContainedXxe'] = undefined;



  return exports;
}));


