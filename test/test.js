var expect = require('chai').expect;
var postModel = require('../models/linkTutorialModel');

describe('post model', function() {
  it('data should be null', function(done) {
    var post = new postModel();
      
    post.validate(function(err) {
        expect(err).to.be.null;;
        done();
    });
  });
});

