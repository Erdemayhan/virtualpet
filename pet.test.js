const Pet = require("./pet");



describe('constructor', () => {
    it('returns an object', () => {
      const pet = new Pet("Erdem");
      expect(pet.name).toBe("Erdem");
    });
  });

//toBe for strings. numbers or booleans, for everything else use toEqual