import { expect } from 'chai';
import { Spider } from '../src/spider';

describe('Spider', () => {
    it('can be initialized without an initializer', () => {
        const s = new Spider();
        expect(s.getPositionX()).to.equal(0);
        expect(s.getPositionY()).to.equal(0);
    });
    it('moves forwards correctly', () => {
        const s = new Spider(0,0,"FFF");
        expect(s.getPositionX()).to.equal(0);
        expect(s.getPositionY()).to.equal(3);
    });
    it('moves backwards correctly', () => {
        const s = new Spider(0,0,"BBB");
        expect(s.getPositionX()).to.equal(0);
        expect(s.getPositionY()).to.equal(-3);
    });
    it('moves left correctly', () => {
        const s = new Spider(0,0,"LLL");
        expect(s.getPositionX()).to.equal(-3);
        expect(s.getPositionY()).to.equal(0);
    });
    it('moves right correctly', () => {
        const s = new Spider(0,0,"RRR");
        expect(s.getPositionX()).to.equal(3);
        expect(s.getPositionY()).to.equal(0);
    });
    it('sets initial position correctly', () => {
        const spider1 = new Spider(5,2,"");
        const spider2 = new Spider(-7,-12,"");
        expect(spider1.getPositionX()).to.equal(5);
        expect(spider1.getPositionY()).to.equal(2);
        expect(spider2.getPositionX()).to.equal(-7);
        expect(spider2.getPositionY()).to.equal(-12);
    });
    it('handles bas commands gracefully', () => {
        const spider1 = new Spider(0,0,"FYTFR");
        expect(spider1.getPositionX()).to.equal(1);
        expect(spider1.getPositionY()).to.equal(2);
    });
});