@extends('master')
@section('content')

	<article class="uk-article">
		<noscript>
		<section class="uk-section uk-section-default hello uk-container" id="hello">
			<div class="uk-flex uk-grid uk-child-width-1-2@m" uk-grid>
				<section class="uk-flex uk-flex-last@m">
					<figure class="uk-margin-auto uk-margin-auto-vertical uk-box-shadow-bottom">
				{!! cl_image_tag('https://res.cloudinary.com/nazarick/image/upload/v1537433446/netwiq/char_dominator.png',array("type"=>"fetch","width"=>'auto',"responsive"=> "true","crop"=>"scale", "responsive_placeholder"=>"blank","quality"=> "auto","fetch_format"=>"auto","client_hints"=>"true")) !!}
					</figure>
				</section>
				<section class="uk-section uk-section-default uk-padding-remove-top uk-flex uk-flex-first@m">
					<article class="uk-article">
						<h2 class="uk-article-title uk-text-left@m uk-text-center">
							I am Victory Garuba
						</h2>
						<p class=""> I am a self-taught Front End Engineer currently located in Lagos, Nigeria.</p>
						<section>
							<p class="uk-text-lead uk-text-small uk-flex uk-flex-left uk-margin-small" uk-grid>
								<span class="uk-width-1-6">Phone:</span> <span class="uk-width-5-6 uk-text-left">(+234) 08183659972</span>
							</p>
							<p class="uk-text-lead uk-text-small uk-flex uk-flex-left uk-margin-small" uk-grid>
								<span class="uk-width-1-6">Email:</span> <span class="uk-width-5-6  uk-text-left"><a
											target="_blank"
											href="mailto:garubav@gmail.com">garubav@gmail.com</a> </span>
							</p>
							<p class="uk-text-lead uk-text-small uk-flex uk-flex-left uk-margin-small" uk-grid>
								<span class="uk-width-1-6">Address: </span> <span class="uk-width-5-6 uk-text-left">Lagos,Nigeria</span>
							</p>
							<p class="uk-text-lead uk-text-small uk-flex uk-flex-left uk-margin-small" uk-grid>
								<span class="uk-width-1-6">Social:</span>
								<span class="uk-width-5-6 uk-text-left">
                                <a target="_blank" href="http://www.twitter.com/lonelytomb" uk-icon="icon: twitter"></a>
                                <a target="_blank" href="http://www.github.com/lonelyTomb" uk-icon="icon: github"></a>
                                <a target="_blank" href="http://www.linkedin.com/in/victory-garuba-a17628114"
                                   uk-icon="icon: linkedin"></a>
                            </span>
							</p>
							<div class="uk-margin-top">
								<a href="#contact" uk-scroll="offset:100;" class="uk-button uk-button-default"> Contact
									Me</a>
								<a target="_blank" class="uk-button uk-button-danger"> Download CV</a>
							</div>
						</section>
					</article>
				</section>
			</div>
		</section>
	</noscript>
		 <about-component></about-component>
		<hr class="uk-divider-icon">

		<skills-component></skills-component>

		<hr class="uk-divider-icon">

		<experience-component></experience-component>

		<hr class="uk-divider-icon">

		<education-component></education-component>

		<hr class="uk-divider-icon">

		<portfolio-component></portfolio-component>

		<hr class="uk-divider-icon">

		<contact-component></contact-component>
	</article>
@endsection
