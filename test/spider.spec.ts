import { expect } from 'chai';
import { Spider } from '../src/spider';

describe('Spider', () => {
    it('can be initialized without an initializer', () => {
        const s = new Spider();
        s.initialize();
        expect(s.getPositionX()).to.equal(0);
        expect(s.getPositionY()).to.equal(0);
    });
    it('moves forwards correctly', () => {
        const s = new Spider(0,0,"FFF");
        s.initialize();
        expect(s.getPositionX()).to.equal(0);
        expect(s.getPositionY()).to.equal(3);
    });
    it('moves backwards correctly', () => {
        const s = new Spider(0,0,"BBB");
        s.initialize();
        expect(s.getPositionX()).to.equal(0);
        expect(s.getPositionY()).to.equal(-3);
    });
    it('moves left correctly', () => {
        const s = new Spider(0,0,"LLL");
        s.initialize();
        expect(s.getPositionX()).to.equal(-3);
        expect(s.getPositionY()).to.equal(0);
    });
    it('moves right correctly', () => {
        const s = new Spider(0,0,"RRR");
        s.initialize();
        expect(s.getPositionX()).to.equal(3);
        expect(s.getPositionY()).to.equal(0);
    });
    it('sets initial position correctly', () => {
        const spider1 = new Spider(5,2,"");
        const spider2 = new Spider(-7,-12,"");
        spider1.initialize();
        spider2.initialize();
        expect(spider1.getPositionX()).to.equal(5);
        expect(spider1.getPositionY()).to.equal(2);
        expect(spider2.getPositionX()).to.equal(-7);
        expect(spider2.getPositionY()).to.equal(-12);
    });
    it('handles bad commands gracefully', () => {
        const spider1 = new Spider(0,0,"FYTFR");
        spider1.initialize();
        expect(spider1.getPositionX()).to.equal(1);
        expect(spider1.getPositionY()).to.equal(2);
    });
});