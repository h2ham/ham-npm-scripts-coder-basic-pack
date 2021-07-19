const expect = require('expect');
const fs = require('fs');
const path = require('path');
describe('html', function() {
  it('should exsist', () => {
    const file = fs.existsSync( path.join(__dirname, '../dist/index.html') );
  })
});

describe('css', function() {
  it('should exsist', () => {
    const file = fs.existsSync( path.join(__dirname, '../dist/assets/css/style.css') );
  })
});

describe('js', function() {
  it('should exsist', () => {
    const file = fs.existsSync( path.join(__dirname, '../dist/assets/js/main.js') );
  })
});
