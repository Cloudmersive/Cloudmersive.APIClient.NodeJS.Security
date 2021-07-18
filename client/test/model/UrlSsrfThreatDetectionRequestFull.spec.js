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
    instance = new CloudmersiveSecurityApiClient.UrlSsrfThreatDetectionRequestFull();
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

  describe('UrlSsrfThreatDetectionRequestFull', function() {
    it('should create an instance of UrlSsrfThreatDetectionRequestFull', function() {
      // uncomment below and update the code to test UrlSsrfThreatDetectionRequestFull
      //var instane = new CloudmersiveSecurityApiClient.UrlSsrfThreatDetectionRequestFull();
      //expect(instance).to.be.a(CloudmersiveSecurityApiClient.UrlSsrfThreatDetectionRequestFull);
    });

    it('should have the property URL (base name: "URL")', function() {
      // uncomment below and update the code to test the property URL
      //var instane = new CloudmersiveSecurityApiClient.UrlSsrfThreatDetectionRequestFull();
      //expect(instance).to.be();
    });

    it('should have the property blockedDomains (base name: "BlockedDomains")', function() {
      // uncomment below and update the code to test the property blockedDomains
      //var instane = new CloudmersiveSecurityApiClient.UrlSsrfThreatDetectionRequestFull();
      //expect(instance).to.be();
    });

  });

}));