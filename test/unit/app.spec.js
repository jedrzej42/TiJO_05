describe('app', function () {
    'use strict';

    var app = window.app;

    describe('generateMessage', function () {
        it('should return if string is palindrome and number of vowels', function() {
            expect(app.generateMessage('kajak')).toEqual({vowel: 2, palindrome: true});
            expect(app.generateMessage('pies')).toEqual({vowel: 2, palindrome:false});
            expect(app.generateMessage('zaraz')).toEqual({vowel: 2, palindrome: true});
        });
    });

    describe('isPalindrome', function () {

        describe('toHaveBeenCalled', function () {
            beforeAll(function() {
                spyOn(app, 'isPalindrome');
                app.isPalindrome('kajak');
            });
            it('should call isPalindrome function', function() {
                expect(app.isPalindrome).toHaveBeenCalled();
                expect(app.isPalindrome).toHaveBeenCalledWith('kajak');
            });
        });

        describe('and.callThrough', function () {
            beforeAll(function() {
                spyOn(app, 'isPalindrome').and.callThrough();
                app.generateMessage('kajak');
            });
            it('should call isPalindrome function', function() {
                expect(app.isPalindrome).toHaveBeenCalled();
                expect(app.isPalindrome).toHaveBeenCalledWith('kajak');
            });
        });

        describe('and.returnValue', function () {
            var palindrom;
            beforeAll(function () {
                spyOn(app, 'isPalindrome').and.returnValue(true);
            });
            it('should call isPalindrome and return true', function () {
                palindrom = app.isPalindrome('kajak');
                expect(palindrom).toBe(true);
            });
            it('should call generateMessage function and isPalindrome should return true', function() {
                palindrom = app.generateMessage('kajak');
                expect(palindrom).toEqual({vowel: 2, palindrome: true});
            });
        });

        describe('and.callFake', function () {
            var isPal;
            beforeAll(function() {
                spyOn(app, 'isPalindrome').and.callFake(function (pal) {
                    return false;
                });
            });
            it('should call fake isPalindrome function', function() {
                isPal = app.isPalindrome('kajak');
                expect(isPal).toBe(false);
            });
            it('should call generateMessage function and fake isPalindrome function', function() {
                isPal = app.generateMessage('kajak');
                expect(isPal).toEqual({vowel: 2, palindrome: false});
            });
        });

        describe('calls.count()', function () {
            var palindrome;
            beforeAll(function() {
                spyOn(app, 'isPalindrome').and.callThrough();
            });
            it('should realise that isPalindrome is called', function() {
                palindrome = app.isPalindrome('kajak');
                expect(app.isPalindrome.calls.count()).toBe(1);
            });
            it('should realise that isPalindrome is called ' +
                ' when generateMessage is called', function() {
                palindrome = app.generateMessage('zaraz');
                expect(app.isPalindrome.calls.count()).toEqual(2);
            });
        });
    });

    describe('vowelCount', function () {

        describe('toHaveBeenCalled', function () {
            beforeAll(function() {
                spyOn(app, 'vowelCount');
                app.vowelCount('kajak');
            });
            it('should call vowelCount function', function() {
                expect(app.vowelCount).toHaveBeenCalled();
                expect(app.vowelCount).toHaveBeenCalledWith('kajak');
            });
        });

        describe('and.callThrough', function () {
            beforeAll(function() {
                spyOn(app, 'vowelCount').and.callThrough();
                app.generateMessage('kajak');
            });
            it('should call vowelCount function', function() {
                expect(app.vowelCount).toHaveBeenCalled();
                expect(app.vowelCount).toHaveBeenCalledWith('kajak');
            });
        });

        describe('and.returnValue', function () {
            var vowels;
            beforeAll(function () {
                spyOn(app, 'vowelCount').and.returnValue(2);
            });
            it('should call vowelCount and return true', function () {
                vowels = app.vowelCount('kajak');
                expect(vowels).toBe(2);
            });
            it('should call generateMessage function and vowelCount should return true', function() {
                vowels = app.generateMessage('kajak');
                expect(vowels).toEqual({vowel: 2, palindrome: true});
            });
        });

        describe('and.callFake', function () {
            var vowels;
            beforeAll(function() {
                spyOn(app, 'vowelCount').and.callFake(function (vo) {
                    return 5;
                });
            });
            it('should call fake vowelCount function', function() {
                vowels = app.vowelCount('kajak');
                expect(vowels).toBe(5);
            });
            it('should call generateMessage function and fake vowelCount function', function() {
                vowels = app.generateMessage('kajak');
                expect(vowels).toEqual({vowel: 5, palindrome: true});
            });
        });

        describe('calls.count()', function () {
            var vowels;
            beforeAll(function() {
                spyOn(app, 'vowelCount').and.callThrough();
            });
            it('should realise that vowelCount is called', function() {
                vowels = app.vowelCount('kajak');
                expect(app.vowelCount.calls.count()).toBe(1);
            });
            it('should realise that vowelCount is called ' +
                ' when generateMessage is called', function() {
                vowels = app.generateMessage('zaraz');
                expect(app.vowelCount.calls.count()).toEqual(2);
            });
        });
    });
});

