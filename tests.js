// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});


// sayHello
describe('sayHello',function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when passed "Jane"', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when passed "Alex"', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when passed "Pat"', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    })
    it('should return the string "Hello, World!" when called', function () {
        expect(sayHello()).toBe("Hello, World!");
    })
    it('should return the string "Hello, World!" when passed true', function() {
    expect(sayHello(true)).toBe(("Hello, World!"));
    })
    it('should return the string "Hello, World!" when passed false', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when passed an " "', function () {
        expect(sayHello("")).toBe("Hello, World!");
    });
});


// isFive
describe('isFive',function (){
    it('should be a define function', function (){
        expect((typeof isFive)).toBe('function');
    })
    it('should return true when passed 5', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return false when passed "5"', function () {
        expect(isFive("5")).toBe(false)
    });
})


// isVowel
describe('isVowel', function () {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe('function');
    });
    it('should return false when passed a number', function () {
        expect(isVowel(4)).toBe(false);
    });
});