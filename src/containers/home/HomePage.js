import React from 'react';

function HomePage(props) {
    return (
        <div id="wrapper">
			<div id="header" className="navbar-toggleable-md sticky transparent b-0 clearfix">
				<header id="topNav">
					<div className="full-container">


						<button className="btn btn-mobile collapsed" data-toggle="collapse" data-target=".nav-main-collapse" aria-expanded="false">
							<i className="fa fa-bars"></i>
						</button>


						<ul className="float-right nav nav-pills nav-second-main">

							<li className="search">
								<a href="javascript:;">
									<i className="fa fa-search"></i>
								</a>
								<div className="search-box">
									<form action="page-search-result-1.html" method="get">
										<div className="input-group">
											<input type="text" name="src" placeholder="Search" className="form-control" />
											<span className="input-group-btn">
												<button className="btn btn-primary" type="submit">Search</button>
											</span>
										</div>
									</form>
								</div> 
							</li>
	

						</ul>
	
						<a className="logo float-left" href="index.html">
							<img src="assets/images/_smarty/logo_light.png" alt="" /> 
							<img src="assets/images/_smarty/logo_dark.png" alt="" /> 
						</a>

						<div className="navbar-collapse float-right nav-main-collapse submenu-dark collapse" style={{display: "none"}}>
							<nav className="nav-main">


								<ul id="topMain" className="nav nav-pills nav-main">
									<li className="dropdown active">
										<a className="dropdown-toggle" href="#">
											HOME
										</a>
										<ul className="dropdown-menu">
											<li className="dropdown active">
												<a className="dropdown-toggle" href="#">
													HOME CORPORATE
												</a>
												<ul className="dropdown-menu">
													<li><a href="index-corporate-1.html">CORPORATE LAYOUT 1</a></li>
													<li><a href="index-corporate-2.html">CORPORATE LAYOUT 2</a></li>
													<li><a href="index-corporate-3.html">CORPORATE LAYOUT 3</a></li>
													<li><a href="index-corporate-4.html">CORPORATE LAYOUT 4</a></li>
													<li><a href="index-corporate-5.html">CORPORATE LAYOUT 5</a></li>
													<li className="active"><a href="index-corporate-6.html">CORPORATE LAYOUT 6</a></li>
													<li><a href="index-corporate-7.html">CORPORATE LAYOUT 7</a></li>
												</ul>
											</li>
											<li className="dropdown">
												<a className="dropdown-toggle" href="#">
													HOME PORTFOLIO
												</a>
												<ul className="dropdown-menu">
													<li><a href="index-portfolio-1.html">PORTFOLIO LAYOUT 1</a></li>
													<li><a href="index-portfolio-2.html">PORTFOLIO LAYOUT 2</a></li>
													<li><a href="index-portfolio-masonry.html">PORTFOLIO MASONRY</a></li>
												</ul>
											</li>
											<li className="dropdown">
												<a className="dropdown-toggle" href="#">
													HOME BLOG
												</a>
												<ul className="dropdown-menu">
													<li><a href="index-blog-1.html">BLOG LAYOUT 1</a></li>
													<li><a href="index-blog-2.html">BLOG LAYOUT 2</a></li>
													<li><a href="index-blog-3.html">BLOG LAYOUT 3</a></li>
													<li><a href="index-blog-4.html">BLOG LAYOUT 4</a></li>
												</ul>
											</li>
											<li className="dropdown">
												<a className="dropdown-toggle" href="#">
													HOME SHOP
												</a>
												<ul className="dropdown-menu">
													<li><a href="index-shop-1.html">SHOP LAYOUT 1</a></li>
													<li><a href="index-shop-2.html">SHOP LAYOUT 2</a></li>
													<li><a href="index-shop-3.html">SHOP LAYOUT 3</a></li>
													<li><a href="index-shop-4.html">SHOP LAYOUT 4</a></li>
													<li><a href="index-shop-5.html">SHOP LAYOUT 5</a></li>
												</ul>
											</li>
											<li className="dropdown">
												<a className="dropdown-toggle" href="#">
													HOME MAGAZINE
												</a>
												<ul className="dropdown-menu">
													<li><a href="index-magazine-1.html">MAGAZINE LAYOUT 1</a></li>
													<li><a href="index-magazine-2.html">MAGAZINE LAYOUT 2</a></li>
												</ul>
											</li>
											<li className="dropdown">
												<a className="dropdown-toggle" href="#">
													HOME LANDING PAGE
												</a>
												<ul className="dropdown-menu">
													<li><a href="index-landing-1.html">LANDING PAGE LAYOUT 1</a></li>
													<li><a href="index-landing-2.html">LANDING PAGE LAYOUT 2</a></li>
													<li><a href="index-landing-3.html">LANDING PAGE LAYOUT 3</a></li>
													<li><a href="index-landing-4.html">LANDING PAGE LAYOUT 4</a></li>
													<li><a href="index-landing-5.html">LANDING PAGE LAYOUT 5</a></li>
												</ul>
											</li>
											<li className="dropdown">
												<a className="dropdown-toggle" href="#">
													HOME FULLSCREEN
												</a>
												<ul className="dropdown-menu">
													<li><a href="index-fullscreen-revolution.html">FULLSCREEN - REVOLUTION</a></li>
													<li><a href="index-fullscreen-youtube.html">FULLSCREEN - YOUTUBE</a></li>
													<li><a href="index-fullscreen-local-video.html">FULLSCREEN - LOCAL VIDEO</a></li>
													<li><a href="index-fullscreen-image.html">FULLSCREEN - IMAGE</a></li>
													<li><a href="index-fullscreen-txt-rotator.html">FULLSCREEN - TEXT ROTATOR</a></li>
												</ul>
											</li>
											<li className="dropdown">
												<a className="dropdown-toggle" href="#">
													HOME ONE PAGE
												</a>
												<ul className="dropdown-menu">
													<li><a href="index-onepage-default.html">ONE PAGE - DEFAULT</a></li>
													<li><a href="index-onepage-revolution.html">ONE PAGE - REVOLUTION</a></li>
													<li><a href="index-onepage-image.html">ONE PAGE - IMAGE</a></li>
													<li><a href="index-onepage-parallax.html">ONE PAGE - PARALLAX</a></li>
													<li><a href="index-onepage-youtube.html">ONE PAGE - YOUTUBE</a></li>
													<li><a href="index-onepage-text-rotator.html">ONE PAGE - TEXT ROTATOR</a></li>
													<li><a href="start-onepage.html"><span className="badge badge-success float-right">new</span> 10+ MORE LAYOUTS</a></li>
												</ul>
											</li>
											<li className="divider"></li>
											<li className="dropdown">
												<a className="dropdown-toggle" href="#">
													HOME - THEMATICS <i className="fa fa-heart ml-10"></i>
												</a>
												<ul className="dropdown-menu">
													<li><a href="index-thematics-restaurant.html">HOME - RESTAURANT</a></li>
													<li><a href="index-thematics-music.html">HOME - MUSIC/BAND</a></li>
													<li><a href="index-thematics-education.html">HOME - EDUCATION</a></li>
													<li><a href="index-thematics-construction.html">HOME - CONSTRUCTION</a></li>
													<li><a href="index-thematics-medical.html">HOME - MEDICAL</a></li>
													<li><a href="index-thematics-church.html">HOME - CHURCH</a></li>
													<li><a href="index-thematics-fashion.html">HOME - FASHION</a></li>
													<li><a href="index-thematics-wedding.html">HOME - WEDDING</a></li>
													<li><a href="index-thematics-events.html">HOME - EVENTS</a></li>
													<li><a href="index-thematics-hosting.html">HOME - HOSTING</a></li>
													<li><a href="index-thematics-lawyer.html">HOME - LAWYER</a></li>
												<li><a href="http://www.stepofweb.com/propose-design.html" data-toggle="tooltip" data-placement="top" title="" target="_blank" data-original-title="Do you need a specific home design? We can include it in the next update!"><span className="badge badge-danger float-right">hot</span> PROPOSE THEMATIC</a></li>
												</ul>
											</li>
											<li className="divider"></li>
											<li><a href="start-revslider.html" data-toggle="tooltip" data-placement="top" title="" data-original-title="57 More Revolution Slider V5"><span className="badge badge-danger float-right">new</span> 57 MORE LAYOUTS</a></li>
											<li className="divider"></li>
											<li><a href="index-simple-revolution.html">HOME SIMPLE - REVOLUTION</a></li>
											<li><a href="index-simple-layerslider.html">HOME SIMPLE - LAYERSLIDER</a></li>
											<li><a href="index-simple-parallax.html">HOME SIMPLE - PARALLAX</a></li>
											<li><a href="index-simple-youtube.html">HOME SIMPLE - YOUTUBE</a></li>
										</ul>
									</li>
									<li className="dropdown">
										<a className="dropdown-toggle" href="#">
											PAGES
										</a>
										<ul className="dropdown-menu">
											<li className="dropdown">
												<a className="dropdown-toggle" href="#">
													MISCELLANEOUS
												</a>
												<ul className="dropdown-menu">
													<li><a href="portfolio-single-project.html">PROJECT PAGE</a></li>
													<li><a href="page-category.html">CATEGORY PAGE</a></li>
													<li><a href="page-cookie-alert.html">COOKIE ALERT</a></li>
												</ul>
											</li>
											<li className="dropdown">
												<a className="dropdown-toggle" href="#">
													ABOUT
												</a>
												<ul className="dropdown-menu">
													<li><a href="page-about-us-1.html">ABOUT US - LAYOUT 1</a></li>
													<li><a href="page-about-us-2.html">ABOUT US - LAYOUT 2</a></li>
													<li><a href="page-about-us-3.html">ABOUT US - LAYOUT 3</a></li>
													<li><a href="page-about-us-4.html">ABOUT US - LAYOUT 4</a></li>
													<li><a href="page-about-us-5.html">ABOUT US - LAYOUT 5</a></li>
													<li><a href="page-about-me-1.html">ABOUT ME - LAYOUT 1</a></li>
													<li><a href="page-about-me-2.html">ABOUT ME - LAYOUT 2</a></li>
												</ul>
											</li>
											<li className="dropdown">
												<a className="dropdown-toggle" href="#">
													TEAM
												</a>
												<ul className="dropdown-menu">
													<li><a href="page-team-1.html">TEAM - LAYOUT 1</a></li>
													<li><a href="page-team-2.html">TEAM - LAYOUT 2</a></li>
												</ul>
											</li>
											<li className="dropdown">
												<a className="dropdown-toggle" href="#">
													SERVICES
												</a>
												<ul className="dropdown-menu">
													<li><a href="page-services-1.html">SERVICES - LAYOUT 1</a></li>
													<li><a href="page-services-2.html">SERVICES - LAYOUT 2</a></li>
													<li><a href="page-services-3.html">SERVICES - LAYOUT 3</a></li>
													<li><a href="page-services-4.html">SERVICES - LAYOUT 4</a></li>
												</ul>
											</li>
											<li className="dropdown">
												<a className="dropdown-toggle" href="#">
													FAQ
												</a>
												<ul className="dropdown-menu">
													<li><a href="page-faq-1.html">FAQ - LAYOUT 1</a></li>
													<li><a href="page-faq-2.html">FAQ - LAYOUT 2</a></li>
													<li><a href="page-faq-3.html">FAQ - LAYOUT 3</a></li>
													<li><a href="page-faq-4.html">FAQ - LAYOUT 4</a></li>
												</ul>
											</li>
											<li className="dropdown">
												<a className="dropdown-toggle" href="#">
													CONTACT
												</a>
												<ul className="dropdown-menu">
													<li><a href="page-contact-1.html">CONTACT - LAYOUT 1</a></li>
													<li><a href="page-contact-2.html">CONTACT - LAYOUT 2</a></li>
													<li><a href="page-contact-3.html">CONTACT - LAYOUT 3</a></li>
													<li><a href="page-contact-4.html">CONTACT - LAYOUT 4</a></li>
													<li><a href="page-contact-5.html">CONTACT - LAYOUT 5</a></li>
													<li><a href="page-contact-recaptcha.html">CONTACT - RECAPTCHA</a></li>
												</ul>
											</li>
											<li className="dropdown">
												<a className="dropdown-toggle" href="#">
													ERROR
												</a>
												<ul className="dropdown-menu">
													<li><a href="page-404-1.html">ERROR 404 - LAYOUT 1</a></li>
													<li><a href="page-404-2.html">ERROR 404 - LAYOUT 2</a></li>
													<li><a href="page-404-3.html">ERROR 404 - LAYOUT 3</a></li>
													<li><a href="page-404-4.html">ERROR 404 - LAYOUT 4</a></li>
													<li><a href="page-404-5.html">ERROR 404 - LAYOUT 5</a></li>
													<li><a href="page-404-6.html">ERROR 404 - LAYOUT 6</a></li>
													<li><a href="page-404-7.html">ERROR 404 - LAYOUT 7</a></li>
													<li><a href="page-404-8.html">ERROR 404 - LAYOUT 8</a></li>
													<li className="divider"></li>
													<li><a href="page-500-1.html">ERROR 500 - LAYOUT 1</a></li>
													<li><a href="page-500-2.html">ERROR 500 - LAYOUT 2</a></li>
												</ul>
											</li>
											<li className="dropdown">
												<a className="dropdown-toggle" href="#">
													SIDEBAR
												</a>
												<ul className="dropdown-menu">
													<li><a href="page-sidebar-left.html">SIDEBAR LEFT</a></li>
													<li><a href="page-sidebar-right.html">SIDEBAR RIGHT</a></li>
													<li><a href="page-sidebar-both.html">SIDEBAR BOTH</a></li>
													<li><a href="page-sidebar-sticky.html">SIDEBAR STICKY</a></li>
													<li><a href="page-sidebar-no.html">NO SIDEBAR</a></li>
													<li className="divider"></li>
													<li><a href="page-sidebar-dark-left.html">SIDEBAR LEFT - DARK</a></li>
													<li><a href="page-sidebar-dark-right.html">SIDEBAR RIGHT - DARK</a></li>
													<li><a href="page-sidebar-dark-both.html">SIDEBAR BOTH - DARK</a></li>
													<li><a href="page-sidebar-dark-no.html">NO SIDEBAR - DARK</a></li>
												</ul>
											</li>
											<li className="dropdown">
												<a className="dropdown-toggle" href="#">
													LOGIN/REGISTER
												</a>
												<ul className="dropdown-menu">
													<li><a href="page-login-1.html">LOGIN - LAYOUT 1</a></li>
													<li><a href="page-login-2.html">LOGIN - LAYOUT 2</a></li>
													<li><a href="page-login-3.html">LOGIN - LAYOUT 3</a></li>
													<li><a href="page-login-4.html">LOGIN - LAYOUT 4</a></li>
													<li><a href="page-login-5.html">LOGIN - LAYOUT 5</a></li>
													<li><a href="page-login-register-1.html">LOGIN + REGISTER 1</a></li>
													<li><a href="page-login-register-2.html">LOGIN + REGISTER 2</a></li>
													<li><a href="page-login-register-3.html">LOGIN + REGISTER 3</a></li>
													<li><a href="page-register-1.html">REGISTER - LAYOUT 1</a></li>
													<li><a href="page-register-2.html">REGISTER - LAYOUT 2</a></li>
												</ul>
											</li>
											<li className="dropdown">
												<a className="dropdown-toggle" href="#">
													CLIENTS
												</a>
												<ul className="dropdown-menu">
													<li><a href="page-clients-1.html">CLIENTS 1 - SIDEBAR RIGHT</a></li>
													<li><a href="page-clients-2.html">CLIENTS 1 - SIDEBAR LEFT</a></li>
													<li><a href="page-clients-3.html">CLIENTS 1 - FULLWIDTH</a></li>
													<li className="divider"></li>
													<li><a href="page-clients-4.html">CLIENTS 2 - SIDEBAR RIGHT</a></li>
													<li><a href="page-clients-5.html">CLIENTS 2 - SIDEBAR LEFT</a></li>
													<li><a href="page-clients-6.html">CLIENTS 2 - FULLWIDTH</a></li>
												</ul>
											</li>
											<li className="dropdown">
												<a className="dropdown-toggle" href="#">
													SEARCH RESULT
												</a>
												<ul className="dropdown-menu">
													<li><a href="page-search-result-1.html">LAYOUT 1 - LEFT SIDEBAR</a></li>
													<li><a href="page-search-result-2.html">LAYOUT 1 - RIGHT SIDEBAR</a></li>
													<li><a href="page-search-result-3.html">LAYOUT 1 - FULLWIDTH</a></li>
													<li className="divider"></li>
													<li><a href="page-search-result-4.html">LAYOUT 2 - LEFT SIDEBAR</a></li>
													<li><a href="page-search-result-5.html">LAYOUT 2 - RIGHT SIDEBAR</a></li>
													<li className="divider"></li>
													<li><a href="page-search-result-6.html">LAYOUT 3 - TABLE SEARCH</a></li>
												</ul>
											</li>
											<li className="dropdown">
												<a className="dropdown-toggle" href="#">
													PROFILE
												</a>
												<ul className="dropdown-menu">
													<li><a href="page-profile.html">USER PROFILE</a></li>
													<li><a href="page-profile-projects.html">USER PROJECTS</a></li>
													<li><a href="page-profile-comments.html">USER COMMENTS</a></li>
													<li><a href="page-profile-history.html">USER HISTORY</a></li>
													<li><a href="page-profile-settings.html">USER SETTINGS</a></li>
												</ul>
											</li>
											<li className="dropdown">
												<a className="dropdown-toggle" href="#">
													MAINTENANCE
												</a>
												<ul className="dropdown-menu">
													<li><a href="page-maintenance-1.html">MAINTENANCE - LAYOUT 1</a></li>
													<li><a href="page-maintenance-2.html">MAINTENANCE - LAYOUT 2</a></li>
												</ul>
											</li>
											<li className="dropdown">
												<a className="dropdown-toggle" href="#">
													COMING SOON
												</a>
												<ul className="dropdown-menu">
													<li><a href="page-coming-soon-1.html">COMING SOON - LAYOUT 1</a></li>
													<li><a href="page-coming-soon-2.html">COMING SOON - LAYOUT 2</a></li>
												</ul>
											</li>
											<li className="dropdown">
												<a className="dropdown-toggle" href="#">
													FORUM
												</a>
												<ul className="dropdown-menu">
													<li><a href="page-forum-home.html">FORUM - HOME</a></li>
													<li><a href="page-forum-topic.html">FORUM - TOPIC</a></li>
													<li><a href="page-forum-post.html">FORUM - POST</a></li>
												</ul>
											</li>
											<li><a href="page-careers.html">CAREERS</a></li>
											<li><a href="page-sitemap.html">SITEMAP</a></li>
											<li><a href="page-blank.html">BLANK PAGE</a></li>
										</ul>
									</li>
									<li className="dropdown">
										<a className="dropdown-toggle" href="#">
											FEATURES
										</a>
										<ul className="dropdown-menu">
											<li className="dropdown">
												<a className="dropdown-toggle" href="#">
													<i className="et-browser"></i> SLIDERS
												</a>
												<ul className="dropdown-menu">
													<li>
														<a className="dropdown-toggle" href="#">REVOLUTION SLIDER 4.x</a>
														<ul className="dropdown-menu">
															<li><a href="feature-slider-revolution-fullscreen.html">FULLSCREEN</a></li>
															<li><a href="feature-slider-revolution-fullwidth.html">FULL WIDTH</a></li>
															<li><a href="feature-slider-revolution-fixedwidth.html">FIXED WIDTH</a></li>
															<li><a href="feature-slider-revolution-kenburns.html">KENBURNS EFFECT</a></li>
															<li><a href="feature-slider-revolution-videobg.html">HTML5 VIDEO</a></li>
															<li><a href="feature-slider-revolution-captions.html">CAPTIONS</a></li>
															<li><a href="feature-slider-revolution-smthumb.html">THUMB SMALL</a></li>
															<li><a href="feature-slider-revolution-lgthumb.html">THUMB LARGE</a></li>
															<li className="divider"></li>
															<li><a href="feature-slider-revolution-prev1.html">NAV PREVIEW 1</a></li>
															<li><a href="feature-slider-revolution-prev2.html">NAV PREVIEW 2</a></li>
															<li><a href="feature-slider-revolution-prev3.html">NAV PREVIEW 3</a></li>
															<li><a href="feature-slider-revolution-prev4.html">NAV PREVIEW 4</a></li>
															<li><a href="feature-slider-revolution-prev0.html">NAV THEME DEFAULT</a></li>
														</ul>
													</li>
													<li>
														<a className="dropdown-toggle" href="#">LAYER SLIDER</a>
														<ul className="dropdown-menu">
															<li><a href="feature-slider-layer-fullwidth.html">FULLWIDTH</a></li>
															<li><a href="feature-slider-layer-fixed.html">FIXED WIDTH</a></li>
															<li><a href="feature-slider-layer-captions.html">CAPTIONS</a></li>
															<li><a href="feature-slider-layer-carousel.html">CAROUSEL</a></li>
															<li><a href="feature-slider-layer-2d3d.html">2D &amp; 3D TRANSITIONS</a></li>
															<li><a href="feature-slider-layer-thumb.html">THUMB NAV</a></li>
															<li className="divider"></li>
															<li><a href="start-layerslider.html"><span className="badge badge-success float-right">new</span> LAYER SLIDER 6</a></li>
														</ul>
													</li>
													<li>
														<a className="dropdown-toggle" href="#">FLEX SLIDER</a>
														<ul className="dropdown-menu">
															<li><a href="feature-slider-flexslider-fullwidth.html">FULL WIDTH</a></li>
															<li><a href="feature-slider-flexslider-content.html">CONTENT</a></li>
															<li><a href="feature-slider-flexslider-thumbs.html">WITH THUMBS</a></li>
														</ul>
													</li>
													<li>
														<a className="dropdown-toggle" href="#">OWL SLIDER</a>
														<ul className="dropdown-menu">
															<li><a href="feature-slider-owl-fullwidth.html">FULL WIDTH</a></li>
															<li><a href="feature-slider-owl-fixed.html">FIXED WIDTH</a></li>
															<li><a href="feature-slider-owl-fixed+progress.html">FIXED + PROGRESS</a></li>
															<li><a href="feature-slider-owl-carousel.html">BASIC CAROUSEL</a></li>
															<li><a href="feature-slider-owl-fade.html">EFFECT - FADE</a></li>
															<li><a href="feature-slider-owl-backslide.html">EFFECT - BACKSLIDE</a></li>
															<li><a href="feature-slider-owl-godown.html">EFFECT - GODOWN</a></li>
															<li><a href="feature-slider-owl-fadeup.html">EFFECT - FADE UP</a></li>
														</ul>
													</li>
													<li>
														<a className="dropdown-toggle" href="#">SWIPE SLIDER</a>
														<ul className="dropdown-menu">
															<li><a href="feature-slider-swipe-full.html">FULLSCREEN</a></li>
															<li><a href="feature-slider-swipe-fixed-height.html">FIXED HEIGHT</a></li>
															<li><a href="feature-slider-swipe-autoplay.html">AUTOPLAY</a></li>
															<li><a href="feature-slider-swipe-fade.html">FADE TRANSITION</a></li>
															<li><a href="feature-slider-swipe-slide.html">SLIDE TRANSITION</a></li>
															<li><a href="feature-slider-swipe-coverflow.html">COVERFLOW TRANSITION</a></li>
															<li><a href="feature-slider-swipe-html5-video.html">HTML5 VIDEO</a></li>
															<li><a href="feature-slider-swipe-3columns.html">3 COLUMNS</a></li>
															<li><a href="feature-slider-swipe-4columns.html">4 COLUMNS</a></li>
														</ul>
													</li>
													<li><a href="feature-slider-nivo.html">NIVO SLIDER</a></li>
													<li><a href="feature-slider-camera.html">CAMERA SLIDER</a></li>
													<li><a href="feature-slider-elastic.html">ELASTIC SLIDER</a></li>
													<li><a href="feature-slider-backstretch.html">BACKSTRETCH SLIDER</a></li>
												</ul>
											</li>
											<li className="dropdown">
												<a className="dropdown-toggle" href="#">
													<i className="et-hotairballoon"></i> HEADERS
												</a>
												<ul className="dropdown-menu">
													<li><a href="feature-header-light.html">HEADER - LIGHT</a></li>
													<li><a href="feature-header-dark.html">HEADER - DARK</a></li>
													<li>
														<a className="dropdown-toggle" href="#">HEADER - HEIGHT</a>
														<ul className="dropdown-menu">
														<li><a href="feature-header-large.html">LARGE (96px)</a></li>
														<li><a href="feature-header-medium.html">MEDIUM (70px)</a></li>
														<li><a href="feature-header-small.html">SMALL (60px)</a></li>
														</ul>
													</li>
													<li>
														<a className="dropdown-toggle" href="#">HEADER - SHADOW</a>
														<ul className="dropdown-menu">
															<li><a href="feature-header-shadow-after-1.html">SHADOW 1 - AFTER</a></li>
															<li><a href="feature-header-shadow-before-1.html">SHADOW 1 - BEFORE</a></li>
															<li className="divider"></li>
															<li><a href="feature-header-shadow-after-2.html">SHADOW 2 - AFTER</a></li>
															<li><a href="feature-header-shadow-before-2.html">SHADOW 2 - BEFORE</a></li>
															<li className="divider"></li>
															<li><a href="feature-header-shadow-after-3.html">SHADOW 3 - AFTER</a></li>
															<li><a href="feature-header-shadow-before-3.html">SHADOW 3 - BEFORE</a></li>
															<li className="divider"></li>
															<li><a href="feature-header-shadow-dark-1.html">SHADOW - DARK PAGE EXAMPLE</a></li>
														</ul>
													</li>
													<li><a href="feature-header-transparent.html">HEADER - TRANSPARENT</a></li>
													<li><a href="feature-header-transparent-line.html">HEADER - TRANSP+LINE</a></li>
													<li><a href="feature-header-translucent.html">HEADER - TRANSLUCENT</a></li>
													<li>
														<a className="dropdown-toggle" href="#">HEADER - BOTTOM</a>
														<ul className="dropdown-menu">
															<li><a href="feature-header-bottom-light.html">BOTTOM LIGHT</a></li>
															<li><a href="feature-header-bottom-dark.html">BOTTOM DARK</a></li>
															<li><a href="feature-header-bottom-transp.html">BOTTOM TRANSPARENT</a></li>
														</ul>
													</li>
													<li>
														<a className="dropdown-toggle" href="#">HEADER - LEFT SIDE</a>
														<ul className="dropdown-menu">
															<li><a href="feature-header-side-left-1.html">FIXED</a></li>
															<li><a href="feature-header-side-left-2.html">OPEN ON CLICK</a></li>
															<li><a href="feature-header-side-left-3.html">DARK</a></li>
														</ul>
													</li>
													<li>
														<a className="dropdown-toggle" href="#">HEADER - RIGHT SIDE</a>
														<ul className="dropdown-menu">
															<li><a href="feature-header-side-right-1.html">FIXED</a></li>
															<li><a href="feature-header-side-right-2.html">OPEN ON CLICK</a></li>
															<li><a href="feature-header-side-right-3.html">DARK</a></li>
														</ul>
													</li>
													<li>
														<a className="dropdown-toggle" href="#">HEADER - STATIC</a>
														<ul className="dropdown-menu">
															<li><a href="feature-header-static-top-light.html">STATIC TOP - LIGHT</a></li>
															<li><a href="feature-header-static-top-dark.html">STATIC TOP - DARK</a></li>
															<li className="divider"></li>
															<li><a href="feature-header-static-bottom-light.html">STATIC BOTTOM - LIGHT</a></li>
															<li><a href="feature-header-static-bottom-dark.html">STATIC BOTTOM - DARK</a></li>
														</ul>
													</li>
													<li><a href="feature-header-centered.html">HEADER - NAV CENTERED</a></li>
													<li><a href="feature-header-nosticky.html">HEADER - NO STICKY</a></li>
													<li><a href="feature-header-scroll.html">HEADER - SCROLL APPEAR</a></li>
												</ul>
											</li>
											<li className="dropdown">
												<a className="dropdown-toggle" href="#">
													<i className="et-anchor"></i> FOOTERS
												</a>
												<ul className="dropdown-menu">
													<li><a href="feature-footer-1.html#footer">FOOTER - LAYOUT 1</a></li>
													<li><a href="feature-footer-2.html#footer">FOOTER - LAYOUT 2</a></li>
													<li><a href="feature-footer-3.html#footer">FOOTER - LAYOUT 3</a></li>
													<li><a href="feature-footer-4.html#footer">FOOTER - LAYOUT 4</a></li>
													<li><a href="feature-footer-5.html#footer">FOOTER - LAYOUT 5</a></li>
													<li><a href="feature-footer-6.html#footer">FOOTER - LAYOUT 6</a></li>
													<li><a href="feature-footer-7.html#footer">FOOTER - LAYOUT 7</a></li>
													<li><a href="feature-footer-8.html#footer">FOOTER - LAYOUT 8 (light)</a></li>
													<li><a href="feature-footer-0.html#footer">FOOTER - STICKY</a></li>
												</ul>
											</li>
											<li className="dropdown">
												<a className="dropdown-toggle" href="#">
													<i className="et-circle-compass"></i> MENU STYLES
												</a>
												<ul className="dropdown-menu">
													<li><a href="feature-menu-0.html">MENU - OVERLAY</a></li>
													<li><a href="feature-menu-1.html">MENU - STYLE 1</a></li>
													<li><a href="feature-menu-2.html">MENU - STYLE 2</a></li>
													<li><a href="feature-menu-3.html">MENU - STYLE 3</a></li>
													<li><a href="feature-menu-4.html">MENU - STYLE 4</a></li>
													<li><a href="feature-menu-5.html">MENU - STYLE 5</a></li>
													<li><a href="feature-menu-6.html">MENU - STYLE 6</a></li>
													<li><a href="feature-menu-7.html">MENU - STYLE 7</a></li>
													<li><a href="feature-menu-8.html">MENU - STYLE 8</a></li>
													<li><a href="feature-menu-9.html">MENU - STYLE 9</a></li>
													<li><a href="feature-menu-10.html">MENU - STYLE 10</a></li>
													<li><a href="feature-menu-11.html">MENU - STYLE 11 (BULLET NAV)</a></li>
													<li><a href="feature-menu-12.html">MENU - STYLE 12</a></li>
												</ul>
											</li>
											<li className="dropdown">
												<a className="dropdown-toggle" href="#">
													<i className="et-genius"></i> MENU DROPDOWN
												</a>
												<ul className="dropdown-menu">
													<li><a href="feature-menu-dd-light.html">DROPDOWN - LIGHT</a></li>
													<li><a href="feature-menu-dd-dark.html">DROPDOWN - DARK</a></li>
													<li><a href="feature-menu-dd-color.html">DROPDOWN - COLOR</a></li>
													<li><a href="feature-menu-dd-effects.html">DROPDOWN - EFFECTS</a></li>
												</ul>
											</li>
											<li className="dropdown">
												<a className="dropdown-toggle" href="#">
													<i className="et-beaker"></i> PAGE TITLES
												</a>
												<ul className="dropdown-menu">
													<li><a href="feature-title-left.html">ALIGN LEFT</a></li>
													<li><a href="feature-title-right.html">ALIGN RIGHT</a></li>
													<li><a href="feature-title-center.html">ALIGN CENTER</a></li>
													<li><a href="feature-title-light.html">LIGHT</a></li>
													<li><a href="feature-title-dark.html">DARK</a></li>
													<li><a href="feature-title-tabs.html">WITH TABS</a></li>
													<li><a href="feature-title-breadcrumbs.html">BREADCRUMBS ONLY</a></li>
													<li>
														<a className="dropdown-toggle" href="#">PARALLAX</a>
														<ul className="dropdown-menu">
															<li><a href="feature-title-parallax-small.html">PARALLAX SMALL</a></li>
															<li><a href="feature-title-parallax-medium.html">PARALLAX MEDIUM</a></li>
															<li><a href="feature-title-parallax-large.html">PARALLAX LARGE</a></li>
															<li><a href="feature-title-parallax-2xlarge.html">PARALLAX 2x LARGE</a></li>
															<li><a href="feature-title-parallax-transp.html">TRANSPARENT HEADER</a></li>
															<li><a href="feature-title-parallax-transp-large.html">TRANSPARENT HEADER - LARGE</a></li>
														</ul>
													</li>
													<li><a href="feature-title-short-height.html">SHORT HEIGHT</a></li>
													<li><a href="feature-title-rotative-text.html">ROTATIVE TEXT</a></li>
												</ul>
											</li>
											<li className="dropdown">
												<a className="dropdown-toggle" href="#">
													<i className="et-layers"></i> PAGE SUBMENU
												</a>
												<ul className="dropdown-menu">
													<li><a href="feature-page-submenu-light.html">PAGE SUBMENU - LIGHT</a></li>
													<li><a href="feature-page-submenu-dark.html">PAGE SUBMENU - DARK</a></li>
													<li><a href="feature-page-submenu-color.html">PAGE SUBMENU - COLOR</a></li>
													<li><a href="feature-page-submenu-transparent.html">PAGE SUBMENU - TRANSPARENT</a></li>
													<li><a href="feature-page-submenu-below-title.html">PAGE SUBMENU - BELOW PAGE TITLE</a></li>
													<li><a href="feature-page-submenu-scrollto.html">PAGE SUBMENU - SCROLLTO</a></li>
												</ul>
											</li>
											<li className="dropdown">
												<a className="dropdown-toggle" href="#">
													<i className="et-trophy"></i> ICONS
												</a>
												<ul className="dropdown-menu">
													<li><a href="feature-icons-fontawesome.html">FONTAWESOME</a></li>
													<li><a href="feature-icons-glyphicons.html">GLYPHICONS</a></li>
													<li><a href="feature-icons-etline.html">ET LINE</a></li>
													<li><a href="shortcode-material-design-icons.html">MATERIAL ICONS</a></li>
													<li><a href="feature-icons-flags.html">FLAGS</a></li>
												</ul>
											</li>
											<li className="dropdown">
												<a className="dropdown-toggle" href="#">
													<i className="et-flag"></i> BACKGROUNDS
												</a>
												<ul className="dropdown-menu">
													<li><a href="feature-content-bg-grey.html">CONTENT - SIMPLE GREY</a></li>
													<li><a href="feature-content-bg-ggrey.html">CONTENT - GRAIN GREY</a></li>
													<li><a href="feature-content-bg-gblue.html">CONTENT - GRAIN BLUE</a></li>
													<li><a href="feature-content-bg-ggreen.html">CONTENT - GRAIN GREEN</a></li>
													<li><a href="feature-content-bg-gorange.html">CONTENT - GRAIN ORANGE</a></li>
													<li><a href="feature-content-bg-gyellow.html">CONTENT - GRAIN YELLOW</a></li>
												</ul>
											</li>
											<li className="dropdown">
												<a className="dropdown-toggle" href="#">
													<i className="et-magnifying-glass"></i> SEARCH LAYOUTS
												</a>
												<ul className="dropdown-menu">
													<li><a href="feature-search-default.html">SEARCH - DEFAULT</a></li>
													<li><a href="feature-search-fullscreen-light.html">SEARCH - FULLSCREEN LIGHT</a></li>
													<li><a href="feature-search-fullscreen-dark.html">SEARCH - FULLSCREEN DARK</a></li>
													<li><a href="feature-search-header-light.html">SEARCH - HEADER LIGHT</a></li>
													<li><a href="feature-search-header-dark.html">SEARCH - HEADER DARK</a></li>
												</ul>
											</li>
											<li><a href="shortcode-animations.html"><i className="et-expand"></i> ANIMATIONS</a></li>
											<li><a href="feature-grid.html"><i className="et-grid"></i> GRID</a></li>
											<li><a href="feature-essentials.html"><i className="et-heart"></i> ESSENTIALS</a></li>
											<li><a href="page-changelog.html"><i className="et-alarmclock"></i> CHANGELOG</a></li>
											<li className="dropdown">
												<a className="dropdown-toggle" href="#">
													<i className="et-newspaper"></i> SIDE PANEL
												</a>
												<ul className="dropdown-menu">
													<li><a href="feature-sidepanel-dark-right.html">SIDE card - DARK - RIGHT</a></li>
													<li><a href="feature-sidepanel-dark-left.html">SIDE card - DARK - LEFT</a></li>
													<li className="divider"></li>
													<li><a href="feature-sidepanel-light-right.html">SIDE card - LIGHT - RIGHT</a></li>
													<li><a href="feature-sidepanel-light-left.html">SIDE card - LIGHT - LEFT</a></li>
													<li className="divider"></li>
													<li><a href="feature-sidepanel-color-right.html">SIDE card - COLOR - RIGHT</a></li>
													<li><a href="feature-sidepanel-color-left.html">SIDE card - COLOR - LEFT</a></li>
												</ul>
											</li>
											<li><a target="_blank" href="../Admin/Admin_BS3/"><span className="badge badge-success float-right">BONUS</span><i className="et-gears"></i> ADMIN PANEL</a></li>
										</ul>
									</li>
									<li className="dropdown mega-menu">
										<a className="dropdown-toggle" href="#">
											PORTFOLIO
										</a>
										<ul className="dropdown-menu">
											<li>
												<div className="row">

													<div className="col-md-5th">
														<ul className="list-unstyled">
															<li><span>GRID</span></li>
															<li><a href="portfolio-grid-1-columns.html">1 COLUMN</a></li>
															<li><a href="portfolio-grid-2-columns.html">2 COLUMNS</a></li>
															<li><a href="portfolio-grid-3-columns.html">3 COLUMNS</a></li>
															<li><a href="portfolio-grid-4-columns.html">4 COLUMNS</a></li>
															<li><a href="portfolio-grid-5-columns.html">5 COLUMNS</a></li>
															<li><a href="portfolio-grid-6-columns.html">6 COLUMNS</a></li>
														</ul>
													</div>

													<div className="col-md-5th">
														<ul className="list-unstyled">
															<li><span>MASONRY</span></li>
															<li><a href="portfolio-masonry-2-columns.html">2 COLUMNS</a></li>
															<li><a href="portfolio-masonry-3-columns.html">3 COLUMNS</a></li>
															<li><a href="portfolio-masonry-4-columns.html">4 COLUMNS</a></li>
															<li><a href="portfolio-masonry-5-columns.html">5 COLUMNS</a></li>
															<li><a href="portfolio-masonry-6-columns.html">6 COLUMNS</a></li>
															
														</ul>
													</div>

													<div className="col-md-5th">
														<ul className="list-unstyled">
															<li><span>SINGLE</span></li>
															<li><a href="portfolio-single-extended.html">EXTENDED ITEM</a></li>
															<li><a href="portfolio-single-parallax.html">PARALLAX IMAGE</a></li>
															<li><a href="portfolio-single-slider.html">SLIDER GALLERY</a></li>
															<li><a href="portfolio-single-html5-video.html">HTML5 VIDEO</a></li>
															<li><a href="portfolio-single-masonry-thumbs.html">MASONRY THUMBS</a></li>
															<li><a href="portfolio-single-embed-video.html">EMBED VIDEO</a></li>
															<li><a href="portfolio-single-project.html">SINGLE PROJECT</a></li>
														</ul>
													</div>

													<div className="col-md-5th">
														<ul className="list-unstyled">
															<li><span>LAYOUT</span></li>
															<li><a href="portfolio-layout-default.html">DEFAULT</a></li>
															<li><a href="portfolio-layout-aside-left.html">LEFT SIDEBAR</a></li>
															<li><a href="portfolio-layout-aside-right.html">RIGHT SIDEBAR</a></li>
															<li><a href="portfolio-layout-aside-both.html">BOTH SIDEBAR</a></li>
															<li><a href="portfolio-layout-fullwidth.html">FULL WIDTH (100%)</a></li>
															<li><a href="portfolio-layout-tabfilter.html">TAB FILTER &amp; PAGINATION</a></li>

														</ul>
													</div>

													<div className="col-md-5th">
														<ul className="list-unstyled">
															<li><span>LOADING</span></li>
															<li><a href="portfolio-loading-pagination.html">PAGINATION</a></li>
															<li><a href="portfolio-loading-jpagination.html">JQUERY PAGINATION</a></li>
															<li><a href="portfolio-loading-infinite-scroll.html">INFINITE SCROLL</a></li>
															<li><a href="portfolio-loading-ajax-page.html">AJAX IN PAGE</a></li>
															<li><a href="portfolio-loading-ajax-modal.html">AJAX IN MODAL</a></li>
														</ul>
													</div>

												</div>
											</li>
										</ul>
									</li>
									<li className="dropdown">
										<a className="dropdown-toggle" href="#">
											BLOG &amp; SHOP
										</a>
										<ul className="dropdown-menu">

											<li>
												<h4><i className="fa fa-cubes"></i> BLOG</h4>
											</li>

											<li className="dropdown">
												<a className="dropdown-toggle" href="#">
													DEFAULT
												</a>
												<ul className="dropdown-menu">
													<li><a href="blog-default-aside-left.html">LEFT SIDEBAR</a></li>
													<li><a href="blog-default-aside-right.html">RIGHT SIDEBAR</a></li>
													<li><a href="blog-default-aside-both.html">BOTH SIDEBAR</a></li>
													<li><a href="blog-default-fullwidth.html">FULL WIDTH</a></li>
												</ul>
											</li>
											<li className="dropdown">
												<a className="dropdown-toggle" href="#">
													GRID
												</a>
												<ul className="dropdown-menu">
													<li><a href="blog-column-2colums.html">2 COLUMNS</a></li>
													<li><a href="blog-column-3colums.html">3 COLUMNS</a></li>
													<li><a href="blog-column-4colums.html">4 COLUMNS</a></li>
													<li className="divider"></li>
													<li><a href="blog-column-aside-left.html">LEFT SIDEBAR</a></li>
													<li><a href="blog-column-aside-right.html">RIGHT SIDEBAR</a></li>
												</ul>
											</li>
											<li className="dropdown">
												<a className="dropdown-toggle" href="#">
													MASONRY
												</a>
												<ul className="dropdown-menu">
													<li><a href="blog-masonry-2colums.html">2 COLUMNS</a></li>
													<li><a href="blog-masonry-3colums.html">3 COLUMNS</a></li>
													<li><a href="blog-masonry-4colums.html">4 COLUMNS</a></li>
													<li><a href="blog-masonry-fullwidth.html">FULLWIDTH</a></li>
												</ul>
											</li>
											<li className="dropdown">
												<a className="dropdown-toggle" href="#">
													TIMELINE
												</a>
												<ul className="dropdown-menu">
													<li><a href="blog-timeline-aside-left.html">LEFT SIDEBAR</a></li>
													<li><a href="blog-timeline-aside-right.html">RIGHT SIDEBAR</a></li>
													<li><a href="blog-timeline-right-aside-right.html">RIGHT + TIMELINE RIGHT</a></li>
													<li><a href="blog-timeline-right-aside-left.html">LEFT + TIMELINE RIGHT</a></li>
													<li><a href="blog-timeline-fullwidth-left.html">FULL WIDTH - LEFT</a></li>
													<li><a href="blog-timeline-fullwidth-right.html">FULL WIDTH - RIGHT</a></li>
												</ul>
											</li>
											<li className="dropdown">
												<a className="dropdown-toggle" href="#">
													SMALL IMAGE
												</a>
												<ul className="dropdown-menu">
													<li><a href="blog-smallimg-aside-left.html">LEFT SIDEBAR</a></li>
													<li><a href="blog-smallimg-aside-right.html">RIGHT SIDEBAR</a></li>
													<li><a href="blog-smallimg-aside-both.html">BOTH SIDEBAR</a></li>
													<li><a href="blog-smallimg-fullwidth.html">FULL WIDTH</a></li>
													<li className="divider"></li>
													<li><a href="blog-smallimg-alternate-1.html">ALTERNATE 1</a></li>
													<li><a href="blog-smallimg-alternate-2.html">ALTERNATE 2</a></li>
												</ul>
											</li>
											<li className="dropdown">
												<a className="dropdown-toggle" href="#">
													SINGLE
												</a>
												<ul className="dropdown-menu">
													<li><a href="blog-single-default.html">DEFAULT</a></li>
													<li><a href="blog-single-aside-left.html">LEFT SIDEBAR</a></li>
													<li><a href="blog-single-aside-right.html">RIGHT SIDEBAR</a></li>
													<li><a href="blog-single-fullwidth.html">FULL WIDTH</a></li>
													<li><a href="blog-single-small-image-left.html">SMALL IMAGE - LEFT</a></li>
													<li><a href="blog-single-small-image-right.html">SMALL IMAGE - RIGHT</a></li>
													<li><a href="blog-single-big-image.html">BIG IMAGE</a></li>
													<li><a href="blog-single-fullwidth-image.html">FULLWIDTH IMAGE</a></li>
												</ul>
											</li>
											<li className="dropdown">
												<a className="dropdown-toggle" href="#">
													COMMENTS
												</a>
												<ul className="dropdown-menu">
													<li><a href="blog-comments-bordered.html#comments">BORDERED COMMENTS</a></li>
													<li><a href="blog-comments-default.html#comments">DEFAULT COMMENTS</a></li>
													<li><a href="blog-comments-facebook.html#comments">FACEBOOK COMMENTS</a></li>
													<li><a href="blog-comments-disqus.html#comments">DISQUS COMMENTS</a></li>
												</ul>
											</li>

											<li>
												<h4><i className="fa fa-opencart"></i> SHOP</h4>
											</li>

											<li className="dropdown">
												<a className="dropdown-toggle" href="#">
													1 COLUMN
												</a>
												<ul className="dropdown-menu">
													<li><a href="shop-1col-left.html">LEFT SIDEBAR</a></li>
													<li><a href="shop-1col-right.html">RIGHT SIDEBAR</a></li>
													<li><a href="shop-1col-both.html">BOTH SIDEBAR</a></li>
													<li><a href="shop-1col-full.html">FULL WIDTH</a></li>
												</ul>
											</li>
											<li className="dropdown">
												<a className="dropdown-toggle" href="#">
													2 COLUMNS
												</a>
												<ul className="dropdown-menu">
													<li><a href="shop-2col-left.html">LEFT SIDEBAR</a></li>
													<li><a href="shop-2col-right.html">RIGHT SIDEBAR</a></li>
													<li><a href="shop-2col-both.html">BOTH SIDEBAR</a></li>
												</ul>
											</li>
											<li className="dropdown">
												<a className="dropdown-toggle" href="#">
													3 COLUMNS
												</a>
												<ul className="dropdown-menu">
													<li><a href="shop-3col-left.html">LEFT SIDEBAR</a></li>
													<li><a href="shop-3col-right.html">RIGHT SIDEBAR</a></li>
													<li><a href="shop-3col-full.html">FULL WIDTH</a></li>
												</ul>
											</li>
											<li className="dropdown">
												<a className="dropdown-toggle" href="#">
													4 COLUMNS
												</a>
												<ul className="dropdown-menu">
													<li><a href="shop-4col-left.html">LEFT SIDEBAR</a></li>
													<li><a href="shop-4col-right.html">RIGHT SIDEBAR</a></li>
													<li><a href="shop-4col-full.html">FULL WIDTH</a></li>
												</ul>
											</li>
											<li className="dropdown">
												<a className="dropdown-toggle" href="#">
													SINGLE PRODUCT
												</a>
												<ul className="dropdown-menu">
													<li><a href="shop-single-left.html">LEFT SIDEBAR</a></li>
													<li><a href="shop-single-right.html">RIGHT SIDEBAR</a></li>
													<li><a href="shop-single-both.html">BOTH SIDEBAR</a></li>
													<li><a href="shop-single-full.html">FULL WIDTH</a></li>
												</ul>
											</li>
											<li><a href="shop-compare.html">COMPARE</a></li>
											<li><a href="shop-cart.html">CART</a></li>
											<li><a href="shop-checkout.html">CHECKOUT</a></li>
											<li><a href="shop-checkout-final.html">ORDER PLACED</a></li>

										</ul>
									</li>
									<li className="dropdown mega-menu">
										<a className="dropdown-toggle" href="#">
											SHORTCODES
										</a>
										<ul className="dropdown-menu">
											<li>
												<div className="row">

													<div className="col-md-5th">
														<ul className="list-unstyled">
															<li><a href="shortcode-animations.html">ANIMATIONS</a></li>
															<li><a href="shortcode-buttons.html">BUTTONS</a></li>
															<li><a href="shortcode-carousel.html">CAROUSEL</a></li>
															<li><a href="shortcode-charts.html">GRAPHS</a></li>
															<li><a href="shortcode-clients.html">CLIENTS</a></li>
															<li><a href="shortcode-columns.html">GRID &amp; COLUMNS</a></li>
															<li><a href="shortcode-counters.html">COUNTERS</a></li>
															<li><a href="shortcode-forms.html">FORM ELEMENTS</a></li>
														</ul>
													</div>

													<div className="col-md-5th">
														<ul className="list-unstyled">
															<li><a href="shortcode-dividers.html">DIVIDERS</a></li>
															<li><a href="shortcode-icon-boxes.html">BOXES &amp; ICONS</a></li>
															<li><a href="shortcode-galleries.html">GALLERIES</a></li>
															<li><a href="shortcode-headings.html">HEADING STYLES</a></li>
															<li><a href="shortcode-icon-lists.html">ICON LISTS</a></li>
															<li><a href="shortcode-labels.html">LABELS &amp; BADGES</a></li>
															<li><a href="shortcode-lightbox.html">LIGHTBOX</a></li>
															<li><a href="shortcode-forms-editors.html">HTML EDITORS</a></li>
														</ul>
													</div>

													<div className="col-md-5th">
														<ul className="list-unstyled">
															<li><a href="shortcode-cards.html">Cards</a></li>
															<li><a href="shortcode-maps.html"><span className="badge badge-success float-right">new</span> MAPS</a></li>
															<li><a href="shortcode-media-embeds.html">MEDIA EMBEDS</a></li>
															<li><a href="shortcode-modals.html">MODAL / POPOVER / NOTIF</a></li>
															<li><a href="shortcode-navigations.html">NAVIGATIONS</a></li>
															<li><a href="shortcode-paginations.html">PAGINATIONS</a></li>
															<li><a href="shortcode-progress-bar.html">PROGRESS BARS</a></li>
															<li><a href="shortcode-widgets.html">WIDGETS</a></li>
														</ul>
													</div>

													<div className="col-md-5th">
														<ul className="list-unstyled">
															<li><a href="shortcode-pricing.html">PRICING BOXES</a></li>
															<li><a href="shortcode-process-steps.html">PROCESS STEPS</a></li>
															<li><a href="shortcode-callouts.html">CALLOUTS</a></li>
															<li><a href="shortcode-info-bars.html">INFO BARS</a></li>
															<li><a href="shortcode-blockquotes.html">BLOCKQUOTES</a></li>
															<li><a href="shortcode-responsive.html">RESPONSIVE</a></li>
															<li><a href="shortcode-sections.html">SECTIONS</a></li>
															<li><a href="shortcode-social-icons.html">SOCIAL ICONS</a></li>
														</ul>
													</div>

													<div className="col-md-5th">
														<ul className="list-unstyled">
															<li><a href="shortcode-alerts.html">ALERTS</a></li>
															<li><a href="shortcode-styled-icons.html">STYLED ICONS</a></li>
															<li><a href="shortcode-tables.html">TABLES</a></li>
															<li><a href="shortcode-tabs.html">TABS</a></li>
															<li><a href="shortcode-testimonials.html">TESTIMONIALS</a></li>
															<li><a href="shortcode-thumbnails.html">THUMBNAILS</a></li>
															<li><a href="shortcode-toggles.html">TOGGLES</a></li>
															<li><a href="shortcode-material-design-badges.html"><span className="badge badge-danger float-right">new</span> <b>MATERIAL DESIGN</b></a></li>
														</ul>
													</div>

												</div>
											</li>
										</ul>
									</li>

									<li className="dropdown mega-menu nav-animate-fadeIn nav-hover-animate hover-animate-bounceIn">
										<a className="dropdown-toggle noicon" href="#">
											<span className="badge badge-danger float-right fs-11">v2</span>
											<b>NEW</b>
										</a>
										<ul className="dropdown-menu dropdown-menu-clean">
											<li>
												<div className="row">

													<div className="col-md-5th">
														<ul className="list-unstyled">
															<li><span>PACKS : READY TO USE</span></li>
															<li className="divider"></li>
															<li>
																<span className="fs-11 mt-0 pb-15 pt-15 text-info">NEW AND HOT: COMPLETE PACKAGES READY TO USE</span>
															</li>
															<li className="divider"></li>
															<li><a target="_blank" href="pack-realestate-home-1.html">REAL ESTATE</a></li>
															<li><a target="_blank" href="pack-megashop-home-1.html">MEGA SHOP</a></li>
															<li><a target="_blank" href="pack-hotel-home-1.html">HOTEL v1</a></li>
															<li><a target="_blank" href="pack-hotel-v2-home-1.html">HOTEL v2</a></li>
															<li><a target="_blank" href="pack-photography-home-1.html">PHOTOGRAPHY / PORTFOLIO</a></li>
															<li><a target="_blank" href="pack-caffe-home-1.html">CAFFE</a></li>
															<li><a target="_blank" href="pack-caffe-onepage.html">CAFFE - ONEPAGE</a></li>
														</ul>
													</div>

													<div className="col-md-5th">
														<ul className="list-unstyled">
															<li><span>NEW PAGES</span></li>
															<li><a target="_blank" href="portfolio-single-project.html">PORTFOLIO SINGLE</a></li>
															<li><a target="_blank" href="page-cookie-alert.html">COOKIE ALERT</a></li>
															<li><a target="_blank" href="page-category.html">CATEGORY PAGE</a></li>

															<li><span>IMPROVED</span></li>
															<li><a target="_blank" href="index-thematics-hosting.html">HOMEPAGE : <b>HOSTING</b></a></li>
															<li><a target="_blank" href="index-thematics-restaurant.html">HOMEPAGE : <b>RESTAURANT</b></a></li>
															<li><a target="_blank" href="index-thematics-lawyer.html">HOMEPAGE : <b>LAWYER</b></a></li>
															<li><a target="_blank" href="index-thematics-fashion.html">HOMEPAGE : <b>FASHION</b></a></li>
														</ul>
													</div>

													<div className="col-md-5th">
														<ul className="list-unstyled">
															<li><span>NEW COMPONENTS</span></li>
															<li><a target="_blank" href="shortcode-material-design-badges.html">MATERIAL DESIGN LITE</a></li>

															<li><span>NEW FEATURES</span></li>
															<li><a target="_blank" href="feature-menu-12.html">NEW HEADER/MENU</a></li>
															<li><a target="_blank" href="feature-menu-dd-effects.html">MENU DROPDOWN EFFECTS</a></li>
															<li><a target="_blank" href="shortcode-carousel-2.html">OWL CAROUSEL 2</a></li>
															<li><a target="_blank" href="shortcode-thumbnails.html">IMAGE HOVER/STYLES</a></li>
														</ul>
													</div>

													<div className="col-md-6 hidden-sm text-center">
														<div className="p-15 block">
															<img className="img-fluid" src="demo_files/images/new_menu.png" alt="" />
														</div>
														<p className="menu-caption hidden-xs-down text-muted text-center">
															THE MOST COMPLETE HTML TEMPLATE
														</p>
													</div>

												</div>
											</li>
										</ul>
									</li>
								</ul>

							</nav>
						</div>

					</div>
				</header>


			</div>


			<section id="slider" className="fullheight" style={{background: "url('demo_files/images/particles_bg.jpg')", height: "472px"}}>
				<span className="overlay dark-2"></span>

				<canvas id="canvas-particle" data-rgb="156,217,249" width="400" height="472"></canvas>

				<div className="display-table">
					<div className="display-table-cell vertical-align-middle">
						
						<div className="container text-center">
							
							<h1 className="m-0 wow fadeInUp animated" data-wow-delay="0.4s" style={{visibility: "visible", animationDelay: "0.4s", animationName: "fadeInUp"}}>
								WE ARE 
								<span className="rotate " data-animation="fade" data-speed="1500" style={{opacity: "0.355726"}}> MULTIPURPOSE</span>
							</h1>

							<p className="lead font-lato fs-30 wow fadeInUp animated" data-wow-delay="0.7s" style={{visibility: "visible", animationDelay: "0.7s", animationName: "fadeInUp"}}>
								Over <span className="countTo" data-speed="4000">550</span> html files! 
								<span className="theme-color fw-400 font-style-italic">Admin included</span> &amp; RTL
							</p>
							
							<a className="btn btn-default btn-lg" href="#">PURCHASE NOW</a>

						</div>

					</div>
				</div>

			</section>
			<section>
				<div className="container">

					<div className="text-center">
						<h1>Welcome! World Of <span>Smarty</span>.</h1>
						<h2 className="col-sm-10 offset-sm-1 mb-0 fw-400">Clean, fully responsive, extemly flexible multipurpose template that allows you to create any website you like.</h2>
					</div>

				</div>
			</section>
			<section>
				<div className="container">

					<div className="row">
					
						<div className="col-md-5 col-sm-5">
							<a className="image-hover lightbox thumbnail" href="http://vimeo.com/56624256" data-plugin-options="{&quot;type&quot;:&quot;iframe&quot;}">
								<span className="image-hover-icon image-hover-light">
									<i className="fa fa-vimeo-square"></i>
								</span>
								<img className="img-fluid" src="demo_files/images/tr.jpg" alt="..." />
							</a>
						</div>

						<div className="col-md-7 col-sm-7">

							<header className="mb-60">
								<h2>Smarty Website+Admin+RTL</h2>
								<p className="lead font-lato">The most complete template, ever!</p>
							</header>

							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus deserunt, nobis quae eos provident quidem. Quaerat expedita dignissimos perferendis, nihil quo distinctio eius architecto reprehenderit maiores.</p>
							<p>Similique excepturi voluptates placeat ducimus delectus magnam tempore dolore dolorem quisquam porro modi voluptatum eum saepe dolorum ratione officia sint eos minus.</p>

							<a className="btn btn-default btn-lg fs-15 mt-30 lightbox" href="http://vimeo.com/56624256" data-plugin-options="{&quot;type&quot;:&quot;iframe&quot;}">WATCH VIDEO</a>

						</div>

					</div>

				</div>
			</section>
			<section className="alternate">
				<div className="container">

					<div className="row">
						<div className="col-md-4 col-sm-4">
							<div className="toggle toggle-accordion toggle-transparent toggle-bordered-full">

								<div className="toggle active">
									<label>Lorem ipsum dolor.</label>
									<div className="toggle-content" style={{display: "block"}}>
										<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
									</div>
								</div>

								<div className="toggle">
									<label>Sit amet, consectetur.</label>
									<div className="toggle-content">
										<p>Maecenas metus nulla, commodo a sodales sed, dignissim pretium nunc.</p>
									</div>
								</div>

								<div className="toggle">
									<label>Consectetur adipiscing elit.</label>
									<div className="toggle-content">
										<p>Ut enim massa, sodales tempor convallis et, iaculis ac massa.</p>
									</div>
								</div>

							</div>
						</div>
						<div className="col-md-4 col-sm-4">
							<h4>Our Skills</h4>

							<label>
								<span className="float-right">60%</span>
								MARKETING
							</label>
							<div className="progress progress-xxs">
								<div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "60%", minWidth: "2em"}}></div>
							</div>

							<label>
								<span className="float-right">88%</span>
								SALES
							</label>
							<div className="progress progress-xxs">
								<div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "88%", minWidth: "2em"}}></div>
							</div>

							<label>
								<span className="float-right">93%</span>
								DESIGN
							</label>
							<div className="progress progress-xxs">
								<div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "93%", minWidth: "2em"}}></div>
							</div>

							<label>
								<span className="float-right">77%</span>
								DEVELOPMENT
							</label>
							<div className="progress progress-xxs">
								<div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "72%", minWidth: "2em"}}></div>
							</div>

							<label>
								<span className="float-right">99%</span>
								OTHER
							</label>
							<div className="progress progress-xxs">
								<div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "99%", minWidth: "2em"}}></div>
							</div>

						</div>
						<div className="col-md-4 col-sm-4">
							<h4>Recent News</h4>

							<div className="row tab-post">
								<div className="col-md-2 col-sm-2 col-2">
									<a href="blog-sidebar-left.html">
										<img src="demo_files/images/people/300x300/1-min.jpg" width="50" alt=""  />
									</a>
								</div>
								<div className="col-md-10 col-sm-10 col-10">
									<a href="blog-sidebar-left.html" className="tab-post-link">Maecenas metus nulla</a>
									<small>June 29 2014</small>
								</div>
							</div>

							<div className="row tab-post">
								<div className="col-md-2 col-sm-2 col-2">
									<a href="blog-sidebar-left.html">
										<img src="demo_files/images/people/300x300/2-min.jpg" width="50" alt="" />
									</a>
								</div>
								<div className="col-md-10 col-sm-10 col-10">
									<a href="blog-sidebar-left.html" className="tab-post-link">Curabitur pellentesque neque eget</a>
									<small>June 29 2014</small>
								</div>
							</div>

							<div className="row tab-post">
								<div className="col-md-2 col-sm-2 col-2">
									<a href="blog-sidebar-left.html">
										<img src="demo_files/images/people/300x300/3-min.jpg" width="50" alt="" />
									</a>
								</div>
								<div className="col-md-10 col-sm-10 col-10">
									<a href="blog-sidebar-left.html" className="tab-post-link">Nam et lacus neque. Ut enim massa</a>
									<small>June 29 2014</small>
								</div>
							</div>

						</div>


					</div>

				</div>
			</section>

			<section>
				<div className="container">

					<div className="row">

						<div className="col-sm-6 col-md-4 col-lg-4">

							<div className="box-icon box-icon-left">
								<a className="box-icon-title" href="#">
									<i className="fa fa-tablet"></i>
									<h2>FULLY REPOSNIVE</h2>
								</a>
								<p className="text-muted">Lorem definitiones ei pri per recteque hendrerit scriptorem in errem scribentur mel fastidii.</p>
							</div>

						</div>

						<div className="col-sm-6 col-md-4 col-lg-4">

							<div className="box-icon box-icon-left">
								<a className="box-icon-title" href="#">
									<i className="et-document"></i>
									<h2>RTL SUPPORT</h2>
								</a>
								<p className="text-muted">Lorem definitiones ei pri per recteque hendrerit scriptorem in errem scribentur mel fastidii.</p>
							</div>

						</div>

						<div className="col-sm-6 col-md-4 col-lg-4">

							<div className="box-icon box-icon-left">
								<a className="box-icon-title" href="#">
									<i className="et-basket"></i>
									<h2>MOBILE COMPATIBILE</h2>
								</a>
								<p className="text-muted">Lorem definitiones ei pri per recteque hendrerit scriptorem in errem scribentur mel fastidii.</p>
							</div>

						</div>

						<div className="col-sm-6 col-md-4 col-lg-4">

							<div className="box-icon box-icon-left">
								<a className="box-icon-title" href="#">
									<i className="et-briefcase"></i>
									<h2>CLEAN CODE</h2>
								</a>
								<p className="text-muted">Lorem definitiones ei pri per recteque hendrerit scriptorem in errem scribentur mel fastidii.</p>
							</div>

						</div>

						<div className="col-sm-6 col-md-4 col-lg-4">

							<div className="box-icon box-icon-left">
								<a className="box-icon-title" href="#">
									<i className="et-megaphone"></i>
									<h2>PREMIUM SLIDERS</h2>
								</a>
								<p className="text-muted">Lorem definitiones ei pri per recteque hendrerit scriptorem in errem scribentur mel fastidii.</p>
							</div>

						</div>

						<div className="col-sm-6 col-md-4 col-lg-4">

							<div className="box-icon box-icon-left">
								<a className="box-icon-title" href="#">
									<i className="et-flag"></i>
									<h2>SIMPLE TO USE</h2>
								</a>
								<p className="text-muted">Lorem definitiones ei pri per recteque hendrerit scriptorem in errem scribentur mel fastidii.</p>
							</div>

						</div>

					</div>

				</div>
			</section>

			<div className="alert alert-transparent bordered-bottom m-0">
				<div className="container">

					<div className="row">

						<div className="col-md-9 col-sm-12">
							<h3>Call now at <span><strong>+800-565-2390</strong></span> and get 15% discount!</h3>
							<p className="font-lato fw-300 fs-20 mb-0">
								We truly care about our users and our product.
							</p>
						</div>

						
						<div className="col-md-3 col-sm-12 text-right">
							<a href="#purchase" rel="nofollow" target="_blank" className="btn btn-primary btn-lg">PURCHASE NOW</a>
						</div>

					</div>

				</div>
			</div>
			<footer id="footer">
				<div className="container">

					<div className="row">
						
						<div className="col-md-3">

							<img className="footer-logo" src="assets/images/_smarty/logo-footer.png" alt="" />

							<p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>

							<address>
								<ul className="list-unstyled">
									<li className="footer-sprite address">
										PO Box 21132<br/>
										Here Weare St, Melbourne<br/>
										Vivas 2355 Australia<br/>
									</li>
									<li className="footer-sprite phone">
										Phone: 1-800-565-2390
									</li>
									<li className="footer-sprite email">
										<a href="mailto:support@yourname.com">support@yourname.com</a>
									</li>
								</ul>
							</address>

						</div>

						<div className="col-md-3">

							<h4 className="letter-spacing-1">LATEST NEWS</h4>
							<ul className="footer-posts list-unstyled">
								<li>
									<a href="#">Donec sed odio dui. Nulla vitae elit libero, a pharetra augue</a>
									<small>29 June 2017</small>
								</li>
								<li>
									<a href="#">Nullam id dolor id nibh ultricies</a>
									<small>29 June 2017</small>
								</li>
								<li>
									<a href="#">Duis mollis, est non commodo luctus</a>
									<small>29 June 2017</small>
								</li>
							</ul>

						</div>

						<div className="col-md-2">

							<h4 className="letter-spacing-1">EXPLORE SMARTY</h4>
							<ul className="footer-links list-unstyled">
								<li><a href="#">Home</a></li>
								<li><a href="#">About Us</a></li>
								<li><a href="#">Our Services</a></li>
								<li><a href="#">Our Clients</a></li>
								<li><a href="#">Our Pricing</a></li>
								<li><a href="#">Smarty Tour</a></li>
								<li><a href="#">Contact Us</a></li>
							</ul>

						</div>

						<div className="col-md-4">
							<h4 className="letter-spacing-1">KEEP IN TOUCH</h4>
							<p>Subscribe to Our Newsletter to get Important News &amp; Offers</p>

							<form className="validate" action="php/newsletter.php" method="post" data-success="Subscribed! Thank you!" data-toastr-position="bottom-right" novalidate="novalidate">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-envelope"></i></span>
									<input type="email" id="email" name="email" className="form-control required" placeholder="Enter your Email"/>
									<span className="input-group-btn">
										<button className="btn btn-success" type="submit">Subscribe</button>
									</span>
								</div>
							<input type="hidden" name="is_ajax" value="true"/></form>
							<div className="mt-20">
								<a href="#" className="social-icon social-icon-border social-facebook float-left" data-toggle="tooltip" data-placement="top" title="" data-original-title="Facebook">

									<i className="icon-facebook"></i>
									<i className="icon-facebook"></i>
								</a>

								<a href="#" className="social-icon social-icon-border social-twitter float-left" data-toggle="tooltip" data-placement="top" title="" data-original-title="Twitter">
									<i className="icon-twitter"></i>
									<i className="icon-twitter"></i>
								</a>

								<a href="#" className="social-icon social-icon-border social-gplus float-left" data-toggle="tooltip" data-placement="top" title="" data-original-title="Google plus">
									<i className="icon-gplus"></i>
									<i className="icon-gplus"></i>
								</a>

								<a href="#" className="social-icon social-icon-border social-linkedin float-left" data-toggle="tooltip" data-placement="top" title="" data-original-title="Linkedin">
									<i className="icon-linkedin"></i>
									<i className="icon-linkedin"></i>
								</a>

								<a href="#" className="social-icon social-icon-border social-rss float-left" data-toggle="tooltip" data-placement="top" title="" data-original-title="Rss">
									<i className="icon-rss"></i>
									<i className="icon-rss"></i>
								</a>
					
							</div>

						</div>

					</div>

				</div>

				<div className="copyright">
					<div className="container">
						<ul className="float-right m-0 list-inline mobile-block">
							<li><a href="#">Terms &amp; Conditions</a></li>
							<li>•</li>
							<li><a href="#">Privacy</a></li>
						</ul>
						© All Rights Reserved, Company LTD
					</div>
				</div>
			</footer>


		</div>
    );
}

export default HomePage;