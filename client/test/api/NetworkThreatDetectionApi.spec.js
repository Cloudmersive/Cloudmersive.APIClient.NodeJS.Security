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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CloudmersiveSecurityApiClient);
  }
}(this, function(expect, CloudmersiveSecurityApiClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CloudmersiveSecurityApiClient.NetworkThreatDetectionApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('NetworkThreatDetectionApi', function() {
    describe('networkThreatDetectionDetectSsrfUrl', function() {
      it('should call networkThreatDetectionDetectSsrfUrl successfully', function(done) {
        //uncomment below and update the code to test networkThreatDetectionDetectSsrfUrl
        //instance.networkThreatDetectionDetectSsrfUrl(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('networkThreatDetectionIsBot', function() {
      it('should call networkThreatDetectionIsBot successfully', function(done) {
        //uncomment below and update the code to test networkThreatDetectionIsBot
        //instance.networkThreatDetectionIsBot(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('networkThreatDetectionIsThreat', function() {
      it('should call networkThreatDetectionIsThreat successfully', function(done) {
        //uncomment below and update the code to test networkThreatDetectionIsThreat
        //instance.networkThreatDetectionIsThreat(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('networkThreatDetectionIsTorNode', function() {
      it('should call networkThreatDetectionIsTorNode successfully', function(done) {
        //uncomment below and update the code to test networkThreatDetectionIsTorNode
        //instance.networkThreatDetectionIsTorNode(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
