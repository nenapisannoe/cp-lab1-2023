import {Cache} from "../src/cache";

describe('get/set working properly', () => {     
    it('returns null if there is no value by given key', () => {
        const testKey = "i am key";
        let testCache = new Cache();
    
        let gotValue = testCache.get(testKey);
    
        expect(gotValue).toBe(null);
    });
        
    it('set working properly', () => {
        const testKey = "i am key";
        const testValue = "i am value";
        let testCache = new Cache();
    
        testCache.set(testKey, testValue);
    
        let gotValue = testCache.get(testKey);
        expect(gotValue).toBe(testValue);
    });

});

describe('cache expiring properly', () => {     
    it('queries amount being 1 by default', () =>{
        const testKey = "i am key";
        const testValue = "i am value";

        let testCache = new Cache();
        testCache.set(testKey, testValue);

        testCache.get(testKey);
        expect(testCache.get(testKey)).toBe(null);
    })

    it('cache expires after given amount of queries', () => {
        const testKey = "i am key";
        const testValue = "i am value";
        const queries = 2;

        let testCache = new Cache();
    
        testCache.set(testKey, testValue, queries);

        testCache.get(testKey);
        testCache.get(testKey);
    
        expect(testCache.get(testKey)).toBe(null);
    });
});

describe('cache log working properly', () =>{
    it('returns empty array if no queries', () =>
    {
        let testCache = new Cache();

        const testLog = testCache.logs();
        expect(testLog).toEqual([]);
    });
});