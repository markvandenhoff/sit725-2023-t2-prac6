const { expect } = require("chai");
const request = require("request");
let url = 'http://localhost:3000/api/cat';
let cat = {
    _id: 'test',
    title: 'testCat',
    subtitle: 'testsubtitle',
    path: 'testPath',
    desription: 'testdDescription'
};


describe('test GET api', function () {
    it('returns statusCode of 200', function (done) {
        request(url, function (error, response, body) {
            // let response = JSON.parse(c);
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
    it("returns statusCode key in body to check if api give right result should be 200", function (done) {
        request(url, function (error, response, body) {
            body = JSON.parse(body)
            expect(body.statusCode).to.equal(200);
            done()
        });
    });
});



describe('test POST api', function () {
    it('post cat to DB', function (done) {
        request.post({ url: url, form: cat }, async function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
});



describe('test DELETE api', function () {
    it('delete a cat from DB', function (done) {
        request.delete({ url: url, form: cat }, function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
});