
/* GET 'home' page */
const homepage = function(req, res){
  res.render('feed', {
    title: 'Wheres the party',
    pageHeader: {
      title: 'WTP',
      strapline: 'Upcoming Events'
    },
    sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
	
	eventone: {
		name: 'Primavera Sound Barcelona',
		description: 'rimavera Sound is a Spanish multi-genre music festival, held each summer on the sunny shores of Barcelona at the citys Parc del Fòrum. 2022 will see Primavera Sound celebrate its belated 20th anniversary by expanding to a two weekend event, once again inviting a lineup of the most innovative and influential artists from across the genre spectrum, from alternative indie through to underground techno. One look at the lineup and youll understand why the festival sits high up on any music fans bucket list.',
		when: 'June 2022',
		where: 'Primavera Sounds 16 stages'
	},
	
	eventtwo: {
		name: 'Westfest 2021',
		description: 'Renowned as the biggest indoor electronic music festival the UK has to offer, Westfest returns to The Royal Bath & West Showground this Halloween weekend. Split over a variety of stages, festival-goers can expect to see some of the most exciting names in drum and bass, techno and electronic music for an epic late night party, all accompanied by insane effects and state-of-the-art sound systems.',
		when: 'October 2021',
		where: ' Shepton Mallet, United Kingdom'
	},
	
	eventthree: {
		name: 'Wildlands Weekender',
		description: 'Wildlands is an Australian dance music festival brought to you by the minds behind the popular Beyond The Valley and Origin Fields festivals.Taking place in Brisbane over two days in March 2021, Wildlands Festival gears up its second edition after debuting in 2019 with a lineup of the biggest and most exciting dance, electronic and hip-hop acts.2021 see the Wildlands Weekender curate an all-Australian lineup, bringing the very best artists from around the country to their sun-soaked doorstep.',
		when: 'March 2022',
		where: 'Brisbane'
	},
	
	eventfour: {
		name: 'Forbidden Halloween',
		description: 'Forbidden Halloween returns this October with their biggest Halloween lineup yet, treating ravers to three arenas of the best in D&B, bass and tech.Leading the list of artists set to be heading up the Drum & Bass Arena are Chase & Status [DJ set] & MC Rage, Sub Focus [DJ set] & MC ID, Hybrid Minds, SaSaSaS and General Levy.Meanwhile over on the House Arena, ravers will be treated to the likes of Darius Syrossian, Nic Fanciulli, Low Steppa and Sam Divine, while Flava D, Skepsis and Nathan Dawe will be tearing up the Bass Arena.',
		when: 'October 2021',
		where: 'Peterborough, United Kingdom'
	}
	
  });
};


/* GET 'login' page */
const loginpage = function(req, res){
  res.render('login', { title: 'Login' });
};

/* GET 'Register' page */
const registerpage = function(req, res){
  res.render('register', { title: 'Register' });
};

module.exports = {
  homepage,
  loginpage,
  registerpage
};
