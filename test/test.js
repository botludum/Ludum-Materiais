var expect = require('chai').expect;
var linkModel = require('../models/linkModel');
var tutorialModel = require('../models/tutorialModel');

describe('link model', function() {
  it('data should be null', function(done) {
    var link = new linkModel();
      
    link.validate(function(err) {
        expect(err).to.be.null;;
        done();
    });
  });
});

describe('tutorial model', function() {
  it('data should be null', function(done) {
    var tutorial = new tutorialModel();
      
    tutorial.validate(function(err) {
        expect(err).to.be.null;;
        done();
    });
  });
});

