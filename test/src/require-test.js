'use strict';

var FluxThis = require('../../build/FluxThis');

describe('Require Built FluxThis package', function () {
	it('should have ConstantCollection', function () {
		var CC = new FluxThis.ConstantCollection();
		CC.should.be.an.instanceOf(FluxThis.ConstantCollection);
	});

	it('should have ImmutableStore', function () {
		var Store = new FluxThis.ImmutableStore({
			init: function () { },
			public: {},
			private: {}
		});
		Store.should.be.an.instanceOf(FluxThis.ImmutableStore);
	});

	it('should have ObjectOrientedStore', function () {
		var OOStore = new FluxThis.ObjectOrientedStore({
			init: function () { },
			public: {},
			private: {}
		});
		OOStore.should.be.an.instanceOf(FluxThis.ObjectOrientedStore);
	});

	it('should have ActionCreator', function () {
		var AC = new FluxThis.ActionCreator({
			actionSource: 'test'
		});
		AC.should.be.an.instanceOf(FluxThis.ActionCreator);
	});

	it('should have APIActionCreator', function () {
		var AC = new FluxThis.APIActionCreator({
			actionSource: 'test'
		});
		AC.should.be.an.instanceOf(FluxThis.APIActionCreator);
	});
});
