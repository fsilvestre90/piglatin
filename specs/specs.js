describe('translator', function() {

	it("for words that start with vowels, add 'ay' to the end", function() {
		expect(translator("and")).to.equal("anday");
	});

	it("For words that start with one or more consonants, move all of the first consecutive consonants to the end and add 'ay'.", function() {
		expect(translator("donkey")).to.equal("onkeyday");
	});
	it("three consanant word.", function() {
		expect(translator("string")).to.equal("ingstray");
	});
	it("treat y as a consanant.", function() {
		expect(translator("yellow")).to.equal("ellowyay");
	});
	it("test y in the middle", function() {
		expect(translator("taylor")).to.equal("aylortay")
	})
});
