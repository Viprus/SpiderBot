import { assert, expect } from 'chai';
import { MarsSpider } from '../src/marsSpider';

describe('MarsSpider', () => {
    it('can be initialized without an initializer', () => {
        const s = new MarsSpider();
        s.initialize();
        expect(s.getPositionX()).to.equal(0);
        expect(s.getPositionY()).to.equal(0);
    });
    it('moves forwards correctly', () => {
        const s = new MarsSpider(0,0,"FFF");
        s.initialize();
        expect(s.getPositionX()).to.equal(0);
        expect(s.getPositionY()).to.equal(3);
    });
    it('turns right correctly', () => {
        const s = new MarsSpider(0,0,"RFFF");
        s.initialize();
        expect(s.getPositionX()).to.equal(3);
        expect(s.getPositionY()).to.equal(0);
    });
    it('turns around backwards correctly', () => {
        const s = new MarsSpider(0,3,"BFF");
        s.initialize();
        expect(s.getPositionX()).to.equal(0);
        expect(s.getPositionY()).to.equal(0);
    });
    it('turns left correctly', () => {
        const s = new MarsSpider(3,0,"LFFF");
        s.initialize();
        expect(s.getPositionX()).to.equal(0);
        expect(s.getPositionY()).to.equal(0);
    });
    it('turns right multiple times correctly', () => {
        const s = new MarsSpider(0,0,"RRRRFFF");
        s.initialize();
        expect(s.getPositionX()).to.equal(0);
        expect(s.getPositionY()).to.equal(3);
    });
    it('turns left multiple times correctly', () => {
        const s = new MarsSpider(3,0,"LLLLLFFF");
        s.initialize();
        expect(s.getPositionX()).to.equal(0);
        expect(s.getPositionY()).to.equal(0);
    });
    it('sets initial position correctly', () => {
        const spider1 = new MarsSpider(5,2,"");
        spider1.initialize();
        expect(spider1.getPositionX()).to.equal(5);
        expect(spider1.getPositionY()).to.equal(2);
    });
    it('handles bad commands gracefully', () => {
        const s = new MarsSpider(0,0,"FYTFRF");
        s.initialize();
        expect(s.getPositionX()).to.equal(1);
        expect(s.getPositionY()).to.equal(2);
    });
    it('boosts the correct distance', () => {
        const s = new MarsSpider(0,0,"5F");
        const s2 = new MarsSpider(0,0,"3F4F5F");
        s.initialize();
        s2.initialize();
        expect(s.getPositionX()).to.equal(0);
        expect(s.getPositionY()).to.equal(5);
        expect(s2.getPositionX()).to.equal(0);
        expect(s2.getPositionY()).to.equal(12);
    });
    it('does not boost with low fuel', () => {
        const s = new MarsSpider(0,0,"5F5F5F5F5F5F5F");
        assert.throws(() => {
            s.initialize();
        });
    });
    it('does not boost greater than 5 units', () => {
        const s = new MarsSpider(0,0,"6F");
        const s2 = new MarsSpider(0,0,"645F");
        assert.throws(() => {
            s.initialize();
        });
        assert.throws(() => {
            s2.initialize();
        });
    });
});