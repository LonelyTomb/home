<header class="uk-section uk-section-default uk-preserve-color uk-padding-remove uk-margin-remove">
	<div uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container">
		<nav class="uk-navbar-container uk-flex" uk-navbar>
			<div class="uk-navbar-left">
				<a class="uk-navbar-item uk-logo" href="#">Victory</a>
			</div>
			<div class="uk-navbar-right">
				<div class="uk-hidden@m uk-padding-small">
					<a class="" uk-toggle="target: #mobile-menu" uk-icon="icon: menu"></a>
				</div>
				<ul class="uk-navbar-nav uk-visible@m">
					<li>
						<a href="#hello" uk-scroll="offset:100;">Hello</a>
					</li>
					<li>
						<a href="#skills" uk-scroll="offset:100;">Skills</a>
					</li>
					<li>
						<a href="#experience" uk-scroll="offset:100;">Experience</a>
					</li>
					<li>
						<a href="#education" uk-scroll="offset:100;">Education</a>
					</li>
					<li>
						<a href="#portfolio" uk-scroll="offset:100;">Portfolio</a>
					</li>
					<li>
						<a href="#contact" uk-scroll="offset:100;">Contact Me</a>
					</li>
				</ul>
			</div>

		</nav>
	</div>

	<div id="mobile-menu" uk-offcanvas="mode: push; overlay: true">
		<div class="uk-offcanvas-bar uk-flex uk-flex-column">

			<button class="uk-offcanvas-close" type="button" uk-close></button>
			<ul class="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
				<li>
					<a href="#hello" uk-scroll="offset:100;">Hello</a>
				</li>
				<li>
					<a href="#skills" uk-scroll="offset:100;">Skills</a>
				</li>
				<li>
					<a href="#experience" uk-scroll="offset:100;">Experience</a>
				</li>
				<li>
					<a href="#education" uk-scroll="offset:100;">Education</a>
				</li>
				<li>
					<a href="#portfolio" uk-scroll="offset:100;">Portfolio</a>
				</li>
				<li>
					<a href="#contact" uk-scroll="offset:100;">Contact Me</a>
				</li>
			</ul>

		</div>
	</div>

</header>
