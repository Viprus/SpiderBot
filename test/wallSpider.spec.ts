import { assert, expect } from 'chai';
import { WallSpider } from '../src/wallSpider';

describe('WallSpider', () => {
    it('can be initialized without an initializer', () => {
        const s = new WallSpider();
        s.initialize();
        expect(s.getPositionX()).to.equal(0);
        expect(s.getPositionY()).to.equal(0);
    });
    it('moves forwards correctly', () => {
        const s = new WallSpider(0,0,"FFF");
        s.initialize();
        expect(s.getPositionX()).to.equal(0);
        expect(s.getPositionY()).to.equal(3);
    });
    it('turns right correctly', () => {
        const s = new WallSpider(0,0,"RFFF");
        s.initialize();
        expect(s.getPositionX()).to.equal(3);
        expect(s.getPositionY()).to.equal(0);
    });
    it('turns around backwards correctly', () => {
        const s = new WallSpider(0,3,"BFF");
        s.initialize();
        expect(s.getPositionX()).to.equal(0);
        expect(s.getPositionY()).to.equal(0);
    });
    it('turns left correctly', () => {
        const s = new WallSpider(3,0,"LFFF");
        s.initialize();
        expect(s.getPositionX()).to.equal(0);
        expect(s.getPositionY()).to.equal(0);
    });
    it('turns right multiple times correctly', () => {
        const s = new WallSpider(0,0,"RRRRFFF");
        s.initialize();
        expect(s.getPositionX()).to.equal(0);
        expect(s.getPositionY()).to.equal(3);
    });
    it('turns left multiple times correctly', () => {
        const s = new WallSpider(3,0,"LLLLLFFF");
        s.initialize();
        expect(s.getPositionX()).to.equal(0);
        expect(s.getPositionY()).to.equal(0);
    });
    it('sets initial position correctly', () => {
        const spider1 = new WallSpider(5,2,"");
        assert.throws(() => {
            const spider2 = new WallSpider(-7,-12,"");
            spider2.initialize();
        })
        spider1.initialize();
        expect(spider1.getPositionX()).to.equal(5);
        expect(spider1.getPositionY()).to.equal(2);
    });
    it('handles bad commands gracefully', () => {
        const s = new WallSpider(0,0,"FYTFRF");
        s.initialize();
        expect(s.getPositionX()).to.equal(1);
        expect(s.getPositionY()).to.equal(2);
    });
});