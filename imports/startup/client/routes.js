Router.configure({
	layoutTemplate: 'layout',
});

Router.route('/', {
	name: 'home',
});

Router.route('/lorem', {
	name: 'testPage',
})